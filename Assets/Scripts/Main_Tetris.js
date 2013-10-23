#pragma strict

class Main_Tetris extends MonoBehaviour{

protected var tGrid     : Grid_Tetris         ;
protected var tGrid_y   : int = 1             ;
protected var tetromino : PieceControl_Tetris ;

protected var kPos : Vector2 = Vector2(0, 0); //current pos
protected var kUp  : Vector2 = Vector2(0, 1); //delta pos
protected var kDn  : Vector2 = Vector2(0,-1);
protected var kRt  : Vector2 = Vector2(1, 0);
protected var kLt  : Vector2 = Vector2(-1,0);

function Start () {
  tGrid     = GetComponent(Grid_Tetris)         ;
  tGrid_y   = tGrid.num_yblocks                 ;
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
    kPos = tetromino.GetPos() ;
    for(var i:int=0; i<tGrid_y; i++){
      tGrid.doDropRow(i) ;
    }
  }
  else if(Input.GetKeyDown(KeyCode.F)){
    kPos = tetromino.GetPos() ;
    tGrid.RowFill(kPos.y,0)   ;
  }
  else if(Input.GetKeyDown(KeyCode.C)){
    kPos = tetromino.GetPos() ;
    tGrid.RowClear(kPos.y);
  /*
    var rowComplete:boolean = tGrid.isRowComplete(kPos.y);
    if(rowComplete){
      tGrid.RowFill(kPos.y,1);
    }
    tGrid.RowFill(tGrid_y-1,0);
  */
  }
}

}