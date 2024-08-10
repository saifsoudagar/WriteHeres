import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return ( <
        >
        <
        div className = { `navbar navbar-expand-lg nav-${props.mode} bg-${props.mode} ` } >

        <
        div className = "container-fluid" >
        <
        Link className = "navbar-brand"
        to = "/" > { " " } { props.title } { " " } <
        /Link>{" "} <
        button className = "navbar-toggler"
        type = "button"
        dataBsToggle = "collapse"
        dataBsTarget = "#navbarSupportedContent"
        ariaControls = "navbarSupportedContent"
        ariaExpended = "false"
        ariaLabel = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span>{" "} < /
        button > { " " } <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link active"
        ariaCurrent = "page"
        to = "/" >
        Home { " " } <
        /Link>{" "} < /
        li > { " " } <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/about" > { " " } { props.about } { " " } <
        /Link>{" "} < /
        li > { " " } <
        /ul>{" "} <
        form className = "d-flex"
        role = "search" >
        <
        input style = {
            {
                backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
                color: props.mode === "dark" ? "white" : "black",
            }
        }
        className = "form-control me-2"
        type = "search"
        placeholder = "Search"
        ariaLebal = "Search" /
        >
        <
        button className = "btn btn-outline-primary"
        type = "submit" >
        Search { " " } <
        /button>{" "} < /
        form > { " " } <
        div className = "switchs mx-4" >
        <
        div className = "form-check form-switch" >
        <
        input onClick = { props.togglemode }
        className = "form-check-input"
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckDefault" /
        >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckDefault" > { " " } <
        /label>{" "} < /
        div > { " " } <
        div className = "form-check form-switch" >
        <
        input onClick = { props.togglemode2 }
        className = "form-check-input"
        type = "checkbox"
        role = "switch"
        id = "flexSwitchCheckChecked" /
        >
        <
        label className = "form-check-label"
        htmlFor = "flexSwitchCheckChecked" > { " " } <
        /label>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        nav > { " " } <
        /div>{" "} < /
        >
    );
}

// PropTypes for type-checking props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

// Default props if not provided
Navbar.defaultProps = {
    title: "WriteHere",
    about: "about",
};