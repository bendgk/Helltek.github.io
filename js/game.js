var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);

PIXI.loader
  .add("res/square.png")
  .load(setup);

function setup() {
  var square = new PIXI.Sprite(
    PIXI.loader.resources["res/square.png"].texture
  );

  stage.addChild(square);
  
  renderer.render(stage);
}