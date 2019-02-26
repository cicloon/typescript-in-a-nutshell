import * as React from 'react';

export interface MyComponentProps {
  prop1: number;
  prop2: string;
}

export interface MyComponentState {
  open: boolean;
}

export class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  public static defaultProps = {
    prop1: 3,
    prop2: 'some value',
  };

  constructor(props: MyComponentProps ) {
    super(props);
    this.state = {open: true};
  }

  public render() {
    const {prop1, prop2} = this.props;

    return (
      <div>
        <span> {prop1} </span>
        <span> {prop2} </span>
      </div>
    );

  }
}

// const el = <MyComponent prop1={3} />;
