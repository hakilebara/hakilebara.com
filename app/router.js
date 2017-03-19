import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('about');
  this.route('blog', function() {
    this.route('posts', { path: '/' }, function() {
      this.route('show', { path: ':url_year/:url_month/:url_day/:url_slug' });
    });
    this.route('categories', function() {
      this.route('show', { path: ':tag_slug' });
    });
  });
  this.route('contact');
  this.route('temp');
  this.route('portfolio', function() {
    this.route('code-life');
  });
  this.route('work');
});

export default Router;
