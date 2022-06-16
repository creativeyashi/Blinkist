import { render , screen  } from "@testing-library/react"
import Buttons from ".";

it("Check for Connect Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"connect"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for Explore Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"explore"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for library Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"library"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})

it("Check for ExploreNoH Button", async()=>{
    render(<Buttons name={"Connect"} onClick={undefined} classing={"exploreNoH"} icon={undefined} end={undefined}/>);
    const MuiElement = screen.getByText(/Connect/i);
    expect(MuiElement).toBeInTheDocument();
})