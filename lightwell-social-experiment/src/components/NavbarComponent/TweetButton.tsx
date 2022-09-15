import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import TweetBox from '../TweetComponents/TweetBox';
import "./TweetButton.css";

// Todo: Add tweetMenuClick functionality

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '40%',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -110%)',
    },
};

function TweetButton() {

    let subtitle: any;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        console.log("test")
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={openModal} variant="outlined" className="navbarButton" fullWidth>Tweet</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <CloseIcon onClick={closeModal} />
                <TweetBox />
            </Modal>
        </div>
    )
}

export default TweetButton