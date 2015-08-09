import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        var myposts = payload;
        var newpayload = { posts: myposts };
        return this._super(store, type, newpayload, id, requestType);
    }
});
