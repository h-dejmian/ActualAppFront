import {render, screen} from "@testing-library/react";
import AboutContent from "../../../structure/content/AboutContent";

test("About content renders successfully", () => {
    render(<AboutContent className={"testClass"} name={"testName"} />);

    const header = screen.getByLabelText(/about-header/i)
    const paragraph1 = screen.getByText(/Was created in 2023/i)
    const paragraph2 = screen.getByText(/All you have to do/i)
    const paragraph3 = screen.getByText(/Of course it is not/i)
    const paragraph4 = screen.getByText(/Do not wait anymore/i)

    expect(header).toHaveTextContent("ActualApp");
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
    expect(paragraph3).toBeInTheDocument();
    expect(paragraph4).toBeInTheDocument();
})