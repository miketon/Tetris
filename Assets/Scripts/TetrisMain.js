#pragma strict

class TetrisMain extends MonoBehaviour{

private var tGrid     : TetrisGrid         ;
private var tetromino : TetrisPieceControl ;
private var xPos :int = 0;
private var yPos :int = 0;

private var xMax :int=1;
private var yMax :int=1;

function Start () {

  tGrid     = GetComponent(TetrisGrid)         ;
  tetromino = GetComponent(TetrisPieceControl) ;
  
  xMax = tGrid.num_xblocks;
  yMax = tGrid.num_yblocks;
    
  xPos = 0;
  yPos = 2;
  //tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
}

function MoveBlock(vec2_IN:Vector2){
  tetromino.SetPos(vec2_IN);
}

function Update () {
  if(Input.GetKeyDown(KeyCode.RightArrow)){
    tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
  }
}

function doUpdate(){
  
  if(Input.GetKeyDown(KeyCode.RightArrow)){
    print("Move Right");
    xPos += 1;
    xPos = (xPos)%(xMax);
    tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
    /*
    if(tetromino.PieceCanMove(tGrid, xPos, 0)){
      tetromino.MovePiece(xPos-1, 0);
    }
    */
    tGrid.RenderGrid();
  }
  else if(Input.GetKeyDown(KeyCode.LeftArrow)){
    print("Move Left");
    xPos -= 1;
    if(xPos<0){
      xPos = 0;
    }
    xPos = (xPos)%(xMax);
    tetromino.CreateNewPiece(tGrid, xPos, yPos, 1);
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

}