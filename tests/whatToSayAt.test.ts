import {whatToSayAt} from "../src/whatToSayAt";

describe('WhatToSay', () => {
    test.each([
        {
            count: 1,
            expectedResult: "1"
        },
        {
            count: 2,
            expectedResult: "1\n2"
        },
        {
            count: 3,
            expectedResult: "1\n2\n3"
        },
        {
            count: 3,
            expectedResult: "a\na\na",
            injection: (c: number) => "a"
        }
    ])('it should $count $expectedResult', (cases) => {
        // Arrange
        const {count, expectedResult, injection} = cases;

        // Act
        const result: string = whatToSayAt(count, injection);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});
