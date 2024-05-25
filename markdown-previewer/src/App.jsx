import './App.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import Editor from './Editor.jsx';
import Previewer from './Previewer.jsx';
import { useState } from 'react';
import Footer from './Footer.jsx';

hljs.highlightAll();

function App() {

  const defaultContent = [
    "# Welcome to my Markdown Previewer!\n", 
    "## Try it out!!\n",
    "### It is fun!!!\n",
    "Here's some inline code: `const isKittyHungry = true;`\n",
    "```js",
    "//Here's an example of writting multi-line code:",
    "function checkKittyMood(isKittyHungry, isKittyPlayful) {",
    "  const amIInTrouble = true;",
    "  if (!isKittyHungry && isKittyPlayful !) {",
    "    return !amIInTrouble;",
    "  }",
    "  return amIInTrouble;",
    "}",
    "```\n",
    "Feeling bold, **then make it bold**!\n",
    "Or _italic_.\n",
    "Or...**_both!_**\n",
    "Made a mistake? ~~Cross it out!~~\n",
    "Want to embed links? here is my GitHub address: [links](https://github.com/Katereverie).\n",
    "Feeling inspired? Try block quotes:",
    "> 'Ein Leben ohne Katzen ist sinnlos.'\n",
    "Want to get things into perspective? Try tables:\n",
    "| Friday | Saturday | Sunday |",
    "| -------- | -------- | ------ |",
    "| buy new litter | stretch with Salvi | paint Salvi sleeping |",
    "| meditate | walk along Rhein | clean apartment |\n",
    "Have groceries to do? Try lists:",
    "- Buy Salvi food",
    "  - Go to DM",
    "  - Go to REWE",
    "    - Try new varieties",
    "    - Try different brands",
    "      - Think about Salvi's face",
    "      - Pet Salvi, play fetch\n",
    "Solving a big coding problem? Break it down:",
    "1. Top-down approach, specify the desired functionality",
    "1. Break the functionality into executable steps",
    "1. If not executable, break it further down until it is\n",
    "Here's a kitty to brighten up your day!\n",
    "![Kitty Cat](https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg)"
  ]
  
  const defaultContentString = defaultContent.join("\n");

  // manage states at this level so that contents are shared between editor and previewer
  const [content, setContent] = useState(defaultContentString);
  
  // the setContent method is passed down to Editor
  return (
    <div className="App">
      <Editor content={content} setContent={setContent} />
      <Previewer content={content} />
      <Footer />
    </div>
  );
}

export default App;
