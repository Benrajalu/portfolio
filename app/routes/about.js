import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('work-entry');
  },
  activate: function() {
    document.title = "Benoit Rajalu - A propos - Portfolio Développeur front-end";
  }
});
