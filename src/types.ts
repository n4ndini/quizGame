// Types
// Auth

// Quiz

// Player

// Interfaces
// Auth
export interface AuthUserID {
    authUserID: number
}

export interface User {
    authUserId: number
    name: string
    username: string
    quizzes: Quiz[]
}

export interface UDetails {
    user: {
        authUserId: number;
        name: string;
        username: string;
        quizzes: Quiz[]
      };
    
}

// Quiz
export interface QuizID {
    quizId: number
}

export interface QDetails {
    quiz: {
        quizId: number,
        name: string,
        description: string
    }
}

export interface Quiz {
    quiz: {
        quizId: number;
        name: string;
        description: string
    }
}

export interface Quizzes {
    quizzes: Quiz
}

export interface QuizInfo {
    quizId: number;
    name: string;
    description: string;
    timeCreated: number
}

// Player

// Function Returns
// Auth
export type UserRegisterReturn = AuthUserID | Error
export type UserLoginReturn = AuthUserID | Error
export type UserDetailsReturn = UDetails | Error
export type UserDetailsUpdateReturn = object | Error
export type UserPasswordUpdateReturn = object | Error

// Quiz
export type QuizListReturn = Quizzes | Error
export type QuizCreateReturn = QuizID | Error
export type QuizRemoveReturn = object | Error
export type QuizInfoReturn = QuizInfo | Error
export type QuizNameUpdateReturn = object | Error
export type QuizDescriptionUpdateReturn = object | Error
