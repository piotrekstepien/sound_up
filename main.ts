let value = 0
input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
    while (true) {
        for (let index = 0; index <= 255; index++) {
            value += 10
            basic.pause(100)
            music.ringTone(value)
        }
        basic.pause(1000)
        for (let index = 0; index <= 255; index++) {
            value += -10
            basic.pause(100)
            music.ringTone(value)
        }
    }
})
