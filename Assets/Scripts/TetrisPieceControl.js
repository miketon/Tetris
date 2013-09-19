#pragma strict

class TetrisPieceControl extends MonoBehaviour{

  function Start () {
  }

  function Update () {
  }

  function CreateNewPiece(tGrid:TetrisGrid, x:int, y:int, type:int){  //spawn a new piece on the tGrid
    if(tGrid.GetBlockColor(x,y)){
      tGrid.SetBlockColor(x,y,type);
    }
    print("Creating new piece");
  }
  function CanCreateNewPiece(tGrid:TetrisGrid, x:int, y:int):boolean{  //see if a piece can be created
  }
  function MovePiece(dx:int, dy:int){  //move the current piece in some direction
  }
  function PieceCanMove(tGrid:TetrisGrid, dx:int, dy:int):boolean{  //see if the piece can move in some direction
  }
  function FlipPiece(tGrid:TetrisGrid){  //flip the current piece
  }
  function PieceCanFlip(tGrid:TetrisGrid):boolean{  //see if the piece can flip
  }
  function MakePiecePermanent(tGrid:TetrisGrid){  //make the current piece permanent in the tGrid
  }

}
