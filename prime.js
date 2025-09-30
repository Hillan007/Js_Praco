function isPrime(num) {
  if (num < 2) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // divisible by another number
  }
  
  return true;
}

let primes = [];
let number = 2;

while (primes.length < 100) {
  if (isPrime(number)) {
    primes.push(number);
  }
  number++;
}

console.log("First 100 prime numbers:");
console.log(primes.join(", "));