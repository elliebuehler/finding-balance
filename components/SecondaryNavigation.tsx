import { InstagramIcon } from '@icons/InstagramIcon'
import { FacebookIcon } from '@icons/FacebookIcon'
import { getIconComponentByName } from '@utils/icons-map'
import Link from 'next/link'
import { ReactFragment } from 'react'
import { NavItem } from '@lib/ghost'


interface NavigationProps {
    data?: NavItem[]
    navClass?: string
}

export const SecondaryNavigation = ({ data, navClass }: NavigationProps) => {
    const items: ReactFragment[] = []
  



    data?.map((navItem, i) => {
      if (navItem.url.match(/^\s?http(s?)/gi)) {
        items.push(
          <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem">
            <a className="social-link social-link-wb" href={navItem.url} target="_blank" rel="noopener noreferrer">
                {getIconComponentByName(navItem.label)}
            </a>
          </li>
        )
      } else {
        items.push(
          <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem">
            <div className={navClass}>
              <Link href={navItem.url} >
                <a>{navItem.label}</a>
              </Link>
            </div>
          </li>
        )
      }
    })
  
    return (
      <ul className="nav" role="menu">
        {items}
      </ul>
    )
  }
  
