import {render, screen} from '@testing-library/react'
import Category from "../category/Category";

test("Category renders", () => {
    render(<Category name="test name" priority="3" activitiesNumber="10" timeSpentInMinutes="120"/>);

    const name = screen.getByText(/test name/i)
    const priority = screen.getByText(/3/i)
    const activitiesNumber = screen.getByText(/10/i)
    const timeSpentInMinutes = screen.getByText(/120/i)

    expect(name).toBeInTheDocument();
    expect(priority).toBeInTheDocument();
    expect(activitiesNumber).toBeInTheDocument();
    expect(timeSpentInMinutes).toBeInTheDocument();
})