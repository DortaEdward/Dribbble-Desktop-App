const puppeteer = require('puppeteer');

class Bot{
  constructor(url){
    this.url = url;
  }

  async init(){
    this.browser = await puppeteer.launch();
    this.page = await (await this.browser.newPage()).goto(this.url);
    // await this.page.goto('https://dribbble.com/');
    // await this.page.screenshot({ path: 'dribble.png' });
  }
};

module.exports = Bot;

/**
 * Desktop | https://dribbble.com/search/shots/popular/web-design?q=dashboard
 * Mobile | https://dribbble.com/search/shots/popular/mobile?q=dashboard
 */