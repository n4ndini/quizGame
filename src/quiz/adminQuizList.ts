import { AuthUserID, QuizListReturn } from '../types';

export function adminQuizList(authUserID: AuthUserID): QuizListReturn {
  return {
    quizzes: {
      quizId: 1,
      name: 'name',
      description: 'this is a description'
    }
  };
}
