describe("c", function(){
  it("calls console.log with the provided input", function(){
    spyOn(console, "log");
    c("Hello World!");
    expect(console.log).toHaveBeenCalledWith("Hello World!");
  });
});

describe("Board", function(){
  beforeEach(function(){
    Board.init("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
  });

  it("has an init function that sets the board variable", function(){
    expect(Board.board).toEqual("105802000090076405200400819019007306762083090000061050007600030430020501600308900");
  });

  it("has a parse function that converts the string to a 2d array of integers", function(){
    Board.parse();
    expect(Board.parse()).toEqual( [[1,0,5,8,0,2,0,0,0],
                                    [0,9,0,0,7,6,4,0,5],
                                    [2,0,0,4,0,0,8,1,9],
                                    [0,1,9,0,0,7,3,0,6],
                                    [7,6,2,0,8,3,0,9,0],
                                    [0,0,0,0,6,1,0,5,0],
                                    [0,0,7,6,0,0,0,3,0],
                                    [4,3,0,0,2,0,5,0,1],
                                    [6,0,0,3,0,8,9,0,0]]);
  });
});