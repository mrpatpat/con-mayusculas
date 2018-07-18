import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayerNames from "./player-names/PlayerNames";
import Card from "./cards/Card";

describe("App", ()=>{

    let props = {
        players: []
    };

    let appInstance;

    let app = ()=>{
        if(!appInstance) {
            appInstance =  shallow(<App {...props}/>);
        }
        return appInstance;
    };

    beforeEach(()=>{
        appInstance = undefined;
        props = {
            players: []
        };
    });

    function addPlayer(name) {
        app().find('input').simulate('change', {target: {value: name}});
        app().find('button').simulate("click");
    }

    it("should initially render 'Card' with no players", () => {
        expect(app()).toContainReact(<Card players={[]} />);
    });

    it("should initially render 'PlayerNames' with no players", () => {
        expect(app()).toContainReact(<PlayerNames players={[]} />);
    });

    it("should render 'Card' with players when given", () => {
        const data = ["Tom", "Lisa"];
        props.players = data;
        expect(app()).toContainReact(<Card players={data} />);
    });

    it("should render 'PlayerNames' with players when given", () => {
        const data = ["Tom", "Lisa"];
        props.players = data;
        expect(app()).toContainReact(<PlayerNames players={data} />);
    });

    it("should have empty playerlist players prop is not defined", () => {
        props.players = undefined;
        expect(app().state().players).toEqual([]);
    });

    it("should render 'PlayerNames' with the new player when one is added", () => {
        const data = ["Tom", "Lisa"];
        addPlayer(data[0])
        expect(app()).toContainReact(<PlayerNames players={[data[0]]}/>);
        addPlayer(data[1])
        expect(app()).toContainReact(<PlayerNames players={data}/>);
    });

    it("should not add player named with an empty string", () => {
        const data = ["", "Lisa"];
        addPlayer(data[0])
        expect(app()).toContainReact(<PlayerNames players={[]}/>);
        addPlayer(data[1])
        expect(app()).toContainReact(<PlayerNames players={[data[1]]}/>);
    });

    it("should render 'PlayerNames' in input order", () => {
        const data = ["Tom", "Z", "Lisa", "A"];
        data.forEach(addPlayer);
        expect(app()).toContainReact(<PlayerNames players={data}/>);
        data.forEach((name,i)=>{
            expect(app().state().players[i]).toEqual(name);
        });
    });

});

