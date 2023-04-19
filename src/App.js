import React from 'react'
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  const users = [
    {name: 'Aidai', lastName: 'Nadyrbekova', age: 20, id: 1, },
    {name: 'Darika', lastName: 'Jolborsova', age: 19 , id: 2,},
    {name: 'Begimai', lastName: 'Suleimanova', age: 20, id: 3, },
    {name: 'Edil', lastName: 'Sydykbekov', age: 22, id: 3, },
    {name: 'Janara', lastName: 'Musaeva', age: 18, id: 3, },
    {name: 'Askat', lastName: 'Mendybaev', age: 21, id: 3, },
    {name: 'Kairat', lastName: 'Mendybaev', age: 20, id: 3, }
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App