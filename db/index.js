const connection = require('./connection');

class DB {

    findAllDept(){
        return this.connection.promise().query("SELECT * FROM department")
    }

}

module.exports = new DB(connection)