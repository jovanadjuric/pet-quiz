import React, { useContext, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";

const SingleQuestion = ({ questions }) => {
  let { setCurrentStage } = useContext(QuizContext);
  let [currentIndex, setCurrentIndex] = useState(0);

  let displayQuestions = () => {
    if (currentIndex < questions.length) {
      let { question, choices } = questions[currentIndex];
      return (
        <>
          <h3>{question}</h3>
          {choices.map((choice) => {
            return (
              <Button onClick={(e) => answerClick(choice)} key={choice}>
                {choice}
              </Button>
            );
          })}
        </>
      );
    } else {
      displayResult();
    }
  };

  let answerClick = (choice) => {
    console.log(choice);
    setCurrentIndex(currentIndex + 1);
  };

  let displayResult = () => {
    return (
      <>
        My pet {}, and althrough he likes to {}, he really hates {}.
      </>
    );
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

export default SingleQuestion;
