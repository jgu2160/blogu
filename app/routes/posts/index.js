import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        Ember.$('.loading').removeClass('hidden');
    },
    model: function() {
        return this.store.find('post');
    },
    afterModel: function() {
        Ember.$('.loading').addClass('hidden');
    }
});
