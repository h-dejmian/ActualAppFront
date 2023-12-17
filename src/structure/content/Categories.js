import React, {useEffect, useState} from "react";
import Category from "../../category/Category";
import '../../css/content.css';
import AddCategoryModal from "../../modals/AddCategoryModal";
import {api} from '../../App.js'
import ContentHeader from "./ContentHeader";

function Categories(props) {
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories)
    }

    React.useEffect(() => getCategories, []);

    function removeCategory(id) {
        let updated = categories.filter((activity) => activity.id !== id);
        setCategories(updated);
    }

    function updateCategory(category) {
        const cats = categories.map(c => c.id !== category.id  ? c : category );
        setCategories(cats)
    }

    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    return (
        <div className="categories">
            <ContentHeader header="Categories" />
            {props.onlyStats ? null : <AddCategoryModal addCategory={addCategory.bind(this)} user={props.user} type={"REGULAR"}/>}
            <table className="table-cst">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Number Of Activities</th>
                    <th>Time spent</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((category, index) => <Category key={index}
                                                               id={category.id}
                                                               name={category.name}
                                                               priority={category.priority}
                                                               timeSpentInMinutes={category.timeSpentInMinutes}
                                                               activitiesNumber={category.activitiesNumber}
                                                               removeCategory={removeCategory.bind(this)}
                                                               updateCategory={updateCategory.bind(this)}
                                                                addCategory={addCategory.bind(this)}
                                                                onlyStats={true}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Categories