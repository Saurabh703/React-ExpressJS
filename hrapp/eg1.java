import java.sql.*;
class eg1psp
{
public static void main(String gg[])
{
try
{
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection c;
c=DeriverManager.getConnnection("jdbc:oracle:thin:hr/hr@//localhost:1521/xepdb1");
System.out.println("Connection to oracle database");
Statement s=c.createStatment();
ResultSet r=s.executeQuery("select * from employees");
while(r.next())
{
system.out.println(r.getString("first_name").trim());
}
r.close();
s.close();
c.close();
System.out.println("Connection to oracle database closed");
}catch(Exception e)
{
System.out.println(e);
}
}
}