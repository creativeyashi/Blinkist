import { render , screen  } from "@testing-library/react";
import IconButtons from ".";

it("Check for IconButton", async()=>{
    render(<IconButtons children={undefined} disabled={false} onClick={function (): void {
        throw new Error("Function not implemented.");
    } } ></IconButtons>);
    const MuiElement = screen.getByRole(/button/i);
    expect(MuiElement).toBeInTheDocument();
})