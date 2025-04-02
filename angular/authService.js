app.service("AuthService", function () {
    var validUser = {
        username: "Shraeyaa",
        password: "SD@2513"
    };

    this.authenticate = function (username, password) {
        return username === validUser.username && password === validUser.password;
    };
});
