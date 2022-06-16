import { render , screen } from "@testing-library/react"
import Footer from "."

test("Footer Test",async () => {
    render(<Footer/>);
    const footerTextElement = screen.getByText(/Big ideas in small packages/i);
    expect(footerTextElement).toBeInTheDocument();
})