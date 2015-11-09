Template["new-party"].helpers({
    party: function () {
        if (this.partyId) {
            return Parties.findOne({_id: this.partyId});
        } else {
            return {}
        }
    }
});

Template["new-party"].events({

    "submit .new-party": function (_event) {
        _event.preventDefault();
        var newParty = {};
        newParty.name = _event.target.name.value;
        newParty.description = _event.target.description.value;
        newParty.location = _event.target.location.value;

        if (this.editing) {
            Parties.update({
                _id: this.partyId
            }, {
                $set: newParty
            });
        } else {
            Parties.insert(newParty);
        }

        Router.go('/');

    }
});