// Find the strike rate of a batsman for each season

const problem7 = (connection, batmanX)=>{
    return connection.query(`select season, batsman, sum(strikRate)/count(*) as StrikeRate from Matches A join 
    (select  match_id,batsman, (sum(batsman_runs) *100/(count(case when wide_runs = '0' AND noball_runs = '0' then 1 else 0 end))) as strikRate
    from deliveries where batsman = "${batmanX}" group by match_id, batsman) as B
    on A.id = B.match_id group by season, batsman;
    `)
}

module.exports.problem7 = problem7;