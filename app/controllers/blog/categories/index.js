import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  store: Ember.inject.service(),

  tags: Ember.computed('model', 'i18n.locale', function() {
    let locale = this.get('i18n.locale');
    this.get('store').unloadAll('tag');
    return this.get('store').findAll('tag');
  })
});


