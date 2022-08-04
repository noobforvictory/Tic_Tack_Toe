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
console.log('wins')
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
  let x =1;
for(let i =0; i<3; i++){
  for(j=0; j<3; j++){
   if(arr[i][j] === player.sign){
    console.log(x++)
   }
   if(x ===3)return true;
   x =1;
  }
}
 x = 1;
for(let i =0; i<3; i++){
  for(j=0; j<3; j++){
   if(arr[j][i] === player.sign){
    x++;
   }
   if(x ===3)return true;
   x =1;
  }
}

x=1;
for(let i=j=0; i<3 && j<3;j++, i++){
 if(arr[i][j] === player.sign){
  x++;
 }
   if(x === 3){
    return true;
   }
}

x=1;
for(let i=j=0; i<3 && j<3;j++, i++){
 if(arr[i][2-j] === player.sign){
  x++;
 }
   if(x === 3){
    return true;
   }
}
x=1;
return false;
}



return {setBoard, resetBoard, draw,win};

})()



const player1 = player('x');
const player2 = player('o');
gameBoard.setBoard(0,0,player1);
gameBoard.setBoard(0,1,player1);
gameBoard.setBoard(0,2,player1);





























})()
