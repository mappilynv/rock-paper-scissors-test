export const hands = ['rock', 'paper', 'scissors'];

//function that returns a hand from the array
export function getHand(){
    return parseInt(Math.random()*10)%3; 
}
console.log(getHand())

//two objects with two players
export const player1 = {
    name: 'mac',
    GetHandMethod: getHand
};
export const player2 = {
    name: 'fin',
    GetHandMethod: getHand
};

//playRound function
export function playRound(player1,player2){
    let hand1 = hands[player1.GetHandMethod()]
    let hand2 = hands[player2.GetHandMethod()]
 if ((hand1 === 'rock' && hand2 ==='scissors')||(hand1 === 'paper' && hand2 === 'rock')||(hand1 === 'scissors' && hand2 === 'paper')){
    console.log(hand1+' beats '+hand2+ ' ...player1 wins')
    return player1.name;
 } else if 
    ((hand2 === 'rock' && hand1 ==='scissors')||(hand2 === 'paper' && hand1 === 'rock')||(hand2 === 'scissors' && hand1 === 'paper')){
    console.log(hand2+' beats '+hand1+ ' ...player2 wins!')
    return player2.name;
 } else
   {console.log('its a tie')
   return null;
} 

}
console.log(playRound(player1,player2));

//playGame function
export function playGame(player1, player2, playUntil){
    
    let player1Wins = 0;
    let player2Wins = 0;
    
    while(player1Wins < playUntil && player2Wins < playUntil){
        let roundWinner = playRound(player1, player2);
        if (!roundWinner){

        } else if (roundWinner === player1.name){
            player1Wins++;
        } else {
            player2Wins++;
        }
    }

    if (player1Wins === playUntil) {
        return player1;
    } else {
        return player2;
    }
}
console.log(playGame(player1, player2, 5));

export function addMath (Emily) {
    return Emily();
}