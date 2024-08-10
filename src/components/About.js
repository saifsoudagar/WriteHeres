import React, { useState } from "react";

const AccordionItem = ({ title, content, props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return ( <
        div className = "accordion-item"
        style = {
            {
                borderRadius: "5px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
            }
        } >
        <
        h2 className = "accordion-header" >
        <
        button className = "accordion-button"
        type = "button"
        dataBsToggle = "collapse"
        dataBsTarget = { `#collapse${title}` }
        ariaExpanded = { isOpen ? "true" : "false" }
        onClick = { toggleAccordion }
        style = {
            {
                borderRadius: "5px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
            }
        } > { " " } { title } { " " } <
        /button>{" "} < /
        h2 > { " " } <
        div id = { `collapse${title}` }
        className = { `accordion-collapse collapse ${isOpen ? "show" : ""}` }
        dataBsParent = "#accordionExample"
        style = {
            {
                borderRadius: "5px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
            }
        } >
        <
        div className = "accordion-body" >
        <
        strong > { content } < /strong>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div >
    );
};

const AboutUs = (props) => {
    //   const [mode, setMode] = useState("light");

    //   const toggleMode = () => {
    //     setMode(mode === "light" ? "dark" : "light");
    //   };

    return ( <
        div className = "container"
        style = {
            {
                borderRadius: "5px",
                color: props.mode === "dark" ? "white" : "black",
            }
        } >
        <
        h1 className = "mb-3"
        style = {
            {
                color: props.mode === "dark" ? "white" : "black",
            }
        } > About Us < /h1>{" "} <
        div className = "accordion"
        id = "accordionExample"
        style = {
            {
                borderRadius: "5px",
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#05664ede" : "white",
            }
        } >
        <
        AccordionItem title = "Accordion Item #1"
        content = "This is the first item's accordion body."
        props = { props }
        />{" "} <
        AccordionItem title = "Accordion Item #2"
        content = "This is the second item's accordion body."
        props = { props }
        />{" "} <
        AccordionItem title = "Accordion Item #3"
        content = "This is the third item's accordion body."
        props = { props }
        />{" "} < /
        div > { " " } <
        /div>
    );
};

export default AboutUs;