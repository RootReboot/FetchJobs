var CronJob = require("cron").CronJob;

const fetchItJobs = require("./tasks/fetch-itjobs");

new CronJob("*/1 * * * *", fetchItJobs, null, true, "America/Los_Angeles");
