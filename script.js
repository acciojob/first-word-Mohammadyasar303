function firstWord(s) {
  // your code here
	if (s.length === 0) {
    return s;
  }

  // Step 2: Trim the string to remove any leading or trailing spaces
  s = s.trim();

  // Step 3: Find the index of the first space in the string
  let spaceIndex = s.indexOf(' ');

  // Step 4: If there is no space in the string, return the entire string
  if (spaceIndex === -1) {
    return s;
  }

  // Step 5: If there is a space, return the substring from the start of the string to the index of the first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
