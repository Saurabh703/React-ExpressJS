const express=require("express");
const mariadb=require("mariadb");
application=express();

function getCustomers(request,response)
{
mariadb.createConnection({
"user": "root",
"password": "password",
"host": "localhost",
"port": 5506,
"database": "sakila"
}).then(function(connection){

connection.query("select * from customer").then(function(rows){
response.send(rows);
connection.end();

}).catch(function(err){
response.send(err.message);
console.log(err.message);
});

}).catch(function(err){
response.send(err.message);
console.log(err.message);
});

} // get customers ends here

application.get("/customers",function(request,response){
getCustomers(request,response);
});
application.listen(3000,function(err){
if(err)
{
console.log(err.message);
return;
}
console.log("Video Rental Library Server is listening on port 3000");
});