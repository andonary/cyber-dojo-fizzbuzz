function getWhatToSayAt(count: number) {
    return count.toString();
}

export function counter(whatToSayAt = getWhatToSayAt, count: number) {
    let answer = "";
    if (count > 1) answer += counter(whatToSayAt, count-1) + "\n" + whatToSayAt(count);
    else answer = whatToSayAt(count);
    return answer;
}
