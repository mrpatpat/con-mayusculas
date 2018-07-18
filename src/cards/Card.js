import React, { Component } from 'react';
import { CardGenerator } from './CardGenerator';
import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            players: this.props.players || [],
            content: CardGenerator.generateContent(this.props.players || [])
        };

        this.nextCard = this.nextCard.bind(this);

    }

    nextCard() {
        this.setState(() => {
            return {
                players: this.props.players || [],
                content: CardGenerator.generateContent(this.props.players || [])
            };
        });
    }

    render() {
        return (
            <div className="card"  onClick={this.nextCard}>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default Card;
