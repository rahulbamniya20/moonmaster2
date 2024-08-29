/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Twitter } from 'lucide-react';
import XIcon from '@mui/icons-material/X';
import  Tony from '../assets/KOlsImage/ Tony.jpg'
import Gordon from '../assets/KOlsImage/Gordon.jpg'
import Davinci from '../assets/KOlsImage/Davinci.jpg'
import Bitlord from '../assets/KOlsImage/Bitlord.jpg'
import Bull from '../assets/KOlsImage/Bull.jpg'
import Elja from '../assets/KOlsImage/Elja.jpg'

import Martini from '../assets/KOlsImage/Martini.jpg'
import King from '../assets/KOlsImage/King.jpg'
import MASON from '../assets/KOlsImage/MASON.jpg'
import Rover from '../assets/KOlsImage/Rover.jpg'

const kols = [
  { name: 'Gordon', handle: '@AltcoinGordon', image: Gordon },
  { name: 'Davincij15', handle: '@Davincij15', image: Davinci },
  { name: 'Crypto Bitlord', handle: '@crypto_bitlord7', image: Bitlord },
  { name: 'Bull BNB', handle: '@bull_bnb', image: Bull },
  { name: 'Crypto Tony', handle: '@CryptoTony__', image: Tony },
  { name: 'Eljaboom', handle: '@Eljaboom', image: Elja },
  { name: 'Martini Guy', handle: '@MartiniGuyYT', image: Martini },
  { name: 'Cryptoking', handle: '@Cryptoking', image: King },
  { name: 'Mason Versluis', handle: '@MasonVersluis', image: MASON },
  { name: 'Rover', handle: '@rovercrc', image: Rover },
];

const KolCard = ({ kol }) => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img src={kol.image} alt={kol.name} className="w-24 h-24 rounded-full mb-4 border-2 border-purple-400" />
      <h3 className="text-xl font-bold text-white mb-2">{kol.name}</h3>
      <a
        href={`https://x.com/${kol.handle.substring(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-300 flex items-center hover:text-purple-200 transition-colors"
      >
        <XIcon fontSize='small' className="mr-1 w-1 h-1" />
        {kol.handle}
      </a>
    </div>
  );
};

const Kol = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B1F] to-[#1A1A3A] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Our Top KOLs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {kols.map((kol) => (
            <KolCard key={kol.handle} kol={kol} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kol;