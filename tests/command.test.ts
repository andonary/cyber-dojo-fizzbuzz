import {command} from "../src/command";

describe('Command', () => {
    test('it should say the fizzbuzz', async () => {
        // Arrange
        const count = 5;
        const expectedAnswer = "1\n2\nFizz\n4\nBuzz";

        // Act
        const result: string = command(count);

        // Assert
        expect(result).toEqual(expectedAnswer);
    });
});
