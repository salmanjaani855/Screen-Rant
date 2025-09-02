import React from 'react'
import Navbar from './Navbar'
import main from './assets/main.png'
import Screenshot from './assets/Screenshot.png'
import Screenshot2 from './assets/Screenshot2.png'
import PlayButton from './assets/PlayButton.svg'
import Add2 from './assets/Add2.svg'
import Add from './assets/Add.svg'
import Like1 from './assets/Like1.svg'
import like from './assets/like.svg'
import share from './assets/share.svg'
import dislike from './assets/dislike.svg'
import Arrow_right from './assets/Arrow_right.svg'
import Twitter from './assets/Twitter.svg'
import Instagram from './assets/Instagram.svg'
import Facebook from './assets/Facebook.svg'
import upArrow from './assets/upArrow.svg'
import Trailer_1 from './assets/Trailer_1.png'
import Trailer_3 from './assets/Trailer_3.png'
import Trailer_4 from './assets/Trailer_4.png'
import Trailer_5 from './assets/Trailer_5.png'
import Trailer_6 from './assets/Trailer_6.png'
import Trailer_7 from './assets/Trailer_7.png'
import Trailer_8 from './assets/Trailer_8.png'
import Trailer_9 from './assets/Trailer_9.png'
import data from './assets/data.png'
import image15 from './assets/image15.png'

const ActorPage = () => {
    return (
        <div>
            
        <div className="relative bg-gray-400 w-full overflow-hidden flex flex-col items-center justify-start pt-[4rem] px-[0rem] pb-[8rem] box-border gap-[4rem] text-center text-[1.25rem] text-white font-staatliches">
           
            <div className="max-w-[80rem] w-full mx-auto px-6 flex flex-col items-start justify-start gap-[3rem] text-left text-[2rem] font-dm-sans">
                <div className="self-stretch flex flex-row items-start justify-start gap-[4rem] text-center text-[1rem] text-darkgray">
                    <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                        <img className="w-[25.875rem] relative rounded-xl h-[34.5rem] object-cover" alt="" src={main} />
                        <div className="self-stretch [backdrop-filter:blur(48px)] rounded-xl bg-gray-300 border-gray-200 border-solid border-[1px] overflow-hidden flex flex-col items-start justify-start p-[1.5rem] gap-[1rem] text-left text-[0.75rem]">
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Full Name</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">Thomas Cruise Mapother IV (TC)</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Birthdate</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">July 3, 1962</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Birthplace</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">Syracuse, New York, USA</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Height</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">5' 7"</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Profession</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">Actor</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Net Worth</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">$600,000,000</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Source of Wealth</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">Actor, producer, director</div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem]">
                                <div className="self-stretch relative leading-[100%]">Nationality</div>
                                <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-medium text-white">American</div>
                            </div>
                        </div>
                        <div className="self-stretch [backdrop-filter:blur(48px)] rounded-xl bg-gray-300 border-gray-200 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-between py-[1.25rem] px-[0.75rem] gap-[0rem] text-goldenrod-100">
                            <div className="flex-1 flex flex-col items-center justify-start gap-[0.5rem]">
                                <img className="w-[3rem] relative h-[3rem] object-cover" alt="" src={data} />
                                <b className="relative leading-[1.5rem]">
                                    <span>0</span>
                                    <span className="text-darkgray">/4</span>
                                </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start gap-[0.5rem]">
                                <img className="w-[3rem] relative h-[3rem] object-cover" alt="" src={image15} />
                                <b className="relative leading-[1.5rem]">
                                    <span>12</span>
                                    <span className="text-darkgray">/19</span>
                                </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start gap-[0.5rem]">
                                <img className="w-[3rem] relative h-[3rem] object-cover" alt="" src={image15} />
                                <b className="relative leading-[1.5rem]">
                                    <span>3</span>
                                    <span className="text-darkgray">/12</span>
                                </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start gap-[0.5rem]">
                                <img className="w-[3rem] relative h-[3rem] object-cover" alt="" src={image15} />
                                <b className="relative leading-[1.5rem]">
                                    <span>0</span>
                                    <span className="text-darkgray">/0</span>
                                </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-start gap-[0.5rem]">
                                <img className="w-[3rem] relative h-[3rem] object-cover" alt="" src={image15} />
                                <b className="relative leading-[1.5rem]">
                                    <span>6</span>
                                    <span className="text-darkgray">/9</span>
                                </b>
                            </div>
                        </div>
                        <div className="self-stretch [backdrop-filter:blur(48px)] rounded-xl bg-gray-300 border-gray-200 border-solid border-[1px] overflow-hidden flex flex-row items-center justify-between py-[1.25rem] px-[1.5rem] gap-[0rem] text-white">
                            <div className="relative leading-[1.5rem]">Social Media</div>
                            <div className="flex flex-row items-center justify-end gap-[0.75rem]">
                                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={Twitter} />
                                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={Instagram} />
                                <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={Facebook} />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[80rem] w-full mx-auto px-6 flex flex-col items-start justify-start gap-[2rem] text-left text-[1.5rem] text-white">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[3rem] font-staatliches">
                            <div className="self-stretch border-gray-200 border-solid border-b-[2px] overflow-hidden flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.75rem] gap-[0rem]">
                                <div className="relative leading-[100%]">Tom Cruise</div>
                                <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-goldenrod-100 flex flex-row items-center justify-center py-[0.5rem] px-[1.25rem] gap-[0.375rem] text-[0.75rem] text-black font-dm-sans">
                                    <img className="w-[1rem] relative h-[1rem]" alt="" src={Add} />
                                    <div className="relative leading-[0.75rem] font-medium">Follow</div>
                                </div>
                            </div>
                            <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-dm-sans [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical] text-darkgray">
                                <span>{`Tom Cruise's knee injury may have changed the course of his life, leading him to become a Hollywood actor instead of a professional wrestler. Although it may have been an unforeseen obstacle, this event served as a major turning point in his life and ultimately helped him become one of the world's most well known and celebrated artists. With the majority of his movies grossing over $100 million at the box office and diligently getting so into his roles that he even impresses and outperforms other actors by doing his own stunts, Tom Cruise is a superstar. `}</span>
                                <span className="text-goldenrod-100">See more</span>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] text-[0.875rem]">
                            <div className="w-[25.188rem] rounded h-[14rem] flex flex-col items-start justify-end p-[0.75rem] box-border bg-[url('./assets/HeadingContent.png')] bg-cover bg-no-repeat bg-[top]">
                                <div className="self-stretch flex flex-row items-end justify-start gap-[0.5rem]">
                                    <img className="w-[2.5rem] relative h-[2.5rem]" alt="" src={PlayButton} />
                                    <div className="flex-1 flex flex-col items-start justify-end">
                                        <div className="self-stretch relative leading-[1.5rem] font-medium">Play Video</div>
                                        <div className="relative text-[0.75rem] leading-[1rem] text-darkgray">2:15</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 [backdrop-filter:blur(48px)] rounded bg-gray-300 border-gray-200 border-solid border-[1px] flex flex-col items-start justify-start pt-[0.5rem] px-[0.75rem] pb-[0.75rem] gap-[0.75rem] text-[1rem] text-gray-100">
                                <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
                                    <div className="flex-1 relative leading-[1.5rem] text-[#fff] font-medium">{`Playlist `}</div>
                                    <div className="relative text-[0.875rem] leading-[1.25rem] font-medium text-darkgray">View All</div>
                                </div>
                                <div className="self-stretch flex flex-col items-center justify-center gap-[0.5rem] text-[0.875rem]">
                                    <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[0.75rem] relative gap-[0.75rem]">
                                        <img className="w-[9.75rem] relative rounded-tl rounded-tr-none rounded-br-none rounded-bl h-[5rem] object-cover z-[0]" alt="" src={Screenshot} />
                                        <div className="flex-1 flex flex-col items-start justify-center gap-[0.75rem] z-[1]">
                                            <div className="self-stretch text-[#fff] relative leading-[1.25rem] font-medium">Mission: Impossible – Dead Reckoning..</div>
                                            <div className="relative text-[0.75rem] leading-[1rem] text-darkgray text-right">2:10</div>
                                        </div>
                                        <img className="w-[2rem] absolute !!m-[0 important] top-[1.563rem] left-[4rem] h-[2rem] z-[2]" alt="" src={PlayButton} />
                                    </div>
                                    <div className="self-stretch rounded-lg bg-gray-300 flex flex-row items-center justify-start py-[0rem] pl-[0rem] pr-[0.75rem] relative gap-[0.75rem]">
                                        <img className="w-[9.75rem] relative rounded-tl rounded-tr-none rounded-br-none rounded-bl h-[5rem] object-cover z-[0]" alt="" src={Screenshot2} />
                                        <div className="flex-1 flex flex-col items-start justify-center gap-[0.75rem] z-[1]">
                                            <div className="self-stretch text-[#fff] relative leading-[1.25rem] font-medium">{`When You’re More Than Just Weird `}</div>
                                            <div className="relative text-[0.75rem] leading-[1rem] text-darkgray text-right">2:01</div>
                                        </div>
                                        <img className="w-[2rem] absolute !!m-[0 important] top-[1.625rem] left-[4rem] h-[2rem] z-[2]" alt="" src={PlayButton} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                            <div className="self-stretch flex flex-row items-center justify-between gap-[0rem]">
                                <div className="relative leading-[2rem] font-medium">Filmography</div>
                                <div className="rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.875rem] text-darkgray">
                                    <div className="relative leading-[1.25rem] font-medium">View All</div>
                                    <img className="w-[1rem] relative h-[1rem]" alt="" src={upArrow} />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start relative gap-[1.25rem] text-[0.875rem]">
                                <div className="flex-1 rounded h-[15.5rem] flex flex-col items-start justify-end p-[0.75rem] box-border relative gap-[0.25rem] bg-[url('./assets/missionImpossible.png')] bg-cover bg-no-repeat bg-[top] z-[0]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium z-[0]">{``}</div>
                                    <div className="relative leading-[1.25rem] text-darkgray z-[1]"></div>
                                    <img className="w-[1.75rem] !!m-[0 important] absolute top-[0.5rem] right-[0.594rem] rounded h-[1.75rem] z-[2]" alt="" src={Add2} />
                                </div>
                                <div className="flex-1 rounded h-[15.5rem] flex flex-col items-start justify-end p-[0.75rem] box-border relative gap-[0.25rem] bg-[url('./assets/Maverik.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium z-[0]"></div>
                                    <div className="flex flex-row items-center justify-start z-[1] text-darkgray">
                                        <div className="relative leading-[1.25rem]"></div>
                                    </div>
                                    <img className="w-[1.75rem] !!m-[0 important] absolute top-[0.5rem] right-[0.563rem] rounded h-[1.75rem] z-[2]" alt="" src={Add2} />
                                </div>
                                <div className="flex-1 rounded h-[15.5rem] flex flex-col items-start justify-end p-[0.75rem] box-border relative gap-[0.25rem] bg-[url('./assets/movieBtn.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium z-[0]"></div>
                                    <div className="flex flex-row items-center justify-start z-[1] text-darkgray">
                                        <div className="relative leading-[1.25rem]"></div>
                                    </div>
                                    <img className="w-[1.75rem] !!m-[0 important] absolute top-[0.5rem] right-[0.594rem] rounded h-[1.75rem] z-[2]" alt="" src={Add2} />
                                </div>
                                <div className="flex-1 rounded h-[15.5rem] flex flex-col items-start justify-end p-[0.75rem] box-border relative gap-[0.25rem] bg-[url('./assets/EdgeTomorrow.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium z-[0]"></div>
                                    <div className="flex flex-row items-center justify-start z-[1] text-darkgray">
                                        <div className="relative leading-[1.25rem]"></div>
                                    </div>
                                    <img className="w-[1.75rem] !!m-[0 important] absolute top-[0.5rem] right-[0.563rem] rounded h-[1.75rem] z-[2]" alt="" src={Add2} />
                                </div>
                                <div className="w-[5.25rem] absolute !!m-[0 important] top-[0rem] right-[0rem] [background:linear-gradient(90deg,_rgba(9,_9,_11,_0),_#09090b)] h-[15.5rem] z-[4]" />
                                <img className="w-[1.25rem] absolute !!m-[0 important] top-[calc(50%_-_11px)] right-[0.75rem] h-[1.25rem] object-contain z-[5]" alt="" src={Arrow_right} />
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
                            <div className="relative leading-[2rem] font-medium">Photos</div>
                            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start flex-wrap content-start gap-[1.25rem] text-[1rem]">
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_1} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_3} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_4} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_5} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_6} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_7} />
                                <img className="w-[11.563rem] relative rounded h-[11.563rem] object-cover" alt="" src={Trailer_8} />
                                <div className="w-[11.563rem] relative rounded h-[11.563rem] bg-[url('./assets/Trailer_9.png')] bg-cover bg-no-repeat bg-[top]">
                                    <div className="absolute top-[5.063rem] left-[3.5rem] leading-[1.5rem] font-medium overflow-hidden text-ellipsis whitespace-nowrap">+99 More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[80rem] w-full mx-auto px-6 flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[0rem]">
                        <div className="flex-1 relative leading-[2rem] font-medium">News about Tom Cruise</div>
                        <div className="rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.875rem] text-darkgray">
                            <div className="relative leading-[1.25rem] font-medium">View All</div>
                            <img className="w-[1rem] relative h-[1rem]" alt="" src={upArrow} />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] text-[0.75rem]">
                        <div className="flex-1 rounded-md bg-gray-300 flex flex-col items-start justify-start">
                            <div className="self-stretch relative rounded-t-lg rounded-b-none h-[8.75rem] overflow-hidden shrink-0 bg-[url('./assets/Trailer_01.png')] bg-cover bg-no-repeat bg-[top]">
                                <div className="absolute top-[0.5rem] right-[0.5rem] rounded-[999px] bg-gray-600 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                                    <div className="relative leading-[1rem] overflow-hidden text-ellipsis whitespace-nowrap"></div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem] text-[1rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">Tom Cruise Reportedly Takes New Relationship To Next Level As He Tries To Reconcile With Daughter Suri</div>
                                    <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Tom is apparently making big steps in his personal life, from going official with his new romance to trying to fix things with his daughter.</div>
                                </div>
                                <div className="self-stretch rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center pt-[0.5rem] px-[0.5rem] pb-[0.625rem] text-[0.875rem]">
                                    <div className="relative leading-[1.25rem]">Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-300 flex flex-col items-start justify-start">
                            <div className="self-stretch relative rounded-t-lg rounded-b-none h-[8.75rem] overflow-hidden shrink-0 bg-[url('./assets/Trailer_011.png')] bg-cover bg-no-repeat bg-[top]">
                                <div className="absolute top-[0.5rem] right-[0.5rem] rounded-[999px] bg-gray-600 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                                    <div className="relative leading-[1rem] overflow-hidden text-ellipsis whitespace-nowrap"></div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem] text-[1rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">Tom Cruise Shocks Fans During Appearance With Prince William As His Face Looks Unrecognizable</div>
                                    <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Cruise attended a charity gala with Prince William, but all fans could talk about was the actor's changing appearance.</div>
                                </div>
                                <div className="self-stretch rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center pt-[0.5rem] px-[0.5rem] pb-[0.625rem] text-[0.875rem]">
                                    <div className="relative leading-[1.25rem]">Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-300 flex flex-col items-start justify-start">
                            <div className="self-stretch relative rounded-t-lg rounded-b-none h-[8.75rem] overflow-hidden shrink-0 bg-[url('./assets/Trailer_02.png')] bg-cover bg-no-repeat bg-[top]">
                                <div className="absolute top-[0.5rem] right-[0.5rem] rounded-[999px] bg-gray-600 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                                    <div className="relative leading-[1rem] overflow-hidden text-ellipsis whitespace-nowrap"></div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem] text-[1rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">Fans Applauded Leah Remini For Her Honesty When Asked If Tom Cruise Blacklisted Her From Roles In Hollywood</div>
                                    <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Leah Remini was very direct when talking about her feud with Tom Cruise and Scientology, and if it hurt her career.</div>
                                </div>
                                <div className="self-stretch rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center pt-[0.5rem] px-[0.5rem] pb-[0.625rem] text-[0.875rem]">
                                    <div className="relative leading-[1.25rem]">Read More</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-300 flex flex-col items-start justify-start">
                            <div className="self-stretch relative rounded-t-lg rounded-b-none h-[8.75rem] overflow-hidden shrink-0 bg-[url('./assets/Trailer_03.png')] bg-cover bg-no-repeat bg-[top]">
                                <div className="absolute top-[0.5rem] right-[0.5rem] rounded-[999px] bg-gray-600 flex flex-row items-start justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                                    <div className="relative leading-[1rem] overflow-hidden text-ellipsis whitespace-nowrap"></div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem] text-[1rem]">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                                    <div className="self-stretch relative leading-[1.5rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">Tom Cruise Refused To Discuss His Worst Box Office Film Ever After The Final Version Differed From The Director's Cut</div>
                                    <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                                        <p className="m-0">Tom Cruise's box office bust resurfaced years late when the director's cut was finally released.</p>
                                        <p className="m-0">&nbsp;</p>
                                    </div>
                                </div>
                                <div className="self-stretch rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center pt-[0.5rem] px-[0.5rem] pb-[0.625rem] text-[0.875rem]">
                                    <div className="relative leading-[1.25rem]">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[80rem] w-full mx-auto px-6 flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
                        <div className="flex-1 relative leading-[2rem] font-medium">Trivia</div>
                        <div className="rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.875rem] text-darkgray">
                            <div className="relative leading-[1.25rem] font-medium">View All</div>
                            <img className="w-[1rem] relative h-[1rem]" alt="" src={upArrow} />
                        </div>
                    </div>
                    <div className="self-stretch h-[16rem] flex flex-row items-start justify-start gap-[1.25rem] text-[0.875rem] text-darkgray">
                        <div className="flex-1 rounded-md bg-gray-300 border-gray-200 border-solid border-[1px] box-border h-[14rem] flex flex-col items-start justify-start p-[1.25rem] gap-[0.75rem]">
                            <div className="self-stretch relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                                <span>{`At age 14, he enrolled in a seminary to become a priest. He dropped out after one year. He once shared a record with Tom Hanks as the actor to star in the most consecutive `}</span>
                                <span className="[text-decoration:underline] text-goldenrod-100">$100 million-grossing movies</span>
                            </div>
                            <div className="self-stretch border-gray-200 border-solid border-t-[1px] flex flex-row items-start justify-between pt-[0.75rem] px-[0rem] pb-[0rem] gap-[0rem] text-goldenrod-100">
                                <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                                    <div className="rounded-[32px] bg-goldenrod-200 border-goldenrod-100 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={Like1} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">28</div>
                                    </div>
                                    <div className="rounded-[32px] border-gray-200 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem] text-darkgray">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={dislike} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">02</div>
                                    </div>
                                </div>
                                <img className="w-[2.75rem] rounded-[32px] h-[2rem]" alt="" src={share} />
                            </div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-300 border-gray-200 border-solid border-[1px] box-border h-[14rem] flex flex-col items-start justify-start p-[1.25rem] gap-[0.75rem]">
                            <div className="self-stretch relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                                <span>{`Tom visited actress `}</span>
                                <span className="[text-decoration:underline] text-goldenrod-100">Brooke Shields</span>
                                <span>{` at her home and personally apologized to her for criticizing her in 2005 about her use of prescription medication to overcome her postpartum depression. Touched by the gesture, Brooke accepted his apology. `}</span>
                            </div>
                            <div className="self-stretch border-gray-200 border-solid border-t-[1px] flex flex-row items-start justify-between pt-[0.75rem] px-[0rem] pb-[0rem] gap-[0rem]">
                                <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                                    <div className="rounded-[32px] border-gray-200 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={like} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">11</div>
                                    </div>
                                    <div className="rounded-[32px] border-gray-200 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={dislike} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">04</div>
                                    </div>
                                </div>
                                <img className="w-[2.75rem] rounded-[32px] h-[2rem]" alt="" src={share} />
                            </div>
                        </div>
                        <div className="flex-1 rounded-md bg-gray-300 border-gray-200 border-solid border-[1px] box-border h-[14rem] flex flex-col items-start justify-start p-[1.25rem] gap-[0.75rem]">
                            <div className="self-stretch relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                                <span>He did not stay for the remainder of the 2002 Academy Awards after opening them because it was his turn to look after his and ex-wife </span>
                                <a className="text-goldenrod-100" href="https://www.imdb.com/name/nm0000173/?ref_=nmtrv_trv" target="_blank">
                                    <span className="[text-decoration:underline]">Nicole Kidman</span>
                                </a>
                                <span>'s children. He reportedly left the Kodak Theatre by a back door after opening proceedings and dashed home to watch the rest of the event on television with his kids Connor and Isabella.</span>
                            </div>
                            <div className="self-stretch border-gray-200 border-solid border-t-[1px] flex flex-row items-start justify-between pt-[0.75rem] px-[0rem] pb-[0rem] gap-[0rem]">
                                <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                                    <div className="rounded-[32px] border-gray-200 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={like} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">11</div>
                                    </div>
                                    <div className="rounded-[32px] border-gray-200 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={dislike} />
                                        <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">04</div>
                                    </div>
                                </div>
                                <img className="w-[2.75rem] rounded-[32px] h-[2rem]" alt="" src={share} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[80rem] w-full mx-auto px-6 flex flex-row items-start justify-start gap-[2.5rem] text-[1.5rem] font-staatliches">
                    <div className="w-[25.875rem] [backdrop-filter:blur(48px)] rounded-xl bg-gray-300 border-gray-200 border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[1.25rem] px-[1.5rem] gap-[1rem]">
                        <div className="self-stretch relative leading-[100%]">Table of contents</div>
                        <div className="self-stretch flex flex-col items-start justify-center gap-[0.875rem] text-[1rem] text-darkgray font-dm-sans">
                            <div className="self-stretch relative leading-[1.5rem]">Early Life/Education</div>
                            <div className="self-stretch relative leading-[1.5rem]">Career</div>
                            <div className="self-stretch relative leading-[1.5rem]">Business Ventures</div>
                            <div className="self-stretch relative leading-[1.5rem]">Personal Life</div>
                            <div className="self-stretch relative leading-[1.5rem]">Net Worth</div>
                            <div className="self-stretch relative leading-[1.5rem]">Activism</div>
                            <div className="self-stretch relative leading-[1.5rem]">Controversy</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] text-[2rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">Tom Cruise's Full Biography</div>
                            <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-dm-sans text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">Tom Cruise's knee injury may have changed the course of his life, leading him to become a Hollywood actor instead of a professional wrestler. Although it may have been an unforeseen obstacle, this event served as a major turning point in his life and ultimately helped him become one of the world's most well known and celebrated artists. With the majority of his movies grossing over $100 million at the box office and diligently getting so into his roles that he even impresses and outperforms other actors by doing his own stunts, Tom Cruise is a superstar.</div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">Early Life/Education</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">
                                    <p className="m-0">Born July 3, 1962, Tom Cruise grew up as the third child and only son of Thomas Cruise Mapother III and Mary Lee Pfeiffer. He has three sisters named Lee Anne, Marian, and Cass Mapother. Due to his father's job as an electrical engineer, they moved around frequently and lived in different places, such as Ottawa, Louisville, Kentucky, and Wayne, New Jersey. Eventually, they settled in Glen Ridge, New Jersey, where Tom's mother remarried a man named Joseph South after her divorce from Tom's father.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">After graduating in 1980, to give himself a more trendy public persona, Thomas Cruise Mapother IV changed his name to Tom Cruise. He put in a lot of effort as a table cleaner, butler, and bus boy to support himself.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">He used some of his earnings to study drama at the esteemed Neighborhood Playhouse, where he was instructed by renowned acting teachers Phil Gushee and Sanford Meisner. As he developed his abilities, he started doing auditions for parts and eventually got one in the musical "Godspell."</p>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">CAREER</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">
                                    <p className="m-0">Tom Cruise's breakthrough role came in Risky Business, which garnered a lot of attention from people due to his performance and good looks. Prior to that, he had starred in the comedy film "Losin' It" in 1983.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Then, after delivering a standout performance in</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">All the Right Moves, he earned an unofficial place among the Brat Pack, a group of up-and-coming actors expected to dominate Hollywood in the early 1980s, as dubbed by the media. The original group consisted of Emilio Estevez, Anthony Michael Hall, Rob Lowe, Andrew McCarthy, Demi Moore, Judd Nelson, Molly Ringwald, and Ally Sheedy.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">In 1984, Tom Cruise received his first Golden Globe Award nomination for his outstanding performance in a comedy or musical motion picture. Two years later, he gained immense popularity and success when he starred in Top Gun as Lt. Pete 'Maverick' Mitchell, which became a box-office hit and made Tom Cruise a household name worldwide.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">By carefully selecting only challenging projects, Tom Cruise has made a conscious effort to maintain his career in the film industry. His roles in The Color of Money, Rain Man, and Born on the Fourth of July demonstrate his dedication to more intricate and demanding characters.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Tom Cruise didn’t slow down either, next came Cocktail (1988), Days of Thunder (1990), and Far and Away (1992). Cruise then made a pivot in his career and did A Few Good Men (1992). This showed a different side of the actor, and the film went on to gain commercial success and garner praise from critics.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">After The Firm (1993), Tom played the character of Lestat, a vampire, in the film adaptation of Anne Rice's best-selling novel Interview with the Vampire (1994). In 1996, Tom Cruise made his debut as a film producer with "Mission: Impossible," in which he also starred. He followed this up with a role in "Jerry Maguire" alongside Cuba Gooding Jr. and Renee Zellweger.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">During the 2000s, Cruise appeared in several action-packed films.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">He starred in Steven Spielberg's thrilling sci-fi movie Minority Report (2002), as well as The Last Samurai (2003), where he portrayed a dissatisfied American soldier who joined forces with a samurai society. Additionally, he played the role of an unyielding hitman in the gritty Los Angeles-based movie Collateral (2004).</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Cruise starred in action thrillers Knight and Day (2010) and Jack Reacher (2012), playing a former army investigator. He reprised his role in Jack Reacher: Never Go Back (2016). Cruise also appeared in Rock of Ages (2012), Obligation (2013), Edge of Tomorrow (2014), The Mummy (2017), and Top Gun: Maverick (2022).</p>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">BUSINESS VENTURES</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">
                                    <p className="m-0">His success as an actor is not solely responsible for his wealth, as he has also produced multiple films. This sets him apart from other wealthy actors in the industry. In 1993, Cruise and Paula Wagner founded Cruise/Wagner Productions, which has since generated $3 billion globally through its films.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">However, their exclusive deal with Paramount ended in 2006 after Tom's controversial comments regarding psychiatry and anti-depressants caused a stir within the industry.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Hedge funds and Dan Snyder, the founder of Washington Redskins, have been providing funding for the studio since then. United Artists recruited Paula and Tom in 2006 to revive the struggling studio. Even though Paula left UA in 2008, she and Tom still possess a 30% stake in the studio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">PERSONAL LIFE</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">
                                    <p className="m-0">Tom Cruise has quite an extensive relationship timeline:</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Cher, Mimi Rogers, and Nicole Kidman, who he married and adopted two children with. After they divorced, he dated Penelope Cruise and Nazanin Boniadi. Tom married Katie Holmes in 2005, they had a daughter, Suri. In 2012 they divorced. Tom Cruise hasn’t been too active in the dating market since then, however he has been rumored to have recently been dating Shakira.</p>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">NET WORTH</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">Tom Cruise is worth $600 million, which shouldn’t be a surprise given the fact he has acted in roughly 55 movies and directs some of them too.</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">ACTIVISM</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">Tom Cruise is a well-known advocate for Scientology, but his philanthropic efforts extend far beyond that. He has been involved in numerous causes such as adoption, fostering, orphans, AIDS and HIV, children's issues, creative arts, diabetes, disaster relief, education, family/parent support, grief support, health initiatives, human rights advocacy, literacy programs, poverty reduction efforts, and anti-slavery and human trafficking campaigns.</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div className="self-stretch relative leading-[100%]">CONTROVERSY</div>
                            <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-darkgray font-dm-sans">
                                <div className="self-stretch relative leading-[1.25rem]">
                                    <p className="m-0">The biggest controversy surrounding Cruise is mainly due to Scientology. In 2005 for example, he criticized Brooke Shields, and basically anyone else, who used antidepressants. There has been a lot of other back and forth commentary due to his ‘religion’ as well.</p>
                                    <p className="m-0">&nbsp;</p>
                                    <p className="m-0">Another alarming fact is that Tom Cruise admitted during a 1999 appearance on the Late Show with David Letterman, a story about a flying experience where he and his co-pilot ran out of oxygen while flying to Colorado. To avoid any danger, Cruise and his co-pilot turned off the oxygen supply for the plane's other passenger so that they could continue their flight safely. He laughed about it, but David Letterman was appalled.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ActorPage
