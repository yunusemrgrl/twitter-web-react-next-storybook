import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleXLargeBold from '../components/title-xlarge'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Tweet</Button>
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleXLargeBold>Home</TitleXLargeBold>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
