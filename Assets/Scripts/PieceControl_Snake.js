#pragma strict

class PieceControl_Snake extends PieceControl_Tetris{

  protected var tailMax : int = 5   ;
  protected var tailPos : Vector2[] = new Vector2[tailMax] ; //cursor/current position WTH?? HACK : Must define here, not in Start()???
  
  function Start () {
    super.Start();
  }
  
  function doMovePiece(){
    super.doMovePiece();
    tailPos[tailMax-1] = pPos;            //add most recent tail block position
    for(var i:int=0; i<tailMax-1; i++ ){  //shift tail array
      tailPos[i] = tailPos[i+1];
    }
    PieceRemove(tailPos[0]);              //drop oldest tail block position
  }
  
}
