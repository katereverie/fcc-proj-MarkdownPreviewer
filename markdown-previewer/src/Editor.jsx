import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExpandButton from './ExpandButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ content, setContent }) => {

  const [editorContent, setEditorContent] = useState(content);
  
  useEffect(() => {
    setEditorContent(content);
  }, [content]);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    // update the content in the App component so that it transfers to Previewer component
    setContent(newContent);
  }

  return (
    <div className="editor-wrapper">
      <div className="header-wrapper">
        <h2><FontAwesomeIcon icon={faHashtag} /><span>Editor</span></h2>
        <ExpandButton button="editor-btn"/>
      </div>
      <textarea id="editor" value={editorContent} onChange={handleContentChange}>
      </textarea>
    </div>
    
  )
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired
}

export default Editor