import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Searchbox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mt='4'
      align='center'
      px={['2', '6']}
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <Searchbox />}
      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
