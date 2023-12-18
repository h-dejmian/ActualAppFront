import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";
import FormInput from "./inputs/FormInput";
import CategoriesSelect from "./inputs/CategoriesSelect";


function UpdatePlannedActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);
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
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories)
    }

    useEffect(() => getCategories, []);

    async function handleSubmitForm(e) {
        e.preventDefault();

        if(!isInputValid()) {
            return;
        }

        const activityProps = [
            description,
            0,
            props.date,
            props.completed,
            selected,
            startTime,
            endTime
        ]

        const activity = await api.updateActivityFetch(activityProps, props.id, "REGULAR")

        props.updateActivity(props.id, activity)

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
                    <FormInput type="time" label="Start Time" value={startTime} inputSetter={setStartTime}  />
                    <FormInput type="time" label="End Time" value={endTime} inputSetter={setEndTime}  />

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

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)} handleClose={handleClose.bind(this)} />

                </form>
            </Modal>
        </div>
    )
}

export default UpdatePlannedActivityModal;