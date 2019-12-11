import React from 'react';
import { styled } from 'linaria/react';
import Link from 'next/link';

import Panel from '../../components/panel/Panel';

interface NavigationButtonProps {
  href: string;
}

const StyledPanel = styled.div`
  padding: 0.2rem 0.4rem;
`;

const NavigationButton: React.FunctionComponent<NavigationButtonProps> = ({
  children,
  href,
}) => (
  <Panel>
    <StyledPanel>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </StyledPanel>
  </Panel>
);

export default NavigationButton;
