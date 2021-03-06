#pragma strict

class Grid extends MonoBehaviour{
  static public var emptyBlock : int = -1;
  var blockXform : Transform;

  //the number of blocks in the grid
  var num_xblocks : int = 1 ; //don't set to zero, else divide by zero error
  var num_yblocks : int = 1 ;

  private var gridUpdateB : boolean = true;  //update grid?

  //the total number of blocks
  private var total_blocks : int = 0 ;

  //the size of the grid on the screen
  private var screen_width  : int = 0 ;
  private var screen_height : int = 0 ;

  //the starting position of the grid on the screen
  private var screen_xpos : int = 0 ;
  private var screen_ypos : int = 0 ;

  //the size of a single block
  private var block_width  : int = 0 ;
  private var block_height : int = 0 ;

  //an array of integers for the block colors (0 is blank)
  private var block_colors : int[]       = new int[1] ;
  private var blocks_xform : Transform[] = null       ;
  private var blocks_count : int         = 0          ;

  function Start(){
    SetNumBlocks(num_xblocks, num_yblocks);
    //SetScreenSize(480,640);
    //SetScreenPosition(-240, -320);
    ResetGrid()  ;  //empty all blocks, reset grid
    RenderGrid() ;
    print("Starting up TetrisGrid : " + block_colors[0]);
  }

  function Update(){
    RenderGrid();
  }

  /*BLOCK LOGIC*/
  function GetBlockColor(vec2_IN:Vector2):int{   //get the block color at the xy location
    var returnBlock :int = 0 ;                   //0 == false, returned by default
    if(CheckGridBounds(vec2_IN)){                //make sure we are in bounds
      returnBlock = block_colors[_Pos_To_Index(vec2_IN)] ; //find row, and offset column
    }
    return returnBlock;
  }

  function SetBlockColor(vec2_IN:Vector2, color_IN:int){  //set the block color at the xy location
    if(CheckGridBounds(vec2_IN)){                         //make sure we are in bounds
      block_colors[_Pos_To_Index(vec2_IN)] = color_IN ;            
      gridUpdateB = true ;
    }
  }
  
  function ClearBlock(vec2_IN:Vector2){
    block_colors[_Pos_To_Index(vec2_IN)] = emptyBlock ;            
    gridUpdateB = true ;
  }

  //function BlockIsEmpty(x:int, y:int){  //see if the block is empty (0 is blank)}

  function ResetGrid(){
    blocks_count  = 0; //reset block count
    for(var i:int = 0; i<total_blocks; i++){
      block_colors[i] = emptyBlock; //reset each entry to empty
    }
    ClearBlocks();
  }

  function DeleteBlock(){
    var destroyMe:GameObject = blocks_xform[0].gameObject ;
    Destroy(destroyMe)                                    ;
    blocks_xform[0] = null                                ;
  }

  function ClearBlocks(){ //0=empty
    for(var i:int = 0; i<total_blocks; i++){
      if(blocks_xform[i]!=null){ //if xform exist destroy it
        RemoveBlock(i);          //remove block based on index
      }
    }
  }

  function blockPosX(x:int){
    return screen_xpos + block_width * x;
  }

  function blockPosY(y:int){
    return screen_ypos + block_width * y;
  }

  function calcBlockSize(){
    block_width  = screen_width/num_xblocks  ;
    block_height = screen_height/num_yblocks ;
  }

  /*GRID LOGIC*/
  function SetNumBlocks(nx:int,  ny:int){  //initialize the grid with some number of blocks across and down
    num_xblocks  = nx                          ;
    num_yblocks  = ny                          ;
    total_blocks = nx*ny                       ;
    block_colors = new int[total_blocks]       ;
    blocks_xform = new Transform[total_blocks] ;
    calcBlockSize()                            ;
  }

  function SetScreenSize(sx:int, sy:int){  //set the screen size of the grid
    screen_width  = sx ;
    screen_height = sy ;
    calcBlockSize()    ;
  }

  function SetScreenPosition(px:int, py:int){  //set the starting screen position of the grid
    screen_xpos = px ;
    screen_ypos = py ;
    calcBlockSize()  ;
  }

  /*RENDER LOGIC*/
  function RenderGrid(){ //render a background for the entire grid, and any blocks that are not blank
    //A color value of "0" is considered to be blank, and the actual colors run from 1-7, 
    //this gives us all the colors we need for the classic Tetris pieces.
    if(gridUpdateB){
      ClearBlocks(); //empty current grid
      for(var i:int = 0; i < num_xblocks; i++){
        for(var j:int = 0; j < num_yblocks; j++){
          var blockColor:int = GetBlockColor(Vector2(i,j));
          if(blockColor>emptyBlock){ //block is not empty
            var blockIndex : int = _Pos_To_Index(Vector2(i,j));
            RenderBlock(blockIndex);
          }
        }
      }
      gridUpdateB = false;
    }
  }

  function RenderBlock(index_IN:int){      //render a single block
    if(blocks_xform[index_IN]!=Transform){ //if not empty create block
      var block:Transform      = Instantiate(blockXform)      ;
      blocks_xform[index_IN]   = block                        ;
      blocks_count             = blocks_count + 1             ;
      var bPos:Vector2         = _Index_To_Pos(index_IN)      ;
      block.position           = Vector3(bPos.x, bPos.y, 0.0) ;

      var color:int = block_colors[index_IN];

      if(color == 0){
        block.renderer.material.color = Color.white;
      }
      else if(color == 1){
        block.renderer.material.color = Color.blue;
      }
      else if(color == 2){
        block.renderer.material.color = Color.red;
      }
      else if(color == 3){
        block.renderer.material.color = Color.green;
      }
    }
  }

  /*UTILITY*/
  
  function _Pos_To_Index(vec2_IN:Vector2):int{
    var returnIndex:int             ;
    returnIndex = (vec2_IN.y*num_xblocks)+vec2_IN.x ;
    return returnIndex              ;
  }

  function _Index_To_Pos(index_IN:int):Vector2{
    var x:int = index_IN%num_xblocks                   ;
    var y:int = Mathf.FloorToInt(index_IN/num_xblocks) ;
    var returnPos:Vector2 = Vector2(x,y)               ;
    return returnPos                                   ;
  }

  function CheckGridBounds(vec2_IN:Vector2):boolean{ //make sure we are in bounds
    if(vec2_IN.x<0||vec2_IN.x>=num_xblocks){ 
      return false;
    }
    else if(vec2_IN.y<0||vec2_IN.y>=num_yblocks){
      return false;
    }
    else{
      return true;
    }
  }

  function RemoveBlock(index_IN:int){
    var destroyMe:GameObject = blocks_xform[index_IN].gameObject ;
    Destroy(destroyMe)                                           ;
    blocks_xform[index_IN] = null                                ;
  }

}
