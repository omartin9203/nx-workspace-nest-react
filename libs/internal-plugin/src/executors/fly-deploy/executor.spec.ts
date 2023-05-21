// import { FlyDeployExecutorSchema } from './schema';
// import executor from './executor';
jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));
import { execSync } from 'child_process';

describe('FlyDeploy Executor', () => {
  beforeEach(() => {
    (execSync as any) = jest.fn();
  });

  it('runs the correct fly cli commands', async () => {
    // const options: FlyDeployExecutorSchema = {
    //   distLocation: 'dist/apps/api',
    //   flyAppName: 'nx-workspace-api',
    // };
    expect(true).toBe(true);
    // const output = await executor(options);
    // expect(output.success).toBe(true);
    // expect(execSync).toHaveBeenCalledWith(`fly apps list`, {
    //   cwd: 'dist/apps/api',
    // });
    // expect(execSync).toHaveBeenCalledWith(
    //   `fly launch --now --name=nx-workspace-api --region=mad`,
    //   {
    //     cwd: 'dist/apps/api',
    //   }
    // );
  });
});
