import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Image from 'next/image'
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
  IconButton,
  useToken,
  Button,
  Link,
  SkeletonCircle,
} from '@chakra-ui/react'
import Comments from '../components/Comments'
import Github from '../components/Github'
import Users from '../components/Users'
import Star from '../components/Star'
import StarEmpty from '../components/StarEmpty'
import VolMute from '../components/VolMute'
import VolHigh from '../components/VolHigh'
import Fork from '../components/Fork'
import Bookmarks from '../components/Bookmarks'

import ReactRoundedImage from 'react-rounded-image'
import { setFireworks } from '../components/confetti'

export default function Home() {
  const [isFavorited, setIsFavorited] = useState(false)
  let audioRef = useRef(null)

  useEffect(() => {
    if (typeof Audio === 'undefined' || audioRef.current) {
      return
    }
    audioRef.current = new Audio('/dontstop.mp3')
  }, [])

  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    console.log(playing)
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  return (
    <Box bgColor="black">
      <Head>
        <title>Adios Oscar</title>
        <meta name="description" content="Gracias and Adios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bgColor="gray.700" p={2} align="center">
        <Github w={12} h={12} />

        <Text color="white" textStyle="headline3" ml={2}>
          Github
        </Text>
      </Flex>

      <Button
        onClick={() => setPlaying(!playing)}
        bgColor="black"
        _active={{ bgColor: 'black' }}
        _hover={{ bgColor: 'black' }}
        mt={4}
        mr={4}
      >
        {playing ? <VolHigh /> : <VolMute />}
      </Button>

      <Box maxW="container.sm" p={[4, null, 8]} m="auto">
        <Flex direction="column" align="center">
          <Box w="100%">
            <Flex flexDirection={['column', null, 'row']}>
              <ReactRoundedImage
                image={'/profile.jpg'}
                roundedColor="transparent"
              />
              <Box color="white" maxW="300px">
                <Text textStyle="headline2" mr={2} color="white">
                  <Flex justify="space-between" align="center">
                    <Text>⭐️</Text>
                    <Text>💖</Text>
                  </Flex>
                  Oscar Porrrrres
                  <br />
                  <Flex justify="space-between">
                    <Text>🙊</Text>
                    <Text>💖</Text>
                  </Flex>
                </Text>
                <Text textStyle="body" color="gray.600">
                  @OscarPorres
                </Text>
                <Flex align="center">
                  <Text as="span" fontWeight="bold" mr={1}>
                    10
                  </Text>
                  <Text as="span" mr={1}>
                    followers{' '}
                  </Text>
                  ·
                  <Text as="span" fontWeight="bold" mx={1}>
                    14
                  </Text>
                  <Text as="span" mr={1}>
                    {' '}
                    following{' '}
                  </Text>
                  ·
                  <IconButton
                    p={0}
                    bgColor="black"
                    _hover={{ bgColor: 'black' }}
                    _active={{ bgColor: 'black' }}
                    variant="ghost"
                    onClick={() => setIsFavorited((s) => !s)}
                    aria-label="favorite"
                  >
                    {isFavorited ? <Star color="yellow" /> : <StarEmpty />}
                  </IconButton>
                  <Text as="span">94</Text>
                </Flex>
              </Box>
            </Flex>
            <Text color="gray.200" mt={4}>
              {'Just a city boy lookin for a nice couch to slang some code. '}
            </Text>
            <Button
              isFullWidth
              bgColor="gray.900"
              color="white"
              mt={4}
              _hover={{ bgColor: 'gray.500' }}
              _active={{ bgColor: 'gray.500' }}
              onClick={setFireworks}
            >
              Follow
            </Button>
          </Box>
        </Flex>

        <Divider my={10} />

        <Box mt={6}>
          <Text color="white" textStyle="headline4">
            Pinned
          </Text>

          {[
            {
              href: 'https://github.com/transcarent/admin-app',
              title: '@transcarent/admin-app',
              description: 'Tools to help us build!',
              starCount: 9090,
              forkCount: 5555,
              langType: 'TypeScript',
            },
            {
              href: 'https://github.com/transcarent/foundation/tree/main/src/components/table',
              title: '@transcarent/react-table',
              description: 'Flexible component for showing fun data',
              starCount: 99999991,
              forkCount: 6003200,
              langType: 'TypeScript',
            },
            {
              href: 'https://github.com/transcarent/web-app/pull/497',
              title: '@transcarent/livechat-api',
              description:
                'Best and most efficient way to communicate w/ our members',
              starCount: 99999999999,
              forkCount: 99994200,
              langType: 'TypeScript',
            },
          ].map(
            ({ href, title, description, starCount, forkCount, langType }) => {
              return (
                <Box
                  border="2px"
                  borderRadius="md"
                  p={4}
                  mb={4}
                  borderColor="gray.600"
                >
                  <Flex align="center">
                    <Bookmarks />
                    <Link
                      color="blue.500"
                      fontWeight="bold"
                      ml={2}
                      href={href}
                      isExternal
                    >
                      {title}
                    </Link>
                  </Flex>
                  <Text textStyle="bodySmall" color="gray.400">
                    {description}
                  </Text>
                  <Flex textStyle="bodySmall" mt={2}>
                    <Flex align="center" mr={4}>
                      <SkeletonCircle
                        size="3"
                        startColor="blue.300"
                        endColor="blue.300"
                      />
                      <Text ml={1} color="gray.400">
                        {langType}
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <Star />{' '}
                      <Text ml={1} color="gray.400">
                        {starCount}
                      </Text>
                    </Flex>
                    <Flex align="center" ml={4}>
                      <Fork />
                      <Text ml={1} color="gray.400">
                        {forkCount}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              )
            },
          )}
        </Box>

        <Table mt={8} size="sm">
          <Thead>
            <Tr>
              <Th>Repo</Th>
              <Th>Commits</Th>
              <Th>Lines added</Th>
              <Th>Lines removed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              {
                repo: 'admin-app',
                commits: '6',
                added: '4,808',
                removed: '2,245',
              },
              {
                repo: 'foundation',
                commits: '10',
                added: '897',
                removed: '62',
              },
              {
                repo: 'web-app',
                commits: '3',
                added: '476',
                removed: '163',
              },
              {
                repo: 'graphql',
                commits: '4',
                added: '525',
                removed: '162',
              },
              {
                repo: 'cereal-bowls-eaten',
                commits: '600',
                added: '',
                removed: '',
              },
              {
                repo: 'mortgages signed',
                commits: '1',
                added: '',
                removed: '',
              },
              {
                repo: 'avg-steps-taken-per-hour',
                commits: '15,000',
                added: '',
                removed: '',
              },
            ].map(({ repo, commits, added, removed }, index) => {
              return (
                <Tr key={index}>
                  <Td color="gray.200">{repo}</Td>
                  <Td color="gray.200">{commits}</Td>
                  {added ? (
                    <Td color="green.500">{added} ++</Td>
                  ) : (
                    <Td color="gray.200">--</Td>
                  )}
                  {removed ? (
                    <Td color="red.500">{removed} --</Td>
                  ) : (
                    <Td color="gray.200">--</Td>
                  )}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
        <Comments />
      </Box>
    </Box>
  )
}
