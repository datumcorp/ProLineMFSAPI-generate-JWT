"use strict"; 

var moment = require("moment")
	, _ = require("lodash")
	, jwt = require("./mfsjwtlib")
	;

var config = {
	"claimUrl":"mfs.datumcorp.com",
	"port": 1313,
	"urlpath": "/api/claim?format=json",
	"APIClientId": "mfs-demo-1313",
	"APIClientSecret": "81d5c5c2fb42908bb4cf5a32056b1fc05fe98c7533bee4071a8e649e8e0c8dae"
}

var getClaimOpt = {claimUrl: config.claimUrl, port: config.port, urlpath: config.urlpath};
jwt.getClaim(getClaimOpt, function(err,cresp){
	if(cresp){
		console.log("header:", JSON.stringify(cresp.header,null,2))
		console.log("claim:", JSON.stringify(cresp.claim,null,2))
		var opts = {
			claim: cresp.claim,
			header: cresp.header,
			secret: config.APIClientSecret,
		}
		jwt.generateJWT(opts,function(err,jwtresult){
			console.log("jwtresult: ",jwtresult);
		});

	}else{
		console.log(err);
	}
})
