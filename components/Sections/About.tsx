import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-20 text-muted-foreground sm:text-lg">
      {/* about me */}
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer">About me</h1>
        <p>
          Joy is an experienced Senior Frontend Developer and mentor based in
          Dhaka, Bangladesh. He is highly enthusiastic about Typescript and
          genuinely enjoys teaching web dev to others. He is currently on a
          mission to create the best web dev tutorials on the internet.
        </p>
      </div>

      {/* techs I used */}
      <div className="group">
        <h1 className="title-bottom-line mt-14 cursor-pointer">Techs I used</h1>

        <div className="flex flex-wrap gap-2">
          {/* {siteConfig.skillIcons.map((icon, idx) => (
            <Fragment key={idx}>
              <icon.Icon key={idx} className="h-11 w-11" />
              <span className="sr-only">{icon.title}</span>
            </Fragment>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default About;
