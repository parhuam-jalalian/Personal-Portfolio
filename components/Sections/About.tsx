import ReactPortableText from "../Text/ReactPortableText";

const About = ({ about }: { about: any }) => {
  return (
    <section id="about" className="pt-20 text-muted-foreground sm:text-lg">
      {/* about me */}
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">About me</h1>
        <ReactPortableText body={about?.body} />
      </div>
    </section>
  );
};

export default About;
