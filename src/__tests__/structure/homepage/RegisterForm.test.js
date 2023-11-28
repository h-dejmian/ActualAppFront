import {render, screen} from "@testing-library/react";
import RegisterForm from "../../../structure/homepage/RegisterForm";

test("Register form renders successfully", () => {
    render(<RegisterForm />);

    const userNameInput = screen.getByLabelText(/User Name/i)
    const passwordInput = screen.getByLabelText(/Password/i)

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
})