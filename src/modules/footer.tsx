import $IG_1 from '../assets/img/details/IG-1.jpg';
import $IG_2 from '../assets/img/details/IG-2.jpg';
import $IG_3 from '../assets/img/details/IG-3.jpg';
import $IG_4 from '../assets/img/details/IG-4.jpg';

const Footer = function() {
    const footerIMG = {
        img_1: $IG_1,
        img_2: $IG_2,
        img_3: $IG_3,
        img_4: $IG_4,
    }

    return (
        <footer className="bg-[#03344F]">
            <div className="w-full p-[0_15px] m-auto lg:max-w-7xl">
                <div className="flex p-[100px_0] lg:pt-20">
                    <div className="w-80 lg:w-100">
                        <h3 className="font-bold text-[24px] text-[#FFFFFF] p-[20px_0]">Beauty Care</h3>
                        <p className="leading-8 pb-15 text-[#FFFFFF]">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <a className="font-bold text-[24px] text-[#FFFFFF] hover:underline" href="#">Follow Us</a>
                    </div>
                    <div>
                        <h4 className="font-bold text-[24px] text-[#FFFFFF] p-[20px_0]">Instagram Shop</h4>
                        <div className='grid grid-cols-1 grid-rows-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-10'>
                            <div>
                                <img src={footerIMG.img_1}/>
                            </div>
                            <div>
                                <img src={footerIMG.img_2}/>
                            </div>
                            <div>
                                <img src={footerIMG.img_3}/>
                            </div>
                            <div>
                                <img src={footerIMG.img_4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;