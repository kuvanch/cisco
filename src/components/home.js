import React, {useState} from "react";
import "aos/dist/aos.css";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) =>
        createStyles({
            modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            },
            paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            },
        }),
        );

const Home = ()=> {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = () => {
        setOpen(false);
    };
        return ( 
            <>
            <div className="main-page">
                <div className="main-average">
                    <p className="main-header" data-aos="zoom-in" data-aos-duration="800">Cisco Smart Net Total Care™</p>
                    <p className="header-p" data-aos="zoom-in" data-aos-duration="800">Больше, чем гарантия</p>
                    <div className="main-button-box" >
                        <button type="button" onClick={handleOpen} className=" btn btn-light main-button">
                           Смотреть видео о сервисах
                        </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClick} 
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className="classes-paper">
                                <video autoPlay className="modal-video" controls> 
                                    <source src="http://161.35.117.200:8087/api/send/downloadFile/2/2_mp4.mp4" type="video/mp4" />
                                </video>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                </div>
            </div>
            </>
        );
}
export default Home;
