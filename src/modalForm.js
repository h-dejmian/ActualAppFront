import {useState} from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: 'black'
    },
};

function ModalForm() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <button onClick={handleOpen}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Example Modal"
            >
                <h2>New Activity</h2>
                <hr/>
                <br/>
                    <form>
                        <label>Description</label>
                        <input typr="text"/><br/><br/>
                        <label>Time spent in minutes</label>
                        <input typr="text"/> <br/><br/>
                        <label>Category</label>
                        <input typr="text"/><br/><br/>
                        <button type="submit">Submit</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
            </Modal>
        </div>
    )

}

export default ModalForm;