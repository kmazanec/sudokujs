var input = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";

var c = function(text){
  console.log(text);
};

var Board = {
  init : function(board_string){
    this.board = board_string;
  },

  // Solve function and it's helpers

  solve : function(){

  },


  // Convert to 2d array function and it's helpers

  parse : function(){
    this.convertToArray();
    this.convertToInt();
    this.splitRows();
  },
  convertToArray : function(){
    this.board = this.board.split("");
  },
  convertToInt : function(){
    this.board = _.map(this.board, function(char){
      return parseInt(char, 10);
    });
  },
  splitRows : function(){
    var splitBoard = [];
    for (var i = 9; i <= 81; i += 9) {
      splitBoard.push(this.board.slice(i-9, i));
    }
    this.board = splitBoard;
  }
};
