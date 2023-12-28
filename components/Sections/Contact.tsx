import { LuGithub, LuLinkedin, LuPhone, LuMail } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="pt-14 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line cursor-pointer text-2xl">Contact</h1>
        <div className="flex justify-center gap-2 flex-wrap">
          <Link href="/">
            <Button variant="secondary" size="sm" className="flex gap-2">
              <LuLinkedin className="h-6 w-6" />
              <p>JoyShaheb</p>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="sm" className="flex gap-2">
              <LuGithub className="h-6 w-6" />
              <p className="">JoyShaheb</p>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="sm" className="flex gap-2">
              <LuPhone className="h-6 w-6" />
              <p className="">Joy</p>
            </Button>
          </Link>
        </div>

        <div className="flex justify-center my-4">
          <Link href="/">
            <Button variant="secondary" size="sm" className="flex gap-2">
              <LuMail className="h-6 w-6" />
              <p className="">Get in Touch</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-4 mb-10 text-center text-sm">
        © 2024 JoyShaheb. All Rights Reserved.
      </div>
    </section>
  );
};
export default Contact;
