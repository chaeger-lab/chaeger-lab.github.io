# chaeger-lab.github.io
Website

# Quick Start Guide - DDCS Lab Website

**🚀 Most Common Tasks**

---
## Contents Editing
You can modify contents in `data.js` file.
### Add Your Research Topic
You can add description of your current research topic under 
```
const researchData
```
### Modify Lab Members
You can change lab member information under
````
const teamData
````
You can change your photo, your social media link ...
The alumni information in the same page can be edited in
```
const alumniData
```
### Add News (2 minutes)

1. Open `data.js`
2. Go to line ~187 (find `newsData`)
3. Add at the top:

```javascript
{
    id: 5,  // increment number
    type: 'event',  // or 'hiring', 'publication'
    date: 'March 15, 2026',
    title: 'Your news title',
    desc: 'Description here.',
    link: 'https://example.com'  // optional
},
```

4. Save → Refresh browser → Deploy

---

## Add Publication (2 minutes)

1. Open `data.js`
2. Go to line ~156 (find `publicationsData`)
3. Add at the top:

```javascript
{
    id: 10,  // increment number
    type: 'journal',  // or 'conference', 'review'
    year: '2026',
    title: 'Full paper title',
    authors: 'Author One, Author Two',
    source: 'Journal name, vol. X, pp. Y-Z',
    link: 'https://doi.org/...'
},
```

4. Save → Refresh browser → Deploy

---

## Deploy to GitHub Pages (5 minutes)

<!-- 1. Go to [github.com](https://github.com) → New repository
2. Upload ALL files from `website-main` folder
3. Settings → Pages → Select **main** branch → Save
4. Your site: `https://[username].github.io/[repo-name]/` -->

**To update:** Edit files → Upload to GitHub → Wait 1 minute

---

## File Overview

```
✅ EDIT THIS:
   data.js          ← All content (news, publications, team)

❌ DON'T EDIT:
   index.html       ← Website structure
   main.js          ← Website logic
   style.css        ← Website styling

📁 IMAGES:
   images/          ← Add team photos here
```

---

## Troubleshooting

**Changes don't show?**  
→ Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Error on page?**  
→ Press `F12` → Console tab → See error message  
→ Check commas, quotes, brackets in `data.js`

**Images not loading?**  
→ Check path: `images/photo.jpg`  
→ Check file exists in `images/` folder

---

**📚 Full Guide:** See `USER_GUIDE.md` for detailed instructions.


## Updates
### 2026.03.20
Zicong: Upload Website Files.