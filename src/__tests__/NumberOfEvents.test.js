import { render, within } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import { userEvent } from '@testing-library/user-event';
import App from '../App';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents 
            setErrorAlert={() => {}}/>)
    });

    test('contains an element with the role of textbox', () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
      expect(numberOfEvents).toBeInTheDocument();
    });

    test('default value of the input field is 32', () => {
        const defaultValue = NumberOfEventsComponent.queryByRole('textbox');
            expect(defaultValue).toHaveValue('32');
        
        });

    
    test('the number in the textbox will change according to user input',async  () => {
        const user = userEvent.setup();
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => {}}
        setErrorAlert={() => {}}
        />);
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(numberTextBox,'{backspace}{backspace}32');

    });
});
//integration tests

    test('number of events are rendered that a user inputs', async () => {
    const AppComponent = render(<App setErrorAlert={() => {}}/>);
    const AppDOM = AppComponent.container.firstChild;
    
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
   
    await userEvent.type(NumberOfEventsInput, '{backspace}{backspace}10');
    expect(NumberOfEventsInput).toHaveValue('10');
    
    })



