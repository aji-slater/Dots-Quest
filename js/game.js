
var width = window.innerWidth,
    height = window.innerHeight,
    game = new Phaser.Game(width, height, Phaser.AUTO, 'game', null, true, false);

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);
game.state.start('boot');
