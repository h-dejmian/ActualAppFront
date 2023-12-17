import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import {api} from "../App";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";
import DescriptionInput from "./inputs/DescriptionInput";
import TimeSpentInput from "./inputs/TimeSpentInput";
import CategoriesSelect from "./inputs/CategoriesSelect";
import NewCategoryInput from "./inputs/NewCategoryInput";

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
                    <DescriptionInput description={description} setDescription={setDescription} />
                    <TimeSpentInput timeSpentInMinutes={timeSpentInMinutes} setTimeSpentInMinutes={setTimeSpentInMinutes} />

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


export default AddActivityModal;