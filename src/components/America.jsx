import React from 'react';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.webp';

const destinations = [
    { image: one, name: 'BALI' },
    { image: two, name: 'SANTORINI' },
    { image: three, name: 'PALAWAN' },
    { image: two, name: 'BALI' },
    { image: three, name: 'SANTORINI' },
    { image: one, name: 'PALAWAN' },
    { image: two, name: 'SANTORINI' },
    { image: three, name: 'PALAWAN' },
];

const America = () => {
    return (
        <div className='mt-10'>
            <p className='text-4xl font-bold text-center my-5'>AMERICA</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto w-[80%] ">
                {destinations.map((destination, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="border-t rounded-lg w-full h-64 object-cover"
                        />
                        <p className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg text-white font-bold text-3xl">
                            {destination.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default America;
