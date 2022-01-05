import { answer } from './counter';

describe('answer', () => {
    it.each(
        [
            {
                count: 1,
                expectedSay: "1"
            },
            {
                count: 2,
                expectedSay: "1\n2"
            },
            {
                count: 3,
                expectedSay: "1\n2\n3"
            },
            {
                count: 5,
                expectedSay: "1\n2\n3\n4\n5"
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
