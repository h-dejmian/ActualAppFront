import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'

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

function UpdateCategoryModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(props.name);
    const [priority, setPriority] = useState(props.priority)

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
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

                    <div className="submit-close">
                        <button className="button-lg" onClick={handleSubmitForm}>Submit</button>
                        <button className="button-lg" onClick={handleClose}>Close</button>
                    </div>
                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        const res = await fetch(`http://localhost:8080/api/v1/categories/${props.id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    priority: priority
                })
            }
        );
        let categoryJson = await res.json();
        props.updateCategory(categoryJson)

        setIsOpen(false);
        // resetState();
    }

    // function resetState() {
    //     setName("");
    //     setPriority("");
    // }

}

export default UpdateCategoryModal;