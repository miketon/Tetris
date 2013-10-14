#pragma strict

class Main_Tetris extends MonoBehaviour{

protected var tGrid     : TetrisGrid          ;
protected var tetromino : PieceControl_Tetris ;

protected var kPos : Vector2 = Vector2(0, 0); //current pos
protected var kUp  : Vector2 = Vector2(0, 1); //delta pos
protected var kDn  : Vector2 = Vector2(0,-1);
protected var kRt  : Vector2 = Vector2(1, 0);
protected var kLt  : Vector2 = Vector2(-1,0);

function Start () {
  tGrid     = GetComponent(TetrisGrid)          ;
  tetromino = GetComponent(PieceControl_Tetris) ;
  
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
    kPos = tetromino.GetPos();
    tetromino.PieceAdd(Vector2(kPos.x,kPos.y), 3);
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