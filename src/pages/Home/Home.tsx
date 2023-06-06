import React from 'react';

import Container from '../../components/common/Container';
import FlightsForms from '../../components/home/FlightsForm';

const Home = (): React.ReactElement => {
  return (
    <Container>
      <div className="mx-auto pt-14">
        <FlightsForms />
      </div>
    </Container>
  );
};
export default Home;
