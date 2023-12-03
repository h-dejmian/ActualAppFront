import {render, screen} from '@testing-library/react'
import LogoLogged from "../../../structure/topbar/LogoLogged";

test("Logo renders successfully", () => {
    render(<LogoLogged />);

    const element = screen.getByText(/ActualApp/i)

    expect(element).toBeInTheDocument();
})