import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: "Code Life",
        image_url: "assets/images/codelife.png",
        slug: "code-life"
      },
      {
        name: "Member Berry",
        image_url: "assets/images/memberberry.png",
        slug: "member-berry"
      },
      {
        name: "Mr. Web",
        image_url: "assets/images/webby.png",
        slug: "webby-chan"
      },
      {
        name: "Monappliphoto",
        image_url: "assets/images/monappliphoto.png",
        slug: "monappliphoto-logo"
      },
    ];
  },

});

