
import { render , screen } from "@testing-library/react";
import IconText from ".";


test("Icon Text Testing", async()=>{
    render(<IconText name={"entrepreneurship"} icon={undefined} styling={"extended"}></IconText>);
    const iconTextElemenet = screen.getByText(/entrepreneurship/i);
    expect(iconTextElemenet).toBeInTheDocument();
});

test("Icon Text Testing for Card", async()=>{
    render(<IconText name={"entrepreneurship"} icon={undefined} styling={"cardText"}></IconText>);
    const iconTextElemenet = screen.getByText(/entrepreneurship/i);
    expect(iconTextElemenet).toBeInTheDocument();
});