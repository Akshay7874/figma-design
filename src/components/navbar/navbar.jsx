import React from 'react';
import "./navbar.css";

const navItems = [
    {
        key: "1",
        name: "Home"
    },
    {
        key: "2",
        name: "Courses"
    },
    {
        key: "3",
        name: "About"
    },
    {
        key: "4",
        name: "Contact"
    },
    {
        key: "5",
        name: "Become and Investor"
    },
]

const navItemsRight = [
    {
        key: "1",
        name: "USD"
    },
    {
        key: "2",
        name: "English"
    },
]

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='flex'>
                {navItems.map((item) => (
                    <div key={item.key} className="p-4 hover:cursor-pointer hover:text-white text-sm text-[#8C94A3]">
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
            <div className='flex'>
                {navItemsRight.map((item) => (
                    <div key={item.key} className="p-4 hover:cursor-pointer hover:text-white text-sm text-[#8C94A3]">
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar