function Api() {
    async function fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        return await response.json();
    }

}

export default Api