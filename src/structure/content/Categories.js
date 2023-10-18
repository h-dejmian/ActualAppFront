import {useEffect, useState} from "react";

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

    return (
        <div className="categories">
            {categories.map(category => <ol>{category.name}</ol>) }

        </div>
    )
}

export default Categories