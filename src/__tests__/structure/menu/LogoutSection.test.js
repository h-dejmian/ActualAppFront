import {render, screen} from '@testing-library/react'
import LogoutSection from "../../../structure/menu/LogoutSection";
import {userEvent} from "@testing-library/user-event";

test("Logout section renders user name", () => {
    //given
    const user = {
        "login" : "testLogin"
    }

    //when
    render(<LogoutSection user={user}/>);
    const element = screen.getByText(/testLogin/i)

    //then
    expect(element).toBeInTheDocument();
})

test("Logout button triggers setUser and clears localStorage", async () => {
    //given
    const user = {
        "login" : "testLogin"
    }
    const mockHandleClick = jest.fn();

    //when
    render(<LogoutSection user={user} setUser={mockHandleClick} />);
    await userEvent.click(screen.getByText(/Logout/i));

    //then
    expect(mockHandleClick).toBeCalled();
    expect(localStorage.length).toBe(0);
})