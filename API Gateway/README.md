<img src="../../img/logo.png" alt="Chmurowisko logo" width="200" align="right">
<br><br>
<br><br>
<br><br>

# API Gateway - Introduction

## LAB Overview

#### In this lab we will create API using API Gateway service and will connect it to Lambda function. We'll use API Gateway both as proxy and not.

## Task 1: Creating a Lambda function

1. In the AWS Management Console, on the **Services** menu, click **Lambda**.
2. Click **Create function**.
3. Select **Autor from scratch**.
4. Enter a name for the function: *student-X-api*.
5. Select **Python 3.7** as **Runtime**.
6. Click **Create function**.
7. Download [lambda file](lambda.py) and paste its content as Lambda source code.
8. Scroll down and check the checmark left to the **Enable active tracing**
9. Click **Save**.

## Task 2: Creating API using API Gateway

10. In the AWS Management Console, on the **Services** menu, click **API Gateway**.
11. Click **Create API** or **Get started** and click **OK**.
12. Choose **REST** as a protocol.
13. Choose **New API**.
14. Enter a name for your API: *student-X-api*.
15. Set **Endpoint Type** to **Regional**.
16. Click **Create API**.

## Task 3: Adding resources and methods to API.

17. Click **Actions**.
18. Select **Create Resource**.
19. Enter a name for **Resource Name**: *hello*.
20. Click **Create resource**.
21. Select **/hello** and click **Actions**.
22. Select **Create Method**.
23. Select **GET** from the dropdown.
24. Click checkmark button.
25. Select **Lambda function** as **Integration type**.
26. Turn **Use Lambda Proxy integration** on.
27. Set your function created in task 1 as **Lambda Function**.
28. Click **Save**.
29. Select your main resource.
30. Click **Actions**.
31. Select **Create Resource**.
32. Enter a name for **Resource Name**: *hello2*.
33. Click **Create resource**.
34. Select **/hello2** and click **Actions**.
35. Select **Create Method**.
36. Select **GET** from the dropdown.
37. Click checkmark button.
38. Select **Lambda function** as **Integration type**.
39. Leave **Use Lambda Proxy integration** unchecked.
40. Set your function created in task 1 as **Lambda Function**.
41. Click **Save**.

## Task 4: Deploying API

42. Click **Actions**.
43. Select **Deploy API**.
44. Select **[New stage]** as **Deployment stage**.
45. Enter a name for your stage.
46. Click **Deploy**.
47. Select your stage and clock **Logs/Tracing**.
48. Turn on:
* **Enable CloudWatch Logs** (and set **Log Level** to **INFO**)
* **Log full requests/responses data**
* **Enable Detailed CloudWatch Metrics**
* **Enable X-Ray Tracing**
8. Click **Save changes**

## Task 5: Invoking both endpoints

49. Invoke endpoints related to both resources, *hello* and *hello2*. You can repeat that several times.
50. Go back to your Lambda function configuration page.
51. Click **Monitoring**.
52. Click **View logs in CloudWatch**
53. Click on the topmost LogStream and examine the difference between logged event objects.

## Task 6: Adding authorizer

54. In the AWS Management Console, on the **Services** menu, click **Lambda**.
55. Click **Create function**.
56. Enter a name, e.g. "student-X-auth-lambda".
57. Select **Python 3.6** as a runtime.
58. Choose **Create a new role from one or more templates** as a **Role**.
59. Enter a name for the role, e.g. "auth-lambda-role".
60. Click **Create function**.
61. Download [auth_lambda.py](auth_lambda.py) file and copy its content into editor field.
62. Scroll down to **Environment variables** and set a value for *auth_token* variable.
63. Click **Save**.
64. In the AWS Management Console, on the **Services** menu, click **API Gateway**.
65. Find your API and click on its name.
66. Click **Authorizers** and **Create New Authorizer**.
67. Enter a name for your authorizer, e.g. "auth-lambda-authorizer-X".
68. Set **Lambda** as the type.
69. Select your authorization Lambda which you prepared in the previous step.
70. Select **Token** as a **Lambda Event Payload**.
71. Enter a **Token Source**. Set it to "Authorization". This is the request header which will be sent to your Lambda function.
72. Set **TTL** to 30 seconds.
73. Click **Create**.
74. Click **Grant & Create** if needed.
75. Click **Test**.
76. Type your correct auth token value (the value you used in environment variables for your Lambda function).
77. Click **Test** once again.
78. Enter different value for test token and test it again. You should get a policy with explicit *Deny*.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "execute-api:Invoke",
      "Resource": "arn:aws:execute-api:eu-west-1:1234567890:ac4vomawb6/ESTestInvoke-stage/GET/"
    }
  ]
}
```
79. Click **Resources** and select **/hello**.
80. Select **GET** method and then **Method Request**.
81. In the **Settings** section expand the Authorization drop-down list to select the Lambda authorizer you just created, and then choose the check mark icon to save the choice. If your authorizer is not available, reload the page.
82. Click **Actions** and select **Deploy API**.
83. Select your stage and click **Deploy**.

Now you have GET API method with authorization.

84. Using your tool test both authorized and unathorized request.

Sample *curl* request to test the endpint without authorization token:

``
curl -s -X GET \
  'https://<URL OF YOUR API>' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
``

And with authorization token sent to the endpoint:

``
curl -s -X GET \
  'https://<URL OF YOUR API>' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: thisismytokenvalue' \
  -H 'cache-control: no-cache'
``

## END LAB

<br><br>

<center><p>&copy; 2019 Chmurowisko Sp. z o.o.<p></center>