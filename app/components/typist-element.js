import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const TypistElementComponent = Ember.Component.extend({
  tagName: "",
  write: task(function * (str) {
    let i = 0;
    let text = "";
    let strarray = str.split('');
    do {
      text += strarray[i];
      this.set('text', text);
      yield timeout (60);
      i += 1;
    } while ( i < str.length);
  }),
  erase: task(function * (str) {
    let i = 0;
    let text = str;
    do {
      text = text.slice(0, -1);
      this.set('text', text);
      yield timeout (60);
      i += 1;
    } while ( i < str.length);
  }),
  typist: task(function * (strings) {
    let i = 0;
    do {
      let str = strings[i].toString();
      yield this.get('write').perform(str);
      yield timeout (3000);
      yield this.get('erase').perform(str);
      i = (i === (strings.length - 1)) ? 0 : i + 1;
    } while ( i < strings.length );
  }),
  
  paramsChanged: Ember.observer('params', function() {
    let params = this.get('params');
    this.get('typist').cancelAll();
    this.get('typist').perform(params);
  }),

  didInsertElement() {
    let params = this.get('params');
    this.get('typist').perform(params);
  }
});

TypistElementComponent.reopenClass({
  positionalParams: 'params'
});

export default TypistElementComponent;
