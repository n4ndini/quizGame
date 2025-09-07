import { AuthUserID, QuizID, QuizInfoReturn } from '../types';

export function adminQuizInfo(authUserID: AuthUserID,
  quizId: QuizID): QuizInfoReturn {
  return {
    quizId: 1,
    name: 'name',
    description: 'description',
    timeCreated: 123456
  };
}
