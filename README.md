# Natalie Yoo Photography

Minimal React portfolio SPA — built with Vite.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Adding your photos

All photos live in `src/data/photos.js`. Each entry looks like:

```js
{
  id: 1,
  src: 'YOUR_IMAGE_URL',
  alt: 'Description of the photo',
  category: 'couples',  // couples | engagement | family | grad
  span: 3,              // 1 = short, 2 = medium, 3 = tall
}
```

### Using Cloudinary (recommended)

1. Sign up at https://cloudinary.com (free tier is plenty)
2. Upload your photos to your media library
3. Replace each `src` with a Cloudinary URL:

```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_800,f_auto,q_auto/your-photo-id.jpg
```

The `f_auto,q_auto` transforms auto-pick the best format and compression.
Use `w_600` for portrait photos, `w_1000` for landscape.

### Your portrait photo (About page)

Update the `PORTRAIT_SRC` constant at the top of `src/components/About.jsx`.

## Adding new categories

In `src/data/photos.js`, add a new entry to the `categories` array:

```js
{ id: 'maternity', label: 'Maternity' },
```

Then tag any photos with `category: 'maternity'` and they'll appear when that filter is active.

## Deploying to Vercel

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → import your repo
3. Vercel auto-detects Vite — just click Deploy

Every future `git push` to main deploys automatically.
