import { useState } from "react";

const Header = function() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        {id: 1, name: 'Home', href: '#home'},
        {id: 2, name: 'Services', href: '#services'},
        {id: 3, name: 'Doctors', href: '#doctors'},
        {id: 4, name: 'Products', href: '#products'},
        {id: 5, name: 'Gallery', href: '#gallery'},
    ]

    return(
        <>
            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-transparent bg-opacity-50 z-50" 
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#fff] shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4">
                    <button 
                        className="text-2xl mb-4" 
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        X
                    </button>
                    <ul className="space-y-4">
                        {navigation.map($nav => (
                            <li key={$nav.id}>
                                <a 
                                    className="block text-[#333333] font-medium hover:text-[#054C73] py-2" 
                                    href={$nav.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {$nav.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <header className="w-full fixed top-0 right-0 z-40 bg-white">
                <div className="m-auto p-[0_15px] lg:max-w-7xl lg:p-[0_15px] lg:m-auto">
                    <div className="flex justify-between items-center py-7 lg:py-9">
                        <div>
                            <a className="text-4xl font-bold text-[#054C73]" href="#home">Furniture</a>
                        </div>
                        <nav className="flex items-center">
                            <button 
                                className="md:hidden flex flex-col space-y-1 p-2 font-bold text-4xl" 
                                onClick={() => setIsOpen(!isOpen)} 
                                aria-label="Toggle menu">=</button>
                            {/* Desktop navigation */}
                            <ul className="hidden md:flex gap-10">
                                {navigation.map($nav => (
                                    <li key={$nav.id}>
                                        <a className="text-[#333333] font-medium hover:pb-1.5 hover:border-b-2 duration-100" href={$nav.href}>{$nav.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;