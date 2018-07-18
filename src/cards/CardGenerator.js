const sprintf = require("sprintf-js").sprintf;

export class CardGenerator {

    static allCards = [
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
    ];

    static getFilteredCards(players) {
        if(players){
            return CardGenerator.allCards.filter(x => x.players <= players.length);
        } else {
            return CardGenerator.allCards;
        }
    }

    static generateContent(players) {
        let cards = CardGenerator.getFilteredCards(players);
        let content = cards[Math.floor(Math.random()*cards.length)].content;
        return CardGenerator.replaceTags(content, players);
    }

    static replaceTags(content, players) {
        return sprintf(content, {
            players: CardGenerator.shuffle(players),
            rng5: Math.floor(Math.random()*5) + 1
        });
    }

    static shuffle(toShuffle) {
        let a = toShuffle.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

}