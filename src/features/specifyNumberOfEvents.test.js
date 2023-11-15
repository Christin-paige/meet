import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react'
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When a user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
         AppComponent = render(<App />)
        });

        when('a user has not specified a number', () => {

        });

        then('[32] events will be shown by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
             })
        });
    });
   
   
    let AppComponent;
    test('User can change the number of events displayed.', ({ given, when, then }) => {
        given('there are [32] events shown by default', async() => {
            AppComponent = render(<App />)
   
        });

    
        when('the user specifies a number', async() => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
           
            const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(NumberOfEventsInput, 'number-of-events-input');


        });

        then('the specified number of events will be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEvents = AppDOM.querySelector('#number-of-events');
            expect(NumberOfEvents).toBeInTheDocument;
        });
    });
});   

