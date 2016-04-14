let nav = null;
let subNav = null;

export default {
  update: function(navigator) {
    nav = navigator;
  },
  get: function() {
    return nav;
  },
  update2: function(navigator) {
    subNav = navigator;
  },
  destroy2: function() {
    subNav = null;
  },
  getCurrent: function() {
    if (subNav && subNav.getCurrentRoutes().length > 1) {
      return subNav;
    }
    return nav;
  }
}
