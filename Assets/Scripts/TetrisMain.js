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
    tetromino.MovePiece(kRt);
  }
  else if(Input.GetKeyDown(KeyCode.LeftArrow)){
    tetromino.MovePiece(kLt);
  }
  else if(Input.GetKeyDown(KeyCode.UpArrow)){
    tetromino.MovePiece(kUp);
  }
  else if(Input.GetKeyDown(KeyCode.DownArrow)){
    tetromino.MovePiece(kDn);
  }
  else if(Input.GetKeyDown(KeyCode.Space)){
    tetromino.PieceAdd(Vector2(1,1), 2);
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