/*
  factorial
  This function returns the factorial of a number >= 0. Negative numbers
  should return undefined
*/

function factorial(num) {
   if(num==0) {
      return 1;
   }
   return num * fact(num-1);
}

/*
  nthFiboTerm
  This function calculates the nth fibonacci term. It assumes that the term uses
  a 1 based index. nthFiboTerm(1) => 0, nthFiboTerm(2) => 1 etc
*/


/*
  sumOfAnyN
  This function provides the sum of a range that spans from m to n. m and n may
  be negative, but n should always be greater than m.
*/




function sumOfAnyN(from, to) {
  if(from > to) {
    throw new Error("from should be less than to!");
  }

  const sum = 0;
  for (var i = from; i != to; i++) {
    sum = sum + i;
  }

  return sum;
}


/*
  productOfAnyN
  This function provides the product of a range that spans from m to n. m and n may
  be negative, but n should always be greater than m.
*/

function productOfAnyN(from, to) {
  if(from > to) {
    throw new Error("from should be less than to!");
  }

  const sum = 0;
  for (var i = from; i != to; i++) {
    sum = sum * i;
  }

  return sum;
}



/*
  sumOfEvenInRange
  This function provides the sum of even numbers in a range that spans from m to n. m and n may
  be negative, but n should always be greater than m.
*/

function sumOfEvenInRange(from, to) {
  if(from > to) {
    throw new Error("from should be less than to!");
  }

  const sum = 0;
  for (var i = from; i != to; i++) {
    if(i%2 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}



/*
  sumOfOddInRange
  This function provides the sum of odd numbers in a range that spans from m to n. m and n may
  be negative, but n should always be greater than m.
*/


exports.factorial=factorial;
exports.nthFiboTerm=nthFiboTerm;
exports.sumOfAnyN=sumOfAnyN;
exports.productOfAnyN=productOfAnyN;
exports.sumOfEvenInRange=sumOfEvenInRange;
exports.sumOfOddInRange=sumOfOddInRange;
