# What is a recursion? 

In code, recursion is implemented using a function that calls on itself. 

The opposite of a recursive algorithm would be an iterative algorith. While iterative algorithms use for loops and while loops simulate repetition, recursive algorithms use function calls to simulate the same logic. 

```
// iterative
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// recursive
function fn(i) {
    // base case to stop recursion
    if (i > 10) return;

    console.log(i);
    return fn(i + 1);
}
fn(1);
```

Stacking calls
```
function fn(i) {
    if (i > 3) return;
    console.log(i);
    fn(i + 1)
    console.log(`End of call where i = ${i}`);
    return;
}

fn(1);

Results:
// 1
// 2
// 3
// End of call where i = 3
// End of call where i = 2
// End of call where i = 1
```

The line where we print text is executed in reverse order. The original call `fn(1)` first prints 1, then calls `fn(2)` which prints 2 then calls `fn(3)` which prints 3 then calls `fn(4)`. `fn(4)` triggers the base case and returns. We are now back in the function call where i = 3 and the fn(i + 1) line has finished, so we move to the next line which prints 'End of call where i = 3' and so forth until the original function call to `fn(1)` returns.