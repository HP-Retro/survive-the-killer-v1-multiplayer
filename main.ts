namespace SpriteKind {
    export const Killer = SpriteKind.create()
    export const Survivor = SpriteKind.create()
    export const Survivor2 = SpriteKind.create()
    export const Survivor3 = SpriteKind.create()
}
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (sprint3 == true) {
        controller.player3.moveSprite(Survialist, 150, 150)
        timer.after(3000, function () {
            controller.player3.moveSprite(Survialist, 95, 95)
            sprint3 = false
        })
        timer.after(8000, function () {
            sprint3 = true
        })
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (sprint2 == true) {
        controller.player2.moveSprite(Sentinel, 150, 150)
        timer.after(3000, function () {
            controller.player2.moveSprite(Sentinel, 95, 95)
            sprint2 = false
        })
        timer.after(8000, function () {
            sprint2 = true
        })
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (sprint4 == true) {
        controller.player4.moveSprite(Rushdowner, 175, 175)
        timer.after(3500, function () {
            controller.player4.moveSprite(Rushdowner, 75, 75)
            sprint4 = false
        })
        timer.after(7500, function () {
            sprint4 = true
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Killer, function (sprite, otherSprite) {
    controller.player4.moveSprite(Rushdowner, 0, 0)
    timer.after(3000, function () {
        controller.player4.moveSprite(Rushdowner, 75, 75)
    })
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (SwordSpin == true) {
        timer.after(200, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . e . . . . . . . . . . . . 
                . . e . e . . . . . . . . . . . 
                . . . . e b b b b b b b b b . . 
                e e e e e b b b b b b b b b b b 
                . . . . e b b b b b b b b b . . 
                . . e . e . . . . . . . . . . . 
                . . . e . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sentinel, 100, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . e . e . e . . . . . 
                . . . . . e . . e . . e . . . . 
                . . . . . . e e e e e . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . b . . . . . . . 
                `, Sentinel, 0, 100)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . e . . . 
                . . . . . . . . . . . e . e . . 
                . . b b b b b b b b b e . . . . 
                b b b b b b b b b b b e e e e e 
                . . b b b b b b b b b e . . . . 
                . . . . . . . . . . . e . e . . 
                . . . . . . . . . . . . e . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Sentinel, -100, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . e e e e e . . . . . . 
                . . . . e . . e . . e . . . . . 
                . . . . . e . e . e . . . . . . 
                . . . . . . . e . . . . . . . . 
                . . . . . . . e . . . . . . . . 
                `, Sentinel, 0, -100)
        })
        SwordSpin = false
    }
    timer.after(45000, function () {
        SwordSpin = true
    })
})
sprites.onOverlap(SpriteKind.Survivor, SpriteKind.Killer, function (sprite, otherSprite) {
    if (isInvincible == false) {
        info.changeLifeBy(-15)
        info.player2.changeLifeBy(-5)
        for (let index = 0; index < 7; index++) {
            info.changeLifeBy(-1)
            pause(1000)
        }
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    } else {
        info.changeLifeBy(0)
    }
})
sprites.onOverlap(SpriteKind.Survivor2, SpriteKind.Killer, function (sprite, otherSprite) {
    if (isInvincible == false) {
        info.player2.changeLifeBy(-20)
        for (let index = 0; index < 7; index++) {
            info.player2.changeLifeBy(0)
            pause(1000)
        }
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    } else {
        info.changeLifeBy(0)
    }
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Survivor3, SpriteKind.Killer, function (sprite, otherSprite) {
    if (isInvincible == false) {
        info.player3.changeLifeBy(-20)
        controller.player3.moveSprite(Survialist, 180, 180)
        timer.after(1000, function () {
            controller.player3.moveSprite(Survialist, 95, 95)
        })
        for (let index = 0; index < 7; index++) {
            info.player3.changeLifeBy(-1)
            pause(1000)
        }
        isInvincible = true
        timer.after(1000, function () {
            isInvincible = false
        })
    } else {
        info.changeLifeBy(0)
    }
})
info.player3.onLifeZero(function () {
    sprites.destroy(Survialist)
    info.changeCountdownBy(30)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (bloodthirst == true) {
        controller.player4.moveSprite(Rushdowner, 250, 250)
        bloodthirst = false
        timer.after(1500, function () {
            controller.player4.moveSprite(Rushdowner, 0, 0)
        })
        timer.after(3500, function () {
            controller.player4.moveSprite(Rushdowner, 75, 75)
        })
    }
    timer.after(40000, function () {
        bloodthirst = true
    })
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (healpot == true) {
        info.player1.changeLifeBy(25)
        info.player2.changeLifeBy(25)
        info.player3.changeLifeBy(25)
        healpot = false
        timer.after(50000, function () {
            healpot = true
        })
    }
})
info.player1.onLifeZero(function () {
    sprites.destroy(Healer)
    info.changeCountdownBy(30)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (invisible == true) {
        invisible = false
        timer.after(100, function () {
            Survialist.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        })
        timer.after(5000, function () {
            Survialist.setImage(img`
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . . 8 6 9 8 . . . . . . 
                . . . . 8 8 8 6 6 8 8 8 . . . . 
                . . 8 8 8 8 6 6 6 6 8 9 8 8 . . 
                . 8 9 9 6 9 6 6 6 6 9 6 9 9 8 . 
                . 8 9 6 6 9 9 6 6 9 9 6 6 9 8 . 
                . . 8 6 6 6 f 9 9 f 6 6 6 f . . 
                . . f f 6 f 9 f f 9 f 6 f f . . 
                . . f f 2 b f 1 1 f b 2 f f . . 
                . . f f 2 c f 1 1 f c 2 f f . . 
                . . . f 2 1 1 1 1 1 1 2 f . . . 
                . . . 1 f 1 1 f f 1 1 f 1 . . . 
                . . 1 b f 9 8 9 9 8 9 c b 1 . . 
                . . 1 1 f 8 8 8 8 8 8 f 1 1 . . 
                . . . . c 9 8 8 8 8 9 c . . . . 
                . . . . . f f f f f f . . . . . 
                `)
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        })
        timer.after(40000, function () {
            invisible = true
        })
    }
})
info.player2.onLifeZero(function () {
    sprites.destroy(Sentinel)
    info.changeCountdownBy(30)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (sprint1 == true) {
        controller.player1.moveSprite(Healer, 150, 150)
        timer.after(3000, function () {
            controller.player1.moveSprite(Healer, 95, 95)
            sprint1 = false
        })
        timer.after(8000, function () {
            sprint1 = true
        })
    }
})
let projectile: Sprite = null
let isInvincible = false
let sprint3 = false
let sprint2 = false
let sprint1 = false
let sprint4 = false
let bloodthirst = false
let healpot = false
let SwordSpin = false
let invisible = false
let Rushdowner: Sprite = null
let Survialist: Sprite = null
let Sentinel: Sprite = null
let Healer: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Healer = sprites.create(img`
    . . . . . f f 1 1 f f . . . . . 
    . . . . f 1 1 1 7 1 1 f . . . . 
    . . . f 1 1 1 7 7 7 1 e f . . . 
    . . f 1 1 1 1 1 7 1 1 1 1 f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 d b 3 d d 3 b d 3 3 f . 
    . f 3 3 f f f d d f f f 3 3 f . 
    . f b b f 1 7 d d 7 1 f b b f . 
    . f b b d 1 7 d d 7 1 d b b f . 
    f f b b d d d d d d d d b b f f 
    f b f f 1 7 1 f f 1 1 1 f f b f 
    . f 1 f 7 7 7 1 1 1 1 1 f 1 f . 
    f 1 1 1 f 7 1 1 1 1 1 f 1 1 1 f 
    f 1 1 f f 1 1 1 1 1 1 f f 1 1 f 
    . f f f f 1 1 1 1 1 1 f f f f . 
    . . . . f f f 1 1 f f f . . . . 
    `, SpriteKind.Survivor)
Sentinel = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 5 5 5 5 5 5 f f f . . 
    . . f f 5 f 2 2 2 2 f 5 5 f . . 
    . . f 5 2 4 f 5 5 f 4 2 5 f . . 
    . . f f f 4 5 f f 5 4 f f f . . 
    . f f 5 f e f 4 4 f e f 5 f f . 
    . f 5 5 4 e f e e f e 4 5 5 f . 
    . . f 5 5 e e e e e e 5 5 f . . 
    . . f f 5 5 e f f f 5 5 f f . . 
    . f b e f 2 2 2 2 2 2 f e b f . 
    . f b b f 2 2 2 2 2 2 f b b f . 
    . f b b f 4 4 5 5 4 4 f b b f . 
    . . f f . f f f f f f . f f . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Survivor)
Survialist = sprites.create(img`
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 6 9 8 . . . . . . 
    . . . . 8 8 8 6 6 8 8 8 . . . . 
    . . 8 8 8 8 6 6 6 6 8 9 8 8 . . 
    . 8 9 9 6 9 6 6 6 6 9 6 9 9 8 . 
    . 8 9 6 6 9 9 6 6 9 9 6 6 9 8 . 
    . . 8 6 6 6 f 9 9 f 6 6 6 f . . 
    . . f f 6 f 9 f f 9 f 6 f f . . 
    . . f f 2 b f 1 1 f b 2 f f . . 
    . . f f 2 c f 1 1 f c 2 f f . . 
    . . . f 2 1 1 1 1 1 1 2 f . . . 
    . . . 1 f 1 1 f f 1 1 f 1 . . . 
    . . 1 b f 9 8 9 9 8 9 c b 1 . . 
    . . 1 1 f 8 8 8 8 8 8 f 1 1 . . 
    . . . . c 9 8 8 8 8 9 c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Survivor)
Rushdowner = sprites.create(img`
    ...f......ffff......f...
    ..faf...ff1111ff...faf..
    .fafffffb11fff1bfffffaf.
    ..faf.ff11ff33f1ff.faf..
    ...f..fd11f333f1df..f...
    ......fd11fffff1df......
    ......fddd1111dddf......
    ......fbdffddffdbf......
    ......fcdf2112fdcf......
    .......fb111111bf..a....
    ....a...fcdb1bdf..aa....
    ....aaff.cbfbfc..faa....
    ....aaaffaffffafffa.....
    ......afffaffaffff......
    .......ffffaaffff.......
    .........ffaaff.........
    .........faffaffff......
    ......ffff.ff.afffff....
    ....fffff..ff....ffff...
    ...aaff..ffffff....aa...
    ...a....ffffffff....a...
    ........ff....ff........
    ......ffff....ffff......
    ......fff......fff......
    `, SpriteKind.Killer)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Healer)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Sentinel)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Survialist)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, Rushdowner)
controller.player1.moveSprite(Healer, 95, 95)
controller.player2.moveSprite(Sentinel, 90, 90)
controller.player3.moveSprite(Survialist, 90, 100)
controller.player4.moveSprite(Rushdowner, 75, 75)
invisible = true
SwordSpin = true
healpot = true
bloodthirst = true
sprint4 = true
sprint1 = true
sprint2 = true
sprint3 = true
isInvincible = false
tiles.placeOnRandomTile(Survialist, assets.tile`myTile0`)
tiles.placeOnRandomTile(Sentinel, assets.tile`myTile0`)
tiles.placeOnRandomTile(Healer, assets.tile`myTile0`)
tiles.placeOnRandomTile(Rushdowner, assets.tile`myTile`)
info.player3.setLife(100)
info.player2.setLife(120)
info.player1.setLife(80)
