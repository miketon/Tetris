#pragma strict

class TetrisMain extends MonoBehaviour{

private var tGrid     : TetrisGrid         ;
private var tetromino : TetrisPieceControl ;

private var kPos : Vector2 = Vector2(0, 0); //current pos
private var kUp  : Vector2 = Vector2(0, 1); //delta pos
private var kDn  : Vector2 = Vector2(0,-1);
private var kRt  : Vector2 = Vector2(1, 0);
private var kLt  : Vector2 = Vector2(-1,0);

function Start () {
  tGrid     = GetComponent(TetrisGrid)         ;
  tetromino = GetComponent(TetrisPieceControl) ;
  
  kPos = Vector2(0,2);    
}

function Update () {
  if(Input.GetKeyDown(KeyCode.RightArrow)){
    tetromino.CreateNewPiece(tGrid, kRt);
  }
  else if(Input.GetKeyDown(KeyCode.LeftArrow)){
    tetromino.CreateNewPiece(tGrid, kLt);
  }
  else if(Input.GetKeyDown(KeyCode.UpArrow)){
    tetromino.CreateNewPiece(tGrid, kUp);
  }
  else if(Input.GetKeyDown(KeyCode.DownArrow)){
    tetromino.CreateNewPiece(tGrid, kDn);
  }
}

function doUpdate(){
  
  if(Input.GetKeyDown(KeyCode.U)){
    tGrid.ClearScreen();
    //tGrid.DeleteBlock();
  }
  else if(Input.GetKeyDown(KeyCode.P)){
  /*
    tetromino.CreateNewPiece(tGrid, 0,0,2);
    tetromino.CreateNewPiece(tGrid, 0,0,2);
    tetromino.CreateNewPiece(tGrid, 1,0,1);
    tetromino.CreateNewPiece(tGrid, 0,1,3);
    tetromino.CreateNewPiece(tGrid, 0,4,3);
   */
    tGrid.RenderGrid();
  }

}

}