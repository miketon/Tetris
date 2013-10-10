#pragma strict

class TetrisPieceControl extends MonoBehaviour{

  private var cPos : Vector2 = Vector2(0,0); //cursor/current position
  private var kPos : Vector2 = Vector2(0,0); //delta/next eligible position
  private var color: int = 0;
  
  private var tGrid: TetrisGrid;
  
  function Start () {
    kPos = Vector2(0,0);
    
    tGrid = GetComponent(TetrisGrid);
    
    MovePiece(Vector2(0,0));
  }

  function Update () {
  }
  
  function Move(vec2_IN:Vector2){
    
  }
  
  function SetPos(vec2_IN:Vector2){
    cPos = vec2_IN;
  }
  
  function GetPos():Vector2{
    return cPos;
  }
  
  function MovePiece(kVec:Vector2){
    kPos = Vector2(cPos.x+kVec.x, cPos.y+kVec.y);
    if(tGrid.CheckGridBounds(kPos.x, kPos.y)){ //is target position within grid boundary
      if(PieceCheckEmpty(kPos)===true){
        PieceAdd(kPos, color);
        PieceRemove(cPos);
        PieceAdd(cPos, 2); //fill previous position
        cPos = kPos; //block successfully updated, new block becomes current position
      }
    }
  }
  
  function PieceAdd(vec2_IN:Vector2, color_IN:int){
    tGrid.SetBlockColor(vec2_IN.x,vec2_IN.y,color_IN);
    tGrid.RenderGrid();
    print("Creating new piece");
  }
  
  function PieceRemove(vec2_IN:Vector2){
    tGrid.SetBlockColor(vec2_IN.x,vec2_IN.y,tGrid.emptyBlock);
  }
  
  function PieceCheckEmpty(vec2_IN:Vector2):boolean{              //see if a piece can be created
    var returnBool : boolean = false;
    if(tGrid.GetBlockColor(vec2_IN.x,vec2_IN.y)==tGrid.emptyBlock){ //is target position empty
      returnBool = true;
    }
    print("CanCreateNewPiece: " + returnBool);
    return returnBool;
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
