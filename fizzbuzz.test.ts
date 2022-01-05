import { answer } from './fizzbuzz';

describe('answer', () => {
    it.each(
        [
            {
                count: 1,
                expectedSay: "1"
            },
            {
                count: 2,
                expectedSay: "2"
            },
            {
                count: 3,
                expectedSay: "Fizz"
            },
            {
                count: 6,
                expectedSay: "Fizz"
            },
            {
                count: 5,
                expectedSay: "Buzz"
            },
            {
                count: 10,
                expectedSay: "Buzz"
            },
            {
                count: 15,
                expectedSay: "FizzBuzz"
            }
        ]
    )('should say the correct answer', (cases) => {
        // Given
        const { count, expectedSay } = cases;

        // When
        const said: string = answer(count);

        // Then
        expect(said).toEqual(expectedSay);
    });
});
