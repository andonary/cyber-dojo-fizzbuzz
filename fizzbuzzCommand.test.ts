import { answer } from './fizzbuzzCommand';

describe('answer', () => {
    it.each(
        [
            {
                count: 15,
                expectedSay: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
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
