#pragma strict

class TetrisPieceControl extends MonoBehaviour{

  private var cPos : Vector2 = Vector2(0,0); //cursor/current position
  private var kPos : Vector2 = Vector2(0,0); //delta/next eligible position
  private var color: int = 1;
  private var tGrid: TetrisGrid;

  function Start () {
    print("I am alive");
    tGrid = GetComponent(TetrisGrid);
    kPos = Vector2(0,0);
  }

  function Update () {
  }
  
  function Move(vec2_IN:Vector2){
    
  }
  
  function SetPos(vec2_IN:Vector2){
    cPos = vec2_IN;
  }

  function CreateNewPiece(tGrid:TetrisGrid, x:int, y:int, type:int){  //spawn a new piece on the tGrid
    if(CanCreateNewPiece()===true){
      tGrid.SetBlockColor(kPos.x,kPos.y,color);
      cPos = kPos; //block successfully updated, new block becomes current position
      print("Creating new piece");
      tGrid.RenderGrid();
    }
  }
  function CanCreateNewPiece():boolean{  //see if a piece can be created
    var returnBool : boolean = false;
    if(tGrid.GetBlockColor(kPos.x,kPos.y)==0){
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
