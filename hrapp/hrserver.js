const oracle=require('oracledb');
const express=require("express");
const application=express()


async function getEmployees(request,response)
{
var connection=null;
try
{
conection=await oracle.getConnection({
"user": "hr",
"password": "hr",
"connectionString": "localhost:1521/xepdb1"
});
resultSet=await connection.execute("select * from employees");
}catch(err)
{
response.send(err.message);
}
finally
{
if(connection)
{
try
{
await connection.close();
}catch(err)
{
console.log(err);
}
}
}
response.send(resultSet.rows);
}

application.get("/employees",(request,response)=>{
getEmployees(request,response);
});

application.listen(3000,()=>{
console.log("HRServer is ready to accept http reques on port 3000:");
});

testConnection();