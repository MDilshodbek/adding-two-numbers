class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  function addTwoNumbers(l1, l2) {
    let output = new ListNode(0);
    let current = output;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
      const sum = x + y + carry;
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    return output.next;
  }
  
  console.log(addTwoNumbers(l1, l2));
  
  // Testing with empty inputs
  const emptyList1 = new ListNode();
  const emptyList2 = new ListNode();
  
  console.log(addTwoNumbers(emptyList1, emptyList2));
  
