import React, { useEffect, useState } from 'react'
import { Box, Card, Button, Fab } from '@mui/material';
export default function Quize_react() {

  const questions = [
    {
      text: "What is React.js?",
      options: [
        { id: 1, text: "A programming language" },
        { id: 2, text: "A JavaScript library for building user interfaces" },
        { id: 3, text: "A database management system" },
        { id: 4, text: "A server-side framework" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is JSX in React?",
      options: [
        { id: 1, text: "A syntax extension for JavaScript" },
        { id: 2, text: "A new feature in ES6" },
        { id: 3, text: "A build tool for React applications" },
        { id: 4, text: "A component lifecycle method" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which lifecycle method is invoked immediately after a component is mounted?",
      options: [
        { id: 1, text: "componentWillMount()" },
        { id: 2, text: "componentDidMount()" },
        { id: 3, text: "componentWillUpdate()" },
        { id: 4, text: "componentDidUpdate()" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the purpose of state in React?",
      options: [
        { id: 1, text: "To store component metadata" },
        { id: 2, text: "To store component props" },
        { id: 3, text: "To handle component rendering" },
        { id: 4, text: "To manage component data that changes over time" }
      ],
      correctAnswerId: 4
    },
    {
      text: "In React, how can you pass data to a child component?",
      options: [
        { id: 1, text: "Using props" },
        { id: 2, text: "Using state" },
        { id: 3, text: "Using refs" },
        { id: 4, text: "Using context" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the purpose of the 'key' attribute in React lists?",
      options: [
        { id: 1, text: "To uniquely identify elements within an array" },
        { id: 2, text: "To style elements in a list" },
        { id: 3, text: "To control component visibility" },
        { id: 4, text: "To manage state changes" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What are React Hooks?",
      options: [
        { id: 1, text: "Functional components in React" },
        { id: 2, text: "Reusable code snippets" },
        { id: 3, text: "Functions that let you use state and other React features without writing a class" },
        { id: 4, text: "Helper functions for routing in React" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which method is used to change the state in React?",
      options: [
        { id: 1, text: "setState()" },
        { id: 2, text: "changeState()" },
        { id: 3, text: "updateState()" },
        { id: 4, text: "modifyState()" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the main difference between props and state in React?",
      options: [
        { id: 1, text: "Props are mutable while state is immutable" },
        { id: 2, text: "Props are used for child components only, state is used for parent components" },
        { id: 3, text: "Props are passed from parent to child components, state is managed within a component" },
        { id: 4, text: "Props are initialized with default values, state is not" }
      ],
      correctAnswerId: 3
    },
    {
      text: "What is the purpose of componentDidMount() method in React?",
      options: [
        { id: 1, text: "To render a component initially" },
        { id: 2, text: "To fetch data from an external API" },
        { id: 3, text: "To update component state" },
        { id: 4, text: "To handle user input" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which of the following is NOT a valid hook in React?",
      options: [
        { id: 1, text: "useEffect()" },
        { id: 2, text: "useCallback()" },
        { id: 3, text: "useRender()" },
        { id: 4, text: "useContext()" }
      ],
      correctAnswerId: 3
    },
    {
      text: "What is the purpose of useMemo() hook in React?",
      options: [
        { id: 1, text: "To perform data fetching" },
        { id: 2, text: "To memoize expensive calculations" },
        { id: 3, text: "To handle component lifecycle events" },
        { id: 4, text: "To manage component state" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How can you conditionally render a component in React?",
      options: [
        { id: 1, text: "Using if-else statements within JSX" },
        { id: 2, text: "Using ternary operators within JSX" },
        { id: 3, text: "Using switch-case statements within JSX" },
        { id: 4, text: "All of the above" }
      ],
      correctAnswerId: 4
    },
    {
      text: "What is the role of the 'key' prop in React when rendering lists?",
      options: [
        { id: 1, text: "To provide a unique identifier for each child component" },
        { id: 2, text: "To style each element in the list" },
        { id: 3, text: "To manage component state" },
        { id: 4, text: "To handle user input events" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the purpose of React Router?",
      options: [
        { id: 1, text: "To manage state in React applications" },
        { id: 2, text: "To handle HTTP requests in React applications" },
        { id: 3, text: "To create reusable components" },
        { id: 4, text: "To add routing and navigation to React applications" }
      ],
      correctAnswerId: 4
    },
    {
      text: "What is a higher-order component (HOC) in React?",
      options: [
        { id: 1, text: "A component that renders other components" },
        { id: 2, text: "A component that accepts props and returns a React component" },
        { id: 3, text: "A component with enhanced performance" },
        { id: 4, text: "A component that uses hooks" }
      ],
      correctAnswerId: 2
    },
    {
      text: "What is the purpose of useRef() hook in React?",
      options: [
        { id: 1, text: "To perform side effects in function components" },
        { id: 2, text: "To handle component state" },
        { id: 3, text: "To access the DOM node of a component" },
        { id: 4, text: "To memoize expensive calculations" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which hook is used to subscribe to context changes in React?",
      options: [
        { id: 1, text: "useContext()" },
        { id: 2, text: "useEffect()" },
        { id: 3, text: "useReducer()" },
        { id: 4, text: "useCallback()" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the purpose of React Fragments?",
      options: [
        { id: 1, text: "To group multiple elements without adding extra nodes to the DOM" },
        { id: 2, text: "To create reusable components" },
        { id: 3, text: "To handle component lifecycle events" },
        { id: 4, text: "To manage component state" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the role of the 'componentDidUpdate()' method in React?",
      options: [
        { id: 1, text: "To fetch data from an API" },
        { id: 2, text: "To update component state after a render" },
        { id: 3, text: "To handle user input events" },
        { id: 4, text: "To handle component rendering" }
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
      <h1>React</h1>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {
          questions.map((question, questionIndex) => (
            <Card sx={{ width: "300px", minHeight: "300px", ml: "3.9rem", mt: "2rem", maxHeight: "450px" }}>
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
      <Button color='primary' variant='contained'sx={{ width: "4rem", height: "3rem", border: "1px solid black", ml: "35rem", mt: "1rem" }}  onClick={handleSubmit} disabled={isSubmitted}>Submit</Button>
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
