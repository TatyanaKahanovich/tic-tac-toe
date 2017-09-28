class TicTacToe {
    constructor() {
    this.simbol = "x";
    this.arr = [[null, null, null], [null, null, null], [null, null, null]];
    this.winner = false;
	this.turns = false;
    }

    getCurrentPlayerSymbol() {
        return this.simbol;
    }

    nextTurn(rowIndex, columnIndex) {
		if (this.arr[rowIndex][columnIndex] === null){
			this.arr[rowIndex][columnIndex] = this.simbol;
			this.simbol === "x" ? this.simbol = "o" : this.simbol = "x";
		}

    }

    isFinished() {
        this.noMoreTurns();
        this.getWinner();
        if(this.turns && this.winner || !this.turns){
        	return true;
        }
        return false;
    }

    getWinner() {
		let a;
		this.simbol === "x" ?  a = "o" :  a = "x";
		this.winner = true;
        for (let i = 0; i < 3; i++) {
			if (a === this.arr[i][0]
            && a === this.arr[i][1]
            && a === this.arr[i][2]) {
                return a;
            }

			if (a === this.arr[0][i]
            && a === this.arr[1][i]
            && a === this.arr[2][i]) {
                return a;
			}

			if (a === this.arr[0][0]
            && a === this.arr[1][1]
            && a === this.arr[2][2]) {
                return a;
			}

			if (a === this.arr[0][2]
            && a === this.arr[1][1]
            && a === this.arr[2][0]) {
                return a;
			}
        }
        this.winner = false;
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if(this.arr[i][j] === null)    {
					this.turns  = true;
                    return false;
                }
            }
        }
		this.turns  = false;
        return true;
    }

    isDraw() {
		this.noMoreTurns();
		this.getWinner();
        if(!this.turns && !this.winner){
			return true;
		}
		return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
