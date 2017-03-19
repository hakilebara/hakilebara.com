import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  i18n: Ember.inject.service(),
  host: 'http://localhost:3000',
  headers: Ember.computed('i18n.locale', function() {
    return { 
      "X-Accept-Language": this.get('i18n.locale'),
    };
  }).volatile()

});

