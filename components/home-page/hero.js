import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/Kratos.png" alt="some image of me" width={900} height={900} />
            </div>
            <h1>hi i am KRATOS</h1>
            <p> i want to show you why all greek gods are weak </p>
        </section>
    );
};

export default Hero;
