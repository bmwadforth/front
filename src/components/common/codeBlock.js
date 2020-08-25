import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock(props) {
  return (
    <SyntaxHighlighter language={props.language} style={anOldHope}>
      {props.value}
    </SyntaxHighlighter>
  );
}
