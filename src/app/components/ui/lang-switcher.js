'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

export default function LangSwitch() {
    const router = useRouter();
    const localActive = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    // Function to switch language
    const handleLocaleChange = (nextLocale) => {
        router.replace(`/${nextLocale}`);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative">
            {/* Button to Toggle Dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 border border-gray-300 bg-white shadow-sm rounded-full px-2 py-1 text-[10px] sm:text-xs md:text-sm hover:bg-gray-100 transition-all duration-200"
            >
                <Image
                    src={localActive === 'fr' ? '/french.svg' : '/english.svg'}
                    alt="Current Language"
                    width={14} height={14} // Smaller icons for mobile
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                    {localActive === 'fr' ? 'Fr' : 'En'}
                </span>
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <ul className="absolute right-0 bg-white border border-gray-300 mt-2 shadow-lg rounded-lg overflow-hidden w-[80px] sm:w-[100px]">
                    <li
                        className={`flex items-center gap-1 p-2 cursor-pointer ${
                            localActive === 'en' ? 'bg-gray-200' : 'hover:bg-gray-100'
                        } transition-all duration-200`}
                        onClick={() => handleLocaleChange('en')}
                    >
                        <Image
                            src="/english.svg"
                            alt="English"
                            width={14} height={14}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                            English
                        </span>
                    </li>
                    <li
                        className={`flex items-center gap-1 p-2 cursor-pointer ${
                            localActive === 'fr' ? 'bg-gray-200' : 'hover:bg-gray-100'
                        } transition-all duration-200`}
                        onClick={() => handleLocaleChange('fr')}
                    >
                        <Image
                            src="/french.svg"
                            alt="Français"
                            width={14} height={14}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                        <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                            Français
                        </span>
                    </li>
                </ul>
            )}
        </div>
    );
}
