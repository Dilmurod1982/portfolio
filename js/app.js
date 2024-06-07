const projects = [
  {
    title: "5oy11darsuyishi",
    githubLink: "https://github.com/Dilmurod1982/5oy11darsuyishi.git",
    vercelLink: "https://product-three-orcin.vercel.app/",
  },
  {
    title: "WEATHER",
    githubLink: "https://github.com/Dilmurod1982/5oy10darsuyishi.git",
    vercelLink: "https://weather-nu-rust.vercel.app/",
  },
  {
    title: "RANDOM USER GENERATOR",
    githubLink: "https://github.com/Dilmurod1982/5oy8darsuyishi.git",
    vercelLink: "https://5oy9darsuyishi.vercel.app/",
  },
  {
    title: "Raqamni Top",
    githubLink: "https://github.com/Dilmurod1982/5oy6darsuyishi.git",
    vercelLink: "https://5oy6darsuyishi.vercel.app/",
  },
  {
    title: "Music Player",
    githubLink: "https://github.com/Dilmurod1982/5oy5darsuyishi.git",
    vercelLink: "https://5oy5darsuyishi.vercel.app",
  },
  {
    title: "Drums & Kits",
    githubLink: "https://github.com/Dilmurod1982/5oy4darsuyishi.git",
    vercelLink: "https://drumskits-dilmurods-projects-a9f9cdd1.vercel.app/",
  },
  {
    title: "Design solutions made easy",
    githubLink: "https://github.com/Dilmurod1982/Design_solutions.git",
    vercelLink: "https://design-solutions.vercel.app/",
  },
  {
    title: "MyTeam",
    githubLink: "https://github.com/Dilmurod1982/myteam.git",
    vercelLink: "https://myteam-wine.vercel.app/",
  },
  {
    title: "Crowdfunding",
    githubLink: "https://github.com/Dilmurod1982/crowdfounding.git",
    vercelLink: "https://crowdfounding-smoky.vercel.app/",
  },
  {
    title: "Animation",
    githubLink: "https://github.com/Dilmurod1982/animation.git",
    vercelLink: "https://animation-beige-three.vercel.app/#",
  },
  {
    title: "Create X",
    githubLink: "https://github.com/Dilmurod1982/create-x.git",
    vercelLink: "https://create-x-taupe.vercel.app/",
  },
  {
    title: "Castaway",
    githubLink: "https://github.com/Dilmurod1982/castway.git",
    vercelLink: "https://castaway-beige-six.vercel.app/",
  },
  {
    title: "background Video",
    githubLink: "https://github.com/Dilmurod1982/background-video.git",
    vercelLink: "https://background-video-eight.vercel.app/",
  },
  {
    title: "Tip Calculator",
    githubLink: "https://github.com/Dilmurod1982/tip-calc.git",
    vercelLink: "https://tip-calc-gamma.vercel.app/",
  },
  {
    title: "QR Code",
    githubLink: "https://github.com/Dilmurod1982/qr-code",
    vercelLink: "https://qr-code-omega-nine.vercel.app/",
  },
  {
    title: "HTML & CSS foundations",
    githubLink: "https://github.com/Dilmurod1982/HTML---CSS-foundations",
    vercelLink: "https://html-css-foundations-six.vercel.app/",
  },
  {
    title: "Pixer",
    githubLink: "https://github.com/Dilmurod1982/pixer",
    vercelLink: "https://pixer-navy.vercel.app/",
  },
  {
    title: "Salon Card",
    githubLink: "https://github.com/Dilmurod1982/salon-Mohinur",
    vercelLink: "https://salon-mohinur.vercel.app/",
  },
  {
    title: "Gabrielle Essence Eau De Parfum",
    githubLink:
      "https://github.com/Dilmurod1982/Gabrielle-Essence-Eau-De-Parfum",
    vercelLink: "https://gabrielle-essence-eau-de-parfum-seven.vercel.app/",
  },
  {
    title: "Make remote work",
    githubLink: "https://github.com/Dilmurod1982/make-remote-work",
    vercelLink: "https://make-remote-work-peach.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
