# What is space complexity? 

It is the amount of memory required to run a program, proportionate to the input size that's fed into the function. When computing the space complexity, there are two factors to consider: 

1. Input space: The space used by the input
2. Auxiliary space: The additional space used by the algorithm, e.g. to hold temporary variables or the space used by the activation stack.

## Representation of space complexity? 

Big O is a convenient way to let us mathematically express how the space requirements of a program grow with the change in the size of the inputs.

- An algorithm that uses a single variable has a constant space complexity of O(1)
- A method that requires an array of n elements has a linear space complexity of O(n)
- Computations using a matrix of size m * n has a space complexity of O(m * n)
- If you store an entire tree in a program and the tree has branching factor b and depth n then the space complexity of the program/algorithm is exponential i.e. O(b^n)

## Space used by recursive algorithms

The general rule is to count the maximum number of activation records on the stack at any given time 

If a recursion tree is generated, then the space complexity would depend upon the total levels (depth) of the tree. The variables also need to be considered when placed on the activation stack. An array being passed by reference to each recursive call would count as O(n). However, if the array is passed by value, then each copy of the array along with the maxium number of activation records in memory also needs to be accounted for. 

### Example 1: Factorial 

#### Iterative Solution
Function: factorial(n)
Returns: Factorial of the number n

Method:
result = 1
for i = (1..n)
{
    result = result * i
}
return result

When we look at the `factorial` function, we see that it uses variable `n`, `result`, and `i`. Now matter how large the number n is, we always use these three variables to compute the factorial. Hence, the space complexity of this function is O(1). It means we can comput the factorial of any number in constant space.

#### Recursive Solution
Function: factorialRecursive(n)
Returns: Factorial of the number n

Method:
if n===0 return 1
result = factorialRecursive(n - 1) * n
return result

When looking at the recursive solution, we can see that there are n recursive calls to `factorialRecursive` function. Each call maintains a record on the activation stack. The stack holds a copy of the variables `n` and `result`. Hence the space complexity of the recursive version of factorial is O(n).

### Example 2: Sum of All Elements
Function: sumElements(arr)
Returns: Sum of all elements in array

Method: 
n = length of arr
sum = 0

for i = (1 ... n)
{
    sum += arr[i]
}
return sum

Space complexity is O(n). The algorithm `sumElements` uses the variable `arr` as well as `n` and `sum`, which are used to calculate the total sum of all elements in the array. Each iteration of the loop stores all of these variables on the activation stack, meaning the space complexity of the algorith is O(n), since each iteration requires the same amount of space and the number of iterations is equal to the size of the array.

### Example 3: Binary Search

#### Iterative Solution
Function: binarySearch(arr, n, value) 
Returns: True/False

Method:
lower = 0
upper = n - 1
found = false
while (lower <= upper and !found)
{
    mid = (lower+upper) / 2
    if (arr[mid] < value) lower = mid + 1
    else if (arr[mid] > value) upper = mid - 1
    else found = true
}
return found

The space complexity of the iterative solution can easily be computed as follows: Input space O(n). Auxiliary space with variables (n, value, lower, upper, found, mid): O(1). Overall space complexity counting the input and auxiliary space: O(n)

#### Recursive Solution
Function: binarySearchRecursive(arr, value, lower, upper) 
Returns: True/False
Call this function for array size using: binarySearchRecursive(arr, value, 0, n - 1)

Method:
if (lower >= upper) return false
mid = (lower + upper) / 2
if (arr[mid] === value) return true
if (arr[mid] < value) return binarySearchRecursive(arr, value, mid+1, upper)
return binarySearchRecursive(arr, value, lower, mid-1)

The recursive calls generate the activation stack. Each record on the stack holds a separate copy of the variables `lower`, `upper`, `mid`, and `value`. The array can be passed by reference so a separate copy of the array is not created for each function call. As we can have O(log n) calls to binarySearchRecursive function, the space complexity of the recurisve version should include the O(log n) auxiliary space. Hence the overall space complexity is: 
1. Input space: O(n)
2. Auxiliary space for recursive calls involving O(log n) records created on stack: O(log n)
3. Overall space complexity counting the input and auxiliary is O(n)

### Example 4: Adjacency Matrix
Consider a problem where we have a graph with `n` nodes represented b  an adjacency matrix. Assume we use depth first traversal for detecting a cycle in the graph, the space complexity will be O(n). 

Explanation: The space complexity o a depth-first traversal for detecting a cycle in a graph with `n` nodes represented by an adjacency matrix is O(n) because the graph is represented using a two-dimensional array of `n` rows and `n` columns. As the array is static and does not require extra space as the traversal progresses, the only cost is O(n) input space required to store the array. 

## Space Complexity of Various Sorting Algorithms

The input space for all sorting algorithms is at least O(n), where n is the size of the array. It is important to understand the auxiliary space being used by that algorithm.

1. Bubble sort - the sorting is done in place and there is generally one extra variable used to store the temporary location for swapping items. Hence the auxiliary space used is O(1)

2. Insertion sort - Same as bubble sort. The sorting is done in place with a constant number of extra variables, so the auxiliary space used is O(1)

3. Merge sort - In merge sort, we split the array into two and merge the two sub-arrays by using a temporary array. The temporary array is the same size as the input array, hence the auxilary space is O(n)

4. Heap sort - Heap sort is implemented in place and hence the auxiliary space is O(1)

5. Quick sort - Depending on how quick sort is implemented, generally would need O(log n) additional space to sort an array

T/F - You can reduce a space complexity for an algorithm by reducing the amount of computations in the algorithms. 

False - Space complexity is determined by the amount of memory an algorithm uses, and not the number of computations in an algorithm. It is not possible to reduce the space complexity of an algorithm without changing the algorithm itself, as the amount of memory needed is determined by the algorithm and the data structures used to store the data. Therefore, it is not possible to reduce the space complexity of an algorithm by reducing the amount of computations.