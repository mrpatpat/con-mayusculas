import React, { Component } from "react";
import "./PlayerNames.css";

class PlayerNames extends Component {

    createPlayer(player) {
        return <li key={player.replace(" ","")}>{player}</li>
    }

    render() {
        var players = this.props.players;

        if(players && players.length > 0){
            var listItems = players.map(this.createPlayer);
            return (
                <ul className="player-names">
                    {listItems}
                </ul>
            );
        } else {
            return (<span>Keine Spieler</span>);
        }

    }
};

export default PlayerNames;