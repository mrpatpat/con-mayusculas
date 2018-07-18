const sprintf = require("sprintf-js").sprintf;

export class CardGenerator {

    static getCards(players) {
        return [
            {
                players: 0,
                content: "Alle trinken einen Schluck."
            },
            {
                players: 1,
                content: "%(players[0])s trinkt einen Schluck."
            },
            {
                players: 1,
                content: "%(players[0])s trinkt %(rng5)s Schlücke."
            },
            {
                players: 2,
                content: "%(players[0])s und %(players[1])s trinken einen Schluck."
            },
            {
                players: 2,
                content: "%(players[0])s und %(players[1])s trinken %(rng5)s Schlücke."
            }
        ].filter(x => x.players <= players.length);
    }

    static generateContent(players) {
        let cards = CardGenerator.getCards(players);
        let content = cards[Math.floor(Math.random()*cards.length)].content;

        return sprintf(content, {
            players: CardGenerator.shuffle(players),
            rng5: Math.floor(Math.random()*5) + 1
        });
    }

    static shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

}