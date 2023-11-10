import {render, screen} from '@testing-library/react'
import MenuElement from "../structure/menu/MenuElement";

test("Message renders element name", () => {
    render(<MenuElement name="test name"/>);

    const element = screen.getByText(/test name/i)

    expect(element).toBeInTheDocument();
})