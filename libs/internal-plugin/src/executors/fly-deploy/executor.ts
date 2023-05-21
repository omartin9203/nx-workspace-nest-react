import { FlyDeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(options: FlyDeployExecutorSchema) {
  console.log('Executor ran for FlyDeploy -> ', options.distLocation);
  const cwd = options.distLocation;
  const results = execSync(`flyctl apps list`);
  if (results.toString().includes(options.flyAppName)) {
    execSync(`flyctl deploy`, { cwd });
  } else {
    // consult https://fly.io/docs/reference/regions/ to get best region for you
    execSync(`flyctl launch --now --name=${options.flyAppName} --region=mad`, {
      cwd,
    });
  }
  return {
    success: true,
  };
}
