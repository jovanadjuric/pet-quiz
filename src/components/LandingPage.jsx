import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";

const LandingPage = () => {
  let { setCurrentStage } = useContext(QuizContext);
  return (
    <Row>
      <Col className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>Perfect Pet Quiz</h1>
        <Button onClick={() => setCurrentStage(1)} variant="primary" size="lg">
          Start
        </Button>
      </Col>
    </Row>
  );
};

export default LandingPage;
