import {CardGenerator} from "./CardGenerator";

describe("CardGenerator", ()=>{

    const no_players = [];
    const one_player = ["A"];
    const two_players = ["A", "B"];

    it("should return a new shuffled array", () => {
        let arr = ["a", "b"];
        let shuffled = CardGenerator.shuffle(arr);
        arr[0] = "c";
        expect(shuffled[0]).not.toBe("c");
    });

    it("should replace %(rng5)s with a number of 1,2,3,4 or 5", () => {
        //TODO mock random
        expect(CardGenerator.replaceTags("%(rng5)s", two_players)).toBeOneOf(["1","2","3","4","5"]);
    });

    it("should replace %(players[0])s with one of the given two players", () => {
        expect(CardGenerator.replaceTags("%(players[0])s", two_players)).toBeOneOf(two_players);
    });

    it("should replace %(players[1])s with one of the given two players", () => {
        expect(CardGenerator.replaceTags("%(players[1])s", two_players)).toBeOneOf(two_players);
    });

    it("should replace %(players[0])s with one and %(players[1])s with the other of the given two players", () => {
        const possibilities = [
            two_players[0] + " " + two_players[1],
            two_players[1] + " " + two_players[0],
        ];
        expect(CardGenerator.replaceTags("%(players[0])s %(players[1])s", two_players)).toBeOneOf(possibilities);
    });

    describe("with production card set",()=>{

        it("should return at least one card when given no players", () => {
            expect(CardGenerator.getFilteredCards(no_players).length).toBeGreaterThanOrEqual(1);
        });

    });

    describe("with fixed card set",()=>{

        const fixedSet = [
            {
                players: 0,
                content: "%(rng5)s"
            },
            {
                players: 1,
                content: "%(players[0])s"
            },
            {
                players: 1,
                content: "%(players[0])s"
            },
            {
                players: 2,
                content: "%(players[0])s %(players[1])s"
            },
            {
                players: 2,
                content: "%(players[0])s %(players[1])s"
            },
            {
                players: 2,
                content: "%(players[0])s %(players[1])s"
            }
        ];

        beforeEach(()=>{
            CardGenerator.allCards = fixedSet;
        });

        it("should return all cards when given nothing", () => {
            expect(CardGenerator.getFilteredCards().length).toBe(fixedSet.length);
        });

        it("should return one card when given no players", () => {
            expect(CardGenerator.getFilteredCards([]).length).toBe(1);
        });

        it("should return three cards when given one players", () => {
            expect(CardGenerator.getFilteredCards(one_player).length).toBe(3);
        });

        it("should return six cards when given two players", () => {
            expect(CardGenerator.getFilteredCards(two_players).length).toBe(6);
        });

    });

});

