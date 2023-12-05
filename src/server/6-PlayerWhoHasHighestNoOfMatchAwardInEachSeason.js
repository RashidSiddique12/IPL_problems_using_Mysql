// 6) Find a player who has won the highest number of Player of the Match awards for each season


const problem6 = (connection)=>{
return connection.query(`SELECT season, player_of_match, times FROM
(SELECT season, player_of_match, COUNT(player_of_match) AS times,
DENSE_RANK() OVER (PARTITION BY season ORDER BY COUNT(player_of_match) DESC) AS ranking
FROM Matches GROUP BY season, player_of_match) 
AS temp WHERE ranking = 1 ORDER BY season ASC;`)
}

module.exports.problem6 = problem6;