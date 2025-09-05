import React from 'react'
import Navbar from './Navbar'
import CoverImage from './assets/CoverImage.png'
import Image from './assets/Image.png'
import Eye from './assets/Eye.png'
import letter from './assets/letter.png'
import Network from './assets/Network.png'
import Fox from './assets/Fox.png'
import pbs from './assets/pbs.png'
import Amc from './assets/Amc.png'
import IronMan from './assets/IronMan.png'
import piratesImg from './assets/piratesImg.png'
import magic from './assets/magic.png'
import Zattack from './assets/Zattack.png'
import monster from './assets/monster.png'
import image7 from './assets/image7.png'
import PlayButton from './assets/PlayButton.svg'
import Arrow_right from './assets/Arrow_right.svg'


const Exclusive = () => {
    return (
        <div>
            <div className="w-full min-h-screen relative bg-gray-400 text-left text-base sm:text-lg md:text-xl lg:text-2xl text-white font-dm-sans">
        
                <img className="absolute top-0 left-0 w-full h-[14rem] sm:h-[18rem] md:h-[20rem] lg:h-[22.125rem] xl:h-[24rem] object-cover" alt="" src={CoverImage} />
                <div className="absolute top-[20.063rem] left-1/2 -translate-x-1/2 [backdrop-filter:blur(48px)] rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border-gray-600 border-solid border-[2px] box-border w-full max-w-[90rem] xl:max-w-none px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-start justify-start gap-[1.5rem] text-lightgray">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                        <div className="self-stretch relative leading-[1.5rem] font-medium overflow-hidden text-ellipsis whitespace-nowrap">Home</div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[3rem] text-white font-staatliches">
                            <div className="self-stretch relative leading-[100%]">What’s on TV Tonight - TV Listings</div>
                            <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-dm-sans">Get today's TV schedule for the best primetime shows, movies, and more. Here's what to watch tonight.</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-[0.875rem] text-darkgray">
                        <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                            <div className="relative leading-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">By</div>
                            <div className="relative leading-[1.25rem] font-medium text-white overflow-hidden text-ellipsis whitespace-nowrap">Kevin Pantoja</div>
                        </div>
                        <div className="flex-1 relative leading-[1.25rem] font-medium text-gainsboro overflow-hidden text-ellipsis whitespace-nowrap">October 03, 2014 at 05:15 PM EDT</div>
                    </div>
                    <img className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[26.5rem] shrink-0 object-cover" alt="" src={Image} />
                </div>
                {/* <div className="absolute top-[157.063rem] left-[59.188rem] w-[19.063rem] flex flex-col items-start justify-start gap-[1rem] text-[1.5rem]">
                    <div className="self-stretch relative leading-[2rem] font-medium">Editorial Text Section</div>
                    <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-[#a1a1aa] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">With all the death in the series, it is surprising to look back and see who survives on Sons of Anarchy. No character was ever safe in the FX series, even the key antihero Jax Teller didn't quite manage to escape the Grim Reaper. The series takes a look at the life and crimes of the titular biker gang, their close allies, and their deadliest enemies, which includes some memorable and crushing deaths.</div>
                </div> */}
                <div className="absolute top-[290.313rem] left-1/2 -translate-x-1/2 
w-full max-w-[80rem] xl:max-w-none
px-4 sm:px-6 md:px-8 
flex flex-col items-start justify-start gap-[1.5rem]">
                    <div className="relative text-[1.875rem] leading-[2.25rem] font-medium">Summary</div>
                    <div className="self-stretch relative text-[1.25rem] leading-[1.75rem]">
                        <ul className="m-0 font-inherit text-[length:inherit] pl-[1.35rem]">
                            <li className="my-[undefined] mx-[undefined] list-disc">House of the Dragon season 2 may deviate from the source material, as indicated by a set photo showing a reference board labeled "Undead."</li>
                        </ul>
                        <p className="m-0">&nbsp;</p>
                        <ul className="m-0 font-inherit text-[length:inherit] pl-[1.35rem]">
                            <li className="my-[undefined] mx-[undefined] list-disc">The return of wights, reanimated corpses, in House of the Dragon would be a significant departure from the books and raise questions about the Army of the Dead's comeback.</li>
                        </ul>
                        <p className="m-0">&nbsp;</p>
                        <ul className="m-0 font-inherit text-[length:inherit] pl-[1.35rem]">
                            <li className='list-disc'>While the set photo doesn't confirm the appearance of wights, other evidence, such as the potential return of The Wall, suggests their presence, creating continuity issues but adding an intriguing twist to the plot.</li>
                        </ul>
                    </div>
                    <div className="self-stretch relative leading-[1.75rem] text-lightgray">{`A House of the Dragon season 2 set photo may indicate a significant departure from the show's source material. House of the Dragon season 2 filming has been underway since April and was permitted to continue production during the SAG-AFTRA strike due to most of the cast being represented by the UK's labor union, Equity. The series is a prequel to Game of Thrones and is based on George R. R. Martin's Fire & Blood book. Despite being based on the book, season 1 made a few changes to the source material, and season 2 may do so, too.`}</div>
                    {/* <div className="self-stretch relative leading-[1.75rem] text-lightgray">{`A House of the Dragon season 2 set photo may indicate a significant departure from the show's source material. House of the Dragon season 2 filming has been underway since April and was permitted to continue production during the SAG-AFTRA strike due to most of the cast being represented by the UK's labor union, Equity. The series is a prequel to Game of Thrones and is based on George R. R. Martin's Fire & Blood book. Despite being based on the book, season 1 made a few changes to the source material, and season 2 may do so, too.`}</div> */}
                    <div className="self-stretch relative leading-[1.75rem] text-lightgray">
                        <a className="text-[inherit]" href="https://redanianintelligence.com/2023/09/08/house-of-the-dragon-season-2-may-include-the-undead/" target="_blank">Redanian Intelligence</a>
                    </div>
                </div>
                <div className="absolute top-[325.813rem] left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 md:px-8 flex flex-col items-start justify-start gap-[1.5rem] text-lightgray">
                    <div className="self-stretch relative text-[1.875rem] leading-[2.25rem] font-medium text-white z-[0]">Could Wights Make An Appearance In House Of The Dragon Season 2?</div>
                    <img className="self-stretch relative max-w-full overflow-hidden h-[33.438rem] shrink-0 object-cover z-[1]" alt="" src={monster} />
                    <div className="self-stretch relative leading-[1.75rem] z-[2]">
                        <a className="text-[inherit]" href="https://screenrant.com/house-dragon-season-2-cregan-stark-black-aly-setup/" target="_blank">The House of the Dragon season 2 set photo is not an official confirmation of the wights' appearance in the series. After all, the reference board could be used for other purposes, such as guidance for regular dead body makeup or even just as a decoration. Additionally, from what is known about House of the Dragon season 2's story and when it takes place, wights shouldn't technically be present.</a>
                    </div>
                    <img className="self-stretch relative max-w-full overflow-hidden h-[33.438rem] shrink-0 object-cover z-[3]" alt="" src={image7} />
                    <img className="w-[4rem] absolute !!m-[0 important] top-[59.938rem] left-[32.125rem] h-[4rem] z-[4]" alt="" src={PlayButton} />
                    <div className="self-stretch relative leading-[1.75rem] z-[5]">
                        <p className="m-0">{`However, there has also been some additional evidence to support the wights' appearance in season 2. Previously, additional set footage seemingly hinted that `}
                            <a className="text-[inherit]" href="https://screenrant.com/house-of-the-dragon-season-2-wall-location-set-video/" target="_blank">The Wall would also be making an appearance</a> in the season. What seemed to be a replica of this significant location was spotted via a drone, raising confusion because The Wall isn't a part of the source material House of the Dragon covers. What makes The Wall's potential return even more interesting is that it was beyond The Wall that Game of Thrones first introduced wights to the show. Hence, the rumors of the Wall and wights go hand-in-hand.
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{`If The Wall is featured, it is entirely plausible that `}
                            <a className="text-[inherit]" href="https://screenrant.com/house-dragon-season-2-cast-character-guide/" target="_blank">the House of the Dragon characters</a> may encounter the wights that wander beyond it. The only problem is that it will create some continuity issues, as neither The Wall nor the undead are part of the source material for season 2. However, the show has been known to take creative liberties before, and it's not always a bad thing. If The Wall and wights show up in House of the Dragon season 2, their appearance wouldn't be accurate, but it would certainly add an intriguing twist to the plot.
                        </p>
                    </div>
                </div>
                {/* <div className="absolute top-[0rem] left-[0rem] bg-gray-200 border-gray-100 border-solid border-b-[1px] box-border w-[90rem] overflow-hidden flex flex-row items-center justify-between py-[1.25rem] px-[5rem] gap-[0rem] text-center text-[1.25rem] font-staatliches">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[1.5rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                            <img className="w-[2.5rem] rounded-lg h-[2.5rem]" alt="" src="Icon.svg" />
                            <div className="relative leading-[1.75rem]">Menu</div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                            <img className="w-[2.5rem] rounded-lg h-[2.5rem]" alt="" src="Icon.svg" />
                            <div className="relative leading-[1.75rem]">Search</div>
                        </div>
                    </div>
                    <img className="w-[14.025rem] relative h-[1.525rem]" alt="" src="_3_-_ScreenRant.svg" />
                    <div className="flex-1 flex flex-row items-center justify-end gap-[1.5rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                            <img className="w-[2.5rem] rounded-lg h-[2.5rem]" alt="" src="Icon.svg" />
                            <div className="relative leading-[1.75rem]">Newsletter</div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0.75rem]">
                            <img className="w-[2.5rem] rounded-lg h-[2.5rem]" alt="" src="Icon.svg" />
                            <div className="relative leading-[1.75rem]">Dark</div>
                        </div>
                        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded bg-goldenrod-100 flex flex-col items-center justify-end py-[0.375rem] px-[1.5rem] text-black">
                            <div className="flex flex-row items-center justify-start">
                                <div className="relative leading-[1.75rem]">Log In</div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="absolute top-[218.563rem] left-1/2 -translate-x-1/2 w-[90%] max-w-[66.5rem] xl:max-w-none flex flex-col items-start justify-start gap-[1rem] text-lightgray">
                    <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="relative leading-[100%] font-medium">Home</div>
                        <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={Arrow_right} />
                        <div className="relative leading-[100%] font-medium">TV News</div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] text-[1.875rem] text-white">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                            <div className="self-stretch relative leading-[2.25rem] font-medium">House of the Dragon Season 2 Set Photo May Confirm Major Change From The Books</div>
                            <div className="self-stretch relative text-[1rem] leading-[1.75rem] text-lightgray">A photo from the House of the Dragon season 2 set may confirm a major departure from the books and tease the return of some terrifying antagonists.</div>
                        </div>
                        <div className="relative text-[1rem] leading-[1.5rem] overflow-hidden text-ellipsis whitespace-nowrap">October 03, 2014 at 05:15 PM EDT</div>
                    </div>
                    <img className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover" alt="" src={Zattack} />
                </div>
                <div className="absolute top-[123.313rem] left-1/2 -translate-x-1/2 
w-full max-w-[72rem] xl:max-w-none 
px-4 sm:px-6 md:px-8 
flex flex-col items-start justify-start gap-[2rem] ">
                    <div className="self-stretch relative text-[2rem] leading-[2rem] font-medium">Tonight's Movie Highlights</div>
                    <div className="self-stretch h-[27.75rem] flex flex-row items-start justify-start gap-[1.25rem]">
                        <img className="self-stretch w-[18rem] rounded-md max-h-full object-cover" alt="" src={IronMan} />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                                <div className="rounded-md bg-gray-100 flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                                    <div className="relative leading-[1.75rem] font-medium">Watch on FX at 7:00 PM</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.5rem]">
                                    <b className="self-stretch relative leading-[2rem]">Iron Man 3</b>
                                    <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">Iron Man 3 pits genius-billionaire-playboy-philanthropist Tony Stark (Iron Man) against the Mandarin, an enemy whose reach knows no bounds. When Stark finds his world destroyed by his mysterious antagonist, he embarks on a dangerous quest to find those responsible. His journey will test his character at every turn. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him and determine whether or not the suit makes the man or if Tony himself is the hero.</div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.875rem] text-gainsboro">
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Release Date</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">May 3, 2013</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Cast</div>
                                    <div className="self-stretch flex-1 relative leading-[1.25rem] text-darkgray">Ben Kingsley, Guy Pearce, Paul Bettany, Don Cheadle, Gwyneth Paltrow, Jon Favreau, Robert Downey Jr.</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Rating</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">PG-13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[27.75rem] flex flex-row items-start justify-start gap-[1.25rem]">
                        <img className="self-stretch w-[18rem] rounded-md max-h-full object-cover" alt="" src={piratesImg} />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                                <div className="rounded-md bg-gray-100 flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                                    <div className="relative leading-[1.75rem] font-medium">Watch on TNT at 8:00 PM</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.5rem]">
                                    <b className="self-stretch relative leading-[2rem]">Pirates of the Caribbean: Dead Men Tell No Tales</b>
                                    <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">The fifth installment in the Pirates of the Caribbean franchise, Dead Men Tell No Tales follows young Henry Turner as he enlists Captain Jack Sparrow to release his father, Will Turner, from the curse binding him to the Flying Dutchman. Their quest puts them in the path of ghostly pirate-hunter Captain Salazar, with whom Sparrow has a storied past. To save his old friend, Sparrow must confront his own past to reunite Will with his long-lost son.</div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.875rem] text-gainsboro">
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Release Date</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">May 26, 2017</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Cast</div>
                                    <div className="self-stretch flex-1 relative leading-[1.25rem] text-darkgray">Johnny Depp, Geoffrey Rush, Orlando Bloom</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Rating</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">PG-13</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[27.75rem] flex flex-row items-start justify-start gap-[1.25rem]">
                        <img className="self-stretch w-[18rem] rounded-md max-h-full object-cover" alt="" src={magic} />
                        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                                <div className="rounded-md bg-gray-100 flex flex-row items-center justify-center py-[0.5rem] px-[1rem]">
                                    <div className="relative leading-[1.75rem] font-medium">Watch on TNT at 10:00 PM</div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1.5rem]">
                                    <b className="self-stretch relative leading-[2rem]">Magic Mike's Last Dance</b>
                                    <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">Magic Mike's Last Dance is the third and final entry in the Magic Mike franchise and sees Mike Lane forced to return to his former life to pull himself out of dire straights. When a pandemic causes Mike to lose his business, forcing him to return to bartending, When the head of a fundraising event seeks him out, he's working at; he's given a chance to build a new generation of strippers in London and get back on his feet.</div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.875rem] text-gainsboro">
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Release Date</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">February 10, 2023</div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Cast</div>
                                    <div className="self-stretch flex-1 relative leading-[1.25rem] text-darkgray">Channing Tatum, Caitlin Gerard, Salma Hayek Pinault</div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start gap-[1.5rem]">
                                    <div className="w-[7.5rem] relative leading-[1.25rem] font-medium inline-block shrink-0">Rating</div>
                                    <div className="flex-1 relative leading-[1.25rem] text-darkgray">R</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[65.688rem] left-1/2 -translate-x-1/2 w-full max-w-[90rem] px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-start justify-start gap-[2rem] text-[clamp(1rem,2vw,2rem)]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                        <div className="self-stretch relative leading-[125%] font-medium">Today's Schedule - Tuesday, September 12, 2023</div>
                        <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-medium text-darkgray">{`On primetime tonight, catch episodes of `}
                            <a className="text-[inherit]" href="https://screenrant.com/tag/rick-and-morty" target="_blank">
                                <span className="[text-decoration:underline]">Rick and Morty</span>
                            </a> and Winning Time: The Rise of the Lakers Dynasty.
                        </div>
                    </div>
                    <div className="w-[80rem] relative rounded-xl bg-gray-200 h-[47rem] overflow-x-auto shrink-0 text-[0.75rem]">
                        <div className="absolute top-[33.313rem] left-[73.938rem] rounded bg-gray-100 w-[10.75rem] h-[13.688rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Amc} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">AMC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <a className="flex-1 relative [text-decoration:underline] tracking-[-0.02em] leading-[1.5rem] text-[inherit]" href="https://screenrant.com/tag/dark-winds/" target="_blank">Dark Winds</a>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:15 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[-4.5rem] left-[73.938rem] rounded bg-gray-100 w-[10.75rem] h-[37.5rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="w-[10.75rem] flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Amc} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">AMC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Saving Private Ryan</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">5:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.063rem] left-[4.5rem] bg-goldenrod-200 w-[126.75rem] h-[0.063rem]" />
                        <div className="absolute top-[11rem] left-[4.5rem] bg-goldenrod-200 w-[126.75rem] h-[0.063rem]" />
                        <div className="absolute top-[33.125rem] left-[4.5rem] bg-goldenrod-200 w-[126.75rem] h-[0.063rem]" />
                        <div className="absolute top-[44.188rem] left-[4.5rem] bg-goldenrod-200 w-[126.75rem] h-[0.063rem]" />
                        <div className="absolute top-[-27.75rem] left-[5.313rem] rounded bg-gray-100 w-[10.75rem] h-[38.625rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Eye} />
                                <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">CBS</div>
                                <div className="flex-1 flex flex-row items-center justify-end relative gap-[0.25rem] text-right">
                                    <div className="w-[0.625rem] absolute !!m-[0 important] top-[0.063rem] left-[1.625rem] rounded-[50%] bg-lightpink h-[0.625rem] z-[0]" />
                                    <div className="w-[0.5rem] absolute !!m-[0 important] top-[0.125rem] left-[1.688rem] rounded-[50%] bg-salmon h-[0.5rem] z-[1]" />
                                    <div className="w-[0.375rem] relative rounded-[50%] bg-crimson h-[0.375rem] z-[2]" />
                                    <div className="relative tracking-[-0.02em] leading-[100%] z-[3]">Live</div>
                                </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">College Football - Oregon State @ San Jose State</div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">3:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[40.563rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Network} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">NBC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Local Programming</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 6:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[5.625rem] left-[40.563rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Network} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">NBC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">NBC Nightly News</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[40.563rem] rounded bg-gray-100 w-[10.75rem] h-[21.813rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Network} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">NBC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">American Ninja Warrior</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">Fox</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Local Programming</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 7:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">Fox</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Local Programming</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 7:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">Fox</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Gordon Ramsay's Food Stars</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 8:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">Fox</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Gordon Ramsay's Food Stars</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 8:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[16.313rem] rounded bg-gray-100 w-[10.75rem] h-[13.688rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Amc} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">AMC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <a className="flex-1 relative [text-decoration:underline] tracking-[-0.02em] leading-[1.5rem] text-[inherit]" href="https://screenrant.com/tag/dark-winds/" target="_blank">Dark Winds</a>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:15 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[5.313rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Eye} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">CBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">60 Minutes</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 8:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.25rem] left-[5.313rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Eye} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">CBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Big Brother</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[5.313rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Eye} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">CBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">The Equalizer</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[44.375rem] left-[5.313rem] rounded bg-gray-100 w-[10.75rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Eye} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">CBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">NCIS: Los Angeles</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">10:00 PM - 11:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[62.625rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Antiques Roadshow</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 8:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[109.188rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Antiques Roadshow</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 8:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.25rem] left-[62.625rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Professor T.</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.25rem] left-[109.188rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Professor T.</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[62.625rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Unforgotten on Masterpiece</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[109.188rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Unforgotten on Masterpiece</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[44.5rem] left-[62.625rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Van Der Valk on Masterpiece</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[44.5rem] left-[109.188rem] rounded bg-gray-100 w-[11.063rem] h-[10.75rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">PBS</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Van Der Valk on Masterpiece</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 10:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.25rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">The Simpsons</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:00 PM - 8:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[22.25rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">The Simpsons</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:00 PM - 8:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">5
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Bob's Burgers</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 9:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Bob's Burgers</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:00 PM - 9:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[27.75rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Family Guy</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:30 PM - 9:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[27.75rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Family Guy</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">8:30 PM - 9:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[38.688rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Family Guy</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:30 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[38.688rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Family Guy</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:30 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[44.5rem] left-[51.625rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Local Programming</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:30 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[44.5rem] left-[98.188rem] rounded bg-gray-100 w-[10.75rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Fox} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">Fox</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Local Programming</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">9:30 PM - 10:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[62.625rem] rounded bg-gray-100 overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">PBS</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">PBS News Weekend</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[109.188rem] rounded bg-gray-100 overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">PBS</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">PBS News Weekend</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[5.625rem] left-[62.625rem] rounded bg-gray-100 w-[11.063rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">PBS</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Washington Week</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[5.625rem] left-[109.188rem] rounded bg-gray-100 w-[11.063rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={pbs} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">PBS</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Washington Week</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[33.313rem] left-[40.563rem] rounded bg-gray-100 w-[10.75rem] h-[21.813rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={Network} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">NBC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">America's Got Talent</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[27.313rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Local Programming</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 6:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[5.625rem] left-[27.313rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">ABC World News Tonight</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[27.313rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">The Conners</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 7:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[16.688rem] left-[27.313rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start text-[0.875rem]">
                            <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                <div className="flex-1 relative tracking-[-0.02em] leading-[0.875rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[0.875rem]">College Football Studio</div>
                                <img className="w-[0.875rem] relative h-[0.875rem]" alt="" src="Frame.svg" />
                            </div>
                        </div>
                        <div className="absolute top-[-4.5rem] left-[16.313rem] rounded bg-gray-100 w-[10.75rem] h-[37.5rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="w-[10.75rem] flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src="Image.png" />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">AMC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">Saving Private Ryan</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">5:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[19.063rem] left-[27.313rem] rounded bg-gray-100 w-[13rem] h-[37.5rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">ABC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">College Football - LSU vs. Florida State</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">5:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0.125rem] left-[84.938rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">Local Programming</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:00 PM - 6:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[5.625rem] left-[84.938rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">ABC World News Tonight</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">6:30 PM - 7:00 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[11.188rem] left-[84.938rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start min-w-[10.75rem] text-lightgray">
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                                        <div className="relative tracking-[-0.02em] leading-[0.875rem]">ABC</div>
                                        <div className="relative text-[0.875rem] tracking-[-0.02em] leading-[0.875rem] font-medium text-white">The Conners</div>
                                    </div>
                                </div>
                                <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">7:00 PM - 7:30 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[16.688rem] left-[84.938rem] rounded bg-gray-100 w-[13rem] overflow-hidden flex flex-col items-start justify-start text-[0.875rem]">
                            <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-[0.625rem] px-[0.75rem] gap-[0.5rem]">
                                <div className="flex-1 relative tracking-[-0.02em] leading-[0.875rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap h-[0.875rem]">College Football Studio</div>
                                <img className="w-[0.875rem] relative h-[0.875rem]" alt="" src="Frame.svg" />
                            </div>
                        </div>
                        <div className="absolute top-[19.063rem] left-[84.938rem] rounded bg-gray-100 w-[13rem] h-[37.5rem] overflow-hidden flex flex-col items-start justify-start">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-[10.75rem]">
                                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.08)] bg-darkslategray overflow-hidden flex flex-row items-center justify-start p-[0.5rem] gap-[0.5rem]">
                                    <img className="w-[1.25rem] rounded-[999px] h-[1.25rem] object-cover" alt="" src={letter} />
                                    <div className="flex-1 relative tracking-[-0.02em] leading-[100%]">ABC</div>
                                </div>
                                <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[0rem] text-[1rem]">
                                    <div className="self-stretch flex flex-row items-start justify-center p-[0.75rem]">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1.5rem]">College Football - LSU vs. Florida State</div>
                                    </div>
                                    <div className="self-stretch border-darkslategray border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-center p-[0.5rem] text-[0.875rem] text-darkgray">
                                        <div className="flex-1 relative tracking-[-0.02em] leading-[1rem]">5:00 PM - 9:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[0rem] left-[0rem] shadow-[12px_0px_24px_rgba(0,_0,_0,_0.4)] border-dimgray border-solid border-r-[1px] box-border w-[4.563rem] h-[47rem] text-[1rem] text-gold-200">
                            <div className="absolute top-[0rem] left-[0rem] bg-gray-200 w-[4.5rem] h-[47rem]" />
                            <div className="absolute top-[11rem] left-[0rem] bg-goldenrod-200 w-[4.5rem] h-[0.063rem]" />
                            <div className="absolute top-[22.063rem] left-[0rem] bg-goldenrod-200 w-[4.5rem] h-[0.063rem]" />
                            <div className="absolute top-[33.125rem] left-[0rem] bg-goldenrod-200 w-[4.5rem] h-[0.063rem]" />
                            <div className="absolute top-[44.188rem] left-[0rem] bg-goldenrod-200 w-[4.5rem] h-[0.063rem]" />
                            <div className="absolute top-[4.813rem] left-[1.25rem] tracking-[-0.02em] leading-[1.5rem]">6PM</div>
                            <div className="absolute top-[15.813rem] left-[1.25rem] tracking-[-0.02em] leading-[1.5rem]">7PM</div>
                            <div className="absolute top-[26.875rem] left-[1.25rem] tracking-[-0.02em] leading-[1.5rem]">8PM</div>
                            <div className="absolute top-[37.938rem] left-[1.25rem] tracking-[-0.02em] leading-[1.5rem]">9PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exclusive
