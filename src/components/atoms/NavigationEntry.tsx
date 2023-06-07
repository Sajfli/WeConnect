import { Link } from 'react-router-dom'
import './NavigationEntry.scss'
import { T_NavigationEntry } from '~/types/components'

const NavigationEntry = ({ title, href, icon }: T_NavigationEntry) => {
    return (
        <li>
            <Link to={href} title={title}>
                {title}
            </Link>
        </li>
    )
}

export default NavigationEntry
