

Template.home.helpers({
    parties : function() {
        return Parties.find().fetch();
    }
});

Template.home.events({
    'click #editItem' : function(e){
        Router.go('/edit-party/'+this._id);
    }
});


Template.home.events({
    'click #newItem' : function(e){
        Router.go('/new-party');
    }
});