import React, { useContext, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";

const SingleQuestion = ({ questions }) => {
  let { setCurrentStage } = useContext(QuizContext);

  let displayQuestions = () => {
    // let { question, possibleAnswers };
    for (let i = 0; i < questions.length; i++) {
      let { currentQuestion, question, possibleAnswers } = questions[i];
      if (currentQuestion) {
        return (
          <>
            <h1>{question}</h1>
            <div>
              {possibleAnswers.map((answer) => {
                return (
                  <Button
                    className="mr-2"
                    key={answer}
                    onClick={answerClick(answer)}
                  >
                    {answer}
                  </Button>
                );
              })}
            </div>
          </>
        );
      }
    }

    // return (
    //   <>
    //     <h1>{question}</h1>
    //     <div>
    //       {possibleAnswers.map((answer) => (
    //         <Button className="mr-2" key={answer} onClick={answerClick()}>
    //           {answer}
    //         </Button>
    //       ))}
    //     </div>
    //   </>
    // );
  };

  let answerClick = (answer) => {
    // setCurrentQuestion(++currentQuestion);
    console.log(answer);
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
