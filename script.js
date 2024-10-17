function firstWord(s) {
  // your code here
	let ans="";
	if(s==''){
		return '';
	}
	for(let i=0;i<s.length;i++){
		if(s[i]!==''){
			ans+=s[i];
		}
	}
	return ans;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
