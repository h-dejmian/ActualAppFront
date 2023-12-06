import {render, screen} from "@testing-library/react";
import ContentHeader from "../../../structure/content/ContentHeader";

test("Content header renders successfully", () => {
    render(<ContentHeader header={"testHeader"} />);

    const header = screen.getByText(/testHeader/i)

    expect(header).toBeInTheDocument();
})