import {render, screen} from '@testing-library/react'
import MenuElement from "../../../structure/menu/MenuElement";
import {userEvent} from "@testing-library/user-event";

test("Menu element name renders", () => {
    render(<MenuElement name="test name"/>);

    const element = screen.getByText(/test name/i)

    expect(element).toBeInTheDocument();
})

test("Clicking on element triggers selecting content", async () =>  {
    //given
    const mockHandleClick = jest.fn();

    //when
    render(<MenuElement name="test name" setSelectedContent={mockHandleClick}/>);
    await userEvent.click(screen.getByText(/test name/i));

    //then
    expect(mockHandleClick).toBeCalled();
})