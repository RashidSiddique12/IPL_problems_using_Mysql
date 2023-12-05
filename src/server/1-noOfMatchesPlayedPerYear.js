const problem1 = (connection) => {
  return connection.query(
    `Select season, count(season) as matches from Matches group by season`
  );
};

module.exports.problem1 = problem1;