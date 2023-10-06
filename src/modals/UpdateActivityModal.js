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
        color: 'black'
    },
};

function UpdateActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(props.time);
    // const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [categoryName, setCategoryName] = useState(props.categoryName);
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(categoryName);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSelect = (e) => setSelected(e.target.value);

    async function fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`)
        const categories = await response.json();
        setCategories(categories)
    }

    useEffect(() => fetchCategories, []);

    return (
        <div>
            <a id={"updateActivity"} onClick={handleOpen}>Update</a>
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
                <form onSubmit={handleSubmitForm} method="PUT">
                    <label>Description</label>
                    <input type="text" value={description}  onChange={(e) => setDescription(e.target.value)}/><br/>

                    <label>Time spent in minutes</label>
                    <input  type="text" value={timeSpentInMinutes} onChange={(e) => setTimeSpentInMinutes(e.target.value)}/> <br/>

                    <label htmlFor="categories">Choose category from the list :   </label>
                    <select defaultValue={categoryName} onChange={ e => handleSelect(e)} name="categories" id="categories-dropdown">
                        <option value={categoryName}> {categoryName} </option>
                        {categories.filter(category => category.name !== categoryName)
                                    .map((category, index) => (<option key={index} value={category.name}>{category.name}</option>))}
                    </select>

                    {/*<label>Category</label>*/}
                    {/*<input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/> <br/>*/}

                    <br/><br/>

                    <button type="submit">Submit</button>
                    <button onClick={handleClose}>Close</button>
                </form>
            </Modal>
        </div>
    )

    async function handleSubmitForm(e) {
        e.preventDefault();
        console.log(categoryName)
        const res = await fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    timeSpentInMinutes: timeSpentInMinutes,
                    date: props.date,
                    completed: completed,
                    categoryName: selected
                })
            }
        );
        console.log(props.id);
        let activityJson = await res.json();
        props.updateActivity(props.id, activityJson)

        setIsOpen(false);
        resetState();
    }

    function resetState() {
        setDescription("");
        setCategoryName("");
        setTimeSpentInMinutes(0);
        setCategoryName("")
    }

}

export default UpdateActivityModal;