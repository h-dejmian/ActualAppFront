class Api {

    async fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        return response.json();
    }

    async fetchActivitiesByDate(user_Id, date) {
        const response = await fetch(`http://localhost:8080/api/v1/activities/${user_Id}?date=${date}`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        });
        return response.json();
    }

    async fetchActivitiesByTime() {
        const response = await fetch(`http://localhost:8080/api/v1/activities?groupByTime`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        return response.json();
    }

    async newCategoryFetch(name, priority, id) {
        const response = await fetch("http://localhost:8080/api/v1/categories", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    priority: priority,
                    user_Id: id
                })
            }
        );
        return response.json();
    }

    async updateCategoryFetch(name, priority, id) {
        const res = await fetch(`http://localhost:8080/api/v1/categories/${id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    priority: priority
                })
            }
        );

        return res.json();
    }

    async updateActivityFetch(activity, id) {
        const response = await fetch(`http://localhost:8080/api/v1/activities/${id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: activity[0],
                    timeSpentInMinutes: activity[1],
                    date: activity[2],
                    completed: activity[3],
                    categoryName: activity[4]
                })
            }
        );
        return response.json();
    }

    async newActivityFetch(activity) {
        const response = await fetch("http://localhost:8080/api/v1/activities", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    description: activity[0],
                    timeSpentInMinutes: activity[1],
                    date: activity[2],
                    completed: activity[3],
                    categoryName: activity[4],
                    user_Id: activity[5]
                })
            }
        );

        return response.json();
    }
}

export default Api