import * as React from 'react';

import { Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';

import './Stepper.scss';

interface IStepInfo {
  title: string;
}

interface IProps {
  totalSteps: number;
  currentStep: number;
  showTitle: boolean;
  stepsInfo?: IStepInfo[];
}

const Stepper: React.SFC<IProps>= (props) => {
  let steps = [];
  for (let i=0; i < props.totalSteps; i++) {
    steps.push(
      <div className={`step--progress ${i === props.currentStep - 1 ? 'active' : '' }`}></div>
    )  
  }

  return (
    <div className='stepper'>
      <div className='step'>
        <p className='step--number'>Step {props.currentStep}</p>
        {props.showTitle && props.stepsInfo && <p className='step--title'>{props.stepsInfo[props.currentStep - 1].title}</p>}
        <div className='step--progress--wrapper'>
          {steps}
        </div>
      </div>
    </div>
  )
};

export default Stepper;

const titles = [
  {
    title: 'This is step 1 title'
  },
  {
    title: 'This is step 2 title'
  },
  {
    title: 'This is step 3 title'
  }
]

storiesOf('Stepper', module)
  .addDecorator(story => <Segment>{story()}</Segment>)
  .addWithJSX('Basic', () => {
    return (
      <>
        <Segment style={{border: '1px solid black'}}>
          <h3>Stepper</h3>
          <Stepper totalSteps={3} currentStep={1} showTitle={true} stepsInfo={titles}/>
          <Stepper totalSteps={2} currentStep={1} showTitle={true} stepsInfo={titles}/>
        </Segment>
      </>
    )
  });