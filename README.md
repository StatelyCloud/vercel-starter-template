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

# Deploying to Vercel

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Visit the Stately Cloud console at https://console.stately.cloud and grab your credentials and Store ID. If you don't have one yet, request one.
4. Create a new Vercel site:
   ```
   vercel link
   ```

   This command will walk you through "linking" the code you've checked out to a new Vercel site. The deployment will fail because you don't have the required environment variables set, so to save time you may want to cancel the deployment and return to the command line.

5. Configure environment variables using the following commands. For the demo we recommend setting the values to be the same across all environments.

   ```
   vercel env add NEXT_PUBLIC_EDITABLE
   vercel env add PROFILE_SLUG
   vercel env add STATELY_STORE_ID
   vercel env add STATELY_CLIENT_ID
   vercel env add STATELY_CLIENT_SECRET
   ```

   See `.env.local.example` for example values.

   We recommend setting the `PROFILE_SLUG` to `default`. Set `NEXT_PUBLIC_EDITABLE` to `true` if you want to make changes to the list of links or `false` for read-only mode.

6. Deploy to Vercel
   ```
   vercel deploy
   ```

# Local Development

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
   stately schema put -m "my schema change message" --schema-id <your_schema_id> schema.ts
   ```
6. Generate the TypeScript client:
   ```
   stately schema generate --language ts --schema-id <your_schema_id> --version <schema_version> ../src/lib/generated
   ```

## Configuration Options

* If you want the site to be editable, set the environment variable `NEXT_PUBLIC_EDITABLE` to `true`. You probably don't want everyone on the Internet to be able to edit your page, so use this with caution -- it's just an example!
* If you want to change the profile photo, swap out `thispersondoesnotexist.jpg` for something else.

## Development

Run the development server:

```
vercel dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
