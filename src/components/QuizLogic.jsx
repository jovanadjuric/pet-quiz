import React, { useState, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";

const QuizLogic = ({ questions }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [answers, setAnswers] = useState([]);
  let { setLandingPage, petName, setPetName } = useContext(QuizContext);

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
          My pet {petName} is {answers[0]}, and althrough he likes to{" "}
          {answers[1]}, he really hates {answers[2]}.
        </p>
        <div>
          <Button className="btn-lg mr-1" onClick={handleResetClick}>
            Reset
          </Button>
          <Button className="btn-lg" onClick={handleScrambleClick}>
            Scramble
          </Button>
        </div>
      </>
    );
  };

  let handleAnswerClick = (choice) => {
    setAnswers([...answers, choice]);
    setCurrentIndex(currentIndex + 1);
  };

  let handleResetClick = () => {
    setLandingPage(true);
    setPetName("");
  };

  let handleScrambleClick = () => {
    setAnswers(
      answers.map((answer) => {
        let answerArr = answer.split("");
        for (let i = 0; i < answerArr.length; i++) {
          let randIndex = Math.floor(Math.random() * answerArr.length);

          let temp = answerArr[i];
          answerArr[i] = answerArr[randIndex];
          answerArr[randIndex] = temp;
        }
        answer = answerArr.join("");
        return answer;
      })
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

export default QuizLogic;
