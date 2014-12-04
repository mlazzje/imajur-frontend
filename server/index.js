var Sequelize = require("sequelize")
var Hapi = require('hapi');
var server = new Hapi.Server(3000);

var local_settings = require('./local_settings');

var sequelize = new Sequelize(local_settings.db_name,
        local_settings.login,
        local_settings.passoword,
        {dialect: 'postgres'});

var User = sequelize.define('users', {
    id: Sequelize.UUID,
    username:  {
        type: Sequelize.STRING,
        unique: true
    },
    email:  {
        type: Sequelize.STRING,
        unique: true
    },
    role: {
        type: Sequelize.ENUM,
        values: ['user', 'moderator', 'admin']
    },
    password: Sequelize.STRING,
});

    sequelize
.sync({force: true})
    .complete(function(err) {
        if (!!err) {
            console.log('An error occurred while creating the table:', err)
        } else {
            console.log('It worked!')
        }
    })

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        User.create({
            username: 'john-doe',
            password: "lol"})
            .complete(function(err, user) {
                User.findAll().complete(function(err, us) {
                    reply(us);
                });
            });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
