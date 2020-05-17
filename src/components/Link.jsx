import styled from 'styled-components';
import { Link } from 'gatsby';
import { ButtonStyle, LinkStyle } from './Button';

export const ButtonLink = styled(Link)`
 ${ ButtonStyle }
  ${ LinkStyle }
`;

export const UnstyledLink = styled(Link)`
     ${ LinkStyle }
`;
