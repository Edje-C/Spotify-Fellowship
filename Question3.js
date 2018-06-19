const changePossibilities = (amount, denominations) => {
	let len = 0

	if(denominations.length === 0) {
		return len
	}

	if(denominations.length === 1) {
		let value = denominations[0]
		if(!(amount%value)) {
			len++
		}
		return len
	}

	let max = denominations[denominations.length-1]
	let diff = amount-max

	if(max === amount) {

		len++

	} else if(diff <= max && diff >= denominations[0]) {

		let memo = changePossibilities(diff, denominations.slice(0,-1))

		if(diff === max) {
			len++
		}

		len += memo

	} else if(diff > max) {
		let memo = changePossibilities(diff, denominations)
		len += memo
	}

	len += changePossibilities(amount, denominations.slice(0,-1))

	return len
}

let result = changePossibilities(4, [1,2,3])


result
