import {render, screen} from '@testing-library/react'
import Message from "../../messages/Message";
import ErrorMsg from "../../messages/ErrorMsg";

test("Message renders successfully", () => {
    render(<ErrorMsg message="test message"/>);

    const element = screen.getByText(/test message/i)

    expect(element).toBeInTheDocument();
})