var fetch = require("node-fetch");
var redis = require("redis"),
  client = redis.createClient();

const { promisify } = require("util");
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const api_key = "474e7116289ae988d0ee0a3755361c93";

const baseURL = `https://api.itjobs.pt/job/search.json?api_key=${api_key}&q=fullstack&type=1&location=18`;

async function fetchItJobs() {
  onPage = 1;
  let allJobs = [];

  while (true) {
    const res = await fetch(`${baseURL}&page=${onPage}`);
    const jsonRes = await res.json();
    const jobs = await jsonRes.results;
    if (jobs == undefined) {
      break;
    }
    allJobs = allJobs.concat(jobs);
    onPage++;
  }

  console.log("got", allJobs.length, "jobs");
  //set redis
  const success = await setAsync("itjobs", JSON.stringify(allJobs));

  console.log({ success });
}

module.exports = fetchItJobs;
