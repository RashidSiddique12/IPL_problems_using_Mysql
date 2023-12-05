// Find the bowler with the best economy in super overs

const problem9 = (connection) => {
  return connection.query(`SELECT
    bowler,
    (SUM(total_runs) / COUNT(CASE WHEN wide_runs = '0' AND noball_runs = '0' THEN 1 ELSE NULL END)) * 6 AS economy
FROM
    deliveries
WHERE
    is_super_over != '0'
GROUP BY
    bowler 
ORDER BY 
    economy ASC LIMIT 1;`);
};

module.exports.problem9 = problem9;
