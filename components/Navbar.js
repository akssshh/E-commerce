import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="mx-5 mt-2">
        <a href="https://flowbite.com/" className="flex items-center">
          <Link href={"/"}>
            <Image src="/logodark.png" alt="logo" width={60} height={50} />
          </Link>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-4">
            D NEEDS
          </span>
        </a>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-6  md:text-md">
          <Link href={"/"}>
            {" "}
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            {" "}
            <li>Shop by Category</li>
          </Link>
          <Link href={"/sneaker"}>
            {" "}
            <li>Sneaker</li>
          </Link>
          <Link href={"/hoodies"}>
            {" "}
            <li>Hoodies</li>
          </Link>
          <Link href={"/tshirts"}>
            {" "}
            <li>Tshirts</li>
          </Link>
          <Link href={"/watch"}>
            {" "}
            <li>Watches</li>
          </Link>
        </ul>
      </div>
      <div
        
        className="cursor-pointer cart absolute right-0 top-4 mx-5 flex"
      >
       <Link href={'/login'} > <MdAccountCircle className="text-xl md:text-2xl mx-2" /> </Link>
        <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-2xl" />
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          {" "}
          <AiFillCloseCircle />{" "}
        </span>
        <ol className="list-decimal font-semibold">

          {Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your cart is Empty!</div> }

         { Object.keys(cart).map((k)=> {return <li key={k}>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">
                {cart[k].name}
              </div>
              <div className=" flex font-semibold items-center justify-center w-1/3 text-lg ">
                <AiFillMinusCircle onClick={()=> {removeFromCart(k, 1, 
                  cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-pink-500" />{" "}
                <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
                <AiFillPlusCircle onClick={()=> {addToCart(k, 1, 
                  cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>})}

       
        </ol>
        <div className="font-bold my-3">Subtotal: ₹{subTotal}</div>
        <div className="flex">
         <Link href={'/checkout'} > <a><button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            {" "}
            <BsFillBagCheckFill className="m-1" /> Checkout
          </button></a> </Link>

          <button onClick={clearCart} className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

