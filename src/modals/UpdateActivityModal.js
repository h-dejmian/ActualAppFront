import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";

const customStyles = {
    content: {
        top: '50%',
        left: '35%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        backgroundColor: "#bdd3ef",
        border: "1px solid black"
    },
};

function UpdateActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(props.time);
    const [completed, setCompleted] = useState(false);
    const [categoryName, setCategoryName] = useState(props.categoryName);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(categoryName);
    const [message, setMessage] = useState("");
    const [priority, setPriority] = useState(3)

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
    }

    const handleSelect = (e) => setSelected(e.target.value);

    async function getCategories() {
        const categories = await api.fetchCategories();
        setCategories(categories)
    }

    useEffect(() => getCategories, []);

    return (
        <div>
            <a className={"button-sm"} onClick={handleOpen}>Update</a>
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Update activity"
            >
                <h2>Update Activity</h2>
                <hr/>
                <br/>
                <form onSubmit={handleSubmitForm} method="PUT">
                    <label>Description</label>
                    <input type="text" value={description}  onChange={(e) => setDescription(e.target.value)}/><br/>

                    <label>Time spent in minutes</label>
                    <input  type="text" value={timeSpentInMinutes} onChange={(e) => setTimeSpentInMinutes(e.target.value)}/> <br/>

                    <label htmlFor="categories">Choose category from the list :   </label>
                    <select defaultValue={categoryName} onChange={ e => handleSelect(e)} name="categories" id="categories-dropdown">
                        <option value={categoryName}> {categoryName} </option>

                        {categories.filter(category => category.name !== categoryName)
                                    .map((category, index) => (<option key={index} value={category.name}>{category.name}</option>))}

                    </select>

                    <div id="add-category">
                        <input type="text" value={newCategoryName} placeholder={"Category"} onChange={(e) => setNewCategoryName(e.target.value)} />
                        <input id="priority-input"  type="number" value={priority} min="1"  max="7" onChange={(e) => setPriority(e.target.value)}/> <br/>

                        <button className="button-lg" type="button" onClick={handleNewCategoryButton}> Add new category to list </button>
                    </div>
                    <Message message={message} />

                    <br/><br/>

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)} handleClose={handleClose.bind(this)} />

                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        const res = await fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    timeSpentInMinutes: timeSpentInMinutes,
                    date: props.date,
                    completed: completed,
                    categoryName: selected
                })
            }
        );
        let activityJson = await res.json();
        props.updateActivity(props.id, activityJson)

        setIsOpen(false);
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
                    name: newCategoryName,
                    priority: priority,
                    user_Id: props.user.id
                })
            }
        );
        setCategories([...categories, {name : newCategoryName}])
        setNewCategoryName("");
        setMessage("New category added to list!")
    }

    // function resetState() {
    //     setDescription("");
    //     setCategoryName("");
    //     setTimeSpentInMinutes(0);
    //     setCategoryName("")
    // }

}

export default UpdateActivityModal;