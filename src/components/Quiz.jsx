import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getQuestions } from "../services/questions";
import QuizLogic from "./QuizLogic";
import LandingPage from "./LandingPage";
import QuizContext from "./QuizContext";

const Quiz = () => {
  let [questions, setQuestions] = useState([]);
  let [landingPage, setLandingPage] = useState(true);

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  return (
    <QuizContext.Provider
      value={{
        landingPage: true,
        setLandingPage,
        questions,
      }}
    >
      <Container>
        {landingPage ? <LandingPage /> : <QuizLogic questions={questions} />}
      </Container>
    </QuizContext.Provider>
  );
};

export default Quiz;
