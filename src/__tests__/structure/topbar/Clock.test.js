import {render, screen} from '@testing-library/react'
import Clock from "../../../structure/topbar/Clock";

test("Clock renders successfully", () => {
    render(<Clock />);

    const clock = screen.getByText(/[0-9]{2}:[0-9]{2}/, {exact : true})

    expect(clock).toBeInTheDocument();
})