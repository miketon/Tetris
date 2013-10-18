#pragma strict

class PieceControl_Tetris extends MonoBehaviour{

  protected var tGrid: Grid_Tetris;

  protected var cPos : Vector2 = Vector2(0,0); //cursor/current position
  protected var kPos : Vector2 = Vector2(0,0); //delta/next eligible position
  protected var pPos : Vector2 = Vector2(0,0); //previous eligible position
  
  protected var color: int     = 0           ;
    
  function Start () {
    kPos  = Vector2(0,0)             ;
    tGrid = GetComponent(Grid_Tetris);
    MovePiece(Vector2(0,0))          ;
  }
  
  function SetPos(vec2_IN:Vector2){
    cPos = vec2_IN;
  }
  
  function GetPos():Vector2{
    return cPos;
  }
  
  function MovePiece(kVec:Vector2){
    pPos = cPos;
    kPos = Vector2(cPos.x+kVec.x, cPos.y+kVec.y);
    if(tGrid.CheckGridBounds(kPos))   { //is target position within grid boundary
      if(PieceCheckEmpty(kPos)===true){
        doMovePiece();
      }
    }
  }
  
  function doMovePiece(){
    PieceAdd(kPos, color) ;
    PieceRemove(cPos)     ;
    PieceAdd(cPos, 2)     ; //fill previous position
    cPos = kPos           ; //block successfully updated, new block becomes current position
  }
  
  function PieceAdd(vec2_IN:Vector2, color_IN:int){
    tGrid.SetBlockColor(vec2_IN,color_IN);
  }
  
  function PieceRemove(vec2_IN:Vector2){
    tGrid.SetBlockColor(vec2_IN, tGrid.emptyBlock);
  }
  
  function PieceCheckEmpty(vec2_IN:Vector2):boolean{    //see if a piece can be created
    var returnBool : boolean = false;
    if(tGrid.GetBlockColor(vec2_IN)==tGrid.emptyBlock){ //is target position empty
      returnBool = true;
    }
    print("CanCreateNewPiece: " + returnBool);
    return returnBool;
  }

  function PieceCanMove(tGrid:Grid_Tetris, dx:int, dy:int):boolean{  //see if the piece can move in some direction
  }
  function FlipPiece(tGrid:Grid_Tetris){  //flip the current piece
  }
  function PieceCanFlip(tGrid:Grid_Tetris):boolean{  //see if the piece can flip
  }
  function MakePiecePermanent(tGrid:Grid_Tetris){  //make the current piece permanent in the tGrid
  }

}
