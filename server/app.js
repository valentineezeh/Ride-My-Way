import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import router from './routes/apiRoutes';


// Call express from a variable
const app = express();

// Setting Configurations
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client')));

// Connect all routes to application
app.use(cors())
app.use('/api/v1', router);
//app.use('/api/v1', dummy_router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

const port = +process.env.PORT || 3000;
app.set('port', port);

// Turn on the server
app.listen(port, () =>{
    console.log(`The server is listening on port ${port}`);
});

export default app;