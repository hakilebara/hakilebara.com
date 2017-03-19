import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  store: Ember.inject.service(),

  updateCounters() {
    let locale = this.get('i18n.locale');
    this.get('store').query('post', { metaOnly: true }).then((response) => {
      this.set('postsCount', response.meta.postsCount);
      this.set('categoriesCount', response.meta.tagsCount);
    });
  },
  localeChanged: Ember.observer('i18n.locale', function() {
    this.updateCounters();
  }),
  didInsertElement() {
    this._super(...arguments);
    this.updateCounters();
  }
});
