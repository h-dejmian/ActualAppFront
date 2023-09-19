import {useState} from "react";
import Modal from 'react-modal';

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

function ModalForm(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(0);
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <button onClick={handleOpen}>Add New Activity</button>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Create New Activity"
            >
                <h2>New Activity</h2>
                <hr/>
                <br/>
                    <form onSubmit={handleSubmitForm} method="POST">
                        <label>Description</label>
                        <input type="text" value={description} placeholder={"Description"} onChange={(e) => setDescription(e.target.value)}/><br/>

                        <label>Time spent in minutes</label>
                        <input  type="text" value={timeSpentInMinutes} onChange={(e) => setTimeSpentInMinutes(e.target.value)}/> <br/>

                        <label>Category</label>
                        <input type="text" value={categoryName} placeholder={"Category"} onChange={(e) => setCategoryName(e.target.value)} /><br/>

                        <button type="submit">Submit</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/api/v1/activities", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: description,
                timeSpentInMinutes: timeSpentInMinutes,
                date : "2023-09-09",
                completed: completed,
                categoryName: categoryName
            })
        }
        );

        let activityJson = await res.json();
        props.addActivity(activityJson)

        setIsOpen(false);
    }

}

export default ModalForm;