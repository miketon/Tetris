#pragma strict


private var tGrid     : TetrisGrid         ;
private var tetromino : TetrisPieceControl ;
private var xPos :int = 0;
private var yPos :int = 0;

function Start () {

  tGrid     = GetComponent(TetrisGrid)         ;
  tetromino = GetComponent(TetrisPieceControl) ;
  
  xPos = 0;
  yPos = 2;
  tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
}

function Update () {

  if(Input.GetKeyDown(KeyCode.RightArrow)){
    print("Move Right");
    xPos += 1;
    xPos = xPos%10;
    tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
    /*
    if(tetromino.PieceCanMove(tGrid, xPos, 0)){
      tetromino.MovePiece(xPos-1, 0);
    }
    */
    tGrid.RenderGrid();
  }
  else if(Input.GetKeyDown(KeyCode.U)){
    tGrid.ClearScreen();
    //tGrid.DeleteBlock();
  }
  else if(Input.GetKeyDown(KeyCode.P)){
    tetromino.CreateNewPiece(tGrid, 0,0,2);
    tetromino.CreateNewPiece(tGrid, 0,0,2);
    tetromino.CreateNewPiece(tGrid, 1,0,1);
    tetromino.CreateNewPiece(tGrid, 0,1,3);
    tetromino.CreateNewPiece(tGrid, 0,4,3);
    tGrid.RenderGrid();
  }

}
