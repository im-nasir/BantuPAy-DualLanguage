// 

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
                className="flex items-center gap-1 border-2 rounded p-2 text-xs "
            >
                <Image
                    src={localActive === 'fr' ? '/french.svg' : '/english.svg'}
                    alt="Current Language"
                    width={20}
                    height={20}
                />
                {localActive === 'fr' ? 'Français' : 'English'}
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <ul className="absolute bg-white border mt-2 shadow-lg rounded text-xs" >
                    <li
                        className="flex items-center gap-1 p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleLocaleChange('en')}
                    >
                        <Image src="/english.svg" alt="English" width={20} height={20} />
                        English
                    </li>
                    <li
                        className="flex items-center gap-1 p-2 cursor-pointer hover:bg-gray-100 text-xs"
                        onClick={() => handleLocaleChange('fr')}
                    >
                        <Image src="/french.svg" alt="Français" width={20} height={20} />
                        Français
                    </li>
                </ul>
            )}
        </div>
    );
}
