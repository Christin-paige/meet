import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let AppComponent;
defineFeature(feature, test => {
   
test('An event element is collapsed by default', async ({ given, when, then }) => {
 
    given('a user wants to see event details', () => {
      AppComponent = render(<App/>)
    });
  
    when('the user selects an event', async () => {
        const button = AppComponent.queryAllByText('details-btn')[0];
        await userEvent.click(button);
      
    });
  
    then('the event will expand to show details', () => {
        const EventDOM = AppComponent.container.firstChild;
        const details= EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument[0];

      });
});

//change to 'user can collapse to hide details'
test('User can expand an event to see details', ({ given, when, then }) => {
    
    given('the user would like to see more information about an event', () => {
        AppComponent = render(<App/>);
    });

    when('the user selects an event', async () => {
        
        const button = AppComponent.queryAllByText('details-btn')[0];
        await userEvent.click(button);
});

     then('the event will expand to show details', () => {
        const EventDOM = AppComponent.container.firstChild;
        const details= EventDOM.querySelector('.details')
        expect(details).toBeInTheDocument[0];
});
});


test('User can collapse an event to hide details', ({ given, when, then }) => {
    given('the user wants to hide information about the event', () => {
        AppComponent = render(<App/>)
        const EventDOM = AppComponent.container.firstChild;
        const details= EventDOM.querySelector('.details');
        expect(details).toBeInTheDocument[0];
    });

    when('user selects event details', async () => {
        const button = AppComponent.queryAllByText('details-btn')[0];
        await userEvent.click(button);
    });

    then('the event details will collapse', () => {
 const EventDOM = AppComponent.container.firstChild;
 const details = EventDOM.querySelector('.details');
 expect(details).not.toBeInTheDocument();

});

});
});