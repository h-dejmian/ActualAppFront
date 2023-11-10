import {render, screen} from '@testing-library/react'
import NoActivityMsg from "../../messages/NoActivityMsg";

test("Message renders successfully", () => {
    render(<NoActivityMsg />);

    const element = screen.getByText(/No activities/i)

    expect(element).toBeInTheDocument();
})