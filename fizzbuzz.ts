export function answer(count: number): string {
    let whatToSay: string = "";
    if (count % 3 === 0) whatToSay += "Fizz";
    if (count % 5 === 0) whatToSay += "Buzz";
    if (!whatToSay) whatToSay += count.toString();
    return whatToSay;
}
