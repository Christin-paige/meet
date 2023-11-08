// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";


describe('<App /> component', () => {
    let AppDOM;
    
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    });

    test('renders list of events', () => {
        expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
      });

    test('render citySearch', () => {
        expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
        });
        
    test('render number of events', () => {
        const AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector('#numberOfEvents')).toBeInTheDocument();
    });
});