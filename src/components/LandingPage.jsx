import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import QuizContext from "./QuizContext";
import config from "../config";
import { toast } from "react-toastify";

const LandingPage = () => {
  let { setLandingPage, questions, setPetName, petName } = useContext(
    QuizContext
  );

  let landingPageHandler = () => {
    setLandingPage(false);
  };

  let randomizeHandler = () => {
    setLandingPage(false);
    questions = shuffle(questions);
  };

  let petNameChangeHandler = (e) => {
    if (petName.length < config.petNameMaxLength) {
      setPetName(e.target.value);
    } else {
      e.target.value = petName;
      toast.info(`Maximum name length is ${config.petNameMaxLength}`);
    }
  };

  let shuffle = (arr) => {
    var currentIndex = arr.length,
      tempVal,
      randIndex;

    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randIndex];
      arr[randIndex] = tempVal;
    }

    return arr;
  };

  return (
    <Row>
      <Col className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>Perfect Pet Quiz</h1>
        <input
          type="text"
          className="form-control w-25 m-3 text-center"
          placeholder="Name of the pet"
          aria-label="Name of the pet"
          aria-describedby="basic-addon2"
          onChange={(e) => petNameChangeHandler(e)}
        />

        <div>
          <Button
            onClick={() => landingPageHandler()}
            variant="primary"
            size="lg"
            className="mr-1"
          >
            Start
          </Button>
          <Button
            onClick={() => randomizeHandler()}
            variant="primary"
            size="lg"
          >
            Randomize
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default LandingPage;
