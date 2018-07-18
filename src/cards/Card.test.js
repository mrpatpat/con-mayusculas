import React from 'react';
import { shallow } from 'enzyme';
import Card from "./Card";
import {CardGenerator} from "./CardGenerator";

describe("Card", ()=>{

    let props = {
        players: []
    };

    let cardInstance;

    let card = ()=>{
        if(!cardInstance) {
            cardInstance =  shallow(<Card {...props}/>);
        }
        return cardInstance;
    };

    const initialContent = "INITIAL_CONTENT";

    beforeEach(()=>{
        cardInstance = undefined;
        CardGenerator.generateContent = jest.fn(()=>initialContent);
    });

    it("should exist when rendered", () => {
        expect(card()).toExist();
    });

    it("should render initial content", () => {
        expect(card()).toIncludeText(initialContent);
    });

    it("should render state.content", () => {
        expect(card()).toIncludeText(card().state().content);
    });

    it("should not know any players when not given", () => {
        props = {};
        expect(card().state().players).toEqual([]);
    });

    it("should know the players when given", () => {
        const data = ["Samuel", "Anna"];
        props.players = data;
        expect(card().state().players).toEqual(data);
    });

    it("should change have the content given by 'CardGenerator'", () => {
        const content = "SPECIAL_CONTENT";
        CardGenerator.generateContent.mockReturnValueOnce(content);
        expect(card()).toIncludeText(content);
    });

    it("should change its content to the string given by 'CardGenerator' when clicked", () => {
        const content = "CLICKED_CONTENT";
        expect(card()).not.toIncludeText(content);
        CardGenerator.generateContent.mockReturnValueOnce(content);
        card().simulate("click");
        expect(CardGenerator.generateContent).toHaveBeenCalledTimes(2);
        expect(card()).toIncludeText(content);
    });

    it("should not change its players when clicked", () => {
        const data = ["Samuel", "Anna"];
        props.players = data;
        expect(card().state().players).toEqual(data);
        card().simulate("click");
        expect(card().state().players).toEqual(data);
    });

    it("should call 'CardGenerator#generate' with the correct arguments when clicked", () => {
        const data = ["Samuel", "Anna", "Tom"];
        props.players = data;
        card().simulate("click");
        expect(CardGenerator.generateContent).toHaveBeenCalledWith(data);
    });

});

