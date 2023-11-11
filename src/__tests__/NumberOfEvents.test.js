import { render } from '@testing-library/react';
import { getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import { userEvent } from '@testing-library/user-event';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />)
    });

    test('contains an element with the role of textbox', () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
      expect(numberOfEvents).toBeInTheDocument();
    });

    test('default value of the input field is 32', () => {
        const defaultValue = NumberOfEventsComponent.queryByRole('textbox',{defaultValue: 32});
            expect(defaultValue).toBeInTheDocument();
        
        });

    
    test('the number in the textbox will change according to user input',async  () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        NumberOfEventsComponent.rerender(<NumberOfEvents/>)
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox,'{backspace}{backspace}32');

    });
    
   
});


