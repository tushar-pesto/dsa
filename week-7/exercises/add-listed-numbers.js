/**
 * 
 * @param {*a number represented as SLL} alpha 
 * @param {*a number represented as SLL} beta 
 * output: their sum represented as SLL
 */

let add = (alpha, beta) => {
    alpha.log();
    beta.log();

    alpha.reverse();
    beta.reverse();
    alpha.log();
    beta.log();

    let result = new SinglyLinkedList();
    let carry = 0;

    let p1 = alpha.head;
    let p2 = beta.head;

    console.log(p1);
    console.log(p2);

    while (p1 !== null || p2 !== null) {
        let sum = carry;

        if (p1 != null) {
            sum += p1.value;
            p1 = p1.next;
        }

        if (p2 != null) {
            sum += p2.value;
            p2 = p2.next;
        }

        let unit = Math.floor(sum) % 10;
        carry = Math.floor(sum / 10);

        console.log({ unit, carry });
        result.unshift(unit);
    }
    if (carry > 0) {
        result.unshift(carry);
    }
    result.log()
};