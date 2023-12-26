import { groq } from "next-sanity";

export const dataQuery = groq`{
  "heroSection": *[_type == "hero"][0]{
    ...,
    "mainImage": mainImage.asset->url,
    "resume": resume.asset->url
  },
  "aboutSection": *[_type == "about"][0]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "experience": *[_type == "experience"][0]{
    ...,
  },
  "projects": *[_type == "projects"]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "techSection": *[_type == "tech"][0]{
    ...,
    technologies[] {
      ...,
      "icon": icon.asset->url
    }  
  }
}`;
