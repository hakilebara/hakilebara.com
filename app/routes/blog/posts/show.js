import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let post_slug = `${params.url_year}/${params.url_month}/${params.url_day}/${params.url_slug}`;
    console.log(post_slug);
    return this.store.queryRecord('post', { filter: { slug: post_slug } });
  },
  serialize(model) {
    let  url_params = Ember.get(model, 'slug').split("/");
    return {
      url_year: url_params[0],
      url_month: url_params[1],
      url_day: url_params[2],
      url_slug: url_params[3],
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    if(!model.get('body')) {
      let slug = model.get('slug');
      let foo = this.store.queryRecord('post', { filter: { slug: slug } });
      controller.set('model', foo);
    }
  }
});
