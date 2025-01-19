import React, { useState } from 'react';

const Navbar = () => {
    const [isOpenNested, setIsOpenNested] = useState(false);

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800 h-24">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <a
                    className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                    href="#"
                    aria-label="Brand"
                >
                    Travel Blog
                </a>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 relative">
                    <a
                        className="font-medium text-blue-500 focus:outline-none"
                        href="#"
                        aria-current="page"
                    >
                        Home
                    </a>
                    <a
                        className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                        href="#"
                    >
                        Blog
                    </a>
                    {/* Dropdown for Destinations */}
                    <div className="relative group">
                        <a
                            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 cursor-pointer"
                            href="#"
                        >
                            Destinations
                        </a>
                        <div className="absolute top-3 hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-40 dark:bg-neutral-700 z-10">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                            >
                                Bali
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                            >
                                Santorini
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                            >
                                Palawan
                            </a>
                        </div>
                    </div>
                    {/* Dropdown for Categories */}
                    <div className="relative group">
                        <a
                            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 cursor-pointer"
                            href="#"
                        >
                            Categories
                        </a>
                        <div className="absolute top-3 hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-40 dark:bg-neutral-700 z-10">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                            >
                                Beaches
                            </a>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsOpenNested(true)}
                                onMouseLeave={() => setIsOpenNested(false)}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                                >
                                    Mountains
                                </a>
                                {/* Nested Dropdown */}
                                {isOpenNested && (
                                    <div className="absolute left-full top-0 bg-white shadow-md rounded-lg mt-0 w-40 dark:bg-neutral-700 z-20">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                                        >
                                            Himalayas
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                                        >
                                            Rockies
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                                        >
                                            Andes
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600"
                            >
                                Cities
                            </a>
                        </div>
                    </div>
                    <a
                        className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                        href="#"
                    >
                        Gallery
                    </a>
                    <a
                        className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                        href="#"
                    >
                        About
                    </a>
                    <a
                        className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                        href="#"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
