import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import TweetBox from '../TweetComponents/TweetBox';
import "./TweetButton.css";

// Todo: Add tweetMenuClick functionality

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TweetButton() {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Button onClick={openModal} variant="outlined" className="navbarButton" fullWidth>Tweet</Button>
            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon onClick={closeModal} />
                    <TweetBox />
                </Box>
            </Modal>
        </>
    )
}

export default TweetButton