import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";
import FormInput from "./inputs/FormInput";
import CategoriesSelect from "./inputs/CategoriesSelect";


function UpdateActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(props.time);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState(props.categoryName);
    const [selected, setSelected] = useState(categoryName);
    const [message, setMessage] = useState("");
    const [priority, setPriority] = useState(3)

    const handleOpen = () => {
        getCategories();
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    async function getCategories() {
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories)
    }

    async function handleSubmitForm(e) {
        e.preventDefault();

        if(!isInputValid()) {
            return;
        }

        const activityProps = [
            description,
            timeSpentInMinutes,
            props.date,
            props.completed,
            selected
        ]

        const activity = await api.updateActivityFetch(activityProps, props.id, "REGULAR")

        props.updateActivity(props.id, activity)

        setSelected(categoryName)
        setCategoryName(selected)
        setIsOpen(false);
    }

    async function handleNewCategoryButton(e) {
        e.preventDefault();

        if(categoryName === "") {
            setMessage("Field must not be empty!")
            return;
        }

        await api.newCategoryFetch(newCategoryName, priority, props.user.id, "REGULAR")

        setCategories([...categories, {name : newCategoryName}])
        setNewCategoryName("");
        setMessage("New category added to list!")
    }

    function isInputValid() {
        if(description === "" || selected === "") {
            setMessage("Fields must not be empty!")
            return false;
        }
        if(timeSpentInMinutes < 1 || timeSpentInMinutes > 1440) {
            setMessage("Time should be greater than 0 and less than 1440")
            return false;
        }
        return true;
    }

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
                <form>
                    <FormInput type="text" label="Description" value={description} inputSetter={setDescription}  />
                    <FormInput type="number"  label="Time spent in minutes"
                               value={timeSpentInMinutes} inputSetter={setTimeSpentInMinutes}
                               min="0" max="1440"/>

                    <CategoriesSelect handleSelect={handleSelect} categories={categories} />

                    <div>
                        <label>Or create new category</label>
                        <label id="priority-label">Priority</label>
                    </div>

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
}

export default UpdateActivityModal;