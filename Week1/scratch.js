const palindromeNum = 123454321;
const numString = Array.from(palindromeNum.toString()).reverse().join("");
if (palindromeNum == numString) {
  console.log(`${palindromeNum} is a palindrome`);
} else {
  console.log(`${palindromeNum} is not palindrome`);
}


const word = "hello"
console.log(`char at: ${word.charAt(-1)}`)
console.log(`char at: ${word.charAt(0)}`);
console.log(`char at: ${word.charAt(1)}`);