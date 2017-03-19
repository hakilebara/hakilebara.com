import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  store: Ember.inject.service(),
  ajax: Ember.inject.service(),

  //postsCount: null,
  categoriesCount: 0,

  metadata: Ember.observer('i18n.locale', function() {
    let locale = this.get('i18n.locale');
    //return this.get('store').query('post', { lang: locale, metaOnly: true });
    
    let meta = this.get('ajax').request('/posts', {
      host: 'http://localhost:3000',
      headers: {Accept: 'application/vnd.api+json'},
      data: { lang: locale, metaOnly: true }
    }).then(response => {
      console.log(response.meta.postsCount);
      this.set('postsCount', response.meta.postsCount);
      //this.set('categoriesCount', response.meta.categoriesCount);
    });
    return meta;
  })
});
