const sortByStrings = (s,t) => {
	let obj = {}
	for(let i=0; i<s.length; i++){
		if(obj[s[i]]) {
			obj[s[i]] += 1
		} else {
			obj[s[i]] = 1
		}
	}

	str = ''

	for(let i=0; i<t.length; i++){
		str += t[i].repeat(obj[t[i]])
	}

	return str
}

let result = sortByStrings("weather", "therapyw")

result
