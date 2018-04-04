import * as React from 'react';

export interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class AlphaEntry extends React.Component<Props, object> {

    render() {
      const  {value, onChange} = this.props;

      return (
        <div>
          <div>
            <input type="text" value={value} onChange={e => onChange(e)}/>
          </div>
        </div>
      );
    }
  }

export default AlphaEntry;
