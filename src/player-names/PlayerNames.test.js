import React from 'react';
import { shallow } from 'enzyme';
import PlayerNames from "./PlayerNames";

describe("PlayerNames", ()=>{

    let props = {
        players: []
    };

    let playerNamesInstance;

    let playerNames = ()=>{
        if(!playerNamesInstance) {
            playerNamesInstance =  shallow(<PlayerNames {...props}/>);
        }
        return playerNamesInstance;
    };

    beforeEach(()=>{
        playerNamesInstance = undefined;
    });

    it("should exist when rendered", () => {
        expect(playerNames()).toExist();
    });

    it("should render 'Keine Spieler' when given empty players list", () => {
        expect(playerNames()).toIncludeText("Keine Spieler");
    });

    it("should render 'Keine Spieler' when given no players list", () => {
        props.players = undefined;
        expect(playerNames()).toIncludeText("Keine Spieler");
    });

    it("should list all players when given", () => {
        props.players = ["Anna", "Tom", "Kevin"];
        expect(playerNames()).toIncludeText("Anna");
        expect(playerNames()).toIncludeText("Tom");
        expect(playerNames()).toIncludeText("Kevin");
    });


});

