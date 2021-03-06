import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  model: function() {
    return this.get('store').findAll('work-entry');
  }
});
