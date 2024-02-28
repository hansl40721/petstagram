const { GraphQLError } = require('graphql');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// const secret = process.env.SECRET;
const secret = "Secrets";
const expiration = "2h";

module.exports = {
	AuthenticationError: new GraphQLError("Could not Authenticate user", {
		extensions: {
			code: "UNAUTHENTICATED"
		}
	}),
  
	authMiddleware: function({req}){
		let token = req.body.token || req.query.token || req.headers.authorization || "";
    
		token = token.split(' ').pop().trim();

		if(token.length === 0){
			return req;
		}

		try{
			const {authenticatedPerson} = jwt.verify(token, secret, {maxAge: expiration})
			req.user = authenticatedPerson;
		} catch {
			console.log("invalid token");
		}
		return req;
	},

	signToken: function({ email, username, _id }){
		const payload = { email, username, _id }
		return jwt.sign({authenticatedPerson: payload}, secret, {expiresIn: expiration});
	}
}