# Python program to convert
# date to timestamp



import time
import datetime


string = "2024-02-15"

element = datetime.datetime.strptime(string,"%Y-%m-%d")

tuple = element.timetuple()
timestamp = time.mktime(tuple)

print(timestamp)