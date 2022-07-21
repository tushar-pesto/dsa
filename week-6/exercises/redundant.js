/**
 * given a balanced expression string s
 * return true if a redundant pair of parantheses is found, false otherwise
 * ((a+b)+(c+d)) false
 * (((a+b))+(c+d))  true
 */

 import MyStack from '../concepts/my-stack';

const redundant = (expression) => {
	
	// Create a stack of characters
	let alpha = new MyStack();

	// Iterate through the given expression
	for(let c of expression) {
		
		// If c is ')'
		if (c== ')') {
			
			let top = alpha.pop();
			
			// keep popping till '(' is encountered
			// itemCount tracks the number inside parantheses
			// if it's 0, parantheses is redundant

			let itemCount = 0;
			while (top != '(') {
				itemCount++;
				top = alpha.pop();
			}
			if (itemCount < 1) {
				return true;
			}
		} else {
			alpha.push(c);
		}
	}

	// No duplicates found
	return false;
}
