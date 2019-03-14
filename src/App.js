import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import WorkingArea from './Components/WorkingArea/workingArea';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <WorkingArea />
        <Footer />
      </div>
    );
  }
};

export default App;