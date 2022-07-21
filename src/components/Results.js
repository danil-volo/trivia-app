import WhiteBoxLayout from "./WhiteBoxLayout";
import { QuizContext } from "./App";
import { useContext, useMemo } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Results() {
  const { quizzes, answers, quizCnt } = useContext(QuizContext);

  const [corrects, result] = useMemo(() => {
    let corrects = 0;
    const result = quizzes.map((quiz, idx) => {
      const correct = quiz.correct_answer === answers[idx];

      if (correct) corrects = corrects + 1;

      return (
        <div className="flex space-x-4 my-2" key={idx}>
          <div>
            {correct ? (
              <PlusCircleIcon className="h-8 w-8" />
            ) : (
              <MinusCircleIcon className="h-8 w-8" />
            )}
          </div>
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: quiz.question }}
          ></div>
        </div>
      );
    });

    return [corrects, result];
  }, [quizzes, answers]);

  return (
    <WhiteBoxLayout
      heading="You scored"
      subHeading={`${corrects + "/" + quizCnt}`}
    >
      {result}

      <div className="mt-8 flex justify-center">
        <button className="bg-gray-500 hover:bg-gray-700 text-white text-2xl my-16 uppercase font-bold py-2 px-4 rounded">
          <Link to="/quiz/0">Play Again</Link>
        </button>
      </div>
    </WhiteBoxLayout>
  );
}
