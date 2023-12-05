// Find the number of times each team won the toss and also won the match

const problem5 = (connection)=>{
    return connection.query(`SELECT winner, count(winner) as times FROM Matches WHERE toss_winner = winner group by winner;
    `)

}

module.exports.problem5 = problem5