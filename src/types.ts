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
    user: {
        authUserId: number;
        name: string
        username: string
    }
}

// Quiz
export interface QuizID {
    quizId: number
}

export interface Quiz {
    quizId: number;
    name: string;
    description: string
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
export type UserDetailsReturn = User | Error
export type UserDetailsUpdateReturn = object | Error
export type UserPasswordUpdateReturn = object | Error

// Quiz
export type QuizListReturn = Quizzes | Error
export type QuizCreateReturn = QuizID | Error
export type QuizRemoveReturn = object | Error
export type QuizInfoReturn = QuizInfo | Error
export type QuizNameUpdateReturn = object | Error
export type QuizDescriptionUpdateReturn = object | Error
