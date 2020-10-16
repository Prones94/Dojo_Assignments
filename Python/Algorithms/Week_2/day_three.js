/*
  Parens Valid

    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

function paren_valid(str){
    var count=0;
    for(var i=0;i<str.length;i++){
       if(str.charAt(i)=="(") // add 1 for left (
           count+=1;
       else if (str.charAt(i)==")") // minus 1 for right )
           count-=1;
       if (count<0) // if the count isn't 0 then they are not even
           return false;
    }
    return count === 0
  }
  

console.log(paren_valid("Y(3(p)p(3)r)s"));

/* ******************************************************************************** */

/*
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

const bracesValid = str => {
    let openers, opener, closingPartners, stack;
  openers = new Set(["(", "[", "{"]);
  closingPartners = {
    ")" : "(",
    "]" : "[",
    "}" : "{"
  }
  stack = [];
  for (let i = 0; i < str.length){
    if (openers.has(str[i])){
      stack.push(str[i]);
    }
    else if (str[i] in closingPartners){
      opener = closingPartners[str[i]];
      if (stack.length == 0 || stack[str.length-1] != opener){
        return false;
      }
      else {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}
console.log(bracesValid(str1));