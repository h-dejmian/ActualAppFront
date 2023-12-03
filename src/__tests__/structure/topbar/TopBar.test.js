import {render, screen} from '@testing-library/react'
import TopBar from "../../../structure/topbar/TopBar";

test("Logo renders successfully", () => {
    render(<TopBar />);

    const logo = screen.getByText(/ActualApp/i)
    const clock = screen.getByText(/\d\d:\d\d/, {exact : true})

    expect(logo).toBeInTheDocument();
    expect(clock).toBeInTheDocument();
})