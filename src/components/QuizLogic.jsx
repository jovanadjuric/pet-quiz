import React, { useState, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";

const QuizLogic = ({ questions }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [answers, setAnswers] = useState([]);
  let { setLandingPage } = useContext(QuizContext);

  let displayQuestions = () => {
    if (currentIndex < questions.length) {
      let { question, choices } = questions[currentIndex];
      return (
        <>
          <h3>{question}</h3>
          <div>
            {choices.map((choice) => {
              return (
                <Button
                  className="mr-1 answer-btn"
                  key={choice}
                  onClick={(e) => handleAnswerClick(choice)}
                >
                  {choice}
                </Button>
              );
            })}
          </div>
        </>
      );
    } else {
      return displayResult();
    }
  };

  let displayResult = () => {
    return (
      <>
        <p>
          My pet {answers[0]}, and althrough he likes to {answers[1]}, he really
          hates {answers[2]}.
        </p>
        <Button className="btn-lg" onClick={handleResetClick}>
          Reset
        </Button>
      </>
    );
  };

  let handleResetClick = () => {
    setLandingPage(true);
  };

  let handleAnswerClick = (choice) => {
    setAnswers([...answers, choice]);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Row>
      <Col
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
        lg={12}
      >
        {displayQuestions()}
      </Col>
    </Row>
  );
};

export default QuizLogic;
