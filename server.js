const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');

const port = process.env.PORT || 5000;

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(port, () => {
	console.log(`server listening on port: ${port}`);
});
