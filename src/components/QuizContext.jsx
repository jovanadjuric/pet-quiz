import React from "react";

const QuizContext = React.createContext({
  currentStage: 0,
  currentQuestion: 0,
  nextStage: () => {},
  nextQuestion: () => {},
});

export default QuizContext;
