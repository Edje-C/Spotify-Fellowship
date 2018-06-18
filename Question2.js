const decodeString = (s) => {

	let split = s.match(/(\d)+|[a-z]+|(]\b)/g)

	if(split.length === 1) {
		return s
	}

	let decode = ''
	if (split[split.length-2] === "]") {
		let end = split.pop()
		split.pop()
		decode = split.pop().repeat(Number(split.pop())) + end
	} else {
		decode = split.pop().repeat(Number(split.pop()))
	}


	let joined = split.join('') + decode

  return decodeString(joined)
}

result = decodeString('4[ab]')

result
