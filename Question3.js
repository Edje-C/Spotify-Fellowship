const changePossibilities = (amount, denominations) => {
	let arr = []

	if(denominations.length === 0) {
		return arr
	}

	if(denominations.length === 1) {
		let value = denominations[0]
		if(!(amount%value)) {
			let straight = []
			let sum = 0
			while(amount > sum) {
				straight.push(value)
				sum += value
			}
			arr.push(straight)
		}
		return arr
	}

	let max = denominations[denominations.length-1]
	let diff = amount-max

	if(max === amount) {

		arr.push([max])

	} else if(diff <= max && diff >= denominations[0]) {

		let memo = changePossibilities(diff, denominations.slice(0,-1))

		if(diff === max) {
			arr.push([max, max])
		}

		if(memo[0]) {
			arr.push(...memo.map(v => {
				v.unshift(max)
				return v
			}))
		}
	} else if(diff > max) {
		let memo = changePossibilities(diff, denominations)
		if(memo[0]) {
			arr.push(...memo.map(v => {
				v.unshift(max)
				return v
			}))
		}
	}

	arr.push(...changePossibilities(amount, denominations.slice(0,-1)))

	return arr
}
