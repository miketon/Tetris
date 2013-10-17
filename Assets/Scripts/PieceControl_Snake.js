#pragma strict

class PieceControl_Snake extends PieceControl_Tetris{

  protected var tailMax : int = 5   ;
  private   var tailInd : int = 4   ; //HACK: max index = tailMax-1 ??? zero vs. one basis
  protected var tailPos : Vector2[] ; //cursor/current position
  
  function Start () {
    super.Start()                  ;
    tailMax = tGrid.num_xblocks    ;
    tailPos = new Vector2[tailMax] ;
    tailInd = tailMax-1            ; //HACK: max index = tailMax-1 ??? zero vs. one basis
  }
  
  function doMovePiece(){
    super.doMovePiece();
    for(var i:int=0; i<tailInd; i++ ){  //shift tail array
      tailPos[i] = tailPos[i+1];
    }
    tailPos[tailInd] = pPos ;           //add most recent tail block position
    PieceRemove(tailPos[0]) ;           //drop oldest tail block position
  }
  
}
