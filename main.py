import mysql.connector
import os
import google.generativeai as genai
from google.generativeai.types import content_types

def search_departments(department_name:str)-> str:
    found = 0
    db = mysql.connector.connect(host="localhost", user="root", password="sachin@2005", database="BIT")
    cursor = db.cursor()
    cursor.execute("select Dept_Name from Departments")
    data = cursor.fetchall()
    db.close()
    for i in data:
        if i[0] == department_name:
            found = 1
            return f"Yes {department_name} Department is Available in BIT."
    if found == 0:
        return f"No,{department_name} is not available in BIT."
def students_count_in_each_department(department_name:str) -> int:
    try:
        db = mysql.connector.connect(host="localhost", user="root", password="sachin@2005", database="BIT")
        cursor = db.cursor()
        cursor.execute(f"select Number_of_students from Departments Where Dept_Name = '{department_name}'")
        data = cursor.fetchall()
        db.close()
        return data[0][0]
    
    except:
        return 0
def total_students()-> int:
    total = 0
    db = mysql.connector.connect(host = "localhost",user ='root',database = 'BIT',password = "sachin@2005")
    cursor = db.cursor()
    cursor.execute("select Number_of_students from departments")
    data = cursor.fetchall()
    db.close()
    for i in data:
        total += i[0]
    return total



functions = [students_count_in_each_department,search_departments,total_students]
instruction = "You are BIT assistant for the students of BIT - Bannari Amman Institute Of Technology.You Should assist the queries that Students ask.Check Whether the department is available before getting the count of students"
genai.configure(api_key= os.environ.get('APIKEY'))
model = genai.GenerativeModel(
    model_name="models/gemini-1.5-pro", tools=functions, system_instruction=instruction
)
def tool_config_from_mode(mode: str ):
    return content_types.to_tool_config(
        {"function_calling_config": {"mode": mode}}
    )
chat = model.start_chat(enable_automatic_function_calling=True)
tool_config = tool_config_from_mode("Auto")

response = chat.send_message(
    "Is AIDS Department available in BIT", tool_config=tool_config
)
print(response.parts[0].text)

