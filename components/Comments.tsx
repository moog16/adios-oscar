import Image from 'next/image'
import { formatRelative } from 'date-fns'
import {
  Flex,
  chakra,
  Box,
  Text,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ListItem,
  List,
  Link,
  SkeletonCircle,
} from '@chakra-ui/react'
import commentsData from '../public/comments.json'

const getRandomColor = () => {
  const colorPalette = [
    'brand.500',
    'brand.900',
    'brandSecondary.100',
    'brandSecondary.100',
    'brandSecondary.100',
    'brandSecondary.100',
    'logo.primaryColorDark',
    'logo.secondaryColorDark',
  ]
  const randomIndex = Math.floor(Math.random() * colorPalette.length)
  return colorPalette[randomIndex]
}

export default function Comments() {
  const currentDate = new Date()
  return (
    <Box mt={8} color="white">
      <Text my={4} textStyle="bodySmallSemibold" color="gray.600">
        Comments from fans of your work
      </Text>
      <List>
        {commentsData.map((comment, index) => {
          const { Comment, Name, Timestamp } = comment
          const profilePhoto = comment['Profile picture']
          const randomColor = getRandomColor()
          return (
            <ListItem mb={4} key={index}>
              <Flex>
                {false ? (
                  <Image src={profilePhoto} width={8} height={8} />
                ) : (
                  <SkeletonCircle
                    size="8"
                    startColor={randomColor}
                    endColor={randomColor}
                    minW={8}
                  />
                )}
                <Box ml={2}>
                  <Flex>
                    <Text color="gray.400" textStyle="bodySmallSemibold">
                      {Name}
                    </Text>{' '}
                    <Text textStyle="bodySmall" color="gray.600" ml={2}>
                      {formatRelative(new Date(Timestamp), currentDate)}
                    </Text>
                  </Flex>
                  <Text my={2}>{Comment}</Text>
                  <Flex color="gray.400" fontSize="bodySmall">
                    <Link mr={2}>Share</Link>
                    <Link mr={2}>Report</Link>
                    <Link mr={2}>Save</Link>
                  </Flex>
                </Box>
              </Flex>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
