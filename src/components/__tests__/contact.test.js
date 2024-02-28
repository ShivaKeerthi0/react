import {render, screen} from '@testing-library/react';
import ContanctUs from '../ContactUs';
import '@testing-library/jest-dom';

describe("Contanct Us page test cases", ()=>{
    test("Check whether heading is loaded on the page" , ()=>{

        render(<ContanctUs/>)
    
        const heading = screen.getByRole("heading");
    
        // Assertion
       expect(heading).toBeInTheDocument();
    
    })
    
    
    test("Check whether input is loaded on the page" , ()=>{
    
        render(<ContanctUs/>)
    
        const input = screen.getByPlaceholderText("name")
    
        // Assertion
       expect(input).toBeInTheDocument();
    
    })
    
    
    test("Check whether button is loaded on the page" , ()=>{
    
        render(<ContanctUs/>)
    
        const button = screen.getByRole("button")
    
        // Assertion
       expect(button).toBeInTheDocument();
    
    })
    
    
    test("Check whether h1 tag content is loaded on the page" , ()=>{
    
        render(<ContanctUs/>)
    
        const text = screen.getByText("Submit")
    
        // Assertion
       expect(text).toBeInTheDocument();
    
    })
    
    
    it("Check whether one input box is loaded on the page" , ()=>{
    
        render(<ContanctUs/>)
    
        const inputBoxes = screen.getAllByRole("textbox") // should use textbox not input 
    
        // Assertion
       expect(inputBoxes.length).toBe(1);
    
    })
})