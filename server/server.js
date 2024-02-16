const express = require("express");
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const server = new ApolloServer({ 
    typeDefs, 
    resolvers
});

const startApolloServer = async () => {
    await server.start();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/graphql', expressMiddleware(server))

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../some-project/dist')))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../some-project/dist/index.html'))
        })
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log('We did it!');
        })
    })
}

startApolloServer();