#Hello
### Say hello to the mirror
##### post /mirror
```js
// req
{
    "my": "me"
}
```
```js
// res
{
    "my": "me"
}
```
### Say hello to joe
##### get /hello/joe?test=a
```js
// req

```
```js
// res
"hello joe"
```
### Reflect joe
##### put /mirror
```js
// req
{
    "re": "flect"
}
```
```js
// res
{
    "re": "flect"
}
```
#Errors
### 404 error!!!!!!
##### get /404
```js
// req

```
```js
// res
{
    "code": "ResourceNotFound",
    "message": "/404 does not exist"
}
```
### 404 error!!!!!!
##### get /rawr
```js
// req

```
```js
// res
{
    "code": "ResourceNotFound",
    "message": "/rawr does not exist"
}
```
#Delete
### No errors here
##### delete /mirror
```js
// req
{
    "de": "lete"
}
```
```js
// res
{
    "de": "lete"
}
```