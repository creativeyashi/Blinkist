import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ExtendedNav from "."

it("Extended Navigation Test",async () => {
    render(<BrowserRouter> <ExtendedNav/> </BrowserRouter>);
    const ExtendedElement = screen.getByText(/Explore by category/i);
    expect(ExtendedElement).toBeInTheDocument();
})

// test("Click in Extended Navigation Test",async () => {
//     render(<BrowserRouter> <ExtendedNav/> </BrowserRouter>);
//     // eslint-disable-next-line testing-library/no-node-access
//     const ExtendedElement = screen.getByTestId("link-a").firstChild?.firstChild?.firstChild;
//     // eslint-disable-next-line testing-library/no-node-access
//     fireEvent.click(ExtendedElement , {target:{}})

    
//     expect(ExtendedElement).toBe("");
// })
