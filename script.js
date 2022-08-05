(function(){

  

 const player = function ( name,sign) {
     return {name,sign};
    }

  
const gameBoard = (() =>{


var arr = ['','','','','','','','',''];

const setBoard = (position,player) =>{
arr[position] = player.sign; 

if(draw()){
  display(player1,player2);
}
else if(win(player)){
display(player,null);
}
}


const draw = () =>{
  for(let i =0; i<9; i++){
    if(arr[i] === ''){
      return false;
    }
  }
  return true;
}



const resetBoard = () =>{
  for(let i =0; i<9; i++){
    arr[i] = '';
  }
}


const win = (player) =>{
  const winArray = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6] ]
 return winArray.some(combo=>{
  return combo.every(index=>{
    return arr[index] === player.sign;
  });
 })
}



return {setBoard, resetBoard};

})()

function display(obj1,obj2){
  let winning_message = document.querySelector('.winning-message');
  winning_message.style.display = 'flex'
  if(obj2 === null){
  document.querySelector('.message').textContent =   `${obj1.name} wins!!`;
  
  }else{

    document.querySelector('.message').textContent = 'Its a draw try again!'
    
  }
}


const player1 = player('player 1','x');
const player2 = player('player 2','o');

function toggleBoard(){
 
  if(x_class){
    board.classList.remove('x');
    board.classList.add('circle');
     x_class = false;
  }else{
    board.classList.remove('circle');
    board.classList.add('x');
    x_class = true;
  }
}


var x_class = true;
var board =document.querySelector('.board')
board.addEventListener('click',toggleBoard);

var cell_x = false;
var cells = document.querySelectorAll('.cell');
cells.forEach(cell=>cell.addEventListener('click',function(e){
  let position = e.target.id;
  if(cell_x){
    gameBoard.setBoard(position,player1);
  }else{
    gameBoard.setBoard(position,player2);
  }
  


  if(cell_x){
e.target.classList.remove('x');
e.target.classList.add('circle');
cell_x = false;
}else{
  e.target.classList.remove('circle');
  e.target.classList.add('x');
  cell_x = true;
}

},{once:true}));


document.querySelector('.restart').addEventListener('click',function(){
  location.reload();
});






















})()











