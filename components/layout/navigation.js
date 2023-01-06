import Link from "next/link";
import classes from "./navigation.module.css";
import Logo from "./logo";

const Navigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Killed Gods</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
