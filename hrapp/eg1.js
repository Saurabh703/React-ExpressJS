const oracle=require('oracledb');
async function testConnection()
{
var connection=null;
try
{
conection=await oracle.getConnection({
"user": "hr",
"password": "hr",
"connectionString": "localhost:1521/xepdb1"
});
console.log("Connection to oracle");
resultSet=await connection.execute("select * from employees");
resultSet.rows.forEach((row)=>{
console.log(row);
});
console.log(`Number of employees ${resultSet.rows.length}`);
}catch(err)
{
console.log(err.message);
}
finally
{
if(connection)
{
try
{
await connection.close();
console.log("Connection to oracle has been closed");
}catch(err)
{
console.log(err);
}
}
}
}

testConnection();