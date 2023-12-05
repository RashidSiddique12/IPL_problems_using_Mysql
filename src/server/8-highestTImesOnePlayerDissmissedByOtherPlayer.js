// Find the highest number of times one player has been dismissed by another player

const problem8 = (connection) => {
  return connection.query(`SELECT bowler, player_dismissed, times FROM
  (SELECT  bowler, player_dismissed, count(*) AS times,
  DENSE_RANK() OVER (ORDER BY COUNT(*) DESC) AS ranking
  FROM deliveries WHERE player_dismissed !="" GROUP BY bowler, player_dismissed) AS temp
  WHERE ranking = 1;`);
};

module.exports.problem8 = problem8;
