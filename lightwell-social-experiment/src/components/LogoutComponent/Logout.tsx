import { useStore } from "react-redux";
import { logout } from "../../api/UserApi";
import { styled, Hidden } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutStyle from "./logoutStyle.module.scss";
import NavBarStyle from "../NavbarComponent/navBarStyle.module.scss"

const LogoutAnchor: any = styled('a')`
    display: flex;
`;

function Logout(props: any) {
    const navigate = useNavigate();
    const store = useStore();
    const state: any = store.getState();

    const handleLogoutButtonClick = (e: any) => {
        e.preventDefault();
        const action = logout();

        store
            .dispatch(action)
            .unwrap()
            .then(handleRedirect)
            .catch((error: any) => {
                console.log("Error in Logout.tsx store catch.");
            });

        e.target.reset();

        if (props.className == "modal") {
            props.handleClose();
        }
    };

    function handleRedirect() {
        navigate("/login")
    }

    return (
        <LogoutAnchor onClick={handleLogoutButtonClick}>
            <LoginOutlinedIcon />
            {/* <Hidden lgDown> */}
                <div className={NavBarStyle.navBarText}>
                    Logout
                </div>
            {/* </Hidden> */}
        </LogoutAnchor>
    );
}

export default Logout;