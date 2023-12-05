// Top 10 economical bowlers in the year 2015

const problem4 = (connection)=>{
    return connection.query(`SELECT bowler, (sum(total_runs)/count(case when wide_runs= '0' AND noball_runs = '0' then 1 else null end))*6 as economy from deliveries where match_id IN(SELECT id FROM Matches WHERE season = 2015) 
    group by bowler order by economy ASC limit 10;`)
}

module.exports.problem4 = problem4;