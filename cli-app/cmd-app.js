var sql = require("seriate");

// Change the config settings to match your 
// SQL Server and database
var config = {  
    "server": "ARVIND",
    "user": "sa",
    "password": "passw0rd!",
    "database": "Documents"
};

sql.setDefaultConfig( config );

sql.execute( {  
        query: "SELECT * FROM INFORMATION_SCHEMA.TABLES"
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );