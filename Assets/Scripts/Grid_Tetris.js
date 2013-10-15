#pragma strict

class Grid_Tetris extends Grid{
  
  function CheckForCompletedRows(){
    print("Are there row complete?");
    for(var i:int=0; i<num_yblocks; i++){
      isRowComplete(i);
    }
  }
  
  function isRowComplete(y:int) : boolean{
    for(var i:int=0; i<num_xblocks; i++){
      if(GetBlockColor(Vector2(i,y))>-1){ //-1 is empty
        print("Found Filled at: x: " +i+" y: "+y);
        SetBlockColor(Vector2(i,y), 3);
      }
    }
  }
  
  function RowClear(y:int){
  
  }
  
  function Start(){
    super.Start();
  }
  
  
  
}
