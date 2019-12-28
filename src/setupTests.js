// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Enzyme builds our virtual DOM tree using ReactDOM.render()
// wrapping it with additional functionality
// shallow:  This is a function that utilizes ReactDOM.render to create a shallow
// copy of the DOM tree, meaning placeholders for child React components.
import Enzyme from 'enzyme';
// Enzyme needs to know what version of React is being used.  The adapter
// contains any code that could potentially be modified with future updates
// It's volatility requires it to exist separate from Enzyme.  The adapter
// will load the code that is valid for your version of React
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Alters the imported copy of Enzyme's configure value to include the code from
// the above loaded adapter.  Now enzyme is speaking the correct language for your
// version of React.
Enzyme.configure({ adapter: new EnzymeAdapter() });
