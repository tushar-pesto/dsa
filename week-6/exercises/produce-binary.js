const produceBinary = (n)  => {
    let numbers = [];
    let alpha = new MyQueue();
    var s1, s2;
    alpha.enqueue("1");
    for (var i = 0; i < n; i++) {
        numbers.push(alpha.dequeue());
        s1 = numbers[i] + "0";
        s2 = numbers[i] + "1";
        alpha.enqueue(s1);
        alpha.enqueue(s2);
    }

    return numbers;
}

console.log(produceBinary(10))
