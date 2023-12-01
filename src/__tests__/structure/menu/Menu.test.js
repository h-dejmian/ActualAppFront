import {render, screen} from "@testing-library/react";
import LogoutSection from "../../../structure/menu/LogoutSection";
import Menu from "../../../structure/menu/Menu";

test("Menu renders", () => {
    //given
    const user = {
        "login" : "testLogin"
    }

    //when
    render(<Menu user={user}/>);
    const login = screen.getByText(/testLogin/i)
    const home = screen.getByText(/Home/i);
    const about = screen.getByText(/About/i);

    //then
    expect(home).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(login).toBeInTheDocument();
})