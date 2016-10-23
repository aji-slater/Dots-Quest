var loadState = {
  preload: function() {
    game.load.image('dotBlue',   'assets/dots/dot_blue.png');
    game.load.image('dotBrown',  'assets/dots/dot_brown.png');
    game.load.image('dotGreen',  'assets/dots/dot_green.png');
    game.load.image('dotPurple', 'assets/dots/dot_purple.png');
    game.load.image('dotRed',    'assets/dots/dot_red.png');
    game.load.image('dotYellow', 'assets/dots/dot_yellow.png');
  },

  create: function() { game.state.start('play'); }
};
