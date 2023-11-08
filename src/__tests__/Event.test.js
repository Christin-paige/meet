import { render } from '@testing-library/react';
import React from 'react';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import '../mock-data';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents

    beforeAll(async ()=> {
        allEvents = await getEvents();//fetch data before the tests
    })
    beforeEach( async() => {
        EventComponent = render(<Event event={allEvents[0]}/>);
    });
  test('renders event summary(title)', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });
    
  test('renders event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });
  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });
  
    test('renders event details button with the title(show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

     test('by default event details section should be hidden', () => {
         expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
     });

       test('shows details when user clicks on the button', async() => {
        const showDetailsButton = EventComponent.queryByText('show details');
        await userEvent.click(showDetailsButton);
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
       })
    

     test('hides the details section when the user clicks on the hide details button', async() => {
    const hideDetailsButton = EventComponent.queryByText("hide details");
    await userEvent.click(hideDetailsButton);
        expect(EventComponent.queryByText('hideDetails')).not.toBeInTheDocument();
       });
});






  