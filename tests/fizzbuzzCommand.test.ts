import {fizzbuzzCommand} from "../src/fizzbuzzCommand";

describe('FizzBuzz', () => {
    test('it should say fizz buzz game', async () => {
        // Arrange
        const count: number = 15;
        const expectedResult: string = "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz";

        // Act
        const result: string = fizzbuzzCommand(count);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});
