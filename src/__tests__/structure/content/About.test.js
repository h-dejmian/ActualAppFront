import {render, screen} from "@testing-library/react";
import About from "../../../structure/content/About";

test("About page renders successfully", () => {
    render(<About />);

    const header = screen.getByLabelText(/about-content-header/i)
    const testedParagraph = screen.getByText(/All you have to do/i)

    expect(header).toHaveTextContent("About")
    expect(testedParagraph).toBeInTheDocument();
})