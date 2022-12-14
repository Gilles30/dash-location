import { Button } from '@chakra-ui/react'

interface PaginationItemsProps {
  number: number
  isCurrent?: boolean
}

export function PaginationItems({
  isCurrent = false,
  number,
}: PaginationItemsProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        w='4'
        colorScheme='pink'
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      w='4'
      bg='gray.700'
      _hover={{
        bg: 'gray.900',
        color: 'gray.400',
      }}
    >
      {number}
    </Button>
  )
}
