import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getQuestions } from "../services/questions";
import QuizLogic from "./QuizLogic";
import LandingPage from "./LandingPage";
import QuizContext from "./QuizContext";
import { ToastContainer } from "react-toastify";

const Quiz = () => {
  let [questions, setQuestions] = useState([]);
  let [landingPage, setLandingPage] = useState(true);
  let [petName, setPetName] = useState("");

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  return (
    <QuizContext.Provider
      value={{
        landingPage: true,
        setLandingPage,
        questions,
        petName,
        setPetName,
      }}
    >
      <Container>
        {landingPage ? <LandingPage /> : <QuizLogic questions={questions} />}
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </QuizContext.Provider>
  );
};

export default Quiz;
