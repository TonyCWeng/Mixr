import React from 'react';
import SplashPage from '../splashpage';
import FeedContainer from '../feed/feed_container';

// const MainPage = () => {
//   if (this.props.currentUser) {
//     return (
//       <FeedContainer />
//     );
//   } else {
//     return (
//       <SplashPage />
//     );
//   }
// };

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <FeedContainer />
      );
    } else {
      return (
        <SplashPage />
      );
    }
  }
}

export default MainPage;
