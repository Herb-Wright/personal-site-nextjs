/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;


const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: isGithubActions ? 'export' : 'standalone',
}

module.exports = nextConfig
