ekg = 0
basic.show_string("ekg")
bodyElectricty = 0
radio.set_group(99)
# forever loop that collects body electricity and send it
over
the
radio

def on_forever():
    global bodyElectricty
    bodyElectricty = pins.analog_read_pin(AnalogPin.PO)
    radio.send_number(bodyElectricty)
basic.forever(on_forever)
