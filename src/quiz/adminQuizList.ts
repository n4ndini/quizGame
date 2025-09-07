import { AuthUserID, QuizListReturn } from "../types";

export function adminQuizList(authUserID: AuthUserID): QuizListReturn {
    
    return {
      quizzes: {
        quiz: {
          quizId: 1,
          name: "name",
          description: "description"
        }
      }
    }
}