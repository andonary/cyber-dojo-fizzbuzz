import {fizzbuzz} from "../src/fizzbuzz";

describe('FizzBuzz game', () => {
    test.each([
        {
            count: 1,
            expectedResult: "1"
        },
        {
            count: 2,
            expectedResult: "2"
        },
        {
            count: 3,
            expectedResult: "Fizz"
        },
        {
            count: 6,
            expectedResult: "Fizz"
        },
        {
            count: 5,
            expectedResult: "Buzz"
        },
        {
            count: 10,
            expectedResult: "Buzz"
        },
        {
            count: 15,
            expectedResult: "FizzBuzz"
        }
    ])('it should say at $count : $expectedResult', (cases) => {
        // Arrange
        const {count, expectedResult} = cases;

        // Act
        const result: string = fizzbuzz(count);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});
