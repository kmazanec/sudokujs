describe("c", function(){
  it("calls console.log with the provided input", function(){
    spyOn(console, "log");
    c("Hello World!");
    expect(console.log).toHaveBeenCalledWith("Hello World!");
  });
});

describe("Board - setup", function(){
  beforeEach(function(){
    Board.init("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
  });

  it("has an init() function that sets the board variable", function(){
    expect(Board.board).toEqual("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
  });

  it("has a parse() function that converts the string to a 2d array of integers with zeros replaced by candidate arrays", function(){
    Board.parse();
    expect(Board.board).toEqual( [[1,[1,2,3,4,5,6,7,8,9],5,8,[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,4,[1,2,3,4,5,6,7,8,9],5],
                                  [2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],4,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],8,1,9],
                                  [[1,2,3,4,5,6,7,8,9],1,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,3,[1,2,3,4,5,6,7,8,9],6],
                                  [7,6,2,[1,2,3,4,5,6,7,8,9],8,3,[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],6,1,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9]],
                                  [4,3,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],1],
                                  [6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],8,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]);
  });

  it("has a convertToArray() function that converts a string to an array of strings", function(){
    Board.convertToArray();
    expect(Board.board).toEqual(["1","0","5","8","0","2","0","0","0","0","9","0","0","7","6","4","0","5","2","0","0","4","0","0","8","1","9","0","1","9","0","0","7","3","0","6","7","6","2","0","8","3","0","9","0","0","0","0","0","6","1","0","5","0","0","0","7","6","0","0","0","3","0","4","3","0","0","2","0","5","0","1","6","0","0","3","0","8","9","0","0"]);
  });
  it("has a convertToInt() function that converts each string in the array to an integer", function(){
    Board.board = ["1","0","5","8","0","2","0","0","0","0","9","0","0","7","6","4","0","5","2","0","0","4","0","0","8","1","9","0","1","9","0","0","7","3","0","6","7","6","2","0","8","3","0","9","0","0","0","0","0","6","1","0","5","0","0","0","7","6","0","0","0","3","0","4","3","0","0","2","0","5","0","1","6","0","0","3","0","8","9","0","0"];
    Board.convertToInt();
    expect(Board.board).toEqual([1,0,5,8,0,2,0,0,0,0,9,0,0,7,6,4,0,5,2,0,0,4,0,0,8,1,9,0,1,9,0,0,7,3,0,6,7,6,2,0,8,3,0,9,0,0,0,0,0,6,1,0,5,0,0,0,7,6,0,0,0,3,0,4,3,0,0,2,0,5,0,1,6,0,0,3,0,8,9,0,0]);
  });
  it("has an insertCandidateArrays function that replaces zeros with [1..9]", function(){
    Board.board = [1,0,5,8,0,2,0,0,0,0,9,0,0,7,6,4,0,5,2,0,0,4,0,0,8,1,9,0,1,9,0,0,7,3,0,6,7,6,2,0,8,3,0,9,0,0,0,0,0,6,1,0,5,0,0,0,7,6,0,0,0,3,0,4,3,0,0,2,0,5,0,1,6,0,0,3,0,8,9,0,0];
    Board.insertCandidateArrays();
    expect(Board.board).toEqual([1,[1,2,3,4,5,6,7,8,9],5,8,[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,4,[1,2,3,4,5,6,7,8,9],5,2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],4,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],8,1,9,[1,2,3,4,5,6,7,8,9],1,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,3,[1,2,3,4,5,6,7,8,9],6,7,6,2,[1,2,3,4,5,6,7,8,9],8,3,[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],6,1,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],4,3,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],1,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],8,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]);
  });
  it("has a splitRows() function that splits the board into 9 rows of 9 items", function(){
    Board.board = [1,[1,2,3,4,5,6,7,8,9],5,8,[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,4,[1,2,3,4,5,6,7,8,9],5,2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],4,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],8,1,9,[1,2,3,4,5,6,7,8,9],1,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,3,[1,2,3,4,5,6,7,8,9],6,7,6,2,[1,2,3,4,5,6,7,8,9],8,3,[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],6,1,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],4,3,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],1,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],8,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
    Board.splitRows();
    expect(Board.board).toEqual( [[1,[1,2,3,4,5,6,7,8,9],5,8,[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,4,[1,2,3,4,5,6,7,8,9],5],
                                  [2,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],4,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],8,1,9],
                                  [[1,2,3,4,5,6,7,8,9],1,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,3,[1,2,3,4,5,6,7,8,9],6],
                                  [7,6,2,[1,2,3,4,5,6,7,8,9],8,3,[1,2,3,4,5,6,7,8,9],9,[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],6,1,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9]],
                                  [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],7,6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9]],
                                  [4,3,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],2,[1,2,3,4,5,6,7,8,9],5,[1,2,3,4,5,6,7,8,9],1],
                                  [6,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],3,[1,2,3,4,5,6,7,8,9],8,9,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]);
  });


});

describe("Board - solving", function(){
  beforeEach(function(){
    Board.init("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
    Board.parse();
  });

  it("solves an easy sudoku puzzle (no guessing or doubles/triples/etc.)", function(){
    Board.solve();
    expect(Board.board).toEqual([[1,4,5,8,9,2,6,7,3],[8,9,3,1,7,6,4,2,5],[2,7,6,4,3,5,8,1,9],[5,1,9,2,4,7,3,8,6],[7,6,2,5,8,3,1,9,4],[3,8,4,9,6,1,7,5,2],[9,5,7,6,1,4,2,3,8],[4,3,8,7,2,9,5,6,1],[6,2,1,3,5,8,9,4,7]]);
  });

  it("has a cellSolved() function that will identify a solved cell", function(){
    expect(Board.cellSolved(0,0)).toBe(true);
  });
  it("has a cellSolved() function that will identify an unsolved cell", function(){
    expect(Board.cellSolved(0,1)).toBe(false);
  });
  it("has a rowNonCandidates() function that returns an array of the already decided numbers in a given row", function(){
    expect(Board.rowNonCandidates(0)).toEqual([1,5,8,2]);
    expect(Board.rowNonCandidates(4)).toEqual([7,6,2,8,3,9]);
  });
  it("has a colNonCandidates() function that returns an array of the already decided numbers in a given column", function(){
    expect(Board.colNonCandidates(0)).toEqual([1,2,7,4,6]);
    expect(Board.colNonCandidates(6)).toEqual([4,8,3,5,9]);
  });
  it("has a blockNonCandidates() function that returns an array of the already decided numbers in a given block", function(){
    expect(Board.blockNonCandidates(0,0)).toEqual([1,5,9,2]);
    expect(Board.blockNonCandidates(4,4)).toEqual([7,8,3,6,1]);
  });
  it("has an eliminateCellCandidates() function that modifies a cell's candidate array to exclude noncandidates in it's row, col, and block", function(){
    Board.eliminateCellCandidates(0,1);
    expect(Board.board[0][1]).toEqual([4,7]);

    Board.eliminateCellCandidates(4,6);
    expect(Board.board[4][6]).toEqual([1]);
  });
  it("has a convertToIntIfSolved() function that strips the integer out of the array if there is only one candidate left", function(){
    Board.board[0][0] = [1];
    Board.convertToIntIfSolved(0,0);
    expect(Board.board[0][0]).toEqual(1);

    Board.convertToIntIfSolved(0,1);
    expect(Board.board[0][1]).toEqual([1,2,3,4,5,6,7,8,9]);
  });


});