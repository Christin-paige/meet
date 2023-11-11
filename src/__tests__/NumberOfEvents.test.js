import { render, within } from '@testing-library/react';
import { getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import { userEvent } from '@testing-library/user-event';
import App from '../App';


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
//integration tests
describe ('<NumberOfEvents /> integration', () => {
    test('number of events rendered matches number of events input by user.', async() => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
        const numberTextBox = within(NumberOfEventsDOM).queryByRole('textbox');

        await user.type(numberTextBox, '{backspace}{backspace}10');
        expect(numberTextBox).toHaveValue('10');

       

       
        
    });
});


