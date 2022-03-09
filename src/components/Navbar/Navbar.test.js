import { render, act, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe("Navbar Component", ()=>{
  it("Navbar renders app title", () => {
    const {getByTestId}= render(<Navbar />);
    const title = getByTestId('app-title')
    expect(title).toHaveTextContent('SPACETAGRAM');
  });
  
  it("Navbar renders title icon", () => {
    const {getByTestId}= render(<Navbar />);
    const title = getByTestId('title-icon')

    expect(title).toBeTruthy();
  });
})
  