import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.queryRecord('tag', { filter: { slug: params.tag_slug } });
  },
  serialize(model) {
    return { tag_slug: model.get('slug') };
  }
});

