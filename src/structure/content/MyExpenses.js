import AddCategoryModal from "../../modals/AddCategoryModal";
import {useEffect, useState} from "react";
import {api} from "../../App";

function MyExpenses(props) {
    const [categories, setCategories] = useState([])


    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    async function getCategories() {
        const categories = await api.fetchCategories("financial", props.user.id);
        setCategories(categories)
    }

    useEffect(() => getCategories, [])

    return (
        <div id="my-expenses">
            MyExpenses

            <AddCategoryModal addCategory={addCategory.bind(this)} user={props.user} type={"FINANCIAL"} />

            {categories.map(category => category.name)}

        </div>
    )
}

export default MyExpenses