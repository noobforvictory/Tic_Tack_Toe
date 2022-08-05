(function(){
 const player = function ( sign) {
     return {sign};
    }

  
const gameBoard = (() =>{
  var arr = [['','',''],
             ['','',''],
             ['','',''] ];

const setBoard = (x,y,player) =>{
arr[x][y] = player.sign; 
if(win(player)){
console.log('wins');
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
  let n =0;
  for(let i=0; i<3; i++){
    for(let j =0; j<3; j++){
      if(arr[i][j] === player.sign){
        n++;
      }
    }
    if(n === 3){
      return true
    }else{
      n =0;
    }
  }
 

  n=0;
  for(let i=0; i<3; i++){
    for(let j =0; j<3; j++){
      if(arr[j][i] === player.sign){
        n++;
      }
    }
    if(n === 3){
      return true
    }else{
      n =0;
    }
  }
 

  n = 0;
  for(let i =j =0; i<3 && j<3; i++, j++){
    if(arr[i][j] === player.sign){
      n++;
    }
  }
  if(n === 3){
    return true;
  }

 
  n =0;

  for(let i =j =0; i<3 && j<3; i++, j++){
    if(arr[i][2-j] === player.sign){
      n++;
    }
  }
  if(n === 3){
    return true;
  }
  
  n =0;

return false;
}



return {setBoard, resetBoard, draw,win};

})()



const player1 = player('x');
const player2 = player('o');
gameBoard.setBoard(0,0,player1);
gameBoard.setBoard(1,1,player1);
gameBoard.setBoard(2,2,player1);





























})()
