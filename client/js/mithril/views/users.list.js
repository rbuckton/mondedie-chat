/* global m, usersViewElement */
'use strict';
var users = users || {};

/**
 * Users component - view
 */
users.view = function() {
  return m("ul#clients", [
    users.vm.list.users().map(function(user, i) {
      return m("li", {key:user.id(), class:user.status()}, [
        m("img", {class:'img-rounded', src:user.avatar(), alt:user.name()}),
        m("span", {style:{color:user.color()}}, user.name())
      ])
    })
  ])
};



/**
 * Component mounting
 */
m.mount(usersViewElement, { controller:users.controller, view:users.view });
