import { fireEvent, render, screen } from "@testing-library/react";
import TabsComponent from ".";

test("Tabs Test",async () => {
    render(<TabsComponent/>);
    const tabsElement = screen.getByLabelText(/Currently Reading/i);
    expect(tabsElement).toBeInTheDocument();
})

it("Checking click in Tabs Test",async () => {
    render(<TabsComponent />);
    const buttonClickElement = screen.getByTestId("finished-tab");
    
    fireEvent.click(buttonClickElement, {target : {value : "2"}});

    // eslint-disable-next-line testing-library/no-node-access
    const changeElement = screen.getByTestId("tab-panel2")?.firstChild?.firstChild?.firstChild;

    // eslint-disable-next-line testing-library/no-node-access
    const tryElement = screen.getByText(/No Books to Show/i).firstChild;

    expect(changeElement).toBe(tryElement);
})

// No Books to Show