import {render, screen} from "@testing-library/react";
import UpdateActivityButton from "../../activity/UpdateActivityButton";
import {userEvent} from "@testing-library/user-event";

test("Update activity button renders", async () => {
    render(<UpdateActivityButton />);

    expect(screen.getByText(/Update/i)).toBeInTheDocument();
})

test("Update activity button triggers handler", async () => {
    const mockHandleClick = jest.fn();
    render(<UpdateActivityButton updateActivity={mockHandleClick} />);

    await userEvent.click(screen.getByText(/Update/i));
    expect(mockHandleClick).toBeCalled()
})