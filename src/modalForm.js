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

function ModalForm() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <button onClick={handleOpen}>Create New Activity</button>
            <Modal
                isOpen={isOpen}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Create New Activity"
            >
                <h2>New Activity</h2>
                <hr/>
                <br/>
                    <form action="" method="POST">
                        <label>Description</label>
                        <input type="text"/><br/><br/>
                        <label>Time spent in minutes</label>
                        <input type="text"/> <br/><br/>
                        <label>Category</label>
                        <input type="text"/><br/><br/>
                        <button type="submit">Submit</button>
                        <button onClick={handleClose}>Close</button>
                    </form>
            </Modal>
        </div>
    )

}

export default ModalForm;