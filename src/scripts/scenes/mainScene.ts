import FpsText from "../objects/fpsText";

export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    this.fpsText = new FpsText(this);

    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: "#000000",
        fontSize: 24
      })
      .setOrigin(1, 0);
  }

  update() {
    this.fpsText.update(this);
  }
}
//
