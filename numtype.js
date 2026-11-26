function numtype(num) {
    if (num > 0) {
        return "Positive";        
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Neutral";
    }
}   
 let num = 24;
console.log(numtype(num));
