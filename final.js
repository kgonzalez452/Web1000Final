// Create a github repository called web1000-final. If you do not name your repository correctly and don't submit it to canvas you will receive a zero. Looking at you, Arnaldo.
// In your repository, create a file called testAnswers.txt and copy and paste all the questions in there.
// Answer each question right below the question text.

// Questions
// What are the four steps of mergesort?
    Divide
    Conquer
    Sort
    Combine

// Using JavaScript, generate a random number between 50 and 100.
    Math.floor((Math.random() * (100 - 50 + 1) + 50)) 
// Using Javascript, generate a random number between -100 and 100.
    Math.floor((Math.random() * (100 - (-100) + 1) + (-100)))
// Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half

function coinFlip() {
    if (Math.random()>.5) {
    console.log("head");
    }
    else {
    console.log("tails") }
    }
// Re-state the following expression without using negation: !(10 > x)
    (10<x)
// Re-state the following expression without using negation: !(a > 10 && b <= 5)
    (a<10 && b>5)
// Re-state the following expression without repeating variable a: (a && x <= 10) || (a && y < 0)
    (a && y < 0 && x <= 10)
// Re-state the following expression without negations: !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )
    (!a >10 && !b >10 && !c >10 && !isAdmin)
// Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.

  function twodconcat(arr){

  }
// Write a function which, given a 2-d array and another value x, returns true if x is present in the 2-d array, and false otherwise.
  function containsElement(arr, x){

  }
// Write a function which, given two sorted arrays of sizes m and n, returns a larger sorted array of size m+n. This function must work in O(m+n) time.

// Given the following edge list, draw the graph. Use MS Paint and include the file in your repo.

E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ]
// Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.
M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]
// For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?

// What is the time complexity of the following function?

    O(n^2)+2

  function thugPop(arr){    
    var ret = [];                                   // O(1)
    for (var i === 0; i < arr.length; i++){         // O(n)
      if (arr[i] % 15 == 0) ret.push('thugPop');    // O(n)
      else if (arr[i] % 5 == 0) ret.push('thug');   
      else if (arr[i] %3 == 0 ) ret.push('pop');    
      else ret.push(arr[i]);                        
    }
    return ret;                                     // O(1)
  }
// What is the time complexity of the following function?

        O(n)+4

  function thugify(schoolList){                     //
    return schoolList.map(function(schoolObj){      // O(1)
      var school = Object.assign({}, schoolObj);    // O(1)
      school.students.forEach(function(student){    // O(1)
        if (Math.random() > 0.5){                   // O(n)
          student.lastName += 'dogg';               
        }
        else {                                      // O(1)
          student.firstName = "lil' "+ student.firstName;   
        }
      });
    });
  }
// What is the time complexity of the following function?



  function countRepeats(strArr){
    var repeats = 0;                                                    //
    strArr.forEach(function(str, index){                                //       
      var currentRepeats = strArr.filter(function(innerStr, idx){       //
        return (innerStr === str && index != idx)                       //
      });
      if (currentRepeats.length > 0){                                   //
        repeats++;
      }
    });
    return repeats;                                                     //
  }
// What are the main operations of a stack?
    Last in first out. It uses the push and pop methods to push values into the beginning of an array and to pop the last values in an array 
// What are the main operations of a queue?
    First in first out. It uses the 
// What is the runtime of bubblesort? How does it work?
    bubbleSort is a method that lets you sort an array or object of values from smallest to largest or largest to smallest while comparing each value with the rest of the array or object and then if they match their conditional statement it will either switch the specified value with the next or previous value to sort it to one side or the other.
// Create a personal website and upload it so that it is accessible at yourdomain.fvi-grad.com.

// The website must have your name, contact information, skills, and at least two links to portfolio items you are hosting on fvi-grad.
// The website must not be in a subdirectory of the document root. ie. It needs to be accessible by going to yourusername.fvi-grad.com/ without anything after the slash.
// You can and should use a template
// Include the link to your website in your answers document