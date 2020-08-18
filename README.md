<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" style="width: 100%;"/>

<h3 align="center">
  Challenge 02: Node.js Concepts
</h3>

<blockquote align="center">“Don't wait to plant, only have patience to harvest”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-deliver">Deliver</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

## :rocket: About the challenge

In this challenge, you must create a application to practice what you have learned in Node.js!

This will be an application to storage repositories of your portfolio, that will allow you to list, update, and delete repositories, and besides that, the repositories can also receive likes.

### Application Routes

Now that you already have the template cloned, and ready to continue, you must open the file app.js, and complete the places where there's no have code, with the code to achieve the goals of each route.

- **`POST /repositories`**: The route must receive `title`, `URL`, and `techs` inside of the request body. The URL must be the link to the Github of that repository. When registering a new project, it must be stored inside an object in the following format: `{id:" uuid ", title: 'Desafio Node.js', URL: 'http: //github.com / ...' , techs: ["Node.js", "..."], likes: 0} `; Make sure the ID is a UUID, and always start likes as 0.

- **`GET /repositories`**: The route that lists all repositories;

- **`PUT /repositories/:id`**: The route should only change the `title`, `URL` and `techs` of the repository that has the` id` equal to the `id` present in the route parameters;

- **`DELETE /repositories/:id`**: The route must delete a repository with the `id` present in the route parameters;

- **`POST /repositories/:id/like`**: The route must increase the number of likes from the specific repository chosen through the `id` param present in the route parameters, at each call of this route, the number of likes must be increased by 1;

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.

---

Made with 💜 by Rocketseat :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)