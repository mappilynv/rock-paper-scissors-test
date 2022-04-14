import { jest } from '@jest/globals';
import { hands } from '../rock-paper-scissors-shoot';
import { player1 } from '../rock-paper-scissors-shoot';
import { player2 } from '../rock-paper-scissors-shoot'; 
import { getHand } from '../rock-paper-scissors-shoot';
import { playRound } from '../rock-paper-scissors-shoot';
import { playGame } from '../rock-paper-scissors-shoot';
import { addMath } from '../rock-paper-scissors-shoot';

//toBe()
describe("Gethand function", () => {
    test('it should give a random number of 0,1,2', () => {
        const Gethand = getHand();
        expect(Gethand).toBe(0 || 1 || 2);
    });
});

//toHaveLength()
// describe("Hands array", () => {
//     test('it should give the correct number of items in hands array', () => {
//         expect(hands).toHaveLength(3);
//     });
// });

//toBeTruthy()
// describe("Player1 object", () => {
//     test('the return value of Player1 should not be falsy values', () => {
//         expect(player1).toBeTruthy();
//     });
// });

//toHaveBeenCalled()
// test('the getHand function would have been called', () => {
//     const hand = jest.fn();
//     getHand(hand, 'paper')
//     expect(hand).not.toHaveBeenCalled();
// });


//toHaveReturned()
// test('addMatch returns', () => {
//     const Emily = jest.fn(() => true);
//     addMath(Emily);
//     expect(Emily).toHaveReturned();
// });


