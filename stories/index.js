import React from 'react';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { addDecorator, setAddon, storiesOf } from '@storybook/react';
import { Grid, Segment } from 'semantic-ui-react';

import JSXAddon from 'storybook-addon-jsx';

import '../src/styles/styles.scss';

import '../src/components/Grid/Grid.scss';

setAddon(JSXAddon);
addDecorator(withKnobs);
storiesOf('Basics', module)
    .add('Styles', () => 
      <>
        <section id='style--colors'>
          <h3>Colours</h3>
          <div>
              <Segment className='color primary'>
                  Primary #005ea2
              </Segment>
              <Segment className='color secondary'>
                  Secondary #346c9d
              </Segment>
          </div>
        </section>
        <section id='style--headings'>
        <div>
            <Grid>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <h1 style={{fontSize: number('font-size (h1) mobile', 32), lineHeight: text('line-height (h1) mobile', '44px')}}>Heading 1 (H1)</h1>
                    <p>
                      font-size: 32px <br /> 
                      line-height: 44px <br /> 
                      ont-family: Merriweather <br /> 
                      font-weight: bold <br />
                      color: #005ea2
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <h1 style={{fontSize: number('font-size (h1)', 38), lineHeight: text('line-height (h1)', '52px')}}>Heading 1 (H1)</h1>
                  </div> 
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 38px <br /> 
                    line-height: 52px <br /> 
                    ont-family: Merriweather <br /> 
                    font-weight: bold <br />
                    color: #005ea2
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <h2 style={{fontSize: number('font-size (h2) mobile', 32), lineHeight: text('line-height (h2) mobile', '44px')}}>Heading 2 (H2)</h2>
                    <p>
                      font-size: 32px <br /> 
                      line-height: 44px <br /> 
                      ont-family: Open sans <br /> 
                      font-weight: Semibold
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <h2 style={{fontSize: number('font-size (h2)', 38), lineHeight: text('line-height (h2)', '52px')}}>Heading 2 (H2)</h2>
                  </div>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 38px <br /> 
                    line-height: 52px <br /> 
                    ont-family: Merriweather <br /> 
                    font-weight: bold <br />
                    color: #005ea2
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <h3 style={{fontSize: number('font-size (h3) mobile', 28), lineHeight: text('line-height (h3) mobile', '40px')}}>Heading 3 (H3)</h3>
                    <p>
                      font-size: 28px <br /> 
                      line-height: 40px <br /> 
                      ont-family: Open sans <br /> 
                      font-weight: Semibold
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <h3 style={{fontSize: number('font-size (h3)', 32), lineHeight: text('line-height (h3)', '44px')}}>Heading 3 (H3)</h3>
                  </div>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 32px <br /> 
                    line-height: 44px <br /> 
                    ont-family: Merriweather <br /> 
                    font-weight: bold <br />
                    color: #005ea2
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <h4 style={{fontSize: number('font-size (h4) mobile', 24), lineHeight: text('line-height (h4) mobile', '36px')}}>Heading 4 (h4)</h4>
                    <p>
                      font-size: 24px <br /> 
                      line-height: 36px <br /> 
                      ont-family: Open sans <br /> 
                      font-weight: Semibold
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <h4 style={{fontSize: number('font-size (h4)', 24), lineHeight: text('line-height (h4)', '36px')}}>Heading 4 (h4)</h4>
                  </div>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 24px <br /> 
                    line-height: 36px <br /> 
                    ont-family: Open sans <br /> 
                    font-weight: Semibold/regular
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <h5 style={{fontSize: number('font-size (h5) mobile', 18), lineHeight: text('line-height (h5) mobile', '28px')}}>Heading 5 (h5) mobile</h5>
                    <p>
                      font-size: 18px <br /> 
                      line-height: 28px <br /> 
                      ont-family: Open sans <br /> 
                      font-weight: Semibold
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <h5 style={{fontSize: number('font-size (h5)', 20), lineHeight: text('line-height (h5)', '28px')}}>Heading 5 (h5)</h5>
                  </div>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='desktop-only'>
                    <p>
                      font-size: 20px <br /> 
                      line-height: 28px <br /> 
                      ont-family: Merriweather <br /> 
                      font-weight: bold <br />
                      color: #005ea2
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                <div className='mobile-only'>
                  <p style={{fontSize: number('font-size (paragraph) mobile', 16), lineHeight: text('line-height (paragraph) mobile', '26px')}}>Body paragraph</p>
                  <p>
                    font-size: 16px <br /> 
                    line-height: 26px <br /> 
                    ont-family: Open sans <br /> 
                    font-weight: Semibold/Regular
                  </p>
                </div>

                <div className='desktop-only'>
                  <p style={{fontSize: number('font-size (paragraph)', 17), lineHeight: text('line-height (paragraph)', '27px')}}>Body paragraph</p>
                </div>
                  
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 17px <br /> 
                    line-height: 27px <br /> 
                    ont-family: Open sans <br /> 
                    font-weight: Semibold/regular
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <div className='mobile-only'>
                    <span style={{fontSize: number('font-size (body) mobile', 16), lineHeight: text('line-height (body) mobile', '24px')}}>Body</span>
                    <p>
                      font-size: 16px <br /> 
                      line-height: 24px <br /> 
                      ont-family: Open sans <br /> 
                      font-weight: Semibold/Regular
                    </p>
                  </div>
                  <div className='desktop-only'>
                    <span style={{fontSize: number('font-size (body)', 16), lineHeight: text('line-height (body)', '24px')}}>Body</span>
                  </div>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='desktop-only'>
                    font-size: 32px <br /> 
                    line-height: 44px <br /> 
                    ont-family: Merriweather <br /> 
                    font-weight: bold <br />
                    color: #005ea2
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={12}>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <h6>Heading 6 (h6)</h6>
                </Grid.Column>
                <Grid.Column style={{padding: 16}} computer={6} tablet={6} mobile={12}>
                  <p className='mobile-only'>
                    font-size: 14px <br /> 
                    line-height: 20px <br /> 
                    ont-family: Open sans <br /> 
                    font-weight: Semibold/Regular
                  </p>
                  <p className='desktop-only'>
                    font-size: 32px <br /> 
                    line-height: 44px <br /> 
                    ont-family: Merriweather <br /> 
                    font-weight: bold <br />
                    color: #005ea2
                  </p>
                </Grid.Column>
              </Grid.Row>
              
            </Grid>
          </div>
      </section>
      </>)

// storiesOf('Atoms/Form/Button', module)
//     .addDecorator(story => <Segment>{story()}</Segment>)
//     .addWithJSX('Basic', () => <><Button basic color={text('Button color', 'black')}>{text('Label', 'This is a button')}</Button></>, 
//         {
//             info: {
//                 propTablesExclude: ['as']
//             }
//         })
//     .add('Variation', () => <><Button basic color='black'>This is a button</Button></>)