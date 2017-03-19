import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  actions: {
    toggleMobileNav() {
      Ember.$('body > div').toggleClass('has-mobile-nav-showing');
    },
    toggleLocale() {
      let currentLocale = this.get('i18n.locale');
      let newLocale = currentLocale === "en" ? "fr" : "en";
      this.set('i18n.locale', newLocale); 
    }
  }
});
