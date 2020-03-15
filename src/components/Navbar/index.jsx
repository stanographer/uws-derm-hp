import React from 'react';

const Navbar = ({title, menu}) => {
    return (
        <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
            <div class="container mx-auto flex justify-center">
                <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-workSans font-bold">
                    {title}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;