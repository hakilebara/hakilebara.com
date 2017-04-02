import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'hakilebara/config/environment';

export default DS.JSONAPIAdapter.extend({
  i18n: Ember.inject.service(),
  host: ENV.APP.API_SERVER,
  namespace: 'api',
  headers: Ember.computed('i18n.locale', function() {
    return { 
      "X-Accept-Language": this.get('i18n.locale'),
    };
  }).volatile()

});

