let ekg = 0
basic.showString("" + (ekg))
ekg = 0
basic.forever(function () {
    ekg = 0
    serial.writeValue("\"ekg\"", ekg)
})
