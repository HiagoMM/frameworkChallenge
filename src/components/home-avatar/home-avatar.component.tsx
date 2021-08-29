import React from 'react';

import { StyledAvatar } from './home-avatar.styles';

interface HomeAvatarProps {
  source: any;
}

const HomeAvatar: React.FC<HomeAvatarProps> = ({ source }) => {
  return <StyledAvatar source={source} size={40} />;
};

export default HomeAvatar;
