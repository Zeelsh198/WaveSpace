/**
 * @component Questions
 *
 * `Questions` is a reusable accordion-style FAQ component using Material UI's `Accordion`.
 * It displays a single question that can be expanded to reveal an answer.
 *
 * @param {Object} props - Component props
 * @param {string} props.question - The question text to be displayed in the collapsed view.
 *
 * @returns {JSX.Element} A styled FAQ accordion with a custom icon and answer content from dummy data.
 */


import React from "react";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { data } from "../../utils/dummyData";

const Questions = ({
  question = "What are your focus areas as a UI/UX design agency?",
}) => {
  return (
    <div className=" sm:w-full border-b border-gray-300 ">
      <Accordion
        className="!shadow-none !border-0  !rounded-none"
        disableGutters
        square
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={null}
          className="!p-0"
        >
          <div className="flex items-center justify-between w-full py-6">
            <div
              component="div"
              className="md:text-2xl sm:text-lg   text-black"
            >
              {question}
            </div>
            <ArrowOutwardSharpIcon className="text-gray-900" />
          </div>
        </AccordionSummary>

        <AccordionDetails className="text-xl md:text-md sm:text-base text-black px-4 sm:px-6 pb-6 leading-relaxed">
          {data}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Questions;
