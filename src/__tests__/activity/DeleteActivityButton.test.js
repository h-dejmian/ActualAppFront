import DeleteActivityButton from "../../activity/DeleteActivityButton";
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";



test("Delete activity button renders", async () => {
    render(<DeleteActivityButton />);

    expect(screen.getByText(/X/i)).toBeInTheDocument();
})

test("Delete activity button clicked", async () => {
    const mockHandleClick = jest.fn();
    window.confirm = jest.fn(() => true)
    render(<DeleteActivityButton removeActivity={mockHandleClick} />);

    await userEvent.click(screen.getByText(/X/i));
    expect(mockHandleClick).toBeCalled()
})
