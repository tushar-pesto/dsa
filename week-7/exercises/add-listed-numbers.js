/**
 * 
 * @param {*a number represented as SLL} l1 
 * @param {*a number represented as SLL} l2 
 * output: their sum represented as SLL
 */

let add = (l1, l2) => {
    l1.log();
    l2.log();
  
    l1.reverse();
    l2.reverse();
    l1.log();
    l2.log();
  
    let result = new SinglyLinkedList();
    let carry = 0;
  
    let p1 = l1.head;
    let p2 = l2.head;
  
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
      result.push(unit);
    }
    if (carry > 0) {
      result.push(carry);
    }
    result.reverse()
    result.log()
  };