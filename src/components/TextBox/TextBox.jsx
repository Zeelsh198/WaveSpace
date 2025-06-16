/**
 * @component TextBox
 *
 * `TextBox` is a simple reusable component that renders a block of text inside a `div`,
 * with optional additional styling passed through Tailwind or custom class names.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The text content to display.
 * @param {string} [props.classes=""] - Optional custom Tailwind CSS or other class names for styling.
 *
 * @returns {JSX.Element} A styled text container.
 *
 * @example
 * <TextBox text="Welcome to our site!" classes="text-lg font-semibold text-center" />
 */


import React from 'react'

const TextBox = ({ text, classes = "" }) => (
  <div className={`${classes}`}>{text}</div>
);

export default TextBox;
