#pragma strict

class Grid_Tetris extends Grid{
  
  function CheckForCompletedRows(){
    print("Are there row complete?");
    for(var i:int=0; i<num_yblocks; i++){
      isRowComplete(i);
    }
  }
  
  function isRowComplete(y:int) : boolean{
    var completeBool : boolean = true;
    for(var i:int=0; i<num_xblocks; i++){
      if(GetBlockColor(Vector2(i,y)) == emptyBlock){
        completeBool = false;
        print("Found Empty block : Row Not Complete");
      }
    }
    return completeBool;
  }
  
  function RowClear(y:int){
    for(var i:int=0; i<num_xblocks; i++){
      DoBlockColor(Vector2(i,y), 3);
    }
  }
  
  function RowFill(y:int, emptyGap_IN:int){
    for(var i:int=0; i<num_xblocks-emptyGap_IN; i++){
      DoBlockColor(Vector2(i,y), 1);
    }
  }
  
  function Start(){
    super.Start();
  }
  
  
  
}
