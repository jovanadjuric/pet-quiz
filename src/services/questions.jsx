const questions = [
  {
    _id: 0,
    question: "Your perfect pet is:",
    choices: ["small", "big"],
  },
  {
    _id: 1,
    question: "Your perfect pet likes to:",
    choices: ["eat a lot", "run a lot"],
  },
  {
    _id: 2,
    question: "Your perfect pet hates:",
    choices: ["hot weather", "cold weather"],
  },
];

export function getQuestions() {
  return questions;
}
