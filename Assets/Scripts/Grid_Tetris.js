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
  
  function DropRow(y:int){
    var rowAbove:int = y+1;
    if(rowAbove<num_yblocks){ //prevents dropping from the top of playfield
      for(var i:int=0; i<num_xblocks; i++){
        BlockDrop(Vector2(i,y));
      }
      RowClear(rowAbove);
    }
  }
  
  function BlockDrop(vec2_IN:Vector2){
    var blockColor:int = GetBlockColor(Vector2(vec2_IN.x, vec2_IN.y));
    if( blockColor == emptyBlock){         //if current block is empty
      var blockAbove:int = GetBlockColor(Vector2(vec2_IN.x, vec2_IN.y+1));
      SetBlockColor(vec2_IN, blockAbove);  //set current block to block above's color
      print("BlockDrop : "+blockColor+" : "+vec2_IN);
    }
  }
  
  function RowClear(y:int){
    for(var i:int=0; i<num_xblocks; i++){
      ClearBlock(Vector2(i,y));
    }
  }
  
  function RowFill(y:int, emptyGap_IN:int){
    for(var i:int=0; i<num_xblocks-emptyGap_IN; i++){
      SetBlockColor(Vector2(i,y), 1);
    }
  }
  
  function Start(){
    super.Start();
  }
   
}
