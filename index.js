// Number of matches played per year for all the years in IPL
const mysql = require("mysql2/promise");
require("dotenv").config();
const prompt = require('prompt-sync')();

const {problem1} = require('./src/server/1-noOfMatchesPlayedPerYear')
const { problem2 } = require("./src/server/2-noOfMatchesWonPerPerYear");
const { problem3 } = require("./src/server/3-extraRunsConcededPerTeamIn2016");
const { problem4 } = require("./src/server/4-top10EconomicalBowlerIn2015");
const { problem5 } = require("./src/server/5-noOfTimesTeamWonTossAndMatch");
const { problem6 } = require("./src/server/6-PlayerWhoHasHighestNoOfMatchAwardInEachSeason");
const { problem7 } = require("./src/server/7-strikeRateOfABatsmanInEachSeason");
const { problem8 } = require("./src/server/8-highestTImesOnePlayerDissmissedByOtherPlayer");
const { problem9 } = require("./src/server/9-bestEconomyInSuperOver");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "IPL",
});



connection
  .getConnection()
  .then(()=>{
    console.log("Database connected");
    return connection.query(`SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name ='Matches'`)
  })
  .then((res)=>{
    if(res[0].length == 0){
      throw new Error('Matches table not present');
    }
    console.log("Matches table present in DB")
    return connection.query(`SELECT * FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = 'deliveries'`)
  })
  .then((res) => {
    if(res[0].length == 0){
      throw new Error('Deliveries table not present in DB')
    }
    console.log("Deliveries table present in DB");
    return problem1(connection);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem2(connection);
  })
  .then((res)=>{
    console.log(res[0])
    return problem3(connection);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem4(connection);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem5(connection);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem6(connection)

  })
  .then((res)=>{
    console.log(res[0]);
    // const batmanX = "DA Warner"
    const batmanX = prompt("Enter batsman name : ")
    return problem7(connection, batmanX);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem8(connection);
  })
  .then((res)=>{
    console.log(res[0]);
    return problem9(connection);
  })
  .then((res)=>{
    console.log(res[0]);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    connection.end();
  });
