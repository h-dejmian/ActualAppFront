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

function AddActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(1);
    const [completed, setCompleted] = useState(true);
    const [categoryName, setCategoryName] = useState("");
    const [priority, setPriority] = useState(3)
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

    async function getCategories() {
        const categories = await api.fetchCategories();
        setCategories(categories)
    }

    useEffect(() => getCategories, []);

    return (
        <div>
            <button className="button-lg" onClick={handleOpen}>Add New Activity</button>
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
                <form>
                    <label>Description</label>
                    <input type="text" value={description} placeholder={"Description"}
                           onChange={(e) => setDescription(e.target.value)}/><br/>

                    <label>Time spent in minutes</label>
                    <input type="text" min="1" max="1440" value={timeSpentInMinutes}
                           onChange={(e) => setTimeSpentInMinutes(e.target.value)}/> <br/>

                    <label htmlFor="categories">Choose category from the list : </label>
                    <select className="select" onChange={e => handleSelect(e)} name="categories"
                            id="categories-dropdown">
                        <option disabled selected value> -- select an option --</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.name}>{category.name}</option>))}
                    </select>

                    <br/><br/>

                    <div>
                        <label>Or create new category</label>
                        <label id="priority-label">Priority</label>
                    </div>

                    <div id="add-category">
                        <input type="text" value={categoryName} placeholder={"Category"}
                               onChange={(e) => setCategoryName(e.target.value)}/>
                        <input id="priority-input" type="number" value={priority} min="1" max="7"
                               onChange={(e) => setPriority(e.target.value)}/> <br/>

                        <button className="button-lg" type="button" onClick={handleNewCategoryButton}> Add new category
                            to list
                        </button>
                    </div>
                    <Message message={message}/>

                    <br/>

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)}
                                    handleClose={handleClose.bind(this)}/>

                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();

        if (!isInputValid()) {
            return;
        }

        const activityProps = [
            description,
            timeSpentInMinutes,
            props.date,
            completed,
            selected,
            props.user.id
        ]

        // const res = await fetch("http://localhost:8080/api/v1/activities", {
        //         method: "POST",
        //         credentials: "include",
        //         headers: {
        //             'Content-Type': 'application/json'
        //
        //         },
        //         body: JSON.stringify({
        //             description: description,
        //             timeSpentInMinutes: timeSpentInMinutes,
        //             date: props.date,
        //             completed: completed,
        //             categoryName: selected,
        //             user_Id: props.user.id
        //         })
        //     }
        // );
        const activity = await api.newActivityFetch(activityProps);
        props.addActivity(activity)
        setIsOpen(false)
        resetState();
    }

    async function handleNewCategoryButton(e) {
        e.preventDefault();

        if (categoryName === "") {
            setMessage("Field must not be empty!")
            return;
        }

        await api.newCategoryFetch(categoryName, priority, props.user.id)

        setCategories([...categories, {name: categoryName}])
        setCategoryName("");
        setMessage("New category added to list!")
    }

    function resetState() {
        setDescription("");
        setCategoryName("");
        setTimeSpentInMinutes(0);
        setMessage("");
    }

    function isInputValid() {
        if (description === "" || selected === "") {
            setMessage("Fields must not be empty!")
            return false;
        }
        if (timeSpentInMinutes < 1 || timeSpentInMinutes > 1440) {
            setMessage("Time should be greater than 0 and smaller than 1440")
            return false;
        }
        return true;
    }
}


export default AddActivityModal;