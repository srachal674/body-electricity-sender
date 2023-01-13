let ekg = 0
basic.showString("" + (ekg))
ekg = 0
basic.forever(function () {
    ekg = 0
    radio.sendNumber(0)
    radio.sendValue("\"ekg\"", 0)
})
