[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FStatelyCloud%2Fvercel-starter-template&env=STATELY_STORE_ID,STATELY_CLIENT_SECRET,STATELY_CLIENT_SECRET,PROFILE_SLUG,NEXT_PUBLIC_EDITABLE&envDescription=API%20keys%20and%20Store%20configuration.&envLink=https%3A%2F%2Fdocs.stately.cloud%2Fguides%2Fconnect%2F&skippable-integrations=1)

# Vercel Starter Template

This is a sample NextJS webapp that uses StatelyDB.

*NOTE:* You MUST set up your StatelyDB store and schema following the instructions below before deploying to Vercel!

## Features

- Uses a [sample schema](./schema/schema.ts) that defines the `Profile` and `Link` Item types, and [related generated typescript types](./src/lib/generated).
- Displays a profile page and a collection of links. By default the site is not editable, which you can change by updating the `NEXT_PUBLIC_EDITABLE` environment variable to `true`.

## Prerequisites

- Node.js 14.x or later
- Vercel account
- Stately Cloud account and access to a StatelyDB Store

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Follow the instructions below under _StatelyDB Schema Setup_ to configure your StatelyDB Store and associated schema.
4. For local development, create a `.env.local` file in the root directory with the following content:
   ```
   STATELY_CLIENT_ID=your_client_id
   STATELY_CLIENT_SECRET=your_client_secret
   STATELY_STORE_ID=12345
   PROFILE_SLUG=default
   NEXT_PUBLIC_EDITABLE=false
   ```
   Replace `your_client_id`, `your_client_secret`, and `12345` with your actual StatelyDB credentials and store ID.  Replace `your_base_url` with the base url of your app (e.g. `http://localhost:3000` or `https://myapp.vercel.app`).
   
   See `.env.local.example` for more details on the other configuration options.

## StatelyDB Schema Setup

1. Install the Stately CLI:
   ```
   curl -sL https://stately.cloud/install | sh
   ```
2. Log in to your Stately account:
   ```
   stately login
   ```
3. Navigate to the `schema` directory:
   ```
   cd schema
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Publish the schema:
   ```
   stately schema put --schema-id <your_schema_id> schema.ts
   ```
6. Bind the schema to your store:
   ```
   stately schema bind --schema-id <your_schema_id> --store-id 12345
   ```
7. Generate the TypeScript client:
   ```
   stately schema generate --language ts --schema-id <your_schema_id> --version <schema_version> ../src/lib/generated
   ```

## Development

Run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment to Vercel

1. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```
2. Log in to your Vercel account:
   ```
   vercel login
   ```
3. Deploy the application:
   ```
   vercel
   ```
4. Follow the prompts to configure your project
5. Set up environment variables in the Vercel dashboard

Your application is now deployed and ready to use!
