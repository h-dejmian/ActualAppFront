import {render, screen} from '@testing-library/react'
import ErrorMsg from "../../messages/ErrorMsg";

test("Error Message renders successfully", () => {
    render(<ErrorMsg errorMsg="test message"/>);

    const element = screen.getByText(/test message/i)

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle("color : red");
})