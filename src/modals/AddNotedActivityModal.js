import {useEffect, useState} from "react";
import {api} from "../App";
import Modal from "react-modal";
import customStyles from "./style/ModalStyles";
import Message from "../messages/Message";
import SubmitAndClose from "./SubmitAndClose";
import FormInput from "./inputs/FormInput";

function AddNotedActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleOpen = () => setIsOpen(true);

    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
        resetState();
    }


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
            props.category.name,
            props.user.id
        ]

        const activity = await api.newActivityFetch(activityProps, "todo");
        props.addActivity(activity)
        setIsOpen(false)
        resetState();
    }

    function resetState() {
        setDescription("");
        setMessage("");
    }

    function isInputValid() {
        if (description === "") {
            setMessage("Fields must not be empty!")
            return false;
        }
        return true;
    }

    return (
        <div>
            <button className="noted-btn-sm" onClick={handleOpen}> + </button>
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

                    <Message message={message}/>

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)}
                                    handleClose={handleClose.bind(this)}/>

                </form>
            </Modal>
        </div>
    )
}
export default AddNotedActivityModal;