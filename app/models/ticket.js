import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  timestamp: DS.attr()
});
