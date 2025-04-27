import { SPECIAL_CHARS } from './constants';

export const trimStr = (str: string) => str.trim();

export const hasNumber = (str: string) => str.split('').some((char) => !isNaN(Number(char)));

export const hasSpecialChar = (str: string) =>
    str.split('').some((char) => SPECIAL_CHARS.includes(char));

export const hasUppercaseLetter = (str: string) => !!str.match(/[A-Z]/g);

export const hasConsecutiveLetters = (str: string) =>
    [...str].some((char, i, arr) => char === arr[i + 1]);
