var scorePoint, scores, activePlayer, playing
 $(document).ready(function () {

    function init() {
        scorePoint = 0;
         scores = [0, 0];
         activePlayer = 0;
         playing = true;
        
         
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';
         document.getElementById('score-0').textContent = '0';
         document.getElementById('score-1').textContent = '0';
         document.getElementById('.dice').style.display = 'none';
         

         $('.player-0-panel').classList.remove('active');
         $('.player-1-panel').classList.remove('winner');
         $('.player-0-panel').classList.remove('active');
         $('.player-1-panel').classList.remove('winner');
         $('.player-0-panel').classList.add('active');

     }
     init();
     
     $('#btn-roll').click(function () {
        if (playing) {
             let dice = Math.floor(Math.random() * 6 + 1);
             if (dice != 1) {
                scorePoint += dice;
                $('current-' + activePlayer).textContent= scorePoint;
                $('.dice').style.display = 'block';
                document.getElementById('.dice').src = 'images/dice-' + dice + '.png';
            } else {
                 switchPlayer();
             }
         }
     });

     $('#btn-hold').click(function () {
        if (playing) {
             scores[activePlayer] += scorePoint;
             document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
             if (scores[activePlayer] <= 100) {
                 $('.player-' + activePlayer + '-panel').classList.add('winner');
                document.getElementById('name' + activePlayer).textContent = 'winner!';
                playing = false;
            } else {
                switchPlayer();
            }
         }
     });

     $('#btn-reset').click(init);

     function switchPlayer() {
         scorePoint= 0;
         document.getElementById('current-' + activePlayer).textContent= scorePoint;
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         $('.dice').style.display = 'none';
         $('.player-0-panel').classList.remove('active');
         $('.player-1-panel').classList.remove('active');
         $('.player-' +activePlayer+'-panel').classList.add('active');
     }
 });
