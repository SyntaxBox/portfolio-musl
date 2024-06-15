import proImage from "@/assets/pro.jpg"
import galleryImages from "./assets/gallery";

const data = {
  name: "Musl",
  navButtons: ["home", "about", "projects", "services", "contact", "formation"],
  ProfileImage: proImage,
  homePage: {
    title: ["Hi I am", "Musl", "I am a photographer and a film maker "],
    image: proImage,
    paragraphs: ["I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.", "The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister's motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I'd be able to get to orbit.", "I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad's Blackberry into orbit and was able to transmit a photo back down to our family computer from space.", "Today, I'm the founder of Planetaria, where we're working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards."]
  },
  aboutPage: {
    title: "designer, founder, and amateur astronaut.",
    p: "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
    images: [proImage, proImage, proImage, proImage, proImage]
  },
  gallery: [...galleryImages.map((e, i) => ({ link: `project${i + 1}`, url: e })), ...galleryImages.map((e, i) => ({ link: `project${i + 1}`, url: e }))],
  projects:
    galleryImages.map((e, i) => ({
      [`project${i + 1}`]: {
        title: `Project ${i + 1} Photography`,
        images: [e, ...galleryImages],
      }
    }))
  ,

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
  }

}

export default data;
