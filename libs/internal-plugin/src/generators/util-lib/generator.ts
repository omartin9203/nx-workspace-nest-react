import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  installPackagesTask,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { UtilLibGeneratorSchema } from './schema';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  const name = `util-${options.name}`;
  const projectRoot = `libs/${options.directory}/${name}`;

  addProjectConfiguration(tree, options.name, {
    name,
    tags: ['type:util', `scope:${options.directory}`],
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

export default utilLibGenerator;
