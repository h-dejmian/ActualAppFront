import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import SubmitAndClose from "./SubmitAndClose";
import Message from "../messages/Message";
import customStyles from "./style/ModalStyles";
import {api} from "../App";

function UpdateCategoryModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(props.name);
    const [priority, setPriority] = useState(props.priority);
    const [message, setMessage] = useState("");

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
    }

    return (
        <div>
            <a className={"button-sm"} onClick={handleOpen}>Update</a>
            <Modal
                ariaHideApp={false}
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Update Category"
            >
                <h2>Update Category</h2>
                <hr/>
                <br/>
                <form onSubmit={handleSubmitForm} method="PUT">
                    <label>Name</label>
                    <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/><br/>

                    <label>Priority</label>
                    <input  type="number" value={priority} min="1" max="7" onChange={(e) => setPriority(e.target.value)}/> <br/>

                    <br/><br/>

                    <Message message={message} />

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)} handleClose={handleClose.bind(this)} />

                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();

        if(!isInputValid()) {
            return;
        }

        const category = await api.updateCategoryFetch(name, priority, props.id);
        props.updateCategory(category)

        setIsOpen(false);
    }

    function isInputValid() {
        if(priority < 1 || priority > 7) {
            setMessage("Priority should be a number between 1 and 7")
            return false;
        }
        if(name === "") {
            setMessage("Category name cannot be empty")
            return false;
        }
        return true;
    }

}

export default UpdateCategoryModal;