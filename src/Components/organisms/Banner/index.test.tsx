import { render, screen } from "@testing-library/react"
import Banner from "."

it("Banner Test", async() =>{
    render(<Banner/>);
    const BannerElement = screen.getByRole(/img/);
    expect(BannerElement).toBeInTheDocument();
})