import { groq } from "next-sanity";

export const dataQuery = groq`{
  "heroSection": *[_type == "hero"][0]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "aboutSection": *[_type == "about"]{
    ...,
    "mainImage": mainImage.asset->url
  },
  "techSection": *[_type == "tech"]{
    ...,
    "mainImage": mainImage.asset->url
  }
}`;
