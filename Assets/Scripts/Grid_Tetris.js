#pragma strict

class Grid_Tetris extends Grid{
  
  public  var waitForAnim   : int   = 0     ;  //0=false, 1=clear row, 2=drop row
  private var durBlockClear : float = 0.015 ;
  
  function Update(){
    super.Update();
    if(Input.GetKeyDown(KeyCode.W)){ //modulate through wait states
      waitForAnim = waitForAnim+1;
      waitForAnim = waitForAnim%3;
    }
  }
  
  function doDropRow(y:int){
    var rowAbove:int = y+1;
    if(rowAbove<num_yblocks){ //prevents dropping from the top of playfield
      for(var i:int=0; i<num_xblocks; i++){
        yield WaitForSeconds (durBlockClear);
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
  
  //function RowClear(y:int, callback:function()){
  function RowClear(y:int){
    for(var i:int=0; i<num_xblocks; i++){
      yield WaitForSeconds (durBlockClear);
      ClearBlock(Vector2(i,y));
    }
    printCallBack();
  }
  
  function printCallBack(){
    print("Call back printing");
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
        //print("Found Empty block : Row Not Complete");
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
      //print("BlockDrop : "+aboveColor+" : "+vec2_IN);
    }
  }
  
  function BlockDropAnim(vec2_IN:Vector2){
    var offsetY : float = 1.0;
    SetBlockColor(vec2_IN, 1) ;  //set current block to block above's color
    
  }
   
}
