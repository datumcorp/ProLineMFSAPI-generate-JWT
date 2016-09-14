# ProLineMFSAPI-generate-JWT
Javascipt code to generate JWT for use with Proline MFS Api. support for both nodejs and browser.

MFS Demo Server : http://mfs.datumcorp.com:1313

Datum ClearMind Sdn Bhd.<br/>
Website: http://www.datumcorp.com/

# ProLine MFS Portal API

A set of apis to retrieve Proline data thru MFS server

Requires MFSSelfHost 1.1.9+

__Warning: These api calls are to be use for server to server only. Using the calls in browser environment can be a security risk__

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

{
  "data": {
    "ID": 760,
    "AccNo": "CUS11-00003",
    "Status": "ACTIVE",
    "Name": "TechTech Sdn Bhd",
    "RegDate": "2011-01-01T00:00:00.0000000+08:00",
    "InputDate": "2016-03-17T12:38:46.0630000+08:00",
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
        "InputDate": "2016-04-06T10:14:22.8830000+08:00",
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

{
  "data": [
    {
      "ID": 2359,
      "CLDID": 10,
      "StartDate": "1899-12-30T00:00:00.0000000+08:00",
      "Duration": 30,
      "G207": 20701,
      "NatureOfService": "Routine Inspection/Checking",
      "G208": 20800,
      "WorkType": "Day Work",
      "OPV": 25,
      "LPV": 25,
      "Remarks": "Please don't enter the room without permission",
      "ScheduleDate": "2016-09-14T09:00:00.0000000+08:00",
      "Billable": true,
      "COD": false,
      "SRNo": "",
      "InternalNotes": "generated",
      "Confirmed": false,
      "ContactPerson": "",
      "EndDate": "1900-01-01T00:00:00.0000000+08:00",
      "StatusID": 19001,
      "Status": "To Do",
      "Comment": "generated",
      "OldCSSID": 0,
      "NextCSSID": 0,
      "CMFID": 7,
      "TSTFID": 0,
      "SCC": "",
      "AMFID": 760,
      "AMLID": 43,
      "G180": 0,
      "Team": "",
      "SetTitle": "Set #1",
      "CustID": "760",
      "CustName": "TechTech Sdn Bhd",
      "G200": 20001,
      "OrderType": "General Pest",
      "OrderNo": "B1212-003-0"
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
      "StartDate": "2013-03-15T00:00:00.0000000+08:00",
      "EndDate": "2013-03-15T00:00:00.0000000+08:00",
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
    "BaseCC": "MYR",
    "CCDesc": "Malaysian Ringgit",
    "CustName": "TechTech Sdn Bhd",
    "CustAddress": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu \r\nMALAYSIA",
    "CustContact": "Techi",
    "State": "Terengganu",
    "Country": "MALAYSIA",
    "BillCustAddress": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu \r\nMALAYSIA",
    "Info": "3, Jalan Taman Taman 4, \r\nKampung Atas Tol, \r\nKuala Terengganu, \r\n21070 Terengganu \r\nMALAYSIA\r\n\r\nAttn: Mr. Techi\r\nOffice: 4233 2222\r\nFax: 4233 3333\r\nEmail: techtech@example.com,tech2@example.com\r\n",
    "DocNo": "16060014",
    "Tech": "Mohd Ali Bin Ahmad",
    "Team": "JML1234",
    "TechLicense": "XXX1XZXV",
    "WorkType": "Day Work",
    "StartDT": "2016-06-23T16:21:00.0000000+08:00",
    "EndDT": "2016-06-23T16:25:00.0000000+08:00",
    "DocDT": "2016-06-23T00:00:00.0000000+08:00",
    "DocDTshort": "23/06/2016",
    "NatureOfService": "Routine Inspection/Checking",
    "Freq": "Monthly",
    "PaymentMode": "Payment in Cash",
    "PaymentAmt": "MYR 20.00",
    "CustRef": "",
    "Rating": "Good",
    "Feedback": "good feedback",
    "Remarks": "my report",
    "Instructions": "Please don't enter the room without permission",
    "Qty": 1,
    "UOM": "",
    "StartGeo": "3.12343311309814,101.72029876709",
    "StartGeoLink": "https://maps.google.com/maps?q=3.12343311309814,101.72029876709&ll=3.12343311309814,101.72029876709&z=16",
    "EndGeo": "3.12354898452759,101.72029876709",
    "EndGeoLink": "https://maps.google.com/maps?q=3.12354898452759,101.72029876709&ll=3.12354898452759,101.72029876709&z=16",
    "TechList": [
      {
        "Name": "Mohd Ali Bin Ahmad"
      }
    ],
    "Targets": [
      {
        "Desc": "Applying dust to crevice and cracks",
        "Code": "E0004",
        "StockDesc": "B & G Perimeter Patrol System",
        "Target": "Bees/Wasp/Hornets",
        "TargetCode": "E",
        "Tag": "",
        "Status": "Completed",
        "StatusId": 0,
        "Qty": "1.00",
        "LastQty": "100.000",
        "FQty": 1,
        "FLastQty": 100,
        "UOM": "unit",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "Instructions": "Please don't enter the room without permission"
      },
      {
        "Desc": "Fogging",
        "Code": "E0005",
        "StockDesc": "Buffer",
        "Target": "Bees/Wasp/Hornets",
        "TargetCode": "E",
        "Tag": "",
        "Status": "Completed",
        "StatusId": 0,
        "Qty": "1.00",
        "LastQty": "100.000",
        "FQty": 1,
        "FLastQty": 100,
        "UOM": "unit",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "Instructions": "Please don't enter the room without permission"
      },
      {
        "Desc": "Cleaning cages and traps",
        "Code": "C0007",
        "StockDesc": "Chemicide 75+",
        "Target": "Lizards",
        "TargetCode": "Z",
        "Tag": "",
        "Status": "Completed",
        "StatusId": 0,
        "Qty": "1.00",
        "LastQty": "0.000",
        "FQty": 1,
        "FLastQty": 0,
        "UOM": "unit",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "Instructions": "Please don't enter the room without permission"
      }
    ],
    "Items": [
      {
        "Desc": "Applying dust to crevice and cracks",
        "Code": "E0004",
        "StockDesc": "B & G Perimeter Patrol System",
        "Target": "",
        "TargetCode": "",
        "Tag": "",
        "Status": "",
        "Qty": "2.00",
        "LastQty": "100.000",
        "FQty": 1,
        "FLastQty": 100,
        "Concentrated": "1.000",
        "Diluted": "1.000",
        "UOM": "unit",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "UOMDX": "unit",
        "UOMDY": "unit",
        "DX": "1",
        "DY": "1",
        "Toxic": ""
      },
      {
        "Desc": "Fogging",
        "Code": "E0005",
        "StockDesc": "Buffer",
        "Target": "",
        "TargetCode": "",
        "Tag": "",
        "Status": "",
        "Qty": "2.00",
        "LastQty": "100.000",
        "FQty": 1,
        "FLastQty": 100,
        "Concentrated": "1.000",
        "Diluted": "1.000",
        "UOM": "unit",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "UOMDX": "box",
        "UOMDY": "box",
        "DX": "1",
        "DY": "1",
        "Toxic": ""
      },
      {
        "Desc": "Cleaning cages and traps",
        "Code": "C0007",
        "StockDesc": "Chemicide 75+",
        "Target": "",
        "TargetCode": "",
        "Tag": "",
        "Status": "",
        "Qty": "2.00",
        "LastQty": "-",
        "FQty": 1,
        "FLastQty": 0,
        "Concentrated": "1.000",
        "Diluted": "1.000",
        "UOM": "ml",
        "Action": "Inspection/Checking on monitoring stations",
        "Area": "All Area",
        "Brand": "",
        "UOMDX": "ml",
        "UOMDY": "ml",
        "DX": "0",
        "DY": "0",
        "Toxic": ""
      }
    ],
    "Images": [
      {
        "FName": "Photo-1.png",
        "FNameNoExt": "Photo-1",
        "Comments": "my mug",
        "Lat": "0",
        "Lng": "0",
        "Aspect": "Landscape"
      }
    ],
    "EquipStr": "",
    "mfsapp": "MFSSelfHost",
    "mfsver": "1.1.9.0",
    "OrderNo": "B1212-003-0",
    "PremiseType": "Others",
    "Notes": "my report",
    "Delivery": "",
    "DeliveryNo": "",
    "BillingMode": "Monthly",
    "SetTitle": "Set #1"
  },
  "ok": true,
  "source": {
    "app": "MFSSelfHost",
    "version": "1.1.9.0"
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