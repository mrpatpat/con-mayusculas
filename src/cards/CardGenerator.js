const sprintf = require("sprintf-js").sprintf;

export class CardGenerator {

    getCards(players) {
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

    generateContent(players) {
        let cards = this.getCards(players);
        let content = cards[Math.floor(Math.random()*cards.length)].content;

        return sprintf(content, {
            players: this.shuffle(players),
            rng5: Math.floor(Math.random()*5) + 1
        });
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

}