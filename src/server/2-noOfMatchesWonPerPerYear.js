// Number of matches won per team per year in IPL.


const problem2 =  (Connection) =>{
    return Connection.query(`select season, winner, count(winner) as Number from Matches where winner != "" group by season,winner;  
    `)
}

module.exports.problem2 = problem2;