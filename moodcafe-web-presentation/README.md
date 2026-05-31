# MoodCaFé Interactive Web Presentation

MoodCaFé is a deployable interactive startup pitch website for a café discovery app based on mood, purpose, and area.

## Main features

- React + Vite frontend
- Sticky navigation
- Smooth scrolling
- Scroll progress bar
- Interactive mood filter demo
- App mockup
- Team & Roles section
- Idea, USP, MVP, Revenue, Scale-up sections
- Final Pitch and Thank You slide
- Responsive design for desktop, tablet, and mobile

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build for production

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project folder to GitHub.
3. Go to Vercel: https://vercel.com
4. Click **Add New Project**.
5. Import your GitHub repository.
6. Keep default settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**.
8. Copy the generated public link, for example:
   `https://moodcafe-presentation.vercel.app`

## Deploy to Netlify

Option 1: GitHub deploy

1. Upload the project to GitHub.
2. Go to Netlify: https://netlify.com
3. Click **Add new site** > **Import an existing project**.
4. Select your GitHub repository.
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **Deploy site**.

Option 2: Drag and drop

1. Run:
   ```bash
   npm install
   npm run build
   ```
2. Go to Netlify.
3. Drag and drop the `dist` folder into Netlify Deploys.
4. Copy the public website URL.

## Custom domain

After deploying, you can connect a custom domain in Vercel or Netlify dashboard. For example:
`www.moodcafe.vn` or `moodcafe-pitch.com`

## Presentation use

Open the deployed URL in Chrome or Edge, then use the top navigation to move through the pitch. The **How MoodCaFé Works** section is clickable and can be used as a simple product demo.


## Updated role allocation

The technical roles are written in a startup/business-friendly way, not as backend/frontend task labels:

- Bui Ngoc Duy Khang: CPO
- Nguyen Quang Nhat Nam: CTO
- Mai Van Tien Phat: CIO
