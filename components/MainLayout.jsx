import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export function DefaultHeader() {
    return (
        <Navbar>
            <NavbarBrand as={Link} href='#'>
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Book Store</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href='/' active>Accueil</NavbarLink>
                <NavbarLink as={Link} href='/about'>A propos</NavbarLink>
                <NavbarLink href='/services'>Services</NavbarLink>
                <NavbarLink href='/contact'>Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    );
}

const listeFooter = [
    { name: 'Accueil', href: '/' },
    { name: 'A propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
]

export function DefaultFooter() {
    return (
        <Footer container className='rounded-none'>
            <FooterCopyright href="#" by="Bollytn" year={2024} />
            <FooterLinkGroup>
                {listeFooter.map((item, index) => (
                    <FooterLink key={index} href={item.href}>
                        {item.name}
                    </FooterLink>
                ))}
            </FooterLinkGroup>
        </Footer>
    )
}