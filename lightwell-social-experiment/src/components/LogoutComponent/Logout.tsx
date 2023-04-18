import React, { useState } from "react";
import { useStore } from "react-redux";
import { logout } from "../../api/UserApi";
import { Profile, User } from "../../models/ProfileModel";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./LogoutStyle.css";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { authSlice } from "../../redux/ducks/user_duck/userSlice";
import { selectOptions } from "@testing-library/user-event/dist/types/setup/directApi";

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
        <LogoutAnchor onClick={handleLogoutButtonClick}
        ><PermIdentityOutlinedIcon />Logout</LogoutAnchor>
    );
}

export default Logout;