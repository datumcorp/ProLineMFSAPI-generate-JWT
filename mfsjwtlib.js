"use strict";

var http = require("http")
	,moment = require("moment")
	, jsrsasign = require("jsrsasign")
	;
(function(exports){

	var getClaim = function(opts, cb){
			return http.get({
	        host: opts.claimUrl,
	        port: opts.port,
	        path: opts.urlpath
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
   	var genJWT = function(opts,cb){

   		var sClaim = JSON.stringify(opts.claim);
		var sHeader = JSON.stringify(opts.header);
		var key = opts.secret;
		var jwt = jsrsasign.jws.JWS.sign(null, sHeader, sClaim, key);
		cb(null,jwt)
   	}

	exports.getClaim = function(opts,fn){
        return getClaim(opts,fn);
    };
   	exports.generateJWT = function(opts,fn){
        return genJWT(opts,fn);
    };

})(exports);