function firstWord(s) {
  // your code here
// Step 1
  if (s.length === 0) {
    console.log(s);
  }

// step 2
	s = s.trim();

//  step 3
	let spaceIndex = s.indexOf(' ');

// step 4
	if (spaceIndex === -1) {
    return s;
  }

// step 5
	 return s.substring(0, spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
