import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  posts: DS.hasMany('post'),
  lang: DS.attr('string'),
  createdAt: DS.attr('date'),
  postCount: DS.attr('number')
});
