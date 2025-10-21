# 🎂 Happy Birthday Naofumi Ezaki! 🎉

A beautiful, multi-page birthday website to celebrate Naofumi Ezaki, Chief Architect, featuring navigation, photos, videos, and heartfelt messages from the team.

## 🌟 Features

- 🎨 **Modern Multi-Page Design** with smooth navigation
- 🎭 **Beautiful Typography** using Google Fonts (Playfair Display, Poppins, Inter)
- 📱 **Fully Responsive** - works perfectly on all devices
- ✨ **Stunning Animations** and smooth transitions
- 🎊 **Confetti Effects** on homepage
- 🧭 **Fixed Navigation Menu** with mobile support

## 📄 Pages

1. **🏠 Home** - Hero section with confetti and quick links
2. **👨‍💼 About** - Biography, achievements, and qualities
3. **📸 Gallery** - Photo gallery with hover effects
4. **🎬 Videos** - Video messages section
5. **💌 Messages** - Birthday wishes from team members
6. **📅 Timeline** - Career journey and milestones

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)

### Installation & Running

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173` or `http://localhost:5174`

## 📝 Customization Guide

### 1. Adding Photos (Gallery Page)

**Step 1:** Create a folder for photos
```bash
mkdir -p public/photos
```

**Step 2:** Add your images to `public/photos/`

**Step 3:** Edit `src/pages/Gallery.tsx`:
```typescript
const photos = [
  { 
    id: 1, 
    src: '/photos/team-meeting.jpg', 
    alt: 'Team Meeting', 
    category: 'Team' 
  },
  { 
    id: 2, 
    src: '/photos/conference.jpg', 
    alt: 'Conference Day', 
    category: 'Events' 
  },
  // Add more photos...
]
```

### 2. Adding Videos (Videos Page)

**Option A: Local Video Files**
```bash
mkdir -p public/videos
```
Place videos in `public/videos/` and update `src/pages/Videos.tsx`

**Option B: YouTube Embeds** (Recommended)
1. Upload videos to YouTube
2. Get the embed code or video ID
3. Update `src/pages/Videos.tsx` to use iframe embeds

### 3. Customizing Messages (Messages Page)

Edit `src/pages/Messages.tsx`:
```typescript
const messages: Message[] = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Position',
    message: 'Your personalized birthday message here...',
    avatar: '👨‍💻' // Choose an emoji
  },
  // Add more messages...
]
```

### 4. Updating Timeline (Timeline Page)

Edit `src/pages/Timeline.tsx`:
```typescript
const events: TimelineEvent[] = [
  {
    id: 1,
    year: '2020',
    title: 'Major Achievement',
    description: 'Description of what happened...',
    icon: '🚀'
  },
  // Add more milestones...
]
```

### 5. Customizing About Page

Edit `src/pages/About.tsx`:
- Update biography text
- Add Naofumi's actual photo (replace the placeholder)
- Customize achievements and qualities sections

**To add a photo:**
1. Place photo in `public/photos/naofumi.jpg`
2. Replace the `.image-placeholder` div with:
```tsx
<img src="/photos/naofumi.jpg" alt="Naofumi Ezaki" />
```

### 6. Changing Colors

Each page has its own gradient background. To customize:

**Home Page:** Edit `src/pages/Home.css`
```css
.home-page {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

**Other Pages:** Similar pattern in their respective CSS files

### 7. Customizing Navigation

Edit `src/components/Navbar.tsx` to add/remove menu items:
```typescript
const navLinks = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/about', label: 'About', icon: '👨‍💼' },
  // Add or modify links...
]
```

## 🎨 Design Features

- **Premium Fonts:** 
  - Playfair Display (Headings)
  - Poppins (Body text)
  - Inter (Secondary text)
- **Smooth Animations:** FadeIn, SlideIn, Float effects
- **Interactive Elements:** Hover effects, transitions
- **Mobile-First:** Responsive hamburger menu
- **Modern Gradients:** Each page has unique color schemes
- **Glass Morphism:** Frosted glass effects on cards

## 📁 Project Structure

```
naofumi/
├── public/                  # Static assets
│   ├── photos/             # (Create this) Place photos here
│   └── videos/             # (Create this) Place videos here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About/Biography page
│   │   ├── Gallery.tsx     # Photo gallery
│   │   ├── Videos.tsx      # Video messages
│   │   ├── Messages.tsx    # Birthday wishes
│   │   └── Timeline.tsx    # Career timeline
│   ├── App.tsx             # Router setup
│   ├── App.css             # Global styles
│   └── index.css           # Base styles
├── index.html              # HTML with Google Fonts
└── README.md
```

## 🛠️ Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` folder, ready to deploy.

## 🚀 Deployment Options

### Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy! (automatic deployments on every push)

### Netlify (Free)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Deploy!

### GitHub Pages (Free)
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Add to vite.config.ts:
base: '/repository-name/'

# Deploy:
npm run deploy
```

## 💡 Tips & Best Practices

1. **Image Optimization:**
   - Compress images before uploading (use tools like TinyPNG)
   - Recommended size: 1920x1080 for photos
   - Use WebP format for better performance

2. **Video Hosting:**
   - Upload videos to YouTube/Vimeo for better performance
   - Keep local videos under 50MB
   - Use thumbnails for faster loading

3. **Content Updates:**
   - Test on mobile devices after making changes
   - Keep messages concise and heartfelt
   - Use high-quality, professional photos

4. **Performance:**
   - The site loads fast with optimized fonts
   - Images lazy-load automatically
   - Animations are GPU-accelerated

## 🎉 What's Different from Before?

✅ **Multi-Page Navigation** - No longer a single-page app  
✅ **Premium Fonts** - Beautiful typography with Google Fonts  
✅ **Better Structure** - Organized page-by-page content  
✅ **Fixed Navigation** - Sticky menu that works on mobile  
✅ **More Pages** - Added About, Timeline pages  
✅ **Professional Design** - Modern, polished look  
✅ **Better Animations** - Smooth, professional effects  

## 🎂 Ready to Celebrate!

The website is now a full-fledged multi-page experience with:
- Beautiful navigation
- Premium fonts
- Organized content sections
- Professional design
- Mobile-responsive layout

Just add your photos, videos, and personalized messages, and you're ready to wish Naofumi a very happy birthday! 🎉

---

Made with ❤️ for Naofumi Ezaki's Birthday
