import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  summary: DS.attr('string'),
  createdAt: DS.attr('date'),
  tags: DS.hasMany('tag'),
  body: DS.attr('string'),
});
