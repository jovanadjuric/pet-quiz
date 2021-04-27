const questions = [
  {
    _id: 1,
    question: "Your perfect pet is:",
    possibleAnswers: ["Small", "Big"],
    currentQuestion: true,
  },
  {
    _id: 2,
    question: "Your perfect pet likes to:",
    possibleAnswers: ["Eat a lot", "Run a lot"],
    currentQuestion: false,
  },
  {
    _id: 3,
    question: "Your perfect pet hates:",
    possibleAnswers: ["Hot weather", "Cold weather"],
    currentQuestion: false,
  },
];

export function getQuestions() {
  return questions;
}
