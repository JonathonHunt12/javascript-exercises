const fibonacci = function(num) {
  if (num < 0) return "ERROR";
  if (num === 0) return 0;

  let n1 = 0, n2 = 1, nextTerm;

  for (i = 1; i <= num; i--){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// Do not edit below this line
module.exports = fibonacci;
