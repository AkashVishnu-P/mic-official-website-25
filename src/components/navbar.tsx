'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface NavItem {
  name: string;
  color: string;
  id: string;
  href: string;
}

const CubeNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', color: '#FF69B4', id: 'home', href: '/main' },
    { name: 'About Us', color: '#90EE90', id: 'about', href: '/about-us' },
    { name: 'Board', color: '#87CEEB', id: 'board', href: '/leads' },
    { name: 'Gallery', color: '#DDA0DD', id: 'gallery', href: '/gallery' },
    { name: 'Events', color: '#F0E68C', id: 'events', href: '/events' },
    { name: 'Projects', color: '#20B2AA', id: 'projects', href: '/projects' },
    { name: 'Leaderboard', color: '#F5DEB3', id: 'leaderboard', href: '/leaderboard' },
  ];

  // Close on outside click and on Escape
  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (isOpen && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  // small compact toggle button when closed
  if (!isOpen) {
    return (
      <button
        aria-label="Open navigation"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-4 z-[60] rounded-full p-1 bg-white/90 dark:bg-black/75 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
      >
        <Image src="/nav_menu.svg" alt="Open Menu" width={40} height={40} />
      </button>
    );
  }

            <Image
                src="/navbar_background.svg"
                alt="Navbar Background"
                width={220}
                height={220}
                className="absolute inset-0 object-cover navbar-darker"
            />

      {/* Panel with blur + improved contrast */}
      <div className="relative p-3 pt-4 pb-6 bg-white/80 dark:bg-black/65 backdrop-blur-md border border-white/40 dark:border-black/40 shadow-xl">
        {/* Close */}
        <button
  onClick={() => setIsOpen(false)}
  aria-label="Close navigation"
  className="absolute top-2 right-2 z-20 rounded-full p-1 bg-white/90 dark:bg-black/80 shadow-md 
             w-9 h-9 flex items-center justify-center
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
>
  <Image
    src="/close_button.svg"
    alt="Close"
    width={30}
    height={30}
    className="object-contain"
  />
</button>

            {/* Navigation content */}
            <div className="relative z-5 pt-4 pb-6 px-3 ">
 main
            <nav className="font-press-start space-y-1 max-h-96 overflow-y-auto pb-5 ">
                {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center py-2 px-2 text-white text-xs transition-all duration-200 ease-out group cursor-pointer"
                >
                    <Image
                    src={`/cube/${item.id}.svg`}
                        alt={`${item.name} Cube`}
                        width={24}
                        height={24}
                        className="mr-2"
                        style={{ filter: `drop-shadow(0 0 5px ${item.color})` }}
                    />
                    <span 
                    className="select-none flex-1 py-1 px-3 border-2 border-transparent transition-all duration-200 ease-out group-hover:border-[#1a4a6a] group-hover:bg-[#0a2a3a]/40 group-hover:shadow-[3px_3px_0px_0px_rgba(0,30,50,0.6)] group-hover:-translate-x-1"
                    >
                    {item.name}
                    </span>
                </a>
                ))}
            </nav>

                <nav className="font-press-start space-y-1 max-h-96 overflow-y-auto pb-5 ">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="flex items-center py-2 px-2 text-black text-xs hover:bg-white/20 rounded-lg transition-all duration-200 group cursor-pointer"
                        >
                            <Image
                                src={`/cube/${item.id}.svg`}
                                alt={`${item.name} Cube`}
                                width={24}
                                height={24}
                                className="mr-2 transition-transform duration-300 "
                                style={{ filter: `drop-shadow(0 0 5px ${item.color})` }}
                            />
                            <span
                                className="select-none"
                            >
                                {item.name}
                            </span>
                        </a>
                    ))}
                </nav>
 staging
            </div>
        </div>
    );
};

export default CubeNavbar;
