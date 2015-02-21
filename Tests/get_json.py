import urllib.request
import json

response = urllib.request.urlopen('https://www.google.co.uk/flights/#search;f=SJC;t=EWR,JFK,LGA;d=2012-04-05;r=2012-04-12')
data = json.load(response)   
