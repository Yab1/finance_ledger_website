// Mobile Version
import heroMobile from "../assets/mobile/image-hero-mobile.svg";
import groupMobile from "../assets/mobile/image-group-photo-mobile.svg";
import postMobile from "../assets/mobile/image-blog-post-mobile.svg";
import contactMobile from "../assets/mobile/image-contact-mobile.svg";

// Tablet Version
import heroTablet from "../assets/tablet/image-hero-tablet.svg";
import groupTablet from "../assets/tablet/image-group-photo-tablet.svg";
import postTablet from "../assets/tablet/image-blog-post-tablet.svg";
import contactTablet from "../assets/tablet/image-contact-tablet.svg";

// Desktop Version
import heroDesktop from "../assets/desktop/image-hero-desktop.svg";
import groupDesktop from "../assets/desktop/image-group-photo-desktop.svg";
import postDesktop from "../assets/desktop/image-blog-post-desktop.svg";
import contactDesktop from "../assets/desktop/image-contact-desktop.svg";

// Common
import logo from "../assets/logo.svg";
import case1 from "../assets/image-business-case-1.svg";
import case2 from "../assets/image-business-case-2.svg";
import case3 from "../assets/image-business-case-3.svg";
import case4 from "../assets/image-business-case-4.svg";
import case5 from "../assets/image-business-case-5.svg";
import case6 from "../assets/image-business-case-6.svg";
import person1 from "../assets/image-team-john-doe.svg";
import person2 from "../assets/image-team-jane-doe.svg";
import person3 from "../assets/image-team-steve-smith.svg";
import facebook from "../assets/social-icon-facebook.svg";
import linkedin from "../assets/social-icon-linkedin.svg";
import twitter from "../assets/social-icon-twitter.svg";
import youtube from "../assets/social-icon-youtube.svg";

type MobileVersion = {
  "hero-mobile": string;
  "group-photo-mobile": string;
  "blog-post-mobile": string;
  "contact-mobile": string;
};

const mobileAssets: MobileVersion = {
  "hero-mobile": heroMobile,
  "group-photo-mobile": groupMobile,
  "blog-post-mobile": postMobile,
  "contact-mobile": contactMobile,
};

type TabletVersion = {
  "hero-tablet": string;
  "group-photo-tablet": string;
  "blog-post-tablet": string;
  "contact-tablet": string;
};

const tabletAssets: TabletVersion = {
  "hero-tablet": heroTablet,
  "group-photo-tablet": groupTablet,
  "blog-post-tablet": postTablet,
  "contact-tablet": contactTablet,
};

type DesktopVersion = {
  "hero-desktop": string;
  "group-photo-desktop": string;
  "blog-post-desktop": string;
  "contact-desktop": string;
};

const desktopAssets: DesktopVersion = {
  "hero-desktop": heroDesktop,
  "group-photo-desktop": groupDesktop,
  "blog-post-desktop": postDesktop,
  "contact-desktop": contactDesktop,
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

export {
  logo,
  mobileAssets,
  tabletAssets,
  desktopAssets,
  cases,
  professionals,
};
