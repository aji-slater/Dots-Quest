var bootState = {
  init: function() {
    game.input.maxPointers = 1;
  },

  create: function() {
    game.state.start('load');
  }
};
