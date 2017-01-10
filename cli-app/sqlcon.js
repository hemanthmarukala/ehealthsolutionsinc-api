var sql = require('mssql');



sql.connect("Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=True;Initial Catalog=Documents;Data Source=Arvind;Use Procedure for Prepare=1;Auto Translate=True;Packet Size=4096;Workstation ID=ARVIND;Use Encryption for Data=False;Tag with column collation when possible=False
").then(function() {

new sql.Request().query('select * from document').then(function(recordset){
console.dir(recordset);
}).catch(function(err){});

new sql.Request().input('input_parameter', sql.Int, value)
.output('output_parameter', sql.VarChar(50))
.execute('procedure_name').then(function(recordsets){
console.dir(recordsets);
}).catch(function(err){
});

sql.query`select * from document where id = $(value)`.then(function(recordset){
console.dir(recordset);
}).catch(function(err){

});
catch(function(err) {
});

//app.get('/', function(req, res)){
//res.send('GET request to the homepage')
//})

//app.post('/', function(req, res)){
//res.send('POST request to the homepage')
//})
