Router.configure({layout: 'default-layout'});

Router.map(function () {
    this.route('Home', {path: '/', template: 'home'});
    this.route('NewParty', {
        path: '/new-party', template: 'new-party',
        data: function () {
            return {editing: false};
        }
    });
    this.route('EditParty', {
        path: '/edit-party/:partyId', template: 'new-party',
        data: function () {
            return {partyId: this.params.partyId, editing: true};
        }
    });
});