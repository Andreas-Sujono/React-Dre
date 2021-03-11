const path = require('path');
const execa = require('execa');
const cherryPick = require('cherry-pick').default;
const { green, cyan, red } = require('chalk');

// make sure path of build file same as rollup.config
const libRoot = path.join(__dirname, './lib');
const modulesRoot = path.join(__dirname, './src/modules');

const step = (name, fn) => async () => {
  console.log(cyan('Building: ') + green(name));
  await fn();
  console.log(cyan('Built: ') + green(name));
};

const shell = (cmd) =>
  execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });

const buildDist = step('Browser distributable and per modules dist file', async () => {
  await shell('rollup -c');
});

const buildDirectories = step('Linking directories', () =>
  cherryPick({
    inputDir: modulesRoot,
    cjsDir: 'cjs',
    esmDir: 'esm',
    typesDir: 'types/modules',
    cwd: libRoot,
  }),);

Promise.resolve(true)
  .then(buildDist)
  .then(buildDirectories)
  .catch((err) => {
    if (err) console.error(red(err.stack || err.toString()));
    process.exit(1);
  });
