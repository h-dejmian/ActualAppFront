import {useState} from "react";
import Modal from 'react-modal';
import '../css/activity.css'

const customStyles = {
    content: {
        top: '50%',
        left: '35%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
    },
};

function UpdateActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(props.time);
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <a id={"updateActivity"} onClick={handleOpen}>Update</a>
            <Modal
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

                    <label>Category</label>
                    <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} /><br/>

                    <button type="submit">Submit</button>
                    <button onClick={handleClose}>Close</button>
                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        const res = await fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    timeSpentInMinutes: timeSpentInMinutes,
                    date : props.date,
                    completed: completed,
                    categoryName: categoryName
                })
            }
        );

        let activityJson = await res.json();
        props.updateActivity(props.id, activityJson)

        setIsOpen(false);
    }

}

export default UpdateActivityModal;