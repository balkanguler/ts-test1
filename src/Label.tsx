import * as React from 'react';

export interface Props {
    value: string;
}

class Label extends React.Component<Props, object> {

    render() {
      const  {value} = this.props;

      return (
        <div>
          <div>
            Merhaba {value}
          </div>
        </div>
      );
    }
  }

export default Label;
