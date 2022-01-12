export function whatToSayAt(count: number, injection: any) {
    if (!injection) injection = (c: number) => c.toString();
    let result = injection(count);
    if (count > 1) result = whatToSayAt(count - 1, injection) + "\n" + injection(count);
    return result;
}
