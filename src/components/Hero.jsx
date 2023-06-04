import { motion } from "framer-motion";

import { styles } from "../styles";
import { LegendaryChestCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            {/* Hero Content */}
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div>

                    {/* Hero Headline */}
                    <h1 className={`${styles.heroHeadText} text-white text-outline-4`}>
                        Hi, my name is <span className='text-[#BA0110]'>Parhuam!</span>
                    </h1>
                    {/* Hero Subtext */}
                    <p className={`${styles.heroSubText} mt-2 text-white-100 text-outline-4`}>
                        As an Back-End developer, <br className='sm:block hidden' />
                        I focus on Server-side Development and Web Applications.
                    </p>
                </div>
            </div>

            {/* Chest Canvas */}
            <LegendaryChestCanvas />
        </section>
    );
};

export default Hero;
