import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        var posts = payload;
        var newpayload = { posts: posts };
        return this._super(store, type, newpayload, id, requestType);
    },
    extractSingle: function(store, type, payload, id, requestType) {
        var post = payload;
        var newpayload = { post: post };
        return this._super(store, type, newpayload, id, requestType);
    }
});
