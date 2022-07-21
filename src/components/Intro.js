import WhiteBoxLayout from "./WhiteBoxLayout";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <WhiteBoxLayout heading="Welcome to Trivia Challenge!">
      <div className="flex flex-col items-center">
        <div className="text-2xl px-16 my-16 text-center">
          You will be presented with 10 True or False questions
        </div>
        <div className="text-2xl px-16 my-16 text-center">
          Can you score 100%?
        </div>

        <button className="bg-gray-500 hover:bg-gray-700 text-white text-2xl my-16 uppercase font-bold py-2 px-4 rounded">
          <Link to="/quiz/0">Begin</Link>
        </button>
      </div>
    </WhiteBoxLayout>
  );
}
