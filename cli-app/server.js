var Connection = require('tedious').Connection;

var conn_str = "Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;Initial Catalog=Documents;Data Source=Arvind;Use Procedure for Prepare=1;Auto Translate=True;Packet Size=4096;Workstation ID=ARVIND;Use Encryption for Data=False;Tag with column collation when possible=False"

var config = {
	userName : 'sa',
	password: 'passw0rd!',
	server: 'arvind',
	options: {
        instanceName: "sqlexpress",
		database:'Documents'
    }
	//options:{encrypt:true, database:'Documents'}
};

var connection = new Connection(config);
connection.on('connect', function(err){
	console.log("Connected");
	executeStatement();
});

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement(){
	request = new Request('select FileType, CreateUser from FileType;',function(err){
		if(err){
		console.log(err);}
		});
		var result= "";
		request.on('row', function(columns){
			columns.forEach(function(column){
				if(column.value === null){
					console.log('NULL');
				}
				else{
					result+=column.value+" ";
				}
			});
			console.log(result);
			result = "";
		});
		request.on('done', function(rowCount, more){
			console.log(rowCount+' rows returned');
		});
		connection.execSql(request);
		
		}
		