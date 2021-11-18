import { calcAreaSquare, calcAreaTriangle, calcAreaRectangle } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Factorial', () => {
    expect(calcAreaRectangle(5, 10)).toBe(50);
})