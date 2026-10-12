# IT Portfolio Website

Plain HTML, CSS and JavaScript. No build step and no dependencies, so it deploys anywhere.

## Files
- `index.html` – content (name, about, projects, education, links)
- `style.css` – design (colors are variables at the top of the file)
- `script.js` – typing roles, menu, scroll animations, form handling

## Run locally
Open `index.html` in a browser. Or use a local server:
```
python -m http.server 8000
```
Then visit http://localhost:8000

## Customize
1. Search for `Your Name`, `YN`, `your-username` and `you@example.com` and replace them.
2. Edit the `[bracketed]` text in About and Education. Only add what is true for you.
3. Skills: change `data-level="85"` (0–100) and the percentage text on each card.
4. Projects: change the title, text, tags, and the `href="#"` of Live Demo and GitHub. Swap images with your own screenshots.
5. Profile photo: put `profile.jpg` in this folder and use the `<img>` line shown in the commented code in the About section.
6. Typing roles: edit `ROLES` at the top of `script.js`.

## Contact form
- **Netlify:** works automatically after deploy (the form has `data-netlify="true"`). Remove the `action="mailto:..."` attribute.
- **GitHub Pages / Vercel:** create a free form at formspree.io and set `action="https://formspree.io/f/YOUR_ID"`.
- Default: with no changes, the form opens the visitor's email app.

## Publish for free
**GitHub Pages:** create a repo, upload these files, then Settings → Pages → Deploy from branch → `main` / root. Your site appears at `https://USERNAME.github.io/REPO/`.

**Netlify:** go to app.netlify.com/drop and drag the folder in.

**Vercel:** push to GitHub, import the repo at vercel.com/new, and click Deploy (no settings needed).

## Notes
Images load from Unsplash (free license). For production, consider downloading them into the folder so the site never depends on an external link.
