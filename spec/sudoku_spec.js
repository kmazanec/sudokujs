describe("c", function(){
  it("calls console.log with the provided input", function(){
    spyOn(console, "log");
    c("Hello World!");
    expect(console.log).toHaveBeenCalledWith("Hello World!");
  });
});