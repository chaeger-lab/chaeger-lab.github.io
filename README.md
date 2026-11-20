# chaeger-lab.github.io
Website

# Quick Start Guide - DDCS Lab Website

**🚀 Most Common Tasks**

---
## Contents Editing
You can modify contents in `data.js` file.
### Manage Available Thesis Projects

Find `thesisProjectsData.available` in `data.js`. Each project needs only two fields:

```javascript
{
    title: "Project title",
    thesisLink: "PASTE_CHALMERS_PORTAL_DETAIL_URL_HERE"
},
```

Replace the placeholder with the full URL of the project's detail page on the Chalmers Thesis Portal. The example entry in `data.js` links to the portal homepage; replace its title and URL when a real project is available.

- Add an object to display a project; separate objects with commas.
- Edit `title` to rename it or `thesisLink` to change its destination.
- Delete the entire object to remove it; reorder objects to change the display order.
- Titles open the linked detail page in a new tab. No local project details are needed.
- An empty `available: []` hides the list and keeps the general portal button. Entries without a title or a valid HTTP(S) URL are skipped.
- Continue managing previous thesis work separately in `thesisProjectsData.past`.

### Add Your Research Topic
You can add description of your current research topic under 
```
const researchData
```
The key contents you need to edit are 
```javascript
{
   icon: "cpu",
   title: "topic 2",
   desc: "some description here.",
   abstract: "Details here.",
   image: ""
}
```
* The icon symbol can be selected from https://lucide.dev/icons/. Replace the icon id with the one you selected.
* The `desc` will be displayed in the research topic info card on the webpage.
* The `abstract` will be displayed in modal details after clicking.
### Modify Lab Members
You can change lab member information under
````
const teamData
````
You can change your photo, your social media link ...
```javascript
{
image: "images/xxx.jpg", 
email: "xxx@chalmers.se",
linkedin: "https://www.linkedin.com/",
website: "https://xxx.github.io/"
}
```
The alumni information in the same page can be edited in
```javascript
const alumniData
{
   name: "xxx",
   role: "xxx (20xx)",
   destination: "xxxx",
   link: "",
   type: "bachelor"
}
```
* `type` can be 'phd', 'visiting', 'master' and 'bachelor'. Postdoc should use 'phd' type, and will be categorized into `PhD Graduates & Postdocs` part.
### Add News

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

## Add Publication

* Open `data.js`
<!-- 2. Go to line ~156 (find `publicationsData`) -->
<!-- 3. Add at the top: -->

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

* Save → Refresh browser → Deploy

⚠️ There are three types in `publicationsData`: `journal, conference, review`. In order to update talks in Publication section, you can edite `talksData` in `data.js`.

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
