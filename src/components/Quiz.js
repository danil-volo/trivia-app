import React, { useContext, useEffect } from "react";
import WhiteBoxLayout from "./WhiteBoxLayout";
import { useMatch, useNavigate } from "react-router-dom";
import { QuizContext } from "./App";
import { loadQuizzes } from "../apis";

export default function Item() {
  const {
    params: { id },
  } = useMatch("/quiz/:id");
  const navigate = useNavigate();

  const { getQuizByNum, setQuizzes, answerQuiz, quizCnt } = useContext(QuizContext);

  useEffect(() => {
    loadQuizzes()
      .then(({ data }) => {
        setQuizzes(data.results);
      })
      .catch((e) => {
        alert("Error occured while loading data."); // Can do this by modal.
        navigate("/intro");
      });
  }, []);

  useEffect(() => {
    if (id == quizCnt) navigate("/results");
  }, [id]);

  const quiz = getQuizByNum(id);

  const handleAnswer = (e) => {
    answerQuiz(id, e.target.value);
    navigate(`/quiz/${parseInt(id) + 1}`);
  };

  return (
    <>
      {quiz ? (
        <WhiteBoxLayout heading={quiz.category}>
          <div
            className="mx-12 p-16 h-72 border border-black flex justify-center items-center text-lg"
            dangerouslySetInnerHTML={{ __html: quiz.question }}
          />

          <div className="mx-12 flex justify-between">
            <button
              value="False"
              className="mt-2 w-16 px-4 py-2 bg-red-600 text-white flex-1"
              onClick={handleAnswer}
            >
              False
            </button>
            <button
              value="True"
              className="mt-2 w-16 px-4 py-2 bg-blue-600 text-white flex-1"
              onClick={handleAnswer}
            >
              True
            </button>
          </div>

          <div className="m-8 flex justify-center">
            {parseInt(id) + 1} of {quizCnt}
          </div>
        </WhiteBoxLayout>
      ) : (
        <WhiteBoxLayout heading="Loading..." />
      )}
    </>
  );
}
