import {counter} from "../src/counter";

describe('Counter', () => {
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
            count: 4,
            expectedResult: "a\na\na\na",
            whatToSayAt: (nb: number): string => "a"
        }
    ])('it should add lines according to count $count : $expectedResult', (cases) => {
        // Arrange
        const {count,expectedResult, whatToSayAt} = cases;

        // Act
        const result: string = counter(whatToSayAt, count);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});
