import React, { useState } from "react";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "Berlin", isCorrect: false },
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Rome", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "What does CPU stand for?",
    answerOptions: [
      { answerText: "Central Process Unit", isCorrect: false },
      { answerText: "Central Processing Unit", isCorrect: true },
      { answerText: "Computer Personal Unit", isCorrect: false },
      { answerText: "Central Processor Unit", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which data structure uses LIFO (Last In, First Out) principle?",
    answerOptions: [
      { answerText: "Queue", isCorrect: false },
      { answerText: "Stack", isCorrect: true },
      { answerText: "Array", isCorrect: false },
      { answerText: "Linked List", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which programming language is known as the language of the web?",
    answerOptions: [
      { answerText: "Python", isCorrect: false },
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Java", isCorrect: false },
      { answerText: "C++", isCorrect: false },
    ],
  },
  {
    questionText: "What is the time complexity of binary search?",
    answerOptions: [
      { answerText: "O(n)", isCorrect: false },
      { answerText: "O(log n)", isCorrect: true },
      { answerText: "O(n log n)", isCorrect: false },
      { answerText: "O(1)", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a NoSQL database?",
    answerOptions: [
      { answerText: "MySQL", isCorrect: false },
      { answerText: "PostgreSQL", isCorrect: false },
      { answerText: "MongoDB", isCorrect: true },
      { answerText: "SQLite", isCorrect: false },
    ],
  },
  {
    questionText:
      'In object-oriented programming, what does "inheritance" mean?',
    answerOptions: [
      {
        answerText: "A class inheriting properties from another class",
        isCorrect: true,
      },
      {
        answerText: "A function inheriting arguments from another function",
        isCorrect: false,
      },
      {
        answerText: "An object inheriting methods from another object",
        isCorrect: false,
      },
      {
        answerText: "A variable inheriting value from another variable",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "What is the primary function of an operating system?",
    answerOptions: [
      { answerText: "To manage hardware resources", isCorrect: true },
      { answerText: "To run applications", isCorrect: false },
      { answerText: "To connect to the internet", isCorrect: false },
      { answerText: "To edit files", isCorrect: false },
    ],
  },
  {
    questionText: "Which sorting algorithm is the most efficient on average?",
    answerOptions: [
      { answerText: "Bubble Sort", isCorrect: false },
      { answerText: "Selection Sort", isCorrect: false },
      { answerText: "Quick Sort", isCorrect: true },
      { answerText: "Insertion Sort", isCorrect: false },
    ],
  },
  {
    questionText: "What does HTML stand for?",
    answerOptions: [
      { answerText: "Hypertext Markup Language", isCorrect: true },
      { answerText: "Hyper Transfer Markup Language", isCorrect: false },
      { answerText: "Hypertext Markdown Language", isCorrect: false },
      { answerText: "Hyper Tool Markup Language", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a frontend framework?",
    answerOptions: [
      { answerText: "Node.js", isCorrect: false },
      { answerText: "Django", isCorrect: false },
      { answerText: "React", isCorrect: true },
      { answerText: "Flask", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which language is primarily used for artificial intelligence?",
    answerOptions: [
      { answerText: "Python", isCorrect: true },
      { answerText: "Java", isCorrect: false },
      { answerText: "C++", isCorrect: false },
      { answerText: "Ruby", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the main advantage of using a linked list over an array?",
    answerOptions: [
      { answerText: "Faster access to elements", isCorrect: false },
      { answerText: "Dynamic size", isCorrect: true },
      { answerText: "Better memory utilization", isCorrect: false },
      { answerText: "Simple to implement", isCorrect: false },
    ],
  },
  {
    questionText: "What does HTTP stand for?",
    answerOptions: [
      { answerText: "HyperText Transfer Protocol", isCorrect: true },
      { answerText: "HyperText Transfer Package", isCorrect: false },
      { answerText: "HyperText Transmission Protocol", isCorrect: false },
      { answerText: "Hyper Transfer Text Protocol", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is a valid variable name in most programming languages?",
    answerOptions: [
      { answerText: "123variable", isCorrect: false },
      { answerText: "variable-123", isCorrect: false },
      { answerText: "_variable123", isCorrect: true },
      { answerText: "var!iable", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is a high-level programming language?",
    answerOptions: [
      { answerText: "Assembly", isCorrect: false },
      { answerText: "Machine Code", isCorrect: false },
      { answerText: "Python", isCorrect: true },
      { answerText: "Binary", isCorrect: false },
    ],
  },
  {
    questionText: "In relational databases, what is a primary key?",
    answerOptions: [
      { answerText: "A key that is the most important", isCorrect: false },
      {
        answerText: "A unique identifier for a record in a table",
        isCorrect: true,
      },
      { answerText: "A foreign key", isCorrect: false },
      { answerText: "A key that unlocks the database", isCorrect: false },
    ],
  },
  {
    questionText: "Which of these is not a programming paradigm?",
    answerOptions: [
      { answerText: "Procedural", isCorrect: false },
      { answerText: "Object-Oriented", isCorrect: false },
      { answerText: "Functional", isCorrect: false },
      { answerText: "Emotional", isCorrect: true },
    ],
  },
  {
    questionText: "What is an algorithm?",
    answerOptions: [
      {
        answerText: "A step-by-step procedure to solve a problem",
        isCorrect: true,
      },
      { answerText: "A programming language", isCorrect: false },
      { answerText: "A hardware component", isCorrect: false },
      { answerText: "A type of software", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which data structure uses FIFO (First In, First Out) principle?",
    answerOptions: [
      { answerText: "Stack", isCorrect: false },
      { answerText: "Queue", isCorrect: true },
      { answerText: "Array", isCorrect: false },
      { answerText: "Tree", isCorrect: false },
    ],
  },
  {
    questionText: "What is Big-O notation used for?",
    answerOptions: [
      { answerText: "To describe the speed of a computer", isCorrect: false },
      {
        answerText: "To measure the space complexity of an algorithm",
        isCorrect: true,
      },
      {
        answerText: "To describe the syntax of a programming language",
        isCorrect: false,
      },
      { answerText: "To calculate the runtime of a program", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is not a type of database?",
    answerOptions: [
      { answerText: "Relational", isCorrect: false },
      { answerText: "Hierarchical", isCorrect: false },
      { answerText: "Network", isCorrect: false },
      { answerText: "Linear", isCorrect: true },
    ],
  },
  {
    questionText: "What does CSS stand for?",
    answerOptions: [
      { answerText: "Computer Style Sheets", isCorrect: false },
      { answerText: "Cascading Style Sheets", isCorrect: true },
      { answerText: "Cascading Simple Sheets", isCorrect: false },
      { answerText: "Complex Style Sheets", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following is used to structure and style web pages?",
    answerOptions: [
      { answerText: "HTML and Python", isCorrect: false },
      { answerText: "CSS and JavaScript", isCorrect: true },
      { answerText: "Java and HTML", isCorrect: false },
      { answerText: "SQL and CSS", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
