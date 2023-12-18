import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";
import FormInput from "./inputs/FormInput";
import CategoriesSelect from "./inputs/CategoriesSelect";
import NewCategoryInput from "./inputs/NewCategoryInput";

function AddPlannedActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [categoryName, setCategoryName] = useState("");
    const [priority, setPriority] = useState(3)
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");
    const [message, setMessage] = useState("");

    const handleOpen = () => {
        getCategories();
        setIsOpen(true);
    }

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

        await api.newCategoryFetch(categoryName, priority, props.user.id, props.type.toUpperCase())

        setCategories([...categories, {name: categoryName}])
        setCategoryName("");
        setMessage("New category added to list!")
    }

    async function getCategories() {
        const categories = await api.fetchCategories("regular", props.user.id);
        setCategories(categories)
    }

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
                    <FormInput type="text" label="Description" value={description} inputSetter={setDescription}  />
                    <FormInput type="time" label="Start Time" value={startTime} inputSetter={setStartTime}  />
                    <FormInput type="time" label="End Time" value={endTime} inputSetter={setEndTime}  />

                    <CategoriesSelect handleSelect={handleSelect} categories={categories} />

                    <NewCategoryInput categoryName={categoryName} setCategoryName={setCategoryName}
                                      priority={priority} setPriority={setPriority}
                                      handleNewCategoryButton={handleNewCategoryButton}/>

                    <Message message={message}/>

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)}
                                    handleClose={handleClose.bind(this)}/>

                </form>
            </Modal>
        </div>
    )
}


export default AddPlannedActivityModal;