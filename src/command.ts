import {counter} from "./counter";
import {fizzbuzz} from "./fizzbuzz";

export function command(count: number) {
    return counter(fizzbuzz, count);
}
