import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  //first: Ember.computed('i18n.locale', function() {
    //return this.get("i18n").t("typist_element.first").toString();
  //})
});
