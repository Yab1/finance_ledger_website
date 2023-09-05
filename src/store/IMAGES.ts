import logo from "../assets/logo.svg";
import hero from "../assets/mobile/image-hero.svg";
import group from "../assets/mobile/image-group-photo.svg";
import case1 from "../assets/image-business-case-1.svg";
import case2 from "../assets/image-business-case-2.svg";
import case3 from "../assets/image-business-case-3.svg";
import case4 from "../assets/image-business-case-4.svg";
import case5 from "../assets/image-business-case-5.svg";
import case6 from "../assets/image-business-case-6.svg";
import post from "../assets/mobile/image-blog-post.svg";
import person1 from "../assets/image-team-john-doe.svg";
import person2 from "../assets/image-team-jane-doe.svg";
import person3 from "../assets/image-team-steve-smith.svg";
import contact from "../assets/mobile/image-contact.svg";
import facebook from "../assets/social-icon-facebook.svg";
import linkedin from "../assets/social-icon-linkedin.svg";
import twitter from "../assets/social-icon-twitter.svg";
import youtube from "../assets/social-icon-youtube.svg";

type Image = {
  hero: string;
  "group-photo": string;
  "blog-post": string;
  contact: string;
};

const mobileAssets: Image = {
  hero: hero,
  "group-photo": group,
  "blog-post": post,
  contact: contact,
};

type Cases = { image: string; id: number };

const cases: Cases[] = [
  {
    image: case1,
    id: 1,
  },
  {
    image: case2,
    id: 2,
  },
  {
    image: case3,
    id: 3,
  },
  {
    image: case4,
    id: 4,
  },
  {
    image: case5,
    id: 5,
  },
  {
    image: case6,
    id: 6,
  },
];

type Team = {
  id: number;
  image: string;
  name: string;
  position: string;
};

const professionals: Team[] = [
  { id: 1, image: person1, name: "John Doe", position: "President" },
  { id: 2, image: person2, name: "Jane Doe", position: "Vice President" },
  { id: 3, image: person3, name: "Steve Smith", position: "Marketing Head" },
];

type Socials = {
  id: number;
  url: string;
  icon: string;
};

const socials: Socials[] = [
  { id: 1, url: "#", icon: facebook },
  { id: 2, url: "#", icon: twitter },
  { id: 3, url: "#", icon: linkedin },
  { id: 4, url: "#", icon: youtube },
];

export { logo, mobileAssets, cases, professionals, socials };
