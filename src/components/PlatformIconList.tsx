import React from 'react';
import { Platform } from '../hooks/useGames';

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';

import { SiNintendo } from 'react-icons/si';

import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name:PlayStation
    //Slug:PlayStation

    pc: FaWindows,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    xbox360: FaXbox,
    'xbox-series-x': FaXbox,
    'xbox-one': FaXbox,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    'nintendo-switch': SiNintendo,
  };
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
