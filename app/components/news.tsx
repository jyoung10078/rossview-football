import React from "react";

const News = () => {
  const articles = [
    { title: "Big Win Last Week!", content: "The Utah Utes defeated Team X in a thrilling game." },
    { title: "Upcoming Game Preview", content: "Exciting match against Team B this weekend." },
    // Add more articles as needed
  ];

  return (
    <section id="news" className="news">
      <h2>Latest News</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
