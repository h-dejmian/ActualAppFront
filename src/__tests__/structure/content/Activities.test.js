import {getByText, render, screen, waitFor} from "@testing-library/react";
import Activities from "../../../structure/content/Activities";
import {api} from "../../../App";
import {userEvent} from "@testing-library/user-event";

const user = {
    "login" : "testLogin"
}

test("Activities page renders successfully", () => {
    render(<Activities user={user} />);

    const header = screen.getByLabelText(/header/i)

    expect(header).toBeInTheDocument()
})

test("no activity message is displayed", () => {
    render(<Activities user={user} />);

    const noActivityMsg = screen.getByText(/No activities/i)

    expect(noActivityMsg).toBeInTheDocument()
})

test("Activity is displayed", async () => {
    const mock = jest.spyOn(api, 'fetchActivitiesByDate')
        .mockImplementationOnce(async() => {
            return [{
                "description" : "testDesc",
                "timeSpentInMinutes" : 120,
                "categoryName" : "testCategory"
            }]

        });

    render(<Activities user={user} />);

    await waitFor(() => {
        expect(screen.getByText(/testDesc/i)).toBeInTheDocument();
        expect(screen.getByText(/testCategory/i)).toBeInTheDocument();
        expect(screen.getByText(/120/, {exact : true})).toBeInTheDocument();
    } )
})