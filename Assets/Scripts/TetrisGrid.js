#pragma strict

class TetrisGrid extends MonoBehaviour{
  var blockXform : Transform;

  //the number of blocks in the grid
  var num_xblocks : int = 0 ;
  var num_yblocks : int = 0 ;

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
  private var block_colors:int[] = null;

  function Start () {
    SetNumBlocks(num_xblocks, num_yblocks);
    SetBlockColor(0,0,2);
    SetBlockColor(1,0,1);
    SetBlockColor(0,1,3);
    RenderGrid();
  }

  function Update () {

  }

  /*BLOCK LOGIC*/
  function GetBlockColor(x:int, y:int):int{   //get the block color at the xy location
    if(CheckGridBounds(x, y)){                //make sure we are in bounds
      return block_colors[(y*num_xblocks)+x]; //find row, and offset column
    }
    else{
      return 0 ;
    }
  }

  function SetBlockColor(x:int, y:int, color:int):boolean{  //set the block color at the xy location
    if(CheckGridBounds(x, y)){                              //make sure we are in bounds
      block_colors[(y*num_xblocks)+x] = color ;             //empty == color == 0
      return true                             ;
    }
    else{
      return false;
    }
  }

  //function BlockIsEmpty(x:int, y:int){  //see if the block is empty (0 is blank)}
  
  function ClearBlocks(){ //0=empty
    for(var i:int = 0; i<total_blocks; i++){
      block_colors[i] = 0;
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
    num_xblocks  = nx                    ;
    num_yblocks  = ny                    ;
    total_blocks = nx*ny                 ;
    block_colors = new int[total_blocks] ;
    calcBlockSize()                      ;
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
    print("Rendering");
    for(var i:int = 0; i < num_xblocks; i++){
      for(var j:int = 0; j < num_yblocks; j++){
        var blockColor = GetBlockColor(i,j);
        if(blockColor!=0){ //block is not empty
          var block:Transform = RenderBlock(i,j);
          if(blockColor == 2){
            block.renderer.material.color = Color.blue;
          }
          else if(blockColor == 3){
            block.renderer.material.color = Color.red;
          }
        }
      }
    }
  }

  function RenderBlock(x:int, y:int):Transform{ //render a single block
    //xform block to position 
    var newBlock = Instantiate(blockXform);
    newBlock.position = Vector3(x, y, 0.0);
    return newBlock;
  }

  /*UTILITY*/
  function CheckGridBounds(x:int, y:int):boolean{ //make sure we are in bounds
    if(x<0||x>=num_xblocks){ 
      return false;
    }
    else if(y<0||y>=num_yblocks){
      return false;
    }
    else{
      return true;
    }
  }

}