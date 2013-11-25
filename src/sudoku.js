var input = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";

var c = function(text){
  console.log(text);
};

var Board = {
  init : function(board_string){
    this.board_string = board_string;
  },
  solve : function(){

  }
};

c(input);

c(Board);

c(Board.init(input));

c(Board.solve());

c(Board.board_string);