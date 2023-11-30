import { groq } from "next-sanity";

export const dataQuery = groq`{
  "aboutSection": *[_type == "about"]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "techSection": *[_type == "tech"]{
    ...,
    "mainImage": mainImage.asset->url
  }
}`;
