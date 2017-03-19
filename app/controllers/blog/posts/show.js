import Ember from 'ember';

export default Ember.Controller.extend({
  displayCommentClass: Ember.computed("hideComment", function() {
    let hideComment = this.get("hideComment");
    return hideComment ? "hideCommentClass" : "";
  }),
  hideComment: true,

  actions: {
    toggleCommentDisplay () {
      this.toggleProperty('hideComment');
    }
  }
});
