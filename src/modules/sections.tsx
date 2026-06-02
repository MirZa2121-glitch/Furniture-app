import { arts, collections, imagines } from "../components/img.ts";
import { cards } from "../components/card.ts";
import { cardsVariant } from "../components/card.ts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Intro block //

export const Intro = function() {
    useGSAP(() => {
        gsap.from('.intro__block', {
            scrollTrigger: {
                trigger: '.intro__block',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: 'power2.out',
        });

        gsap.from('.intro__btn', {
            scrollTrigger: {
                trigger: '.intro__btn',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 1.3,
            ease: 'power2.out',
        });
    })

    return(
        <section className="w-full flex justify-center">
            <div className="intro w-full max-w-[1800px] px-[15px] md:px-[30px]">
                <div className="flex justify-end md:justify-center md:max-w-[900px] lg:max-w-[1450px]">
                    <div className="intro__block max-w-[560px] bg-[#DFE9F4] p-[40px] md:p-[35px] rounded-[10px] shadow-xl m-[100px_0] md:m-[80px_0]">
                        <div className="w-full">
                            <p className="font-semibold tracking-[3px] text-[#333333]">New Arrival</p>
                            <h1 className="text-[52px] text-[#054C73] font-bold">Discover Our New Collection</h1>
                            <p className="text-[#333333] font-medium leading-9 m-[25px_0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                            <a href="#" className="intro__btn m-[20px_0] inline-flex min-w-[180px] h-18 justify-center items-center bg-[#054C73] font-bold text-[#FFFFFF] rounded-[50px] hover:bg-transparent hover:text-[#000] hover:border duration-150">BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Support block //

export const Support = function() {
    useGSAP(() => {
        gsap.from('.support__visible', {
            scrollTrigger: {
                trigger: '.support__visible',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
        });
    })

    const $supports = [
        {id: 1, title: 'Free Delivery', desc: 'Lorem ipsum dolor sit amet.', IMG: imagines.img_1},
        {id: 2, title: 'Support 24/7', desc: 'Lorem ipsum dolor sit amet.', IMG: imagines.img_2},
        {id: 3, title: '100% Authentic', desc: 'Lorem ipsum dolor sit amet.', IMG: imagines.img_3},
    ]

    return(
        <section className="bg-[#F2F5FF]">
            <div className="lg:max-w-7xl p-[0_15px] md:p-[0_25px] m-auto">
                <div className="grid-cols-1 md:grid md:grid-cols-2 md:m-a lg:grid lg:grid-cols-3 column justify-center gap-8 md:gap-6 md:p-[40px_0] lg:p-[50px_0] lg:mt-[-20px] z-10">
                    {$supports.map(items => (
                        <div key={items.id} className="support__visible flex items-center gap-8 md:gap-6 md:flex-col md:text-center">
                            <div className="p-[50px_0] md:p-[30px_0] lg:p-[10px_0]">
                                <img src={items.IMG} alt="#10101010101"/>
                            </div>
                            <div>
                                <p className="text-2xl md:text-xl text-[#333333] font-semibold">{items.title}</p>
                                <p className="text-[#333333] md:text-sm">{items.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Collection block //

export const Collection = function() {
    useGSAP(() => {
        gsap.from('.collection__title', {
            scrollTrigger: {
                trigger: '.collection__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 0.7,
            ease: 'power2.out',
        });

        gsap.from('.collection__desc', {
            scrollTrigger: {
                trigger: '.collection__desc',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 1.2,
            ease: 'power2.out',
        });
    })

    return(
        <section className="pb-10">
            <div className="w-full p-[0_15px] md:p-[0_25px] m-auto lg:max-w-7xl">
                <div className="m-auto text-center p-[50px_0] md:p-[40px_0]">
                    <h2 className="collection__title text-[#333333] font-bold text-3xl md:text-2xl m-[20px_0]">Inspiration Collection</h2>
                    <p className="collection__desc text-[20px] md:text-lg text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center m-[50px_30px] md:m-[40px_20px] md:gap-5 gap-7">
                    <div className="md:hover:-mt-6 lg:hover:-mt-8 duration-150">
                        <img src={collections.img_1} alt=""/>
                    </div>
                    <div className="md:hover:-mt-6 lg:hover:-mt-8 duration-150">
                        <img src={collections.img_2} alt=""/>
                    </div>
                    <div className="md:hover:-mt-6 lg:hover:-mt-8 duration-150">
                        <img src={collections.img_3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Space block //

export const Space = function() {
    useGSAP(() => {
        gsap.from('.space__title', {
            scrollTrigger: {
                trigger: '.space__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
        });

        gsap.from('.space__desc', {
            scrollTrigger: {
                trigger: '.space__desc',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1.2,
            delay: 1,
            ease: 'power2.out',
        });

        gsap.from('.space__btn', {
            scrollTrigger: {
                trigger: '.space__btn',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1.5,
            delay: 2,
            ease: 'power2.out',
        });

        gsap.from('.space__hero', {
            scrollTrigger: {
                trigger: '.space__hero',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: 30,
            duration: 1.7,
            delay: 2.7,
            ease: 'power2.out',
        });
    })

    return (
        <section className="bg-[#F2F5FF]">
            <div className="w-full p-[0_15px] md:p-[0_25px] m-auto lg:max-w-7xl">
                <div className="md:flex lg:flex items-center justify-between p-[70px_0] md:p-[50px_0] m-[50px_0] md:gap-10">
                    <div className="w-70 md:w-80 lg:w-125">
                        <h2 className="space__title text-[32px] md:text-2xl font-bold text-[#333333]">Beautify Your Space</h2>
                        <p className="space__desc text-[20px] md:text-base text-[#666666] p-[30px_0] md:p-[20px_0] leading-10">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <a href="#" className="space__btn w-57 md:w-52 h-17 flex justify-center items-center bg-[#054C73] text-[#FFFFFF] hover:bg-[#043854] transition-colors" style={{borderRadius: '50px'}}>LEARN MORE</a>
                        </div>
                    <div className="space__hero hidden md:block lg:block w-full md:w-auto">
                        <img src={arts.img_1} alt="" className="md:max-w-sm lg:max-w-none"/>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Range block //

export const Range = function() {
    useGSAP(() => {
        gsap.from('.range__title', {
            scrollTrigger: {
                trigger: '.range__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power2.out',
        });

        gsap.from('.range__desc', {
            scrollTrigger: {
                trigger: '.range__desc',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 0,
            duration: 1,
            delay: 1,
            ease: 'power2.out',
        });
    })

    return (
        <section>
            <div className="w-full p-[0_15px] md:p-[0_25px] m-auto lg:max-w-7xl">
                <div className="p-11 md:p-8">
                    <div className="m-auto text-center mb-8 md:mb-6">
                        <h2 className="range__title text-[32px] md:text-2xl font-bold text-[#333333]">Browse The Range</h2>
                        <p className="range__desc text-[20px] md:text-lg text-[#666666] p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-10 md:gap-7 pt-15 md:pt-10">
                        {cards.map(cardItems => (
                            <a className="md:hover:scale-105 lg:hover:scale-110 duration-150 text-center" href={cardItems.href} key={cardItems.id}>
                                <div>
                                    <div className="m-auto">
                                        <img src={cardItems.IMG} alt="" className="w-full"/>
                                    </div>
                                    <p className="font-semibold text-[24px] md:text-xl m-[15px_auto] text-[#333333]">{cardItems.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="w-full h-2 text-[#D7D6D6]" />
        </section>
    )
}

// Works block //

export const Works = function() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.works__cards',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        tl.from('.works__text', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
        })
        .from('.works__card', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
        }, '-=0.4');
    })

    return (
        <section>
            <div className="w-full p-[0_15px] md:p-[0_25px] m-auto lg:max-w-7xl">
                <div className="p-[70px_0] md:p-[50px_0]">
                    <div className="works__text m-auto text-center mb-8 md:mb-6">
                        <h2 className="text-[32px] md:text-2xl font-bold text-[#333333]">How It Works</h2>
                        <p className="text-[20px] md:text-lg text-[#666666] p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <div className="works__cards md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 p-[70px_0] md:p-[50px_0] m-[0_30px] md:m-[0_10px] lg:m-[0_20px] gap-6 md:gap-5">
                            {cardsVariant.map(cardsVariantItems => (
                                <div className="works__card text-center p-[50px_0] md:p-[35px_0] lg:p-[10px_0]" key={cardsVariantItems.id}>
                                    <div>
                                        <img src={cardsVariantItems.IMG} alt="" className="mx-auto"/>
                                    </div>
                                    <div className="justify-center md:w-full lg:w-100">
                                        <h4 className="text-[24px] md:text-lg font-bold text-[#333333] p-[10px_0]">{cardsVariantItems.name}</h4>
                                        <p className="text-[18px] md:text-sm text-[#666666]">{cardsVariantItems.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Join block //

export const Join = function() {
    return (
        <section className="bg-[#F2F5FF]">
            <div className="w-full p-[0_15px] md:p-[0_25px] m-auto lg:max-w-7xl">
                <div className="p-[100px_0] md:p-[70px_0]">
                    <div className="m-auto justify-center text-center mb-10 md:mb-8">
                        <h2 className="text-[32px] md:text-2xl font-bold text-[#333333]">Join Our Mailing List</h2>
                        <p className="text-[20px] md:text-lg text-[#666666] p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-0 m-[70px_0] md:m-[50px_10%] lg:m-[50px_30%]">
                        <input type="mail" placeholder="example@gmail.com" className="w-50 md:w-64 lg:w-121 h-18 bg-[#FFFFFF] text-[#011c4255] p-[0_20px]" style={{border: '2px solid #011C42', borderRadius: '3px'}}/>
                        <button className="w-30 md:w-32 lg:w-38.25 h-17.5 flex justify-center items-center bg-[#054C73] text-[#fff] font-bold hover:bg-[#043854] transition-colors" style={{border: '2px solid #011C42', borderRadius: '3px'}}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}