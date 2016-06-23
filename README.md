# ProLineMFSAPI-generate-JWT
Javascipt code to generate JWT for use with Proline MFS Api. support for both nodejs and browser.

MFS Demo Server : http://mfs.datumcorp.com:1313

Datum ClearMind Sdn Bhd.<br/>
Website: http://www.datumcorp.com/

# ProLine MFS Portal API

A set of apis to retrieve Proline data thru MFS server

---

### __GET /Claim__

Get list of Customers

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

{
  "claim": {
    "iss": "MFSSelfHost_1.1.3.0",
    "sub": "MFSService Portal API",
    "nbf": 1462546362,
    "exp": 1465224762,
    "iat": 1462546362,
    "cid": "ApiClientId"
  },
  "header": {
    "alg": "HS512",
    "typ": "JWT"
  },
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
  }
}
```

---

### __GET /Customers__

Get list of Customers

#### Sample URL
http://mfs.datumcorp.com:1313/api/Customers

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

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

{
  "data": [
    {
      "ID": 760,
      "AccNo": "CUS11-00003",
      "Status": "ACTIVE",
      "Name": "TechTech Sdn Bhd",
      "OfficeTelNo": "4233 2222",
      "HomeTelNo": "",
      "MobileTelNo": "",
      "Fax": "4233 3333",
      "Email": "techtech@example.com,tech2@example.com",
      "ContactPerson": "Techi",
      "Add1": "3, Jalan Taman Taman 4,",
      "Add2": "Kampung Atas Tol,",
      "Add3": "Kuala Terengganu,",
      "Add4": "",
      "Add5": "",
      "ContactCategory": "Customer",
      "G30": 301,
      "ContactClass": "Company",
      "G31": 311,
      "OGID": 0,
      "OG": "All",
      "State": "Terengganu",
      "Zip": "21070",
      "Country": ""
    },
    ...
  ],
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
  }
}
```

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
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

id = 55 [integer]

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

{
  "data": {
    "ID": 760,
    "AccNo": "CUS11-00003",
    "Status": "ACTIVE",
    "Name": "TechTech Sdn Bhd",
    "RegDate": "2011-01-01T00:00:00.0000000+08:00",
    "InputDate": "1900-01-01T00:00:00.0000000+08:00",
    "UpdateDate": "2016-03-17T12:38:46.0630000+08:00",
    "OfficeTelNo": "4233 2222",
    "HomeTelNo": "",
    "MobileTelNo": "",
    "Fax": "4233 3333",
    "Email": "techtech@example.com,tech2@example.com",
    "ContactPerson": "Techi",
    "Add1": "3, Jalan Taman Taman 4,",
    "Add2": "Kampung Atas Tol,",
    "Add3": "Kuala Terengganu,",
    "Add4": "",
    "Add5": "",
    "ContactCategory": "Customer",
    "G30": 301,
    "ContactClass": "Company",
    "G31": 311,
    "CurrencyCode": "MYR",
    "Currency": "Malaysian Ringgit",
    "OGID": 0,
    "OG": "All",
    "State": "Terengganu",
    "Zip": "21070",
    "Country": "",
    "BillingID": 43,
    "Code": "",
    "Website": "",
    "TaxNo": "",
    "Qualifications": "",
    "SubContacts": [
      {
        "ID": 43,
        "ACCID": 760,
        "IsBillingAddress": true,
        "Status": "DISABLED",
        "InputDate": "1900-01-01T00:00:00.0000000+08:00",
        "UpdateDate": "2016-04-06T10:14:22.8830000+08:00",
        "OfficeTelNo": "4233 2222",
        "HomeTelNo": "",
        "MobileTelNo": "",
        "Fax": "4233 3333",
        "Email": "techtech@example.com,tech2@example.com",
        "ContactPerson": "Techi",
        "Add1": "3, Jalan Taman Taman 4,",
        "Add2": "Kampung Atas Tol,",
        "Add3": "Kuala Terengganu,",
        "Add4": "",
        "Add5": "",
        "State": "Terengganu",
        "Zip": "21070",
        "Country": "",
        "Zone": "Atas Tol",
        "PremiseType": "Others",
        "Salutation": "Mr.",
        "Position": "",
        "Code": "",
        "Website": ""
      }
    ]
  },
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
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

### __POST /Customers/{id}__

Update Customers details

#### Sample URL
http://mfs.datumcorp.com:1313/api/Customers/55

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

* id = 55 [integer] - customer id

__Optional__

none

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

### __GET /Services__

Get list of Service Reports

#### Sample URL
http://mfs.datumcorp.com:1313/api/Services

#### Headers
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

#### Url Params
__Required__

none

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

{
  "data": [
    {
      "ID": "118",
      "TrxDT": "2013-03-15T00:00:00.0000000+08:00",
      "SRNo": "13030030",
      "CustID": "760",
      "CustName": "TechTech Sdn Bhd",
      "Add1": "3, Jalan Taman Taman 4,",
      "Add2": "Kepong Industri Park,",
      "Add3": "Kepong,",
      "Add4": "",
      "Add5": "",
      "State": "Selangor",
      "Zip": 0,
      "Country": "",
      "OfficeTelNo": "4233 2222",
      "HomeTelNo": "",
      "MobileTelNo": "",
      "Fax": "4233 3333",
      "Email": "",
      "ContactPerson": "Techi",
      "OGID": 30,
      "OG": "Datum Pest Control Sdn. Bhd.",
      "InputDate": "2013-03-15T14:51:16.0830000+08:00",
      "UpdateDate": "1900-01-01T00:00:00.0000000+08:00",
      "CurrencyCode": "MYR",
      "Currency": "Malaysian Ringgit",
      "Technician": "Mohd Ali Bin Ahmad",
      "Info": "3, Jalan Taman Taman 4, \r\nKepong Industri Park, \r\nKepong, \r\n Selangor.\r\n\r\nAttn: Mr. Techi\r\nOffice: 4233 2222\r\nFax: 4233 3333\r\n",
      "Info2": "3, Jalan Taman Taman 4, \r\nKepong Industri Park, \r\nKepong, \r\n Selangor.\r\n\r\nAttn: Mr. Techi\r\nOffice: 4233 2222\r\nFax: 4233 3333\r\n",
      "Posted": true,
      "InternalNotes": "",
      "Instructions": "",
      "Report": "",
      "AMLID": 43,
      "CMFID": 7,
      "CLDID": 10,
      "StartDate": "1900-01-01T00:00:00.0000000+08:00",
      "EndDate": "1900-01-01T00:00:00.0000000+08:00",
      "Duration": 0,
      "Billable": false,
      "NatureOfService": "Routine Inspection/Checking",
      "WorkType": ""
    },
    ...
  ],
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
  }
}
```

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
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

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

{
  "data": {
    "R1": "No. 621, Block B, Dataran Mentari,",
    "R2": "2, Jalan PJS 8/5, Bandar Sunway,",
    "R3": "46150 Selangor, Malaysia.",
    "TaxNo": "aaaa",
    "Email": "info@datumpestcontrol.com",
    "Website": "www.datumpestcontrol.com",
    "OGID": "Datum Pest Control Sdn. Bhd.",
    "CompReg": "556677-D",
    "Phone": "03-5902 9988",
    "Fax": "03-5902 8888",
    "Logo": "C:\\Devel\\DBConfig\\MFS\\Logo\\Logo0.gif",
    "CustName": "TechTech Sdn Bhd",
    "CustAddress": "No.8,  Lot 201 Jalan 2/18, \r\nKampung Tasek Tambahan, \r\nAmpang, \r\n Selangor \r\nMALAYSIA",
    "CustContact": "Techi",
    "State": "Selangor",
    "Country": "MALAYSIA",
    "BillCustAddress": "No.8,  Lot 201 Jalan 2/18, \r\nKampung Tasek Tambahan, \r\nAmpang, \r\n68000 Selangor \r\nMALAYSIA",
    "Info": "3, Jalan Taman Taman 4, \r\nKepong Industri Park, \r\nKepong, \r\n Selangor.\r\n\r\nAttn: Mr. Techi\r\nOffice: 4233 2222\r\nFax: 4233 3333\r\n",
    "DocNo": "13030030",
    "Tech": "",
    "Team": "",
    "TechLicense": "",
    "WorkType": "Day Work",
    "Signature": "C:\\plfiles\\DEMOPEST_30BILLING\\201303\\13030030_M\\Signature.png",
    "TechSignature": "C:\\plfiles\\DEMOPEST_30BILLING\\201303\\13030030_M\\TechSignature.png",
    "DocDT": "2013-03-15T00:00:00.0000000+08:00",
    "DocDTshort": "15/03/2013",
    "NatureOfService": "Routine Inspection/Checking",
    "Freq": "Weekly",
    "PaymentMode": "No Payment received",
    "PaymentAmt": "MYR 0.00",
    "Rating": "TechTech Sdn Bhd",
    "Feedback": "",
    "Remarks": "",
    "Instructions": " ",
    "Qty": 1,
    "UOM": "",
    "StartGeo": "0,0",
    "StartGeoLink": "",
    "EndGeo": "0,0",
    "EndGeoLink": "",
    "TechList": [
      {
        "Name": ""
      }
    ],
    "Targets": [
      {
        "Desc": "",
        "Code": "",
        "StockDesc": "",
        "Target": "",
        "TargetCode": "",
        "Tag": "",
        "Status": "",
        "Qty": "",
        "LastQty": "",
        "FQty": 0,
        "FLastQty": 0,
        "UOM": "",
        "Action": "",
        "Area": "",
        "Brand": "",
        "Instructions": ""
      }
    ],
    "Items": [
      {
        "Desc": "",
        "Code": "",
        "StockDesc": "",
        "Target": "",
        "TargetCode": "",
        "Tag": "",
        "Status": "",
        "Qty": "",
        "LastQty": "",
        "FQty": 0,
        "FLastQty": 0,
        "Concentrated": "",
        "Diluted": "",
        "UOM": "",
        "Action": "",
        "Area": "",
        "Brand": "",
        "Instructions": "",
        "UOMDX": "",
        "UOMDY": "",
        "DX": "",
        "DY": "",
        "Toxic": ""
      }
    ],
    "Images": [
      {
        "Url": "",
        "FName": "",
        "FNameNoExt": "",
        "Comments": "",
        "Lat": "",
        "Lng": "",
        "Aspect": "Landscape"
      }
    ],
    "EquipStr": "",
    "mfsapp": "MFSSelfHost",
    "mfsver": "1.1.3.0",
    "OrderNo": "B1106-001-0",
    "PremiseType": "Others",
    "Delivery": "",
    "DeliveryNo": "",
    "BillingMode": "Monthly",
    "SetTitle": "Ampang"
  },
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
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
* jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJNRlNTZWxmSG9zdF8xLjEuMi4wIiwic3ViIjoiTUZTU2VydmljZSBQb3J0YWwgQVBJIiwibmJmIjoxNDYyNDY0NTk1LCJleHAiOjE0NjUxNDI5OTUsImlhdCI6MTQ2MjQ2NDU5NSwiY2lkIjoiQXBpQ2xpZW50SWQifQ.LiYyz9ktdViEODzwFb3eMeay8-nMGIKpVL7rBSxcb9AQ7gYXtTbACsH45P-irngto2otc6uOdzPE94ZUMkKtJQ" [string] (Refer to end of document for method to generate jwt)

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

{
  "data": {
    "CustId": 760,
    "CustName": "TechTech Sdn Bhd",
    "Address": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu",
    "MailTo": "techtech@example.com,tech2@example.com",
    "AccMth": 2016005,
    "AsAt": "May 2016",
    "details": [
      {
        "intRow": 1,
        "AccNo": "CUS11-00003",
        "DunNo": "0",
        "CustID": 760,
        "AccName": "TechTech Sdn Bhd",
        "Address": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu",
        "OPhone": "4233 2222",
        "Fax": "4233 3333",
        "Email": "techtech@example.com,tech2@example.com",
        "Contact": "Techi",
        "Salutation": "Mr.",
        "MailTo": "techtech@example.com,tech2@example.com",
        "AID": 2,
        "AccID": 760,
        "InstNo": 1,
        "DocDT": "2011-06-14T00:00:00.0000000+08:00",
        "XDocDT": "2011-06-14T00:00:00.0000000+08:00",
        "OGID": 32,
        "OG": "All",
        "TrxType": "D",
        "DocNo": 45,
        "LAmt": 4500,
        "OAmt": 4500,
        "CC": "MYR",
        "LXAmt": 4500,
        "OXAmt": 4500,
        "JOSAmt": 0,
        "IsSettled": false,
        "CCDesc": "Malaysian Ringgit",
        "Desc1": "INV11-0001",
        "SrcNo": "D45",
        "InvNo": "INV11-0001",
        "TermsMonth": 0,
        "V_StartDT": 0,
        "V_EndDT": 0,
        "V_OPrice": 0,
        "V_LPrice": 0,
        "V_LastQty": 0,
        "V_CurrentQty": 0,
        "V_UsageQty": 0,
        "SCC": "DLMSP1G$",
        "InvAmt": 4500,
        "InvGrossAmt": 4500,
        "InvTaxAmt": 0,
        "GLCode": "700",
        "GLName": "Debtors Control  Account",
        "CMFID": 4,
        "UDNo": "B1103-001-0",
        "TrxNo": "",
        "PaymentMethod": ""
      },
      {
        "intRow": 2,
        "AccNo": "CUS11-00003",
        "DunNo": "0",
        "CustID": 760,
        "AccName": "TechTech Sdn Bhd",
        "Address": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu",
        "OPhone": "4233 2222",
        "Fax": "4233 3333",
        "Email": "techtech@example.com,tech2@example.com",
        "Contact": "Techi",
        "Salutation": "Mr.",
        "MailTo": "techtech@example.com,tech2@example.com",
        "AID": 9,
        "AccID": 760,
        "InstNo": 1,
        "DocDT": "2016-05-06T00:00:00.0000000+08:00",
        "XDocDT": "2016-05-06T00:00:00.0000000+08:00",
        "PDDT": "2016-06-05T00:00:00.0000000+08:00",
        "OGID": 30,
        "OG": "All",
        "TrxType": "D",
        "DocNo": 462,
        "LAmt": 4500,
        "OAmt": 4500,
        "CC": "MYR",
        "Currency": "Malaysian Ringgit",
        "LXAmt": 4500,
        "OXAmt": 4500,
        "JOSAmt": 0,
        "IsSettled": false,
        "CCDesc": "Malaysian Ringgit",
        "Desc1": "INV16-0004",
        "SrcNo": "D462",
        "InvNo": "INV16-0004",
        "TermsDesc": "30 Days Credit Term",
        "TermsVal": "30",
        "TermsMonth": 0,
        "V_StartDT": 0,
        "V_EndDT": 0,
        "V_OPrice": 0,
        "V_LPrice": 0,
        "V_LastQty": 0,
        "V_CurrentQty": 0,
        "V_UsageQty": 0,
        "SCC": "DLMSP1G$",
        "InvAmt": 4500,
        "InvGrossAmt": 4500,
        "InvTaxAmt": 0,
        "GLCode": "700",
        "GLName": "Debtors Control  Account",
        "CMFID": 0,
        "TrxNo": "",
        "PaymentMethod": ""
      }
    ]
  },
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.3.0"
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



----

# Appendix A

## JWT (JSON Web Token)

JWT is used for authenticating api requests. Below are sample javascript code to generate jwt from sa shared clientid and secret key

### browser

```javascript
(function(exports){

	var getClaim = function(opts,cb){
		var claimurl = opts.claimurl
		$.get(claimurl)
        .done(function(resp){
            console.log("getclaim=>resp: ",resp);
            cb(null,{claim: resp.claim, header: resp.header})
        })
        .fail(function(e){
            console.log("getclaim=>Error: ",e);
            cb(e)
        })
        .always(function(){console.log("getclaim=>always");})
	}
   	var genJWT = function(opts,callback){
   		var sClaim = JSON.stringify(opts.claim);
		var sHeader = JSON.stringify(opts.header);
		var key = opts.secret;
		var jwt = KJUR.jws.JWS.sign(null, sHeader, sClaim, key);
		callback(null,jwt)
   	}

   	var validateJWT = function(opts,cb){
   		var secret = opts.secret;
   		var jwt = opts.jwt;
   		var isValid = false;
		try {
			isValid = KJUR.jws.JWS.verify(jwt, secret);
		} catch (ex) {
			//alert("Error: " + ex);
			isValid = false;
		}
		cb(null,isValid);
   	}



   	exports.generateJWT = function(opts,fn){
        return genJWT(opts,fn);
    };
    exports.getClaim = function(opts,fn){
        return getClaim(opts,fn);
    };
    exports.validateJWT = function(opts,fn){
        return validateJWT(opts,fn);
    };

})(window);

window.getClaim({claimurl:"http://mfs.datumcorp.com:1313/api/claim"}, function(err,resp){})
var opts = {claim: claim, header: header, secret: apiclientsecret}
window.generateJWT(opts,function(err,jwtres){})

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