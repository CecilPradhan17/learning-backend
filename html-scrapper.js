import axios from 'axios';
import * as cheerio from 'cheerio';

const [, , url, selector] = process.argv;
const response = await axios.get(url);
const html = response.data;
const $ = cheerio.load(html);

if(selector){
    const content = $(selector).text();
    console.log(content);
}
else{
    console.log("Please enter a selector");
}
