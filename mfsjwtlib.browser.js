
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