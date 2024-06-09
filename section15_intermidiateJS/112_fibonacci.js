function fibonacciGenerator (n) {
    if (n == 1) result = [0];
    else if (n == 2) result = [0, 1];
    else {
        result = [0,1];
        for (var i = 2; i < n; i++) {
            result.push(result[result.length - 2] + result[result.length - 1]); 
        }
    }
    return result;
}