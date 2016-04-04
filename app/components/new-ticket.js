import Ember from 'ember';

export default Ember.Component.extend({
  showTicketForm: false,
  actions: {
    showTicketForm() {
      this.set('showTicketForm', true);
    },
    saveTicket() {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        text: this.get('text')
      };
      this.set('showTicketForm', false);
      this.sendAction('saveTicket', params);
    }
  }
});
