import {api} from "../../../App";
import {useEffect, useState} from "react";
import AddCategoryModal from "../../../modals/AddCategoryModal";
import NotedCategory from "./NotedCategory";
import ClearCompletedButton from "./ClearCompletedButton";
import ContentHeader from "../ContentHeader";
import SortByActivitiesButton from "./SortByActivitiesButton";
import SortAlphabeticallyButton from "./SortAlphabeticallyButton";
import CategoriesComparator from "./CategoriesComparator";

const categoriesComparator = new CategoriesComparator();

function Noted(props) {
    const [categories, setCategories] = useState([]);
    const [removeCompletedTrigger, setRemoveCompletedTrigger ] = useState(0);

    async function getCategories() {
        const categories = await api.fetchCategories("todo", props.user.id);
        setCategories(categories)
    }

    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    function removeCategory(id) {
        const updated = categories.filter((category) => category.id !== id);
        setCategories(updated);
    }

    function removeCompletedActivities() {
        setRemoveCompletedTrigger(1);
    }

    useEffect(() => getCategories, [])

    return (
        <div id="noted">
            <ContentHeader header="Things you want to do, but you forget!" />
            <div id="noted-content">
                <div id="noted-buttons">
                    <AddCategoryModal addCategory={addCategory.bind(this)} user={props.user} type={"TODO"} />
                    <ClearCompletedButton removeCompletedActivities={removeCompletedActivities}/>
                </div>
                <div id="noted-categories">
                    {categories.map((category, index) => <NotedCategory key={index}
                                                                        removeCompletedTrigger={removeCompletedTrigger}
                                                                        setRemoveCompletedTrigger={setRemoveCompletedTrigger}
                                                                        category={category}
                                                                        removeCategory={removeCategory.bind(this)}
                                                                        user={props.user} />)}
                </div>
            </div>

        </div>
    )
}

export default Noted;