import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import ModalMsg from "./ModalMsg";

const customStyles = {
    content: {
        top: '50%',
        left: '35%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
    },
};

function AddActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(0);
    const [completed, setCompleted] = useState(true);
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");
    const [message, setMessage] = useState("");
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
        resetState();
    }
    const handleSelect = (e) => setSelected(e.target.value);

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
        <div>
            <button onClick={handleOpen}>Add New Activity</button>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Create New Activity"
            >
                <h2>New Activity</h2>
                <hr/>
                <br/>
                    <form onSubmit={handleSubmitForm} method="POST">
                        <label>Description</label>
                        <input type="text" value={description} placeholder={"Description"} onChange={(e) => setDescription(e.target.value)}/><br/>

                        <label>Time spent in minutes</label>
                        <input  type="text" value={timeSpentInMinutes} onChange={(e) => setTimeSpentInMinutes(e.target.value)}/> <br/>

                        <label htmlFor="categories">Choose category from the list :   </label>
                        <select className="select" onChange={ e => handleSelect(e)} name="categories" id="categories-dropdown">
                            <option disabled selected value> -- select an option -- </option>
                            {categories.map((category, index) => (<option key={index} value={category.name}>{category.name}</option>))}
                        </select>

                        <br/><br/>

                        <label>Or create new category</label>

                        <div id="add-category">
                                <input type="text" value={categoryName} placeholder={"Category"} onChange={(e) => setCategoryName(e.target.value)} />
                                <button className="add-category-button" type="button" onClick={handleNewCategoryButton}> Add new category to list </button>
                        </div>
                        <ModalMsg message={message} />

                        <br/>

                        <button type="submit">Submit</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/api/v1/activities", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                description: description,
                timeSpentInMinutes: timeSpentInMinutes,
                date : props.date,
                completed: completed,
                categoryName: selected
            })
        }
        );
        setIsOpen(false)
        const activityJson = await res.json();
        props.addActivity(activityJson)
    }

    async function handleNewCategoryButton(e) {
        e.preventDefault();

        if(categoryName === "") {
            return;
        }
        await fetch("http://localhost:8080/api/v1/categories", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: categoryName
                })
            }
        );
        setCategories([...categories, {name : categoryName}])
        setCategoryName("");
        setMessage("New category added to list!")
    }

    function resetState() {
        setDescription("");
        setCategoryName("");
        setTimeSpentInMinutes(0);
    }
}



export default AddActivityModal;