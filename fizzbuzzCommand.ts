import { answer as counter } from './counter';
import { answer as fizzbuzz } from './fizzbuzz';

export function answer(count: number): string {
    return counter(count, fizzbuzz);
}
