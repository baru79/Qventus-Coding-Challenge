import { TpasswordReqs } from '../types';
import {
    hasConsecutiveLetters,
    hasNumber,
    hasSpecialChar,
    hasUppercaseLetter,
    trimStr,
} from '../utils';

function usePassword() {
    const passwordReqs: TpasswordReqs = [
        {
            text: 'Has a number 0-9',
            validate: (password: string) => {
                if (password === '') return false;
                const passwordTrimmed = trimStr(password);
                return hasNumber(passwordTrimmed);
            },
        },
        {
            text: 'Has a special char !@#$%^&*',
            validate: (password: string) => {
                if (password === '') return false;
                const passwordTrimmed = trimStr(password);
                return hasSpecialChar(passwordTrimmed);
            },
        },
        {
            text: 'Has uppercase letter',
            validate: (password: string) => {
                if (password === '') return false;
                const passwordTrimmed = trimStr(password);
                return hasUppercaseLetter(passwordTrimmed);
            },
        },
        {
            text: 'Has NO consecutive letters',
            validate: (password: string) => {
                if (password === '') return false;
                const passwordTrimmed = trimStr(password);
                return !hasConsecutiveLetters(passwordTrimmed);
            },
        },
    ];
    return passwordReqs;
}
export default usePassword;
