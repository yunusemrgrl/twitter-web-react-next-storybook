import NavigationButton from './navigation-button'
import {
  Bookmarks,
  Explore,
  Home,
  Messages,
  More,
  Notifications,
  Twitter,
  TwitterBlue
} from './icons'

import TitleXLarge from './title-xlarge'
import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'home'}>
        <Home />
        <TitleXLarge>Home</TitleXLarge>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleXLarge>Explore</TitleXLarge>
      </NavigationButton>

      <NavigationButton notify={3} selected={selectedKey === 'notifications'}>
        <Notifications />
        <TitleXLarge>Notifications</TitleXLarge>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleXLarge>Messages</TitleXLarge>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'bookmarks'}>
        <Bookmarks />
        <TitleXLarge>Bookmarks</TitleXLarge>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'twitter-blue'}>
        <TwitterBlue />
        <TitleXLarge>Twitter Blue</TitleXLarge>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <TitleXLarge>More</TitleXLarge>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
