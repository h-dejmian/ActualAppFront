import {render, screen} from "@testing-library/react";
import TitleAndIcon from "../../../structure/content/TitleAndIcon";

test("Title and icon renders successfully", () => {
    render(<TitleAndIcon className={"testClass"} name={"testName"} />);

    const name = screen.getByText(/testname/i)
    const className = screen.getByLabelText(/icon/)

    expect(name).toBeInTheDocument();
    expect(className).toHaveClass("testClass");
})