#pragma strict


var tGrid     : TetrisGrid         ;
var tetromino : TetrisPieceControl ;

function Start () {

  //tGrid     = new TetrisGrid(); //GetComponent(TetrisGrid)         ;
  tGrid     = gameObject.GetComponent(TetrisGrid)         ;
  tetromino = gameObject.GetComponent(TetrisPieceControl) ;
  
  tetromino.CreateNewPiece(tGrid, 2, 2, 1);
}

function Update () {

  if(Input.GetKeyDown(KeyCode.LeftArrow)){
    print("Move Left");
    /*
    if(tetromino.PieceCanMove(tGrid, -1, 0)){
      tetromino.MovePiece(-1, 0);
    }
    */
  }

}
