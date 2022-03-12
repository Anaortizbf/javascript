//recursividade
function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*
5! = 5x4x3x2x1 5 fatorial
5! = 5x4!

n! = n x (n-1)!
1! = 1
*/