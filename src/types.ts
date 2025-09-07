// Types
// Auth

// Quiz

// Player


// Interfaces
// Auth
export interface AuthUserID {
    authUserID: Number
}

export interface User {
    user: {
        authUserId: number;
        name: String
        username: String
    }
}

// Quiz
export interface QuizID {
    quizId: Number
}

export interface Quiz  {
    quizId: number;
    name: String;
    description: String
}

export interface Quizzes {
    quizzes: Quiz
}

export interface QuizInfo {
    quizId: number;
    name: String;
    description: String;
    timeCreated: Number
}

// Player



// Function Returns
// Auth
export type UserRegisterReturn = AuthUserID | Error
export type UserLoginReturn = AuthUserID | Error
export type UserDetailsReturn = User | Error
export type UserDetailsUpdateReturn = {} | Error
export type UserPasswordUpdateReturn = {} | Error

// Quiz
export type QuizListReturn = Quizzes | Error
export type QuizCreateReturn = QuizID | Error
export type QuizRemoveReturn = {} | Error
export type QuizInfoReturn = QuizInfo | Error
export type QuizNameUpdateReturn = {} | Error
export type QuizDescriptionUpdateReturn = {} | Error