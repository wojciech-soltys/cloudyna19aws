import json
import boto3

QUEUE_NAME = 'my queue name'
TOPIC_ARN = 'your sns topic arn'
REGION = 'eu-west-1'

sqs = boto3.resource('sqs', region_name=REGION)
sns = boto3.client('sns', region_name=REGION)

def lambda_handler(event, context):
  print("Received event: " + json.dumps(event, indent=2))
  for record in event['Records']:
    print(record['eventID'])
    print(record['eventName'])
    print("DynamoDB Record: " + json.dumps(record['dynamodb'], indent=2))
    message_content = prepare_message(record['dynamodb'])
    send_message(message_content)
    send_notification(message_content)
    return 'Successfully processed {} records.'.format(len(event['Records']))

def send_message(data):
  queue = sqs.get_queue_by_name(QueueName=QUEUE_NAME)
  queue.send_message(MessageBody=data)

def send_notification(data):
  response = sns.publish(
    TopicArn=TOPIC_ARN,
    Message=data,
  )

def prepare_message(record):
  new_image = record.get('NewImage')
  booking_id = new_image['booking_id']['S']
  user_name = new_image['user_name']['S']
  hotel_name = new_image['hotel_name']['S']
  message = new_image['message']['S']
  print('Booking:' + booking_id + 'user:' + user_name + 'hotel_name:' + hotel_name + 'message:' + message)
  return json.dumps(
    {
      'bookingId': booking_id,
      'hotelName': hotel_name,
      'userName': user_name,
      'message': message
    }
  )