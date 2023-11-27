import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import DeleteCategoryButton from "../../category/DeleteCategoryButton";

test("Delete category button renders", async () => {
    render(<DeleteCategoryButton />);

    expect(screen.getByText(/X/i)).toBeInTheDocument();
})

test("Delete category button clicked", async () => {
    const mockHandleClick = jest.fn();
    window.confirm = jest.fn(() => true)

    render(<DeleteCategoryButton removeCategory={mockHandleClick} />);

    await userEvent.click(screen.getByText(/X/i));
    expect(mockHandleClick).toBeCalled()
})