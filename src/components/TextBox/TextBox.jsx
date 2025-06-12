import React from 'react'

const TextBox = ({ text, classes = "" }) => (
  <div className={`${classes}`}>{text}</div>
);

export default TextBox;
