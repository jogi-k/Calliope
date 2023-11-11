radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Heart)
    } else {
        wuerfeln()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
function wuerfeln() {
    
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        `)
    basic.pause(200)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.pause(200)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(500)
    zufall = randint(1, 6)
    if (zufall == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (zufall == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (zufall == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (zufall == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (zufall == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (zufall == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
        basic.showString("error!")
    }
    
}

input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(4)
    wuerfeln()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(2)
})
let zufall = 0
radio.setGroup(1)

