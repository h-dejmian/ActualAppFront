import {render, screen} from "@testing-library/react";
import LogoHome from "../../../structure/homepage/LogoHome";

test("Logo renders successfully", () => {
    render(<LogoHome />);

    const element = screen.getByText(/ActualApp/i)

    expect(element).toBeInTheDocument();
})