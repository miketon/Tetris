#pragma strict


private var tGrid     : TetrisGrid         ;
private var tetromino : TetrisPieceControl ;
private var xPos :int = 0;
private var yPos :int = 0;

function Start () {

  tGrid     = GetComponent(TetrisGrid)         ;
  tetromino = GetComponent(TetrisPieceControl) ;
  
  xPos = 2;
  yPos = 2;
  tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
}

function Update () {

  if(Input.GetKeyDown(KeyCode.LeftArrow)){
    print("Move Left");
    xPos -= 1;
    tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
    /*
    if(tetromino.PieceCanMove(tGrid, -1, 0)){
      tetromino.MovePiece(-1, 0);
    }
    */
    tGrid.RenderGrid();
  }
  else if(Input.GetKeyDown(KeyCode.U)){
    tGrid.ClearBlocks();
  }
  else if(Input.GetKeyDown(KeyCode.P)){
    //tetromino.CreateNewPiece(tGrid, 0,0,2);
    tGrid.SetBlockColor(0,0,2);
    tGrid.SetBlockColor(1,0,1);
    tGrid.SetBlockColor(0,1,3);
    tGrid.SetBlockColor(0,4,3);
    tGrid.RenderGrid();
  }
}
