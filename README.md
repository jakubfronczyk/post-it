# Post It
[Check out project live](https://funny-tartufo-bc0364.netlify.app/)
<br />


## General info

PostIt is a full-stack web application that allows users to share their thoughts and messages with the world. It offers an easy-to-use interface to log in with your Gmail account and create posts. Users can also delete their posts and add comments to their own and other people's posts.

## Built With

PostIt is built using the following technologies:

* Prisma - ORM for database access and management
* React - JavaScript library for building user interfaces
* Next.js - Framework for building server-side rendered React applications
* Tailwind CSS - Utility-first CSS framework
* Railway - Platform for deploying and managing web apps and databases
* TanStack Query - Library for managing client-side data fetching and caching
* Axios - Promise-based HTTP client for the browser and Node.js
* React Hot Toast - Library for displaying toast notifications in React applications

## Getting Started
### Prerequisites
* Node.js (v14 or higher)
* npm (v7 or higher)
* A Google account for Gmail authentication

### Installation
1 Clone the repository to your local machine:
```
git clone https://github.com/your-username/postit.gitt
```
2. Install dependencies:
```
cd postit
npm install
```
3. Create a .env.local file in the root directory of the project and add the following environment variables:
```
DATABASE_URL=postgres://user:password@hostname:port/database
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
Replace user, password, hostname, port, database, your-google-client-id, and your-google-client-secret with your own values.

Note: You can obtain a Google client ID and client secret by creating a new project in the Google Cloud Console.

4. Start the development server:
```
npm run dev
```
