import React, { Component } from 'react';
import PlayerNames from "./PlayerNames";
import Card from "../cards/Card";
import "./Game.css";

class AddPlayers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            players: this.props.players || []
        };

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(e) {
        if (this._inputElement.value !== "") {

            var newItem = this._inputElement.value;

            this.setState((prevState) => {
                return {
                    players: prevState.players.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    render() {
        return (
            <div className="game">
                <Card players={this.state.players}/>
                <form onSubmit={this.addPlayer}>
                    <input placeholder="Spieler eintragen" ref={(a) => this._inputElement = a} ></input>
                    <button type="submit">Speichern</button>
                </form>
                <PlayerNames players={this.state.players}/>
            </div>
        );
    }
}

export default AddPlayers;
