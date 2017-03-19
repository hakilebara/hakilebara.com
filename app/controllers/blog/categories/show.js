import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  posts: Ember.computed('model', 'i18n.locale', function() {
    const tagSlug = this.get("model.slug");
    return this.get('store').query('post', { filter: { tag: tagSlug } });
  })
});

