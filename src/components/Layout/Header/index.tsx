"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${sticky ? "shadow-lg bg-white" : "shadow-none"} ${theme === 'dark' ? 'bg-gray-400' : 'bg-white'}`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-1">
        <div className="flex items-center justify-between px-4">
          <div className={`flex-shrink-0 py-2 ${sticky ? "pr-3" : "pr-4"}`}>
            <Logo />
          </div>
          <nav className="hidden lg:flex lg:items-center lg:justify-between lg:gap-6">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-2 pl-4 lg:pl-8">
            <button
              className="hidden lg:block bg-transparent text-black hover:text-primary px-3 py-1 rounded-lg text-sm"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </button>
            {isSignInOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div
                  ref={signInRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white backdrop-blur-md"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon icon="ri:currency-xrp" className="text-black hover:text-primary text-24 inline-block me-2" />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            <button
              className="hidden lg:block bg-black text-white hover:bg-transparent hover:text-black border border-black px-3 py-1 rounded-lg text-sm"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </button>
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div
                  ref={signUpRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white bg-opacity-90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon icon="ri:currency-xrp" className="text-black hover:text-primary text-24 inline-block me-2" />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg bg-black text-white"
              aria-label="Toggle mobile menu"
            >
              <Icon icon="ri-hamburger-menu" className="w-5 h-5" />
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white mt-1"></span>
              <span className="block w-5 h-0.5 bg-white mt-1"></span>
            </button>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ${navbarOpen ? "translate-x-0" : "translate-x-full"}
        z-50`}
      >
        <div className="flex items-center justify-between p-3">
          <h2 className="text-lg font-bold text-black dark:text-white">
            <Logo />
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            className="bg-black text-white dark:bg-gray-100 dark:text-black w-8 h-8 rounded-lg absolute top-0 right-0 mr-6 mt-6 border border-gray-300 shadow hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out"
            aria-label="Close menu Modal"
          >
            X
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <Link
              href="#"
              className="bg-transparent border border-primary text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-white text-sm"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary hover:bg-primary text-sm"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;