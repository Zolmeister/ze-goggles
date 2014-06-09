# Static api documentation generation

#### example
```js
[
   {
      "title":"Hello",
      "description":"Say hello to Joe",
      "req":{
         "method":"post",
         "uri":"http://localhost:3001/mirror",
         "json":{
            "my":"me"
         }
      },
      "res":{
         "statusCode":200,
         "headers":{
            "content-type":"application/json",
            "content-length":"11",
            "date":"Mon, 09 Jun 2014 06:45:03 GMT",
            "connection":"keep-alive"
         },
         "body":{
            "my":"me"
         }
      }
]
```

#### result

```md
  #Hello
  ### Say hello to the mirror
  ##### post /mirror
  ```!
  // req
  {
      "my": "me"
  }
  ```!
  ```!
  // res
  {
      "my": "me"
  }
  ```!
```
