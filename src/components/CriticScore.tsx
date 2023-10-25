import { Badge } from '@chakra-ui/react';
import React from 'react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? 'green' : score > 80 ? 'yellow' : 'red';
  return (
    <div>
      <Badge
        borderRadius="4px"
        fontSize="14px"
        paddingX={2}
        colorScheme={color}
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
