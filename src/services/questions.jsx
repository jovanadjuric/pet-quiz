const questions = [
  {
    _id: 0,
    question: "Your perfect pet is:",
    choices: ["small", "big", "cuddly", "lazy"],
  },
  {
    _id: 1,
    question: "Your perfect pet likes to:",
    choices: ["eat a lot", "run a lot", "sleep a lot", "jump around"],
  },
  {
    _id: 2,
    question: "Your perfect pet hates:",
    choices: ["hot weather", "cold weather", "other animals", "water"],
  },
];

export function getQuestions() {
  return questions;
}
