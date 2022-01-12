import {whatToSayAt} from "./whatToSayAt";
import {fizzbuzz} from "./fizzbuzz";

export function fizzbuzzCommand(count: number) {
    return whatToSayAt(count, fizzbuzz);
}
