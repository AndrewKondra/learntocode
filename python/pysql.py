print('Hello World!')

from sqlite3 import Error
import sqlite3

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()
    return conn

#if __name__ == '__main__':
 #   create_connection(r"C:\code\learntocode-1\python\sqlrain.db")

conn = sqlite3.connect(r"C:\code\learntocode-1\python\sqlrain.db")

def sql_fetch(conn):

    cursorObj = conn.cursor()

    cursorObj.execute('SELECT name from sqlite_master where type= "table"')

    print(cursorObj.fetchall())

sql_fetch(conn)