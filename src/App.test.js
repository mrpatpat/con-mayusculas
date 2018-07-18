import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Game from "./game/Game";

describe("App", ()=>{

    let shallowApp;

    beforeEach(()=>{
        shallowApp = shallow(<App />);
    });

    it("should render a 'Game'", () => {
        expect(shallowApp).toContainReact(<Game />);
    });

});

