input.onButtonPressed(Button.A, function () {
    if (player_1 == (heads && heads)) {
        basic.showString("W")
        points += 1
    } else if (player_1 == (tails && tails)) {
        basic.showString("W")
        points += 1
    } else {
        basic.showString("L")
    }
    if (player_2 == (tails && tails)) {
        basic.showString("W")
        points += 1
    }
})
let points = 0
let tails = 0
let heads = 0
let player_2 = 0
let player_1 = 0
player_1 = 1
player_2 = 2
heads = 0
tails = 0
basic.forever(function () {
	
})
