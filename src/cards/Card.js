import React, { Component } from 'react';
import { CardGenerator } from './CardGenerator';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = this.buildNextCardState();
    }

    buildNextCardState() {
        return {
            players: this.demandPlayers(),
            content: CardGenerator.generateContent(this.demandPlayers())
        };
    }

    demandPlayers() {
        return this.props.players || [];
    }

    render() {
        return (
            <div className="card"  onClick={()=> this.setState(this.buildNextCardState)}>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Card;
