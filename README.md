# ClovaWeb

This is the repository for the ClovaLink website, a secure file sharing platform for businesses.

## Project Structure

The main application code is located in the `clovalink` directory. This is a Next.js application that is built as a static site for deployment on Cloudflare Pages.

## Development

To run the development server:

```bash
cd clovalink
npm install
npm run dev
```

## Deployment

The site is deployed on Cloudflare Pages. The deployment process is as follows:

1. The build script in the root `package.json` runs the build process in the `clovalink` directory
2. After the build completes, the `deploy.js` script copies the build output from `clovalink/out` to the root `out` directory
3. Cloudflare Pages then deploys the contents of the root `out` directory

## Configuration Files

- `wrangler.toml`: Configuration for Cloudflare Pages
- `.node-version` and `.nvmrc`: Specify the Node.js version for the project
- `package.json`: Contains the build script for deployment
- `deploy.js`: Helper script to copy the build output to the root directory

## Troubleshooting

If you encounter issues with the deployment, check the following:

1. Make sure the Node.js version is set correctly in `.node-version` and `.nvmrc`
2. Verify that the build script in `package.json` is correct
3. Check that the `wrangler.toml` file has the correct configuration
4. Ensure that the `deploy.js` script is working correctly 