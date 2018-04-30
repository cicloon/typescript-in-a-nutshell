import * as React from 'react';

export interface MyComponentProps {
  prop1?: number;
  prop2?: string;
}

export class MyComponent extends React.Component<MyComponentProps> {
  private static defaultProps: MyComponentProps = {
    prop1: 3,
    prop2: 'some value',
  };

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
