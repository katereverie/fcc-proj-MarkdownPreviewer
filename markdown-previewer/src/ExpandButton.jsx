import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ExpandButton = ({ button }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleView = () => {

      const editorView = document.getElementById("editor");
      const editorWrapper = document.querySelector(".editor-wrapper");
      const previewView = document.getElementById("preview");
      const previewWrapper = document.querySelector(".previewer-wrapper");

      if (button === "editor-btn") {
        editorView.classList.toggle("expand");
        previewWrapper.classList.toggle("hidden");
      } 

      if (button === "preview-btn") {
        previewView.classList.toggle("expand");
        editorWrapper.classList.toggle("hidden");
      }

      setIsExpanded(!isExpanded);

    }

    return (
        
        <button className={isExpanded ? "min-btn" : "max-btn"} onClick={toggleView}>
          <FontAwesomeIcon icon={isExpanded? faMinimize : faMaximize} size="2x"/>
        </button>
        
    );
}

ExpandButton.propTypes = {
    button: PropTypes.string.isRequired
}

export default ExpandButton;