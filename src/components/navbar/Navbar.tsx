import './Navbar.css';
const Navbar = ()=>{
    return (
        <>
            <div className='flex bg-[#0F172A] justify-between w-[99vw] mt-5 rounded-xl p-2 ml-1 shadow-white shadow-xs border-white/10'>
                <h1 className='text-3xl font-[Bitcount_Grid_Double] select-none text-white/90'>&lt;PJ&gt;</h1>

                <div className='flex gap-3 text-[1rem] justify-center items-center pr-3'>
                    <a href="#home" className='font-[Poppins] hover:text-teal-400 text-white select-none'>Home</a>
                    <a href="#about" className='font-[Poppins] hover:text-teal-400 text-white select-none'>About</a>
                    <a href="#skill" className='font-[Poppins] hover:text-teal-400 text-white select-none'>Skills</a>
                    <a href="#project" className='font-[Poppins] hover:text-teal-400 text-white select-none' >Projects</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;