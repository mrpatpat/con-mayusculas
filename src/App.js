import React, {Component} from 'react';
import './App.css';
import Card from "./cards/Card";
import PlayerNames from "./player-names/PlayerNames";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            players: this.props.players || [],
            playerName: ""
        };

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        if (this.state.playerName !== "") {

            let newItem = this.state.playerName;

            this.setState((prevState) => {
                return {
                    players: prevState.players.concat(newItem),
                    playerName: ""
                };
            });

        }

    }

    updatePlayerName(e) {
        this.setState({
            playerName: e.target.value
        });
    }

    render() {
        return (
            <div className="app">
                <Card players={this.state.players}/>
                <input
                    placeholder="Spieler eintragen"
                    value={this.state.playerName}
                    onChange={e => this.updatePlayerName(e)}
                ></input>
                <button onClick={this.addPlayer}>Speichern</button>
                <PlayerNames players={this.state.players}/>
            </div>
        );
    }
}

export default App;
