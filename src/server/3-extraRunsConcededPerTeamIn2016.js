// Extra runs conceded per team in the year 2016

const problem3 = (connection)=>{
    return connection.query(`select bowling_team, sum(extra_runs) as ExtraRuns from deliveries where match_id IN (SELECT id from Matches WHERE season = "2016") group by bowling_team;`)
}

module.exports.problem3 = problem3;