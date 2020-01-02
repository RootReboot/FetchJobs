# Fetch Jobs Project

Based on https://www.youtube.com/watch?v=lauywdXKEXI from CodeDrip.

Project that fetches jobs from the ItJobs API, using cron from hour to hour and persist them in a redis server. It uses a express + node API to fetch the jobs from the redis server.
React Client app created using create-react-app.
Using react hooks.

## What I Learned with the project:

## Redis:

The basics of the basics and the advantages of an in memory database (cache).

## To Run:

To use Redis in windows I installed a linux subsystem. I went with ubuntu.
To start:

- service redis-server start

To see data:

1. redis-cli
2. get itjobs

Run the cron worker:

1. node worker/index

Run the client:

1. yarn start

Run the api:

1. node api/index

## React:

Learned the basics of using react without class components. Using functions components with react hooks.
Need to learn more about react hooks in the future and how is used with redux. Since react hooks are going to be the standard, when react suspense is stable. Substituting class components.

## Express:

Nothing, only a simple get request is made.
