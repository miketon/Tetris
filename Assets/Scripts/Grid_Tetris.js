#pragma strict

class Grid_Tetris extends Grid{
  
  function CheckForCompletedRows(){
    print("Are there row complete?");
    for(var i:int=0; i<num_yblocks; i++){
      RowCompleteCheck(i);
    }
  }
  
  function doDropRow(y:int){
    var rowAbove:int = y+1;
    if(rowAbove<num_yblocks){ //prevents dropping from the top of playfield
      for(var i:int=0; i<num_xblocks; i++){
        BlockDrop(Vector2(i,y));
      }
      RowDrop(rowAbove);
    }
  }
  
  function RowFill(y:int, emptyGap_IN:int){
    for(var i:int=0; i<num_xblocks-emptyGap_IN; i++){
      SetBlockColor(Vector2(i,y), 1);
    }
  }
  
  function RowClear(y:int){
    for(var i:int=0; i<num_xblocks; i++){
      ClearBlock(Vector2(i,y));
    }
  }
  
  function RowDrop(y:int){
    for(var i:int=0; i<num_xblocks; i++){
      if(GetBlockColor(Vector2(i,y)) == emptyBlock){
        ClearBlock(Vector2(i,y));
      }
    }
  }
   
  function RowCompleteCheck(y:int) : boolean{
    var completeBool : boolean = true;
    for(var i:int=0; i<num_xblocks; i++){
      if(GetBlockColor(Vector2(i,y)) == emptyBlock){
        completeBool = false;
        print("Found Empty block : Row Not Complete");
      }
    }
    return completeBool;
  }
   
  function BlockDrop(vec2_IN:Vector2){
    var abovePos  : Vector2 = Vector2(vec2_IN.x, vec2_IN.y+1);
    var blockColor: int     = GetBlockColor(vec2_IN)         ;
    if( blockColor == emptyBlock){         //if current block is empty
      var aboveColor:int = GetBlockColor(abovePos);
      SetBlockColor(vec2_IN, aboveColor) ;  //set current block to block above's color
      SetBlockColor(abovePos, emptyBlock);  //set block above to empty
      print("BlockDrop : "+aboveColor+" : "+vec2_IN);
    }
  }
   
}
