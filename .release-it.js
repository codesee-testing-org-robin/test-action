module.exports = {
  git: {
    commitMessage: "v${version}",
    tagAnnotation: null,
    pushArgs: ["--tags"]
  },
  npm: {
    publish: false
  },
  github: {
    release: true,
    releaseName: "v${version}",
  }
};
