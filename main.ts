let mySprite: Sprite = null
game.showLongText("Welcome to Ducky Jump!", DialogLayout.Full)
game.showLongText("Theres a few rules to this game...", DialogLayout.Full)
game.showLongText("#1. Reach the purple finish line. And unlock the chest  ", DialogLayout.Full)
game.showLongText("#2. Collect the three red keys scattered throughout the map.", DialogLayout.Full)
game.showLongText("Now, lets choose your duck", DialogLayout.Full)
let duckcolor = game.ask("A for yellow" + " B for Purple" + controller.A.isPressed() + controller.B.isPressed())
if (controller.A.isPressed()) {
    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
}
if (controller.B.isPressed()) {
    mySprite = sprites.create(img`
        . . . . . . . . . . b a b . . . 
        . . . . . . . . . b a b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b a a a a a b . . . 
        . . . . b b a d 1 f a d 4 c . . 
        . . . . b a a 1 f f d d 4 4 4 b 
        . . . . b a a d f b 4 4 4 4 b . 
        . . . b d a a a a 4 4 4 4 b . . 
        . . b d d a a a a a a a a b . . 
        . b d d d d a a a a a a a a b . 
        b d d d b b b a a a a a a a b . 
        c d d b a a d c a a a a a a b . 
        c b b d a d c d a a a a a a b . 
        . b a a b c d d a a a a a d b . 
        b b c c c d d d d a a a b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
}
