# Deployment Guide

## Your Portfolio is Live! 🎉

**Production URL**: https://preet-raval-4o1r18vfx-serenitylivingoflexington-7478s-projects.vercel.app

## Vercel Dashboard Access

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Sign in with your account
3. Find your project: `preet-raval`

## Custom Domain Setup (Optional)

To use a custom domain like `preetraval.com`:

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS records

## Future Deployments

### Automatic Deployments (Recommended)

1. Push your portfolio to GitHub:
   ```bash
   cd portfolio
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. In Vercel Dashboard:
   - Go to your project settings
   - Connect to your GitHub repository
   - Enable automatic deployments

Now every push to `main` branch will automatically deploy!

### Manual Deployments

From the portfolio directory:

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## Local Development

Start the development server:

```bash
cd portfolio
npm run dev
```

Visit http://localhost:3000 to see your site locally.

## Making Updates

1. Edit files in the `app` directory
2. Test locally with `npm run dev`
3. Commit changes: `git add . && git commit -m "Your message"`
4. Deploy: `vercel --prod` or push to GitHub (if auto-deploy is set up)

## Project Structure

```
portfolio/
├── app/
│   ├── components/     # All React components
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── public/             # Static files (resume, images)
├── tailwind.config.ts  # Tailwind configuration
└── next.config.ts      # Next.js configuration
```

## Updating Content

### Update Resume
Replace `public/Preet Raval Resume.pdf` with your new resume.

### Update Profile Information
Edit these components:
- **Hero**: [app/components/Hero.tsx](app/components/Hero.tsx)
- **About**: [app/components/About.tsx](app/components/About.tsx)
- **Experience**: [app/components/Experience.tsx](app/components/Experience.tsx)
- **Skills**: [app/components/Skills.tsx](app/components/Skills.tsx)
- **Projects**: [app/components/Projects.tsx](app/components/Projects.tsx)
- **Education**: [app/components/Education.tsx](app/components/Education.tsx)
- **Contact**: [app/components/Contact.tsx](app/components/Contact.tsx)

## Support

If you encounter any issues:
1. Check build logs in Vercel Dashboard
2. Run `npm run build` locally to test
3. Ensure all dependencies are installed: `npm install`

## Features Implemented ✅

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Light/Dark theme toggle
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Fast loading (Next.js optimizations)
- ✅ Professional sections (Hero, About, Experience, Skills, Projects, Education, Contact)
- ✅ Resume download (PDF + Google Docs)
- ✅ Social media integration
- ✅ Contact form
- ✅ Deployed to Vercel

Enjoy your new portfolio! 🚀
