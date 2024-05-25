import PropTypes from 'prop-types';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { useEffect, useRef } from 'react';
import ExpandButton from './ExpandButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Previewer = ({ content }) => {
  const previewRef = useRef(null);

  const highlightCodeBlocks = () => {
    document.querySelectorAll("pre code").forEach((block) => {
      // Only highlight elements that are not already highlighted
      if (!block.dataset.highlighted) {
        hljs.highlightElement(block);
        block.dataset.highlighted = "true";
      }
    });
  };

  useEffect(() => {
    // Update the preview content and highlight code blocks
    if (previewRef.current) {
      previewRef.current.innerHTML = marked(content, { breaks: true });
      highlightCodeBlocks();
    }
  }, [content]);

  return (
    <div className="previewer-wrapper">
      <div className="header-wrapper">
        <h2>
          <FontAwesomeIcon icon={faCode} />
          <span>Previewer</span>
        </h2>
        <ExpandButton button="preview-btn" />
      </div>
      <div id="preview" ref={previewRef}></div>
    </div>
  );
};

Previewer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Previewer;
