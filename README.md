# ProLineMFSAPI-generate-JWT
Javascipt code to generate JWT for use with Proline MFS Api. support for both nodejs and browser.

MFS Demo Server : http://mfs.datumcorp.com:1313

Datum ClearMind Sdn Bhd.<br/>
Website: http://www.datumcorp.com/

# ProLine MFS Portal API

A set of apis to retrieve Proline data thru MFS server

Requires MFSSelfHost 1.1.9+

__Warning: These api calls are to be use for server to server only. Using the calls in browser environment can be a security risk__

## Table of Contents

* [APIs](#proline-mfs-portal-api)
  - [GET /Claim](#get-claim)
  - [GET /Customers](#get-customers)
  - [GET /Customers/{id}](#get-customersid)
  - [POST /Customers/{id}](#post-customersid)
  - [GET /Schedules/{id}](#get-schedulesid)
  - [GET /Services](#get-services)
  - [GET /Services/{id}](#get-servicesid)
  - [GET /sform/{id}](#get-sformid)
  - [GET /Statement/{id}](#get-statementid)
  - [GET /Invoice/{id}](#get-invoiceid)
* [Appendix A](#appendix-a)

---

### __GET /Claim__

Get claim to be used in jwt generation

#### Sample URL
http://mfs.datumcorp.com:1313/api/Claim

#### Headers
none

#### Url Params
__Required__

none

__Optional__

* format=json [string] - format of response, can be json,xml, jsv, csv

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8


```

[Sample /Claim Response data](/sampledata/GET_Claim.json)

---

### __GET /Customers__

Get list of Customers

#### Sample URL
http://mfs.datumcorp.com:1313/api/Customers

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

none

__Optional__

* OGID = 0 [integer,default=0] - Org. Group id
* limit = 10 [integer, default=0] - result limit per page
* page = 1 [integer, default=1] - current result page
    * &page=1&limit=10
* filter = "" [string] - search customer by Name, AccNo,Contact
* sort = "" [string] - list of property to sort by. use '-' to indicate descending order
    * &sort=ContactCategory,-Name 
* format=json [string] - format of response, can be json,xml, jsv, csv

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8


```

[Sample /Customers Successful Response data](/sampledata/GET_Customers.json)

__Unauthorized (401)__
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check your parameters",
    "ErrorCode": 400
}
```

---

### __GET /Customers/{id}__

Get Customer info by customer id

#### Sample URL
http://mfs.datumcorp.com:1313/api/Customers/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

id = 55 [integer]

__Optional__

* format=json [string] - format of response, can be json,xml, jsv, csv

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

```

[Sample /Customers/{id} Successful Response data](/sampledata/GET_Customers_id.json)

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id is valid",
    "ErrorCode": 400
}
```

---

### __POST /Customers/{id}__

Update Customers details

#### Sample URL
http://mfs.datumcorp.com:1313/api/Customers/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 55 [integer] - customer id

__Optional__

* format=json [string] - format of response, can be json,xml, jsv, csv

#### Data Params
__Required__

none

__Optional__

Include Property only if changes are to be made:

* OPhone [string] - Office Phone, 
* HPhone [string] - Home Phone
* Mobile [string] - Mobile/Cellular No
* Fax [string] - Fax No
* Email [string] - Email address
* Contact [string] - Contact person name
* Add1 [string] - Address row 1
* Add2 [string] - Address row 2
* Add3 [string] - Address row 3
* Add4 [string] - Address row 4
* Add5 [string] - Address row 5
* City [string] - City name
* Zip [string] - Zip no or postcode
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "rowsaffected": 1,
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.6.0"
  }
}
```

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id is valid",
    "ErrorCode": 400
}
```

---

### __GET /Schedules/{id}__

Get list of Schedules

#### Sample URL
http://mfs.datumcorp.com:1313/api/Schedules/760

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 120 [integer] - customer id

__Optional__

* type = week [string,default="week"] - type of list to return
  * week - schedules from now to 1 week from now
  * month - schedules from now to 1 month from now
  * recent - schedules for the last 1 week
* format=json [string] - format of response, can be json,xml, jsv, csv

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

```

[Sample /Schedules/{id} Successful Response data](/sampledata/GET_Schedules_id.json)

__Unauthorized (401)__
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check your parameters",
    "ErrorCode": 400
}
```

---

### __GET /Services__

Get list of Service Reports

#### Sample URL
http://mfs.datumcorp.com:1313/api/Services

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* custid = 120 [integer] - customer id, filter by customer

__Optional__

* OGID = 0 [integer,default=0] - Org. Group id
* limit = 10 [integer, default=0] - result limit per page
* page = 1 [integer, default=1] - current result page
    * &page=1&limit=10
* filter = "" [string] - search customer by Name, SRNo
* sort = "" [String] - list of property to sort by. use '-' to indicate descending order
    * &sort=ContactCategory,-Name 

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

```

[Sample /Services Successful Response data](/sampledata/GET_Services.json)

__Unauthorized (401)__
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check your parameters",
    "ErrorCode": 400
}
```

---

### __GET /Services/{id}__

Get Service Report by id or SRNo

#### Sample URL
http://mfs.datumcorp.com:1313/api/Services/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 55 [integer]

__Optional__

none

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

```

[Sample /Services/{id} Successful Response data](/sampledata/GET_Services_id.json)

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id and/or SRNo is valid",
    "ErrorCode": 400
}
```
---

### __GET /sform/{id}__

Get Service Report in pdf format
#### Sample URL
http://mfs.datumcorp.com:1313/sform/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 55 [integer] - service report id
* type = 0 [integer] - type of download, 0 = pdf, 1 = png

__Optional__

none

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/pdf

```

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id and/or SRNo is valid",
    "ErrorCode": 400
}
```
---

### __GET /Statement/{id}__

Get Statement (outstanding balance) by customer id

#### Sample URL
http://mfs.datumcorp.com:1313/api/Statement/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 55 [integer] - customer id
* asat = 2016001 [integer] - period date, format: yyyy0MM

__Optional__

none

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

```

[Sample /Statement/{id} Successful Response data](/sampledata/GET_Statement_id.json)

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id is valid",
    "ErrorCode": 400
}
```


----

### __GET /Invoice/{id}__

Get Invoice in pdf format

#### Sample URL
http://mfs.datumcorp.com:1313/api/Invoice/INV16-0004

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiI..*(see appendix for full sample)*" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = INV16-0004 [string] - invoice document no.

__Optional__

* docid = 0 [integer] - type of invoice to print. Use to override default value only. refer to admin to get possible values for this.

#### Data Params
__Required__

none

__Optional__

none
    
#### Request

```http
GET / HTTP/1.1
Accept: application/json
```

#### Response

__Success (200 OK)__
```http
HTTP/1.1 200 OK
Content-Type: application/pdf

```

__Unauthorized (401)__
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Unauthorized. Check APIClientId and/or APIClientSecret",
    "ErrorCode": 401
}
```

__Bad Request (400)__
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json; charset=utf-8

{
    "ok": false,
    "ErrorMsg":"Bad Request. Check supplied id and/or SRNo is valid",
    "ErrorCode": 400
}
```
---

# Appendix A

## JWT (JSON Web Token)

JWT is used for authenticating api requests. Below are sample javascript code to generate jwt from sa shared clientid and secret key

sample jwt:
```
eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ
```

### nodejs

```javascript
"use strict";

var http = require("http")
	,moment = require("moment")
	, async = require("async")
	, _ = require("lodash")
	, jsrsasign = require("jsrsasign") 
	;
	
var config = {
	"claimUrl":"192.168.10.163",
	"port": 3142,
	"urlpath": "/api/claim?format=json",
	"APIClientId": "ApiClientId",
	"APIClientSecret": "MFSSelfHost"
}
(function(exports){

   	var genJWT = function(callback){
   		var getClaim = function(cb){
   			return http.get({
		        host: config.claimUrl,
		        port: config.port,
		        path: config.urlpath
		    }, function(response) {
		        // Continuously update stream with data
		        var body = '';
		        response.on('data', function(d) { body += d; });
		        response.on('end', function() {

		            // Data reception is done, do whatever with it!
		            var parsed = JSON.parse(body);
		            cb(null,{
		                claim: parsed.claim,
		                header: parsed.header
		            });
		        });
		    });
   		}

   		async.waterfall([
   			getClaim,
   			function(args,cb){
   				console.log("args:",args);
   				var sClaim = JSON.stringify(args.claim);
   				var sHeader = JSON.stringify(args.header);
   				var key = config.APIClientSecret;
   				var jwt = jsrsasign.jws.JWS.sign(null, sHeader, sClaim, key);
   				cb(null,jwt)
   			}
		]
		,function(err, result){
			//console.log("result: ", result);
			callback(err,result);
		})
   	}

   	exports.generateJWT = function(fn){
        return genJWT(fn);
    };

})(exports);

var jwt = require("./mfsjwtlib")
jwt.generateJWT(function(err,jwtresult){
	console.log("jwtresult: ",jwtresult);
});

```