#pragma strict

class Main_Snake extends Main_Tetris{

  function Start () {
    super.Start()                                 ;
    tetromino = GetComponent(PieceControl_Snake)  ;  
  }
  
}