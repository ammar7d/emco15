basic.forever(function on_forever() {
    while (input.isGesture(Gesture.Shake)) {
        basic.showString("Earthquake!")
    }
    basic.showIcon(IconNames.Square)
})
