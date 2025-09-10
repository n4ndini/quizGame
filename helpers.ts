import { isAlpha, isAlphanumeric, isNumeric } from "validator";
import { Data } from "./src/data";
import { Errors } from "./src/types"

export type ValidateNameReturn = boolean | Errors
export type ValidatePasswordReturn = boolean | Errors
export type ValidateUsernameReturn = boolean | Errors

export function validatetName(name: string): ValidateNameReturn {
    // check length less than 2
    if (name.length < 2 ) {
        return {error: "Length must be more than 2 characters"}
    }
  
    // check length more than 25
    if (name.length > 25) {
        return {error: "Length must be less than 25 characters"};
    }
  
    // check only letters, spaces, hyphens, apostrophe
    if (!isAlpha(name)) {
        return {error: "Name contains invalid characters"};
    }

    return true;
}

export function validatePassword(password: string): ValidatePasswordReturn {
    // less than 8 characters
    if (password.length < 8) {
        return {error: "Password needs to contain at least 8 characters"};
    }

    if (!hasLetter(password)) {
        return {error: "Passowrd must contain at least one letter"};
    }

    if (!hasNumber(password)) {
        return {error: "Password must contain at least one letter"};
    }

    return true;
}


export function hasLetter(password: string): boolean {
    let hasLetter = false;
  
    for (const character of password) {
      if (character >= 'A' && character <= 'Z') {
        hasLetter = true;
      }
      if (character >= 'a' && character <= 'z') {
        hasLetter = true;
      }
    }
  
    return hasLetter;
  }

  export function hasNumber(password: string): boolean {
    let hasNumber = false;
  
    for (const character of password) {
      if (character >= '0' && character <= '9') {
        hasNumber = true;
      }
    }
  
    return hasNumber;
  }  

export function validateUsername(username: string, data: Data): ValidateUsernameReturn {
    // contains invalid characters
    if (!isAlphanumeric(username)) {
        return {error: "Username contains invalid characters"};
    }

    // username is used by another user
    const userName = data.users.find(user => user.username == username);
    if (userName) {
        return {error: "This username is already in use"};
    }

    return true;
}