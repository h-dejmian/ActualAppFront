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

function UpdateActivityModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [timeSpentInMinutes, setTimeSpentInMinutes] = useState(props.time);
    const [completed, setCompleted] = useState(false);
    const [categoryName, setCategoryName] = useState(props.categoryName);
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(categoryName);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSelect = (e) => setSelected(e.target.value);

    async function fetchCategories() {
        const response = await fetch(`http://localhost:8080/api/v1/categories`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': "application/json",
            },
        })
        const categories = await response.json();
        setCategories(categories)
    }

    useEffect(() => fetchCategories, []);

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
        const res = await fetch(`http://localhost:8080/api/v1/activities/${props.id}`, {
                method: "PUT",
                credentials: "include",
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
        let activityJson = await res.json();
        props.updateActivity(props.id, activityJson)

        setIsOpen(false);
    }

    // function resetState() {
    //     setDescription("");
    //     setCategoryName("");
    //     setTimeSpentInMinutes(0);
    //     setCategoryName("")
    // }

}

export default UpdateActivityModal;