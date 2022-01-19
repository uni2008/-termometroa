let tenpex = 0
radio.setGroup(6)
basic.forever(function () {
    tenpex = input.temperature()
    basic.showNumber(tenpex)
    radio.sendNumber(tenpex)
})
