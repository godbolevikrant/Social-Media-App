require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

const port = process.env.PORT || 3000;

async function start() {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

start().catch((err) => {
    console.error('Failed to start server:', err.message);
    process.exit(1);
});
    