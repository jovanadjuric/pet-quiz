import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getQuestions } from "../services/questions";
import SingleQuestion from "./SingleQuestion";
import LandingPage from "./LandingPage";
import QuizContext from "./QuizContext";

const Quiz = () => {
  let [questions, setQuestions] = useState([]);
  let [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  return (
    <QuizContext.Provider
      value={{
        currentStage: 0,
        setCurrentStage,
      }}
    >
      <Container>
        {currentStage === 0 ? <LandingPage /> : ""}
        {currentStage === 1 ? <SingleQuestion questions={questions} /> : ""}
      </Container>
    </QuizContext.Provider>
  );
};

export default Quiz;
