import { AuthUserID, QuizCreateReturn } from '../types';

export function adminQuizCreate(authUserID: AuthUserID, name: string,
  description:string): QuizCreateReturn {
  return { quizId: 1 };
}
