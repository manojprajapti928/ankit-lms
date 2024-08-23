import React,{useState, useEffect} from 'react'
import { Box, Card, Button, Fab } from '@mui/material';
export default function JavaScript() {


  const questions = [
    {
      text: "What is a variable in programming?",
      options: [
        { id: 1, text: "A reserved keyword" },
        { id: 2, text: "A function to manipulate data" },
        { id: 3, text: "A named container for storing data values" },
        { id: 4, text: "A conditional statement" }
      ],
      correctAnswerId: 3
    },
    {
      text: "What does HTML stand for?",
      options: [
        { id: 1, text: "Hyper Text Markup Language" },
        { id: 2, text: "Highly Typed Markup Language" },
        { id: 3, text: "Home Tool Markup Language" },
        { id: 4, text: "Hyperlinks and Text Markup Language" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the result of 2 + '2' in JavaScript?",
      options: [
        { id: 1, text: "'22'" },
        { id: 2, text: "4" },
        { id: 3, text: "22" },
        { id: 4, text: "Error" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What does CSS stand for?",
      options: [
        { id: 1, text: "Computer Style Sheets" },
        { id: 2, text: "Creative Style Sheets" },
        { id: 3, text: "Cascading Style Sheets" },
        { id: 4, text: "Colorful Style Sheets" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which symbol is used for single-line comments in JavaScript?",
      options: [
        { id: 1, text: "//" },
        { id: 2, text: "/* */" },
        { id: 3, text: "##" },
        { id: 4, text: "--" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the purpose of a 'for' loop in programming?",
      options: [
        { id: 1, text: "To declare a new variable" },
        { id: 2, text: "To execute a block of code multiple times" },
        { id: 3, text: "To check a condition" },
        { id: 4, text: "To define a function" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the result of 5 == '5' in JavaScript?",
      options: [
        { id: 1, text: "true" },
        { id: 2, text: "false" },
        { id: 3, text: "Error" },
        { id: 4, text: "Undefined" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which function is used to parse a string to an integer in JavaScript?",
      options: [
        { id: 1, text: "parseInt()" },
        { id: 2, text: "stringToInt()" },
        { id: 3, text: "convertToInt()" },
        { id: 4, text: "parseString()" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the operator used for strict equality comparison in JavaScript?",
      options: [
        { id: 1, text: "==" },
        { id: 2, text: "===" },
        { id: 3, text: "=<" },
        { id: 4, text: "=!=" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What does JSON stand for?",
      options: [
        { id: 1, text: "JavaScript Object Notation" },
        { id: 2, text: "JavaScript Object Naming" },
        { id: 3, text: "JavaScript Over Network" },
        { id: 4, text: "JavaScript Online Notation" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which keyword is used to declare a constant variable in JavaScript?",
      options: [
        { id: 1, text: "var" },
        { id: 2, text: "let" },
        { id: 3, text: "const" },
        { id: 4, text: "static" }
      ],
      correctAnswerId: 3
    },
    {
      text: "What is the result of '10' + 20 in JavaScript?",
      options: [
        { id: 1, text: "30" },
        { id: 2, text: "'1020'" },
        { id: 3, text: "Error" },
        { id: 4, text: "1020" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the role of the 'this' keyword in JavaScript?",
      options: [
        { id: 1, text: "To refer to the current object" },
        { id: 2, text: "To denote a new variable" },
        { id: 3, text: "To declare a function" },
        { id: 4, text: "To import external libraries" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which method is used to add a new element to the end of an array in JavaScript?",
      options: [
        { id: 1, text: "push()" },
        { id: 2, text: "pop()" },
        { id: 3, text: "shift()" },
        { id: 4, text: "unshift()" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the role of the 'typeof' operator in JavaScript?",
      options: [
        { id: 1, text: "To check if a variable is defined" },
        { id: 2, text: "To determine the type of a variable" },
        { id: 3, text: "To concatenate strings" },
        { id: 4, text: "To compare two values" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which symbol is used for concatenating strings in JavaScript?",
      options: [
        { id: 1, text: "+" },
        { id: 2, text: "-" },
        { id: 3, text: "*" },
        { id: 4, text: "/" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What does the 'new' keyword do in JavaScript?",
      options: [
        { id: 1, text: "Declares a new function" },
        { id: 2, text: "Creates a new instance of an object" },
        { id: 3, text: "Resets a variable" },
        { id: 4, text: "Defines a new array" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the purpose of the 'break' statement in a loop?",
      options: [
        { id: 1, text: "To continue to the next iteration" },
        { id: 2, text: "To exit the loop immediately" },
        { id: 3, text: "To check a condition" },
        { id: 4, text: "To skip an iteration" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which symbol is used for not equal to in JavaScript?",
      options: [
        { id: 1, text: "!=" },
        { id: 2, text: "<>" },
        { id: 3, text: "==!" },
        { id: 4, text: "=!=" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the result of typeof null in JavaScript?",
      options: [
        { id: 1, text: "'null'" },
        { id: 2, text: "null" },
        { id: 3, text: "object" },
        { id: 4, text: "undefined" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which method is used to remove the last element from an array in JavaScript?",
      options: [
        { id: 1, text: "slice()" },
        { id: 2, text: "pop()" },
        { id: 3, text: "shift()" },
        { id: 4, text: "splice()" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the purpose of the 'typeof' operator in JavaScript?",
      options: [
        { id: 1, text: "To check if a variable is defined" },
        { id: 2, text: "To determine the type of a variable" },
        { id: 3, text: "To concatenate strings" },
        { id: 4, text: "To compare two values" }
      ],
      correctAnswerId: 2
    }
  ]

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleAnswerSelect = (questionIndex, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionId
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };


  return (
    <div>
      <h1>JavaScript</h1>

      <Box sx={{ display: "flex", flexWrap: "wrap", }}>
        {
          questions.map((question, questionIndex) => (
            <Card sx={{ width: "350px", height: "300px", ml: "6rem", mt: "2rem" }}>
              <div className="question" key={questionIndex}>
                <br />
                <p>{question.text}</p>
                {question.options.map(option => (
                  <div className="option" key={option.id}>
                    <br />
                    <label>
                      <input className='inputtext'
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={option.id}
                        onChange={() => handleAnswerSelect(questionIndex, option.id)}
                        disabled={isSubmitted}
                      />
                      {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </Card>
          ))}
      </Box>
      <Button color='primary' variant='contained'sx={{ width: "4rem", height: "2.4rem", border: "1px solid black", ml: "35rem", mt: "1rem" }} onClick={handleSubmit} disabled={isSubmitted}>Submit</Button>



      {isSubmitted && (
        <div className='bossresult'>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="result">
              <p>{question.text}</p>
              {selectedAnswers[questionIndex] === question.correctAnswerId ? (
                <p className="correct">Correct!</p>
              ) : (
                <p className="incorrect">
                  Incorrect. The correct answer is {question.options.find(option => option.id === question.correctAnswerId).text}.
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
