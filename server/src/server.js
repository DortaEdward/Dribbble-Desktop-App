const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const volleyball = require('volleyball');
const config = require('./config');

const Bot = require('./Hooks/Puppeteer');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(volleyball);

const PORT = config.PORT || 5001;

app.get('/', async (req,res) => {
  const {
    webDesign,
    mobile,
    query
  } = req.params;
  
  try {
    const bot = new Bot();
    await bot.init();
    res.status(200).json({status:200,message:'It Worked'})
  } catch (error) {
    res.status(500).json({status:500,message:'There was an error', error:error})
  }
})

app.listen((PORT), () => {
  console.log(`Listening on Port: ${PORT}`);
});


