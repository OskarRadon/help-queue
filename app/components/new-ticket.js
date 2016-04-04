import Ember from 'ember';

export default Ember.Component.extend({
  showTicketForm: false,
  actions: {
    showTicketForm() {
      this.set('showTicketForm', true);
    },
    saveTicket() {
      var m = new Date();  //used for timestamp
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        text: this.get('text'),
        timestamp:(m.getUTCHours() - 7) + ":" +
                   m.getUTCMinutes() + ":" +
                   m.getUTCSeconds() + " " +
                   m.getUTCFullYear() +"/"+
                  (m.getUTCMonth()+1) +"/"+
                   m.getUTCDate()
      };
      this.set('showTicketForm', false);
      this.sendAction('saveTicket', params);
    }
  }
});
