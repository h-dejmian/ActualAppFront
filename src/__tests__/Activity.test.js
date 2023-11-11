import {render, screen} from '@testing-library/react'
import Activity from "../activity/Activity";


test("Activity renders", () => {
    render(<Activity description="test description"
                     time="120"
                     categoryName="test category" />);

    const description = screen.getByText(/test description/i)
    const time = screen.getByText(/120/i)
    const categoryName = screen.getByText(/test category/i)

    expect(description).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(categoryName).toBeInTheDocument();
})