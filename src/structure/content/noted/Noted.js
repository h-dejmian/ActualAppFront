import {api} from "../../../App";
import {useEffect, useState} from "react";
import AddCategoryModal from "../../../modals/AddCategoryModal";
import NotedCategory from "./NotedCategory";
import ClearCompletedButton from "./ClearCompletedButton";

function Noted(props) {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const categories = await api.fetchCategories("todo", props.user.id);
        setCategories(categories)
    }

    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    function removeCategory(id) {
        let updated = categories.filter((category) => category.id !== id);
        setCategories(updated);
    }

    function removeCompletedActivities() {

    }

    useEffect(() => getCategories, [])

    return (
        <div id="noted">
            <div id="noted-buttons">
                <h3>Things you want to do, but you forget!</h3>
                <AddCategoryModal addCategory={addCategory.bind(this)} user={props.user} type={"TODO"} />
                <br/>
                <ClearCompletedButton removeCompletedActivities={removeCompletedActivities}/>
            </div>
            <div id="noted-content">
                {categories.map((category, index) => <NotedCategory key={index} category={category} removeCategory={removeCategory.bind(this)} user={props.user} />)}
            </div>
        </div>
    )
}

export default Noted;