import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 justify-start text-white px-4 py-4 w-full absolute bottom-0 left-0">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-sm text-gray-400 text-center md:text-left">
                    © 2025. Made With Love by <a href="https://github.com/RohanSulakhe/Linkify.git" className="hover:underline">.RohanSulakhe</a>
                </span>
                <ul className="flex space-x-6 mt-2 md:mt-0 text-sm text-gray-400">
                    <li><a href="https://github.com/RohanSulakhe/Linkify.git" className="hover:underline">GitHub</a></li>
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a target='_blank' href="mailto:rohanusulakhe@gmail.com" className="hover:underline">Email</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
