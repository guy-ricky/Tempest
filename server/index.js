const express = require('express');
const dbConnect = require('./config/dbconnect');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const authRouter = require("./routes/authroute");
const productRouter = require("./routes/productroute");
const categoryRouter = require("./routes/categoryroute")
const brandRouter = require('./routes/brandroute')
const mpesaRouter = require('./routes/token')
const uploadRouter = require('./routes/uploadroute')
const bodyParser = require('body-parser');
const { errorHandler,notFound } = require('./middlewares/errorhandling');
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
dbConnect();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())

app.use('/api/user', authRouter);
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/mpesa', mpesaRouter)
app.use('/api/upload', uploadRouter)

app.use(notFound)
app.use(errorHandler)

try {
    app.listen(PORT, () => {
        console.log(`Server is running at PORT ${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error);
}