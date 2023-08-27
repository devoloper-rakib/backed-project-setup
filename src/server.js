const app = require('./app');
const { PORT } = require('./Config/Config');
const ConnectDB = require('../Database/DataBase');
const port = 5000 || PORT;

// Connect to MongoDB
ConnectDB();

               


























                        //  const hawMaoKhan = 'haw mao khaw';






						





app.listen(port, () => console.log(`port is listing on ${port}`));
