const request = require('postman-request');
const https = require('https')
const chalk =require('chalk');
const axios = require('axios');

const url=  'https://geek-jokes.sameerkumar.website/api?format=json';

const fetchWithRequest = async(url) => {

   request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to jokes service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(chalk.green.bold.inverse("fetchWithRequest"),chalk.yellow.bold(body.joke) );
        }
    })
}


const fetchWithHttps = async(url) => {
    console.log();
    const request = https.request(url, (response) => {
        let data = ''
    
        response.on('data', (chunk) => {
            data = data + chunk.toString()
        })
    
        response.on('end', () => {
            const body = JSON.parse(data)
            console.log(chalk.green.bold.inverse("fetchWithHttps"),chalk.yellow.bold(body.joke) );
        })
    
    })
    
    request.on('error', (error) => {
        console.log('An error', error)
    })
    
    request.end()
}

const fetchWithAxios= async(url) => {

    const data = await axios.get(url);
    
    
    console.log(chalk.green.bold.inverse("fetchWithAxios"),chalk.yellow.bold(data.data.joke) );

    // return data.data.joke;

}


fetchWithRequest(url);
fetchWithHttps(url);
fetchWithAxios(url)
