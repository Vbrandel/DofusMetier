import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Header from "../../component/header/header";
import Footer from '../../component/footer/footer';
import './Home.css';
import Mineur from '../../assets/Mineur.webp';
import Bucheron from '../../assets/bucheron.webp';
import Paysan from '../../assets/Paysan.webp';
import Pecheur from '../../assets/pecheur.webp';
import Alchimiste from '../../assets/alchimiste.webp';

function Home() {

  return (
    <>
      <div className='container'>
        <h1 class="titre">Dofus métier - WIP</h1>
      </div>
      
      <div className='barre-metier'>
        <h2>Récolte</h2>
        <ul>
          <li><NavLink to="/Alchimiste"><a href=""><img src={Alchimiste}/>Alchimiste</a></NavLink></li>
          <li><NavLink to="/Bucheron"><a href=""><img src={Bucheron}/>Bûcheron</a></NavLink></li>
          <li><NavLink to="/Paysan"><a><img src={Paysan}/>Paysan</a></NavLink></li>
          <li><NavLink to="/Pecheur"><a href=""><img src={Pecheur}/>Pécheur</a></NavLink></li>
          <li><NavLink to="/Mineur"><a href=""><img src={Mineur}/>Mineur</a></NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Home
