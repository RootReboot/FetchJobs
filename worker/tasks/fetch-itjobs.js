var fetch = require("node-fetch");

const api_key = "474e7116289ae988d0ee0a3755361c93";

const baseURL = `https://api.itjobs.pt/job/search.json?api_key=${api_key}&q=fullstack&type=1&location=18`;

async function fetchItJobs() {
  onPage = 1;
  let allJobs = [];

  while (true) {
    const res = await fetch(`${baseURL}&page=${onPage}`);
    const jsonRes = await res.json();
    const jobs = await jsonRes.results;
    console.log(jobs);
    if (jobs == undefined) {
      break;
    }
    allJobs = allJobs.concat(jobs);
    onPage++;
  }
  console.log("got jobs", allJobs.length);
}

fetchItJobs();

module.exports = fetchItJobs;
