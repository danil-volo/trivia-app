import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Results from "./Results";

export const QuizContext = createContext();

export default function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState({});

  function answerQuiz(quizNum, answer) {
    setAnswers((answers) => ({ ...answers, [quizNum]: answer }));
  }

  function getQuizByNum(quizNum) {
    return quizzes[quizNum];
  }

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        setQuizzes,
        answers,
        answerQuiz,
        getQuizByNum,
        quizCnt: quizzes.length,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/intro" />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}
