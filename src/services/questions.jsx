const questions = [
  {
    _id: 0,
    question: "Your perfect pet is:",
    choices: ["Small", "Big"],
  },
  {
    _id: 1,
    question: "Your perfect pet likes to:",
    choices: ["Eat a lot", "Run a lot"],
  },
  {
    _id: 2,
    question: "Your perfect pet hates:",
    choices: ["Hot weather", "Cold weather"],
  },
];

export function getQuestions() {
  return questions;
}
