import * as React from 'react';

import './Segment.scss';

import { Segment as SemanticSegment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import PropsTable from 'utils/PropsTable';

interface IProps {
  children: any;
  background?: 'blue' | 'white',
  contrainstTabletAsMobile?: boolean
}

const Segment: React.SFC<IProps> = (props) => (
  <div className={`segment ${props.background || 'white'} ${props.contrainstTabletAsMobile? 'segment--constraint-tablet' : ''}`}>
    {props.children}
  </div>
)

export default Segment;

const propTypes = [
  {
    name: 'children',
    type: 'any',
    required: true,
    description: 'The content to show within the segment. Defaults to the content written within <Segment></Segment>'
  },
  {
    name: 'background',
    type: 'blue or white',
    required: false,
    description: 'Set a background colour for the segment'
  }
]

storiesOf('Segment', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => (
    <>
      <SemanticSegment>
        <h3>Segment</h3>
        <PropsTable propTypes={propTypes} />
        <div>
          <h4>Blue background</h4>
          <Segment background='blue'>
            <p>This is the children content</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            quam mauris. Donec nisl augue, posuere sit amet dolor ac, dapibus
            eleifend ante. Mauris elementum metus euismod tellus posuere, in
            vehicula lorem vulputate. Mauris sagittis facilisis sem vel aliquet.
            Ut varius augue tincidunt pulvinar porttitor. In ut lacus a ante
            tempor egestas. Pellentesque nisi ex, varius ac consequat a, commodo
            sit amet enim. Mauris convallis mi non lacinia maximus. Vivamus nec
            erat scelerisque, scelerisque lorem ac, pulvinar tellus. Donec
            maximus laoreet semper. Duis dolor massa, gravida sed pellentesque
            quis, finibus in nulla. Morbi blandit, leo eu mattis placerat,
            libero nisl porttitor ipsum, at dignissim mauris felis eget ante.
            Pellentesque interdum aliquet magna molestie sagittis. Nam est enim,
            egestas in ex nec, laoreet aliquet justo. Nunc non erat dolor.
            Suspendisse nulla felis, suscipit at viverra eu, ullamcorper
            sollicitudin dolor. Cras imperdiet tristique urna vitae faucibus.
            Nullam non felis tincidunt, dapibus lorem non, faucibus justo.
            Mauris facilisis varius sem, sed sodales lorem tristique tincidunt.
            Praesent rhoncus ante at dolor molestie tincidunt. Aliquam semper
            massa odio, at vehicula sem tempus sed. Sed at tempor enim, eu
            eleifend metus. Fusce molestie condimentum ipsum congue bibendum.
            Aenean et augue eget nibh varius lacinia vitae eu ipsum. Nunc a
            auctor dui. Sed viverra diam eu faucibus consectetur. Mauris sodales
            erat eget facilisis aliquam. Nam hendrerit justo eu finibus
            faucibus. Phasellus dignissim laoreet lacus at tempus. Maecenas non
            sem ut nisl pulvinar tempus. Phasellus nec lorem feugiat, pretium
            dolor ut, consectetur nibh. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            vestibulum vestibulum commodo. Donec et sem consequat, dapibus
            ligula sit amet, luctus risus.
          </Segment>
        </div>
        <div>
          <h4>White background </h4>
          <Segment background='white'>
            <p>This is the children content</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            quam mauris. Donec nisl augue, posuere sit amet dolor ac, dapibus
            eleifend ante. Mauris elementum metus euismod tellus posuere, in
            vehicula lorem vulputate. Mauris sagittis facilisis sem vel aliquet.
            Ut varius augue tincidunt pulvinar porttitor. In ut lacus a ante
            tempor egestas. Pellentesque nisi ex, varius ac consequat a, commodo
            sit amet enim. Mauris convallis mi non lacinia maximus. Vivamus nec
            erat scelerisque, scelerisque lorem ac, pulvinar tellus. Donec
            maximus laoreet semper. Duis dolor massa, gravida sed pellentesque
            quis, finibus in nulla. Morbi blandit, leo eu mattis placerat,
            libero nisl porttitor ipsum, at dignissim mauris felis eget ante.
            Pellentesque interdum aliquet magna molestie sagittis. Nam est enim,
            egestas in ex nec, laoreet aliquet justo. Nunc non erat dolor.
            Suspendisse nulla felis, suscipit at viverra eu, ullamcorper
            sollicitudin dolor. Cras imperdiet tristique urna vitae faucibus.
            Nullam non felis tincidunt, dapibus lorem non, faucibus justo.
            Mauris facilisis varius sem, sed sodales lorem tristique tincidunt.
            Praesent rhoncus ante at dolor molestie tincidunt. Aliquam semper
            massa odio, at vehicula sem tempus sed. Sed at tempor enim, eu
            eleifend metus. Fusce molestie condimentum ipsum congue bibendum.
            Aenean et augue eget nibh varius lacinia vitae eu ipsum. Nunc a
            auctor dui. Sed viverra diam eu faucibus consectetur. Mauris sodales
            erat eget facilisis aliquam. Nam hendrerit justo eu finibus
            faucibus. Phasellus dignissim laoreet lacus at tempus. Maecenas non
            sem ut nisl pulvinar tempus. Phasellus nec lorem feugiat, pretium
            dolor ut, consectetur nibh. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            vestibulum vestibulum commodo. Donec et sem consequat, dapibus
            ligula sit amet, luctus risus.
          </Segment>
        </div>
      </SemanticSegment>
    </>
  ));