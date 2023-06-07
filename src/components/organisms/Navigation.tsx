import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { T_NavigationEntries } from '~/types/components'

import Logo from '~/components/atoms/Logo'

import './Navigation.scss'
import NavigationEntry from '../atoms/NavigationEntry'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const NavigationEntries: T_NavigationEntries = [
        {
            title: 'Home',
            href: '/home',
        },
        {
            title: 'Account',
            href: '/account',
        },
    ]

    useEffect(() => {
        const checkScrollState = () => {
            if (window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }

        window.addEventListener('scroll', checkScrollState)

        checkScrollState()

        return () => {
            window.removeEventListener('scroll', checkScrollState)
        }
    }, [])

    return (
        <nav>
            <div className={classNames('navigation', isScrolled && 'scrolled')}>
                <Logo />
                <ul>
                    {NavigationEntries.map(({ title, href }) => (
                        <NavigationEntry title={title} href={href} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
