basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        . . . . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # #
            . . # # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . .
            # # . . .
            . # . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # . .
            # # # # .
            . # # . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # #
            # # # # #
            . . . # #
            . . . # .
            `)
    }
})
