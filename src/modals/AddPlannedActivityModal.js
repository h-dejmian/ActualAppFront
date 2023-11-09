import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";

function AddPlannedActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
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

    async function handleSubmitForm(e) {
        e.preventDefault();

        if (!isInputValid()) {
            return;
        }

        const activityProps = [
            description,
            0,
            props.date,
            false,
            selected,
            props.user.id,
            startTime,
            endTime
        ]

        const activity = await api.newActivityFetch(activityProps, "regular");
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

        await api.newCategoryFetch(categoryName, priority, props.user.id, props.type)

        setCategories([...categories, {name: categoryName}])
        setCategoryName("");
        setMessage("New category added to list!")
    }

    async function getCategories() {
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories)
    }

    useEffect(() => getCategories, []);


    function resetState() {
        setDescription("");
        setCategoryName("");
        setMessage("");
    }

    function isInputValid() {
        if (description === "" || selected === "" || startTime === 0 || endTime === 0) {
            setMessage("Fields must not be empty!")
            return false;
        }
        return true;
    }

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

                    <label>Start Time</label>
                    <input type="time"  value={startTime}
                           onChange={(e) => setStartTime(e.target.value)}/> <br/>
                    <label>End Time</label>
                    <input type="time"  value={endTime}
                           onChange={(e) => setEndTime(e.target.value)}/> <br/>

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

                        <button className="button-lg" type="button" onClick={handleNewCategoryButton}>
                            Add new category to list
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
}


export default AddPlannedActivityModal;