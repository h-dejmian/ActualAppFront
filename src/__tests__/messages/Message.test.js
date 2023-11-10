import {render, screen} from '@testing-library/react'
import Message from "../../messages/Message";

test("Message renders successfully", () => {
    render(<Message message="test message"/>);

    const element = screen.getByText(/test message/i)

    expect(element).toBeInTheDocument();
})