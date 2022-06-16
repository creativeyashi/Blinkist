import { render , screen } from "@testing-library/react"
import Editorial from "."

test("Editorial Test", async()=>{
    render(<Editorial listHead={"Head"} listingItems={["Content1","Content2","Content3"]}/>)
    const ListElemenet = screen.getByRole("list");
    expect(ListElemenet).toBeInTheDocument();
})