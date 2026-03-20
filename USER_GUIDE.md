# DDCS Lab Website - User Guide

**Welcome!** This guide will help you easily update and manage the lab's website content without touching any HTML, CSS, or JavaScript code.

---

## 📋 Table of Contents
1. [Quick Overview](#quick-overview)
2. [How to Update News](#how-to-update-news)
3. [How to Add Publications](#how-to-add-publications)
4. [How to Add Team Members](#how-to-add-team-members)
5. [How to Update Research Topics](#how-to-update-research-topics)
6. [How to Add Gallery Images](#how-to-add-gallery-images)
7. [Deployment Guide](#deployment-guide)

---

## 🎯 Quick Overview

### Website Architecture

The website uses a **data-driven architecture**, which means:
- **All content** (news, publications, team members, etc.) lives in ONE file: `data.js`
- You **NEVER need to edit** `index.html`, `main.js`, or `style.css`
- Simply edit `data.js`, save it, and refresh your browser to see changes

### File Structure
```
website-main/
├── index.html       ← Website structure (DON'T EDIT)
├── main.js          ← Website logic (DON'T EDIT)
├── style.css        ← Website styling (DON'T EDIT)
├── data.js          ← ALL CONTENT HERE (EDIT THIS!)
├── images/          ← Store team member photos here
└── USER_GUIDE.md    ← This guide
```

---

## 📰 How to Update News

News items appear on both the **Home page** (latest 3) and the **News page** (all items).

### Adding a News Item

1. Open `data.js`
2. Find the `newsData` array (around line 187)
3. Add a new entry at the **top** of the array (newest first):

```javascript
const newsData = [
    { 
        id: 5,                              // Increment the ID number
        type: 'event',                      // Options: 'event', 'hiring', 'publication', or '' (blank for general)
        date: 'March 15, 2026',            // Format: 'Month Day, Year'
        title: 'Your News Title Here',      
        desc: 'Detailed description of the news item. Can be multiple sentences.',
        link: 'https://example.com'        // Optional: external link, or '' for no link
    },
    // ... existing news items below
];
```

### Understanding News Types
- **`event`**: Conferences, seminars, talks, promotions
- **`hiring`**: Job openings, PhD positions, postdoc calls
- **`publication`**: New papers, accepted manuscripts
- **`''`** (empty): General announcements, grants, awards

### Deleting a News Item

Simply remove the entire block `{ ... },` from the array.

### Example

```javascript
const newsData = [
    { 
        id: 5, 
        type: 'publication', 
        date: 'March 10, 2026', 
        title: 'New Paper Accepted to IEEE Journal', 
        desc: 'Our paper on machine learning for optical communications has been accepted to IEEE Transactions on Communications.',
        link: 'https://ieeexplore.ieee.org/document/123456'
    },
    { 
        id: 4, 
        type: 'event', 
        date: 'February 28, 2026', 
        title: 'Lab Retreat 2026', 
        desc: 'Our annual lab retreat will take place in Stockholm. All team members are invited.',
        link: ''
    },
    // ... more news
];
```

---

## 📚 How to Add Publications

Publications are categorized into three types: **Journal**, **Conference**, and **Review**.

### Adding a Publication

1. Open `data.js`
2. Find the `publicationsData` array (around line 156)
3. Add a new entry:

```javascript
const publicationsData = [
    { 
        id: 4,                                  // Increment the ID
        type: 'journal',                        // Options: 'journal', 'conference', 'review'
        year: '2026',                           // Publication year
        title: 'Full Paper Title Goes Here',   
        authors: 'First Author, Second Author, Third Author',  // Comma-separated
        source: 'IEEE Transactions on Communications, vol. 74, no. 3, pp. 123-145',
        link: 'https://ieeexplore.ieee.org/document/123456'  // DOI or paper URL
    },
    // ... existing publications
];
```

### Publication Types
- **`journal`**: Peer-reviewed journal papers
- **`conference`**: Conference proceedings
- **`review`**: Survey papers, review articles

### Deleting a Publication

Remove the entire block `{ ... },` from the array.

### Best Practices
- Add new publications at the **top** of the array
- Use full author names (e.g., "Christian Häger" not "C. Häger")
- Include complete source information (journal name, volume, pages)
- Always provide a link (DOI preferred)

### Example

```javascript
const publicationsData = [
    { 
        id: 10, 
        type: 'journal', 
        year: '2026', 
        title: 'Machine Learning for Fiber-Optic Communication Systems: A Comprehensive Survey', 
        authors: 'Christian Häger, Zicong Jiang, Rick Butler', 
        source: 'IEEE Communications Surveys & Tutorials, vol. 28, no. 1, pp. 1-45', 
        link: 'https://doi.org/10.1109/COMST.2026.123456'
    },
    { 
        id: 9, 
        type: 'conference', 
        year: '2026', 
        title: 'Deep Learning-Based Channel Estimation for Optical OFDM', 
        authors: 'Bingcheng Chen, José Miguel Mateos Ramos, Christian Häger', 
        source: 'Proceedings of the Optical Fiber Communication Conference (OFC), San Diego, CA', 
        link: 'https://opg.optica.org/abstract.cfm?uri=OFC-2026-M1A.1'
    }
];
```

---

## 👥 How to Add Team Members

### Adding a New Team Member

1. **Prepare the photo**:
   - Add the member's photo to the `images/` folder
   - Use JPG or PNG format
   - Recommended size: 400x400 pixels (square)
   - Name it descriptively (e.g., `john_smith.jpg`)

2. Open `data.js` and find `teamData` array (around line 55)

3. Add a new entry:

```javascript
const teamData = [
    {
        id: "new_member",                      // Unique ID (lowercase, no spaces)
        name: "John Smith",                    // Full name
        role: "PhD Candidate",                 // Position title
        image: "images/john_smith.jpg",        // Path to photo
        email: "john.smith@chalmers.se",       // Email address
        linkedin: "https://www.linkedin.com/in/johnsmith/",  // Optional
        website: "https://johnsmith.github.io/"              // Optional (personal website)
    },
    // ... existing team members
];
```

### Common Roles
- `"Lab PI, Associate Professor"`
- `"Postdoc Researcher"`
- `"PhD Candidate"`
- `"Master Student"`
- `"Visiting Researcher"`

### Moving Members to Alumni

When someone leaves the lab:

1. **Copy** their information from `teamData`
2. **Delete** them from `teamData`
3. **Add** them to `alumniData` array (around line 117):

```javascript
const alumniData = [
    {
        name: "John Smith",
        role: "PhD Graduate (2026)",                    // Year they left
        destination: "Postdoc at MIT",                  // Where they went
        link: "https://www.linkedin.com/in/johnsmith/", // Optional
        type: "phd"                                     // Options: 'phd', 'visiting', 'master', 'bachelor'
    },
    // ... existing alumni
];
```

---

## 🔬 How to Update Research Topics

Research topics appear on the **Home page** and **Research page** with expandable modals.

### Editing a Research Topic

1. Open `data.js`
2. Find `researchData` array (around line 27)
3. Edit the existing entries:

```javascript
const researchData = [
    {
        id: "topic1",                          // Unique ID
        icon: "radio",                         // Icon name from Lucide (see below)
        title: "Machine Learning for Optical Communications",
        desc: "Brief one-line description.",   // Shown on card
        abstract: "Full detailed description of the research area. This appears in the modal popup when users click 'Learn More'. Can be multiple paragraphs.",
        image: "https://images.unsplash.com/photo-1234567890?w=800"  // Cover image URL
    },
    // ... more topics
];
```

### Finding Icons

Visit [Lucide Icons](https://lucide.dev/icons/) and search for relevant icons. Use the icon name (e.g., `radio`, `cpu`, `network`, `brain`, `wifi`).

### Adding Cover Images

Options:
1. **Unsplash** (free): `https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&q=80&w=800`
2. **Local images**: Save to `images/` folder and use `images/your_image.jpg`

---

## 🖼️ How to Add Gallery Images

### Adding Gallery Photos

1. Open `data.js`
2. Find `galleryData` array (around line 223)
3. Add new entries:

```javascript
const galleryData = [
    {
        id: 3,                                 // Increment ID
        image: "images/lab_event_2026.jpg",    // Image path or URL
        title: "Annual Lab Retreat 2026",      // Photo caption
        date: "2026-03-15",                    // Format: YYYY-MM-DD
        location: "Stockholm, Sweden"          // Where photo was taken
    },
    // ... more images
];
```

### Image Requirements
- **Format**: JPG or PNG
- **Size**: Recommended 1200px wide
- **Aspect ratio**: Any (automatic cropping)
- **Location**: Save in `images/` folder OR use external URL

---

## 🚀 Deployment Guide

You have several options to deploy your website so everyone can access it online.

### Option 1: GitHub Pages (Recommended - FREE)

**Best for:** Simple, free hosting with version control

#### Steps:

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com) and sign up

2. **Create a new repository**
   - Click "New repository"
   - Name it: `ddcs-lab-website`
   - Make it **Public**
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop ALL files from `website-main` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes

5. **Access your website**
   - Your site will be live at: `https://[your-username].github.io/ddcs-lab-website/`

#### Updating the Website (GitHub)
1. Edit `data.js` locally
2. Go to your repository on GitHub
3. Click on `data.js` → Edit (pencil icon)
4. Paste your updated content
5. Click "Commit changes"
6. Wait ~1 minute for changes to go live

---

### Option 2: GitLab Pages (Alternative - FREE)

**Your repository is already on GitLab!** Based on the README, your repo is at `gitlab.com/chaeger-lab/website`.

#### Steps:

1. **Add a `.gitlab-ci.yml` file** to your repository:

```yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - main
```

2. **Commit and push** the file to your repository

3. **Access your website**
   - Go to your repository → **Settings** → **Pages**
   - Your site will be at: `https://chaeger-lab.gitlab.io/website/`

#### Updating the Website (GitLab)
1. Edit `data.js`
2. Commit and push changes to GitLab
3. Wait ~1-2 minutes for automatic deployment

---

### Option 3: Netlify (Easy Drag-and-Drop - FREE)

**Best for:** Quickest deployment with drag-and-drop

#### Steps:

1. Go to [netlify.com](https://www.netlify.com) and sign up

2. Click **"Add new site"** → **"Deploy manually"**

3. **Drag and drop** the entire `website-main` folder

4. Wait 30 seconds

5. **Access your website**
   - You'll get a random URL like: `https://random-name-123.netlify.app`
   - You can change it in **Site settings** → **Change site name**

#### Updating the Website (Netlify)
1. Edit `data.js` locally
2. Go to Netlify dashboard
3. Click **"Deploys"** → **"Deploy manually"**
4. Drag and drop the updated folder
5. Changes are live immediately

---

### Option 4: Chalmers Web Server

**If you have access to Chalmers hosting:**

1. Contact Chalmers IT support to request web space
2. Upload files via **FTP** or **SFTP** (they'll provide credentials)
3. Your site will typically be at: `https://www.chalmers.se/en/staff/[username]/`

---

### Custom Domain (Optional)

If you want a custom URL like `ddcs-lab.com`:

1. **Purchase a domain** from:
   - [Namecheap](https://www.namecheap.com) (~$10/year)
   - [Google Domains](https://domains.google) (~$12/year)

2. **Connect it to your hosting**:
   - **GitHub/GitLab Pages**: Add CNAME record in domain settings
   - **Netlify**: Add domain in Netlify dashboard (automatic setup)

---

## 🔧 Testing Changes Locally

Before deploying, test your changes:

1. **Edit** `data.js`
2. **Open** `index.html` in your web browser (double-click the file)
3. **Refresh** the page to see your changes
4. Once satisfied, deploy using one of the methods above

---

## 🆘 Troubleshooting

### "My changes don't appear"
- **Hard refresh**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Check syntax**: Make sure all commas, quotes, and brackets are correct in `data.js`

### "Website shows an error"
- **Validate JSON syntax**: Copy your `data.js` content to [JSONLint](https://jsonlint.com/) (remove `const ... = ` first)
- **Check console**: Open browser DevTools (F12) → Console tab for error messages

### "Images not loading"
- **Check path**: Make sure image path is correct (`images/photo.jpg`)
- **Check file exists**: Verify the image file is in the `images/` folder
- **Use forward slashes**: Always use `/` not `\` in paths

### "Icons not showing"
- **Check icon name**: Verify it exists on [Lucide Icons](https://lucide.dev/icons/)
- **Check spelling**: Icon names are case-sensitive (use lowercase)

---

## 📝 Quick Reference

### Required Fields for News
- `id`, `type`, `date`, `title`, `desc`, `link`

### Required Fields for Publications
- `id`, `type`, `year`, `title`, `authors`, `source`, `link`

### Required Fields for Team Members
- `id`, `name`, `role`, `image`, `email`

---

## 💡 Tips & Best Practices

1. **Always backup** `data.js` before making major changes
2. **Test locally** before deploying to production
3. **Use consistent formatting** for dates, names, and titles
4. **Add new items at the top** of arrays (newest first)
5. **Check for typos** in email addresses and links
6. **Optimize images** (compress large photos before uploading)
7. **Use version control** (GitHub/GitLab) to track changes