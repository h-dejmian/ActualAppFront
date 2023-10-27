import React, {useEffect, useState} from "react";
import Category from "../../category/Category";
import '../../css/content.css';
import AddCategoryModal from "../../modals/AddCategoryModal";

function Categories() {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        const categories = await response.json();
        setCategories(categories)
    }

    useEffect(() => fetchCategories, []);

    function removeCategory(id) {
        let updated = categories.filter((activity) => activity.id !== id);
        setCategories(updated);
    }

    function updateCategory(category) {
        removeCategory(category.id);
        setCategories(categories => [...categories, category])
    }

    function addCategory(category) {
        setCategories(categories => [...categories, category])
    }

    return (
        <div className="categories">
            <h3>Categories</h3>
            <AddCategoryModal addCategory={addCategory.bind(this)}/>
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
                                                                addCategory={addCategory.bind(this)}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Categories