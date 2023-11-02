import {api} from "../../App";
import {useEffect, useState} from "react";
import AddCategoryModal from "../../modals/AddCategoryModal";
import NotedCategory from "./NotedCategory";

function Noted(props) {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const categories = await api.fetchCategories();
        setCategories(categories)
    }

    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    useEffect(() => getCategories, [])

    return (
        <div id="noted">
            <div id="noted-buttons">
                <h3>Things you want to do, but you forget!</h3>
                <AddCategoryModal addCategory={addCategory.bind(this)} user={props.user} type={"TODO"} />
            </div>
            <div id="noted-content">
                {categories.map(category => <NotedCategory category={category} />)}
            </div>




        </div>
    )
}

export default Noted;