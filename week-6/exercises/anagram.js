//given alpha and beta, return true if they are anagrams

//naive
const checkAnagram = (alpha, beta) => {
    if(typeof alpha !== "string" || typeof beta !== "string") {
        throw "Invalid input";
    }
    if(alpha.length !== beta.length) {
        return false;
    }

    let counter = {};
    for(const c of alpha) {
        if(counter[c]) {
            counter[c]++;
        } else {
            counter[c] = 1;
        }
    }

    
    for(const c of beta) {
        if(!counter[c]) { //c doesn't exist or is 0
            return false;
        } else {
            counter[c]--;
        }
    }

    console.log({counter});
    return true;

}