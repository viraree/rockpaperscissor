let hand = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    } else if (hand == 2) {
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    } else {
        basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    }
    
})
