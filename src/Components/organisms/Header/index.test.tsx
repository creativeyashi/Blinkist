import { fireEvent, render , screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Header from "."

test("Header Test",async () => {
    render(<BrowserRouter> <Header avatarIcon={false}/> </BrowserRouter>);
    const headerElement = screen.getAllByRole("img");
    expect(headerElement).toHaveLength(2);
})

test("Header Library click Test",async () => {
    render(<BrowserRouter> <Header avatarIcon={false}/> </BrowserRouter>);
    const headerElement = screen.getByText("My Library");
    fireEvent.click(headerElement);

    const changedElement = screen.getByText("My Library");
    expect(changedElement).toBe(headerElement);
})

test("Header Explore click Test",async () => {
    render(<BrowserRouter> <Header avatarIcon={false}/> </BrowserRouter>);
    const headerElement = screen.getByText("Explore");
    fireEvent.click(headerElement);

    const changedElement = screen.getByText("Explore");
    expect(changedElement).toBe(headerElement);
})

test("Header Account click Test",async () => {
    render(<BrowserRouter> <Header avatarIcon={false}/> </BrowserRouter>);
    const headerElement = screen.getByText("Account");
    fireEvent.click(headerElement);

    const changedElement = screen.getByText("Account");
    expect(changedElement).toBe(headerElement);
})

test("Header Account Icon click Test",async () => {
    render(<BrowserRouter> <Header avatarIcon={true}/> </BrowserRouter>);
    const headerElement = screen.getByTestId(/PersonIcon/i);
    expect(headerElement).toBe(headerElement);
})