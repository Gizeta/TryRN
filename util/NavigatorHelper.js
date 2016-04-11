let nav = null;

export default {
  update: function(navigator) {
    nav = navigator;
  },
  get: function() {
    return nav;
  }
}
