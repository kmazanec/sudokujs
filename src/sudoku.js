var input = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";

var c = function(text){
  console.log(text);
};

var Board = {
  init : function(board_string){
    this.board = board_string;
  },

  // Setup: convert to 2d array function and it's helpers

  parse : function(){
    this.convertToArray();
    this.convertToInt();
    this.insertCandidateArrays();
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
  insertCandidateArrays : function(){
    Board.board.forEach(function(cell, i){
      if (cell === 0) {
        Board.board[i] = [1,2,3,4,5,6,7,8,9];
      }
    });
  },
  splitRows : function(){
    var splitBoard = [];
    for (var i = 9; i <= 81; i += 9) {
      splitBoard.push(this.board.slice(i-9, i));
    }
    this.board = splitBoard;
  },


  // Solve function and it's helpers

  solve : function(){
    while ( ! Board.boardSolved() ) {
      for(var row = 0; row < 9; row++) {
        for(var col = 0; col < 9; col++) {
          if ( ! Board.cellSolved(row,col) ){
            Board.eliminateCellCandidates(row,col);
            Board.convertToIntIfSolved(row,col);
          }
        }
      }
    }
  },
  boardSolved : function() {
    return (_.flatten(Board.board).length <= 81);
  },
  cellSolved : function(row, col){
    return _.isNumber(Board.board[row][col]);
  },
  eliminateCellCandidates : function(row, col){
    Board.board[row][col] = _.difference(Board.board[row][col],
                                         Board.rowNonCandidates(row),
                                         Board.colNonCandidates(col),
                                         Board.blockNonCandidates(row,col));
  },
  convertToIntIfSolved : function(row, col){
    if (Board.board[row][col].length === 1) {
      Board.board[row][col] = Board.board[row][col][0];
    }
  },
  rowNonCandidates : function(row){
    return _.filter(Board.board[row], function(cell){
      return _.isNumber(cell);
    });
  },
  colNonCandidates : function(col){
    var nonCandidates = [];
    _.each(Board.board, function(row){
      if (_.isNumber(row[col])){
        nonCandidates.push(row[col]);
      }
    });
    return nonCandidates;
  },
  blockNonCandidates : function(row,col){
    var nonCandidates = [];
    for (var blockRow = row-row%3; blockRow < (row-row%3)+3; blockRow++ ) {
      for (var blockCol = col-col%3; blockCol < (col-col%3)+3; blockCol++) {
        if (_.isNumber(Board.board[blockRow][blockCol])){
          nonCandidates.push(Board.board[blockRow][blockCol]);
        }
      }
    }
    return nonCandidates;
  },

};