import { fireEvent, render, screen } from "@testing-library/react";
import TabsComponent from ".";

test("Tabs Test",async () => {
    render(<TabsComponent/>);
    const tabsElement = screen.getByLabelText(/Currently Reading/i);
    expect(tabsElement).toBeInTheDocument();
})


// No Books to Show