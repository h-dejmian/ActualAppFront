import {render, screen} from "@testing-library/react";
import LoginForm from "../../../structure/homepage/LoginForm";

test("Login form renders successfully", () => {
    render(<LoginForm />);

    const userNameInput = screen.getByLabelText(/User Name/i)
    const passwordInput = screen.getByLabelText(/Password/i)

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
})