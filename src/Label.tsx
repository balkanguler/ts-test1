import * as React from 'react';

export interface Props {
    counter: number;
}

class Label extends React.Component<Props, object> {

    render() {
      const  {counter} = this.props;

      return (
        <div className="hello">
          <div className="greeting">
            I'm Label Component {counter}
          </div>
        </div>
      );
    }
  }

export default Label;
