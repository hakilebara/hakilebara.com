import Ember from 'ember';

export default Ember.Route.extend({
  serialize(model) {
    return { portfolio_slug: model.slug };
  }
});


