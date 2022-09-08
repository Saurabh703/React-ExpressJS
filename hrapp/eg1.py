import cx_Oracle as oracle;
try:
	connection=oracle.connect("hr/hr@localhost:1521/xepdb1")
	print("Connection to Oracle database")
	cursor=connection.cursor()
	cursor.execute("select * from employees")
	for row in cursor:
		print(row)
	cursor.close()
except oracle.DatabaseError as e:
		print(f"Problem {e}");
 finally:
	connection.close()
	print("Connection to Oracle has been closed")