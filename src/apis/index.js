import Axios from "axios";

export async function loadQuizzes() {
  return await Axios.get(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
}
