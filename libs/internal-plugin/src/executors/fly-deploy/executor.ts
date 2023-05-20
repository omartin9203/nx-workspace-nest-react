import { FlyDeployExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(options: FlyDeployExecutorSchema) {
  console.log('Executor ran for FlyDeploy -> ', process.env.FLY_API_TOKEN);
  const cwd = options.distLocation;
  const results = execSync(`fly apps list`);
  if (results.toString().includes(options.flyAppName)) {
    execSync(`fly deploy`, { cwd });
  } else {
    // consult https://fly.io/docs/reference/regions/ to get best region for you
    execSync(`fly launch --now --name=${options.flyAppName} --region=mad`, {
      cwd,
    });
  }
  return {
    success: true,
  };
}
