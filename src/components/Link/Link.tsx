import * as React from 'react';
// import NextLink from 'next/link';
import Icon from 'components/Icon';

// import LinkIcon from 'src/assets/icons/file-alt-regular.svg';

interface IProps {
  href: string;
  name?: string;
  componentId: string;
  withIcon?: boolean;
  noUnderline?: boolean;
}

const Link: React.SFC<IProps> = (props) => (
  // <NextLink href={props.href} passHref prefetch>
    <a className={`link--text ${props.noUnderline? 'no-underline' : '' }`} id={props.componentId}>
      {props.name || props.children}{props.withIcon && <Icon color="primary" width={20} height={20} />}
    </a>
  // </NextLink>
)

export default Link;