 $(document).ready(function () {
     $('#btn-roll').click(function () {
//         if (isPlaying) {
//             let dice = Math.floor(Math.random() * 6 + 1);
//             console.log(dice);
//             if (dice != 1) {
//                 scoreBoard += dice;
//                 $('current-' + activePlayer).innerHTML = scoreBoard;
//                 $('.dice').style.display = 'block';
//                 $('.dice').src = 'dice-' + dice + '.png';
//             } else {
//                 switchPlayer();
//             }
//         }
//     });

//     $('#btn-hold').click(function () {
//         if (isPlaying) {
//             scores[activePlayer] += scoreBoard;
//             document.getElementById('score-' + activePlayer).innerHTML = score[activePlayer];
//             if (scores[activePlayer] >= 100) {
//                 $('.player-' + activePlayer + '-panel').classList.add('winner');
//                 document.getElementById('name' + activePlayer).innerHTML = 'winner!';
//                 isPlaying = false;
//             } else {
//                 switchPlayer();
//             }
//         }
//     });

//     $('#btn-reset').click(init);

//     function switchPlayer() {
//         scoreBoard = 0;
//         document.getElementById('current-' + activePlayer).innerHTML = scoreBoard;
//         activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
//         $('.dice').style.display = 'none';
//         $('.player-0-panel').classList.remove('active');
//         $('.player-1-panel').classList.remove('active');
//         $('.player-' + activePlayer + '-panel').classList.add('active');
//     }


//     var scoreBoard, scores, activePlayer, isPlaying
//     function init() {
//         scoreBoard = 0;
//         scores = [0, 0];
//         activePlayer = 0;
//         isPlaying = true;

//         document.getElementById('current-0').innerHTML = '0';
//         document.getElementById('current-1').innerHTML = '0';
//         document.getElementById('score-0').innerHTML = '0';
//         document.getElementById('score-1').innerHTML = '0';
//         $('.dice').style.display = 'none';

//         $('.player-0-panel').classList.remove('active');
//         $('.player-0-panel').classList.remove('winner');
//         $('.player-1-panel').classList.remove('active');
//         $('.player-1-panel').classList.remove('winner');
//         $('.player-0-panel').classList.add('active');

//     }
//     init();

  
// });
