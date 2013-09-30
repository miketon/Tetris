#pragma strict


private var tGrid     : TetrisGrid         ;
private var tetromino : TetrisPieceControl ;

function Start () {

  tGrid     = GetComponent(TetrisGrid)         ;
  tetromino = GetComponent(TetrisPieceControl) ;
  
  tetromino.CreateNewPiece(tGrid, 2, 2, 1);
}

function Update () {

  if(Input.GetKeyDown(KeyCode.LeftArrow)){
    print("Move Left");
    tetromino.CreateNewPiece(tGrid, 3, 2, 1);

    /*
    if(tetromino.PieceCanMove(tGrid, -1, 0)){
      tetromino.MovePiece(-1, 0);
    }
    */
  }
  else if(Input.GetKeyDown(KeyCode.U)){
    tGrid.ClearBlocks();
  }
  else if(Input.GetKeyDown(KeyCode.P)){
    tGrid.SetBlockColor(0,0,2);
    tGrid.SetBlockColor(1,0,1);
    tGrid.SetBlockColor(0,1,3);
    tGrid.SetBlockColor(0,4,3);
    tGrid.RenderGrid();
  }
}
