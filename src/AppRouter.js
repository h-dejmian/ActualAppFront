import DeleteActivityButton from "./activity/DeleteActivityButton";
import {Route, Router, Routes} from "react-router-dom";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/delete" element={<DeleteActivityButton />} />
        </Routes>
    </Router>
)

export default AppRouter;