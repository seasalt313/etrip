module.exports = {
    name: "accountService",
    func: function($http) {
        let accountInfo = {};
        let userId = "";

        return {
            makeAccount: function(name, email, pass, car) {
                console.log("new user");
                //1) post this info here.
                $http.post('https://electric-ave.herokuapp.com/new-user', {
                    "name": "name",
                    "email": "email",
                    "pass": "pass",
                    "car": "car"
                }).then(function(response) {
                    console.log("response below");
                    console.log(response.data);
                    accountInfo = response.data;
                    // userId = response.data.id;
                })
                console.log("account creation successful");
                return accountInfo;
                //2) if response === true, new-trip view should appear to user
            },
            loginAccount: function(email, pass) {
                console.log("logging in");
                //1) post existing user below
                $http.post('https://electric-ave.com/login', {
                    "emailAddress": "emailAddress",
                    "password": "password"
                }).then(function(response) {
                    console.log("response below");
                    console.log(response.data);
                })
                console.log("existing user has logged in");
                return accountInfo867; ///???
                //2) if response === true, new-trip view should appear to user.
            },
            getAccount: function() {
                //1) GET request here
                let account = $http.get('/account').then(function(response) {
                    const incoming = response.data;
                    console.log("should be receiving account info below: ");
                    console.log(incoming);
                    angular.copy(response.data, accountInfo)
                    return response.data
                })
                //2) return trip names, and send to controller to display on page.
                return accountInfo;
            },
            postNote: function() {
                console.log("posting note");
                //1) post existing user below
                $http.post('https://electric-ave.herokuapp.com/', { //figure out what goes here
                    "note": "note",
                }).then(function(response) {
                    console.log("response below");
                    console.log(response.data);
                })
                return accountInfo; ///???
                //2) if response === true, new-trip view should appear to user.
            },

        } //closing return object

    } //closing func
} //closing module export
