import json

def lambda_handler(event, context):
    print(json.dumps(event))
    print('Processing payment')
    #x = 2 / 0
    return 0