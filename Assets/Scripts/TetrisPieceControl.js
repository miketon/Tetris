#pragma strict

class TetrisPieceControl extends MonoBehaviour{

  private var cPos : Vector2 = Vector2(0,0); //cursor/current position
  private var kPos : Vector2 = Vector2(0,0); //delta/next eligible position
  private var color: int = 1;
  
  private var tGrid: TetrisGrid;
  private var xMax: int = 1;
  private var yMax: int = 1;

  function Start () {
    kPos = Vector2(0,0);
    
    tGrid = GetComponent(TetrisGrid);
    xMax = tGrid.num_xblocks;
    yMax = tGrid.num_yblocks;
  }

  function Update () {
  }
  
  function Move(vec2_IN:Vector2){
    
  }
  
  function SetPos(vec2_IN:Vector2){
    cPos = vec2_IN;
  }

  function CreateNewPiece(tGrid:TetrisGrid, kVec:Vector2, type:int){  //spawn a new piece on the tGrid
    kPos = Vector2(cPos.x+kVec.x, cPos.y+kVec.y);
    if(CanCreateNewPiece()===true){
      tGrid.SetBlockColor(kPos.x,kPos.y,color);
      cPos = kPos; //block successfully updated, new block becomes current position
      print("Creating new piece");
      tGrid.RenderGrid();
    }
  }
  function CanCreateNewPiece():boolean{  //see if a piece can be created
    var returnBool : boolean = false;
    if(kPos.x>0 || kPos.x<xMax || kPos.y>0 || kPos.y<yMax){ //is target position within grid boundary
      if(tGrid.GetBlockColor(kPos.x,kPos.y)==0){            //is target position empty
        returnBool = true;
      }
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
