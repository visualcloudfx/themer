import React from 'react';
import ReactDOM from 'react-dom';
import Builder from '../../../lib/components/Builder';

class App extends React.Component {
    constructor(props) {
      super(props);
    }

    onChange = (data) => {
      console.log(data);
    }

    render() {
      const options = {
        'title.show': true,
        'title.text': 'Test',
        'title.textAlign': 'center',
        'title.color': 'blue',
        isDashboardBuilderActive: false,
      };
      return (
        <Builder onChange={this.onChange} options={options} />
      );
    }
}

ReactDOM.render(<App />, document.getElementById('keen-theme-builder'));