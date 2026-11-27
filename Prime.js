// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;              // 1 is not a prime number
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;          // divisible by another number, so not prime
        }
    }
    return true;
}

// Loop from 1 to 100 and collect the prime numbers
let primes = [];
for (let n = 1; n <= 100; n++) {
    if (isPrime(n)) {
        primes.push(n);
    }
}

console.log("Prime numbers till 100:");
console.log(primes.join(", "));
