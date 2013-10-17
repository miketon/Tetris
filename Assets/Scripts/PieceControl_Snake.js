#pragma strict

class PieceControl_Snake extends PieceControl_Tetris{

  protected var tailMax : int = 5   ;
  protected var tailPos : Vector2[] = new Vector2[tailMax+1] ; //cursor/current position WTH?? HACK : Must define here, not in Start()???
  
  function Start () {
    super.Start();
    //tailMax=tGrid.num_xblocks;
  }
  
  function doMovePiece(){
    super.doMovePiece();
    tailPos[tailMax] = pPos;            //add most recent tail block position
    for(var i:int=0; i<tailMax; i++ ){  //shift tail array
      tailPos[i] = tailPos[i+1];
    }
    PieceRemove(tailPos[0]);            //drop oldest tail block position
  }
  
}
