import React from 'react';
import Logo from "../assets/logo.png";
import Bell from "../assets/icons/Bell.svg";
import Heart from "../assets/icons/Heart.svg";
import ShoppingCartSimple from "../assets/icons/ShoppingCartSimple.svg";

const navItems = [
    {
        key: "1",
        name: "Browse"
    },
    {
        key: "2",
        name: "What do you want to learn?"
    }
]

const navItemsRight = [
    {
        key: "1",
        name: "Create Account",
    },
    {
        key: "2",
        name: "Sign In",
    },
]

const Topbar = () => {
    return (
        <div className='flex justify-between bg-white text-[#4E5566] w-full px-8 py-6 gap-4'>
            <div className='flex gap-4'>
                <img className='w-[153px] h-10' src={Logo} alt="logo" />
                {navItems.map((item) => (
                    <div key={item.key} className="p-4 hover:cursor-pointer text-sm text-[#8C94A3]">
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
            <div className='flex items-center gap-6'>
                <div className="h-6 w-6">
                    <img src={Bell} alt="logo" />
                </div>
                <div className="h-6 w-6">
                    <img src={Heart} alt="logo" />
                </div>
                <div className="h-6 w-6">
                    <img src={ShoppingCartSimple} alt="logo" />
                </div>
                {navItemsRight.map((item) => (
                    <div key={item.key} className="p-4 hover:cursor-pointer text-sm text-[#8C94A3]">
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topbar