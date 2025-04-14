import React from "react";

const Schedule = () => {
  const games = [
    { date: "April 20, 2025", opponent: "Team A", location: "Home" },
    { date: "April 27, 2025", opponent: "Team B", location: "Away" },
    // Add more games as needed
  ];

  return (
    <section id="schedule" className="schedule">
      <h2>Upcoming Games</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.date}</td>
              <td>{game.opponent}</td>
              <td>{game.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
