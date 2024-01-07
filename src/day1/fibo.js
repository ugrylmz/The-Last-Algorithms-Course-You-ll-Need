// fibonacci series up to n terms return up to n.terms

function fibonacci(n){
    let n1 = 0;
    let n2 = 1;
    let nextNum;
    const arr = [];
    for(let i=0; i<=n; ++i){
        arr.push(n1);
        nextNum = n1+n2;
        n1 = n2;
        n2 = nextNum;
    }
    return arr;
}

function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}
