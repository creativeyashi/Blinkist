import { render, screen } from "@testing-library/react"
import SearchBar from "./SearchBar"

it("SearchBar Testing",async () => {
    render(<SearchBar palceholder={"Search For authors"}/>);
    const SearchBarElement = screen.getByPlaceholderText("Search For authors");
    expect(SearchBarElement).toBeInTheDocument();
})