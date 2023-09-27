function func1() {
    console.log("Function 1");
  }
  
  function func2() {
    console.log("Function 2");
    func1();
  }
  
  function func3() {
    console.log("Function 3");
    func2();
  }
  
  func3();

/**
 * func3() is called and added to the call stack.
Call stack: [func3()]

Inside func3(), func2() is called and added to the call stack.
Call stack: [func3(), func2()]

Inside func2(), func1() is called and added to the call stack.
Call stack: [func3(), func2(), func1()]

Inside func1(), the console.log() statement is executed, and func1() is removed from the call stack.
Call stack: [func3(), func2()]

func2() has finished executing, so it is removed from the call stack.
Call stack: [func3()]

func3() has finished executing, so it is removed from the call stack.
Call stack: []

The call stack ensures that when func1 finishes executing, the program goes back to the point where func2 was called and continues from there. Similarly, when func2 finishes executing, the program goes back to the point where func3 was called and continues from there. This process continues until the call stack becomes empty, indicating that the program has finished executing all the functions.

The call stack is essential for managing the flow of execution in JavaScript and plays a significant role in function calls and returns. It helps in understanding the order of function execution and can be helpful in debugging when dealing with nested or recursive functions.



also called program stack
control stack
run time  stack 
exec context stack
machine stack

last in first out type execution 



*/