const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateFields(request, response, next) {
  const { url, techs } = request.body;

  if (techs && !(techs instanceof Array)) {
    return response
      .status(400)
      .json({ error: "The field `techs` must have a valid array" });
  }

  if (url && !/^(http|https):\/\/[^ "]+$/.test(url)) {
    return response
      .status(400)
      .json({ error: "The field `url` must have a valid url" });
  }

  return next();
}

function getRepositoryIndexById(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "You must provide a valid id" });
  }

  const repositoryIndex = repositories.findIndex((item) => item.id === id);
  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  request.repositoryIndex = repositoryIndex;

  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", validateFields, (request, response) => {
  const { title, url, techs } = request.body;

  if (!title || !url || !techs) {
    return response
      .status(400)
      .json({ error: "Missing params in the request" });
  }

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put(
  "/repositories/:id",
  getRepositoryIndexById,
  validateFields,
  (request, response) => {
    const { repositoryIndex } = request;
    const { title, url, techs } = request.body;

    repositories[repositoryIndex] = {
      ...repositories[repositoryIndex],
      title,
      url,
      techs,
    };

    return response.json(repositories[repositoryIndex]);
  }
);

app.delete("/repositories/:id", getRepositoryIndexById, (request, response) => {
  const { repositoryIndex } = request;

  repositories.splice(repositoryIndex, 1);

  return response.status(204).json();
});

app.post("/repositories/:id/like", getRepositoryIndexById, (request, response) => {
  const { repositoryIndex } = request;

  repositories[repositoryIndex].likes += 1;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
