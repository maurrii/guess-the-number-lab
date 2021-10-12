const game = {
	title: 'Guess the Number!',
	biggestNum: 100,
	smallestNum: 1,
	secretNum: null,
  prevGuesses: [],
	play: function () {
		this.secretNum =
			Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
			this.smallestNum
	},

  getPlayerGuess: function(){
    while (playerGuess !== 'quit') {
			let playerGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`) 
			parseGuess(playerGuess)
			let parse = parseInt(string)
  }
},


parseGuess: function (string) {
  if (isNaN(parse)) {
    console.log("string")
    alert(`This is not a number, Please enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
  } else {
    console.log(parse)
	} 
	}
}