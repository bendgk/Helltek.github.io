//Aliases
var Application = PIXI.Application,
    Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

var app = new Application(1024, 1024, { backgroundColor: 0xFFFFFF });
document.body.appendChild(app.view)

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

var sprite = Sprite.fromImage('res/square.png');

sprite.anchor.set(0.5);
sprite.x = 0;
sprite.y = 0;

sprite.interactive = true;
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

app.stage.addChild(sprite);

function onClick () {
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}