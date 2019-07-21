import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LatestList from '../../components/Products/Products';

export default function Home() {
  return (
    <>
      <Header />
      <LatestList />
      <Footer />
    </>
  );
}
