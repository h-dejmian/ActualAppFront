class Api {

     async fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        return await response.json();
    }

    async fetchActivitiesByDate(user_Id, date){
        const response = await fetch(`http://localhost:8080/api/v1/activities/${user_Id}?date=${date}`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        });
        return await response.json();
    }

}

export default Api