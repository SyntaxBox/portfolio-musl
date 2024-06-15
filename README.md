# Portfolio Photographer Website (Musl)

## Overview

This is a portfolio website for a photographer named Musl. It is built using Next.js and includes pages for various sections such as home, about, projects, services, and contact. The website showcases Musl's photography and film-making work, providing a comprehensive view of his professional journey and portfolio.

## Directory Structure

The website's directory structure is organized as follows:

```bash
.
├── about
│   └── page.tsx
├── contact
│   └── page.tsx
├── favicon.ico
├── formation
│   └── page.tsx
├── globals.css
├── layout.tsx
├── not-found.tsx
├── page.tsx
├── projects
│   ├── [project]
│   └── page.tsx
├── providers.tsx
└── services
    └── page.tsx
```

### Explanation of Directories and Files

- **about/page.tsx**: The About page of the website.
- **contact/page.tsx**: The Contact page of the website.
- **favicon.ico**: The favicon of the website.
- **formation/page.tsx**: The Formation page of the website.
- **globals.css**: Global CSS styles for the website.
- **layout.tsx**: The main layout file that defines the structure of the website.
- **not-found.tsx**: Custom 404 page for handling not-found errors.
- **page.tsx**: The Home page of the website.
- **projects/[project]**: Dynamic routes for individual project pages.
- **projects/page.tsx**: The Projects page of the website.
- **providers.tsx**: Providers file for wrapping the app with necessary providers.
- **services/page.tsx**: The Services page of the website.

## Data Storage

All the website data are stored in the `data.ts` file. This file includes the following information:

```javascript
import proImage from "@/assets/pro.jpg";
import galleryImages from "./assets/gallery";

const data = {
  name: "Musl",
  navButtons: ["home", "about", "projects", "services", "contact", "formation"],
  ProfileImage: proImage,
  homePage: {
    title: ["Hi I am", "Musl", "I am a photographer and a film maker "],
    image: proImage,
    paragraphs: [
      "I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.",
      "The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister's motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I'd be able to get to orbit.",
      "I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad's Blackberry into orbit and was able to transmit a photo back down to our family computer from space.",
      "Today, I'm the founder of Planetaria, where we're working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.",
    ],
  },
  aboutPage: {
    title: "designer, founder, and amateur astronaut.",
    p: "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
    images: [proImage, proImage, proImage, proImage, proImage],
  },
  // this is dummy data, use your real data
  gallery: galleryImages.map((e, i) => ({ link: `project${i + 1}`, url: e })),

  // this is dummy data, use your real data
  projects: galleryImages.map((e, i) => ({
    [`project${i + 1}`]: {
      title: `Project ${i + 1} Photography`,
      images: [e, ...galleryImages],
    },
  })),
  contact: {
    image: proImage,
    socialLinks: {
      facebook: "#",
      instagram: "#",
      behance: "#",
      twitter: "#",
      youtube: "#",
    },
    email: "musl@cargopip.dev",
  },
};

export default data;
```

## Photo Attributions

The photos used in the website are credited to the following photographers from Unsplash:

- Photo by [Kim Becker](https://unsplash.com/@ksbphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-in-blue-long-sleeve-shirt-holding-black-nikon-dslr-camera-EoCwQ5PerAs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Alexander Wang](https://unsplash.com/@darkleiv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/shallow-focus-photography-of-black-canon-dslr-camera-KjyrxSHwqTg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Alif Ngoylung](https://unsplash.com/@shbabalif?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-on-top-of-mountain-taking-pictures-jg-6ARMiaPM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Nicolas I.](https://unsplash.com/@miikola?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-holding-dslr-camera-azPNN8Rcr48?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Brandon Erlinger-Ford](https://unsplash.com/@beeford?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-holding-dslr-camera-jL8QFwnuOcQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [JESHOOTS.COM](https://unsplash.com/@jeshoots?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-holding-black-dslr-camera-p8kaVRe4edM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Jannis Edelmann](https://unsplash.com/@jannisjansson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/person-holding-dslr-camera-G69CWIw1SEU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Blake Cheek](https://unsplash.com/@blakecheekk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-using-telescope-white-standing-on-mountain-edge-SiwWqSe8qrs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Mohammad Alizade](https://unsplash.com/@mohamadaz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-taking-photo-IKNzcgrWfg8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Robert Richarz](https://unsplash.com/@robertricharz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/man-holding-dslr-camera-fVsPF_SNIS4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Alaksiej Čarankievič](https://unsplash.com/@cherenkevich?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/silhouette-of-man-holding-camera-during-sunset-zaqO0Ht5Ec0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Photo by [Zarak Khan](https://unsplash.com/@zarakvg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/selective-focus-photography-of-person-holding-canon-telephoto-lens-v263clVYq-4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

## Running the Project

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone github.com/cargopip/portfolio-musl
   ```

2. Navigate to the project directory

   ```bash
   cd portfolio-musl
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

or

```bash
yarn build
```

### Starting the Production Server

```bash
npm start
```

or

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

All PRs are welcome :)
