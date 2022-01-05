export function answer(count: number, saying?: any): string {
    if (!saying) {
        saying = function (c: number) {
            return c.toString();
        }
    }
    let whatToSay: string = "";
    if (count >= 2) whatToSay += answer(count-1, saying) + "\n";
    whatToSay += saying(count);
    return whatToSay;
}
