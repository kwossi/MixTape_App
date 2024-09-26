import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Show some love with a mixtape</h2>
      <p>
        Hi, I'm Kristin and this is my personal project <b>TapeTunes</b>. A web
        app to create and share mixtapes with up to 10 songs. Just navigate to{" "}
        <b>CREATE</b> and start your very first own mixtape or upload one
        someone else shared with you. Edit and mix until your personal piece of
        art feels complete. Then head over to <b>LISTEN</b> to play the
        carefully selected tunes. Happy with the result? Go over to <b>SHARE</b>{" "}
        and spread the love.
      </p>
      <p>
        This project is still work in progress, so stay tuned for updates and
        future features. The roadmap is still long. If you have feedback, find a
        bug or just wanna say hi head over to the project's{" "}
        <a href="https://github.com/kwossi/MixTape_App" target="_blank">
          GitHub
        </a>{" "}
        page.
      </p>
    </div>
  );
};

export default Home;
