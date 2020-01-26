import React from 'react';
import * as rtl from '@testing-library/react';
// import 'testing-library/jest-dom/extend-expect';
import App from './App';
import Display from "./Display";
import Dashboard from "./Dashboard"

// test('renders learn react link', () => {
//   const { getByText } = rtl.render(<App />);
//   const linkElement = getByText(//i);
//   expect(linkElement).toBeInTheDocument();
// });


// test ("display container", () => {
//   const { getByTextId } = rtl.render(<App />)

//   getByTextId(/displayContainer/)
// })

// it('render without crashing', () => {
//   const wrapper = rtl.render(
//     <span className="greet"> Hello </span>
//   )
//   wrapper.debug()
// })

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
}
);


test ('display container', () => {
  const {getByTestId} = rtl.render(<App />)
  // getByTestId('displayContainer')
  expect(getByTestId("displayContainer"))
})
