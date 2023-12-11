import {render, screen, waitFor} from "@testing-library/react";
import Categories from "../../../structure/content/Categories";

const user = {
    "login" : "testLogin"
}

test("Categories page renders successfully", () => {
    render(<Categories user={user} />);

    const header = screen.getByLabelText(/header/i)

    expect(header).toBeInTheDocument()
})


