const mongoose = require('mongoose');

function resolveMongoUri() {
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    let uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('MONGODB_URI is not set');
    }

    if (username) {
        uri = uri.replace('${MONGODB_USERNAME}', encodeURIComponent(username));
    }

    if (password) {
        uri = uri.replace('${MONGODB_PASSWORD}', encodeURIComponent(password));
    }

    if (uri.includes('${')) {
        throw new Error('MONGODB_URI still contains unresolved variables');
    }

    return uri;
}

async function connectDB() {
    const uri = resolveMongoUri();
    await mongoose.connect(uri);
    console.log('MongoDB connected');
}

module.exports = connectDB;
