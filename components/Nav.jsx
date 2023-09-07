import { headerLogo } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { navLinks } from "@/constants";
import Image from "next/image";

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <Image
                        src={headerLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex justify-center intems-center gap-16 max-lg'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <Image
                        src={hamburger}
                        alt='Hamburger'
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;
