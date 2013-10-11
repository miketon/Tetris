#pragma strict

class PieceControl_Snake extends PieceControl_Tetris{

  protected var tailMax : int = 5   ;
  protected var tailPos : Vector2[] = new Vector2[tailMax] ; //cursor/current position
  
  function Start () {
    super.Start();
    //tailPos = new Vector2[tailMax];
    tailPos[tailMax-1] = Vector2(-1975, -1975);
    print("I am starting");
  }
  
  function doMovePiece(){
    super.doMovePiece();
    tailPos[tailMax-1] = pPos;
    for(var i:int=0; i<tailMax-1; i++ ){
      tailPos[i] = tailPos[i+1];
    }
    PieceRemove(tailPos[0]);
    if(tailPos[tailMax-1].x==-1975){
      print("Less than");
    }
    else{
      print("No more tail");
    }
    print("Checking tail length : ");
  }
  
}
