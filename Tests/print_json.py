import json    
import pprint
import urllib2

req = urllib2.Request('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAi6T13R5pLSNc_uzwd-0E5VljwzSzN0xw', headers = 'Content-Type: application/json')
#json_data = open('result_A.json')
object = json.load(req)

#pprint.pprint(data)
trips = object['trips']
for tripOption in trips['tripOption']:
    print('Total price: ' + str(tripOption['saleTotal']))
    for slice in tripOption['slice']:    
        for segment in slice['segment']:
            print('Duration: ' + str(segment['duration']))
            for leg in segment['leg']:
                print('Destination: ' + str(leg['destination']))
    

    #print(tripOption['saleTotal'])
    #print(segment['duration'])
    #print(segment['cabin'])
    #pprint.pprint(segment['cabin'])
    #print(leg['destination'])
    
