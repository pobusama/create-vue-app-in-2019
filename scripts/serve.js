#!/usr/bin/env node

const inquirer = require("inquirer");
const glob = require("glob");
const { spawn } = require("child_process");
const { promisify } = require("util");
const spawnAsync = promisify(spawn);

function getAllModules() {
  const files = glob.sync("src/views/*/", {
    ignore: "src/views/misc/"
  });

  return files.map(file => /^src\/views\/([\w-]+)\/$/.exec(file)[1]);
}

(async function() {
  const { module } = await inquirer.prompt([
    {
      type: "list",
      name: "module",
      message: "Select one of the modules to serve 🚀 ",
      choices: ["All", ...getAllModules()]
    }
  ]);

  process.env.VUE_APP_MODULE = module === "All" ? "" : module;
  await spawnAsync("vue-cli-service", ["serve", "--open"], {
    stdio: "inherit"
  });
})();
