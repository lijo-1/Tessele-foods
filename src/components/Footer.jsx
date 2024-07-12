import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className="bg-sea-green px-10 pt-20 pb-10">
            <div className="grid grid-cols-12 gap-4 max-w-[1060px] mx-auto">
                <div className="lg:col-end-4 col-start-1 col-end-6 text-white">
                    <h3 className='font-Mont font-bold text-lg md:text-2xl'>Tessele Foods</h3>
                    <p className='leading-snug font-Mont font-light text-xs mt-1 md:text-[13px]'>
                    Maniya kararkalam,
                    Eruthenpathy,Kozhinjampara,
                    Palakkad,
                    Kerala-678555</p>
                </div>
                <div className='flex col-start-11 col-end-13 justify-center'>
                    <BsFacebook className='fill-white w-7 h-10 mr-2' />
                    <AiFillInstagram className='fill-white w-8 h-10' />
                </div>
                <div className='col-start-3 col-end-11 text-center text-gray-200 mt-10'>
                    <p className='font-Mont font-extralight text-xs '>Made by Lijo</p>
                    <p className='font-Mont font-extralight text-xs '>&copy; 2023 Teseele Foods </p>

                </div>
            </div>
        </div>
    );
}

export default Footer;