#pragma strict

class TetrisPieceControl extends MonoBehaviour{

  function Start () {
    print("I am alive");
  }

  function Update () {
  }

  function CreateNewPiece(tGrid:TetrisGrid, x:int, y:int, type:int){  //spawn a new piece on the tGrid
    if(CanCreateNewPiece(tGrid,x,y)===true){
      tGrid.SetBlockColor(x,y,type);
      print("Creating new piece");
    }
  }
  function CanCreateNewPiece(tGrid:TetrisGrid, x:int, y:int):boolean{  //see if a piece can be created
    var returnBool : boolean = false;
    if(tGrid.GetBlockColor(x,y)==0){
      returnBool = true;
    }
    print("CanCreateNewPiece: " + returnBool);
    return returnBool;
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
