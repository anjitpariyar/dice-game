var score , activePalyer,roundScore,dice,diceDom,count,six,winingnumber,trun=1;

start();
//creacting change active function




//document.querySelector('#current'+ activePalyer).textContent=dice;
// document.querySelector('#current-1').innerHTML='<strong>' + dice +'</strong>'
//var x= document.querySelector('#score-0').textContent;

//document.querySelector('.diceimg').style.display="none";
//document.querySelector('.number').style.color='yellow';
    document.querySelector('#roll').addEventListener('click',function(){
    	if(count){
        number=document.querySelector('.form-control').value;
  
// random number
     dice = Math.floor(Math.random() * 6) + 1;
// display
     diceDom= document.querySelector('.diceimg');
     diceDom.style.display = 'block';
     diceDom.src= 'dice-' + dice +'.jpg';
     if(dice !==1){
                      
                      //trie to make round score and crrent score zero if contineously two zero comes
                      if(dice===6){
                        six++;
                      }
                      else
                      {
                        six=0;
                      }
                      if(six===2){ 

                        roundScore=0;
                        score[activePalyer]=0;
                        document.querySelector('#score'+activePalyer).textContent= score[activePalyer];
                        active();
                      }
                      else{
                  roundScore+= dice;
                  document.getElementById('current'+ activePalyer).textContent=roundScore;
                  }

                   }
                else
                active();
        } 

// update
	
}
);

//tryto  use hold button
document.querySelector('#hold').addEventListener('click',function(){
	if(count){
//added to the global score
six=0;
score[activePalyer]+=roundScore;
document.querySelector('#score'+activePalyer).textContent= score[activePalyer];
var number=document.querySelector('.win').value;

if(number){
  winingnumber=number;
}
else
winingnumber=100;
//who wo the game 
 if (score[activePalyer] >= winingnumber){
 	document.querySelector('.diceimg').style.display='none';

 	document.querySelector('#name' + activePalyer).textContent='Winner';
 	document.querySelector('#name'+ activePalyer).classList.add('winner');
 	count = false;
  startConfetti();
	
	
 }
 else
active();
}
});

document.querySelector('#newgame').addEventListener('click',start );



document.querySelector('.save').addEventListener('click',function(){
  if(trun===0){
var name1=document.querySelector('#playerone').value;
var name2=document.querySelector('#playertwo').value;
if(name1){
  document.querySelector('#name0').textContent=name1;
}
else
document.querySelector('#name0').textContent='player 1';
if(name2)
document.querySelector('#name1').textContent=name2;
else
document.querySelector('#name1').textContent='player 2';
trun=1;
}







});


















function active(){
  six=0;
activePalyer === 0 ? activePalyer = 1 : activePalyer = 0;
roundScore =0;
//document.querySelector('.diceimg').style.display='none';

document.querySelector('#current0').textContent='0';
document.querySelector('#current1').textContent='0';
document.querySelector('.haha').classList.toggle('active');
document.querySelector('.lol').classList.toggle('active');

//document.querySelector('.haha').classList.remove('active');
//document.querySelector('.lol').classList.add('active');




};
function start(){
  
count = true;
score = [0,0];
activePalyer=0;
roundScore=0;
trun=0;
stopConfetti();
document.querySelector('.diceimg').style.display='none';

document.getElementById('score0').textContent='0';
document.getElementById('score1').textContent='0';
document.getElementById('current0').textContent='0';
document.getElementById('current1').textContent='0';
//document.querySelector('#name0').textContent='player 1';
//document.querySelector('#name1').textContent='player 2';

document.querySelector('.haha').classList.remove('active');
document.querySelector('.lol').classList.remove('active');
document.querySelector('.haha').classList.add('active');
document.querySelector('#name0').classList.remove('winner');

document.querySelector('#name1').classList.remove('winner');
}






