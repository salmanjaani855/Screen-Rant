import React from 'react'
import profile from './assets/profile.png'
import apple from './assets/apple.png'
import max from './assets/max.png'
import prime from './assets/prime.png'
import image1 from './assets/image1.png'
import suits from './assets/suits.png'
import breaking from './assets/breaking.png'
import witcher from './assets/witcher.png'
import setting from './assets/setting.svg'
import facebook1 from './assets/facebook1.svg'
import twitter1 from './assets/twitter1.svg'
import whatsapp from './assets/whatsapp.svg'
import arrow_left from './assets/arrow_left.svg'
import arrow_rights from './assets/arrow_rights.svg'
import Add from './assets/Add.svg'



const Review = () => {
    return (
        <div>
            <div className="w-full relative bg-gray-400 h-[185.063rem] overflow-hidden text-center text-[1rem] text-white font-dm-sans">
                <div className="absolute top-24 left-16
  flex flex-col items-start justify-start gap-4
  max-[1025px]:hidden">
                    <div className="rounded-xl bg-gray-200 overflow-hidden flex flex-col items-center justify-start pt-[3rem] px-[0rem] pb-[1.5rem] gap-[1.5rem] text-[1.875rem]">
                        <div className="flex flex-col items-center justify-start gap-[0.75rem]">
                            <img className="w-[7rem] relative rounded-[999px] h-[7rem] object-cover" alt="" src={profile} />
                            <div className="flex flex-col items-center justify-start gap-[0.25rem]">
                                <b className="relative leading-[2.25rem]">MR Wick</b>
                                <div className="relative text-[1rem] leading-[1.5rem] text-darkgray">john.wick@email.com</div>
                            </div>
                        </div>
                        <div className="w-[18.688rem] relative border-gray-100 border-solid border-t-[1px] box-border h-[0.063rem]" />
                        <div className="w-[15.625rem] rounded-xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start text-[1rem]">
                            <div className="self-stretch border-darkslategray border-solid border-b-[1px] flex flex-row items-center justify-between p-[0.75rem] gap-[0rem]">
                                <div className="relative leading-[1.5rem]">Joined:</div>
                                <div className="relative leading-[1.5rem] text-lightgray">2nd April, 2024</div>
                            </div>
                            <div className="self-stretch border-darkslategray border-solid border-b-[1px] flex flex-row items-center justify-between p-[0.75rem] gap-[0rem]">
                                <div className="relative leading-[1.5rem]">Watchlist:</div>
                                <div className="relative leading-[1.5rem] text-lightgray">264</div>
                            </div>
                            <div className="self-stretch border-darkslategray border-solid border-b-[1px] flex flex-row items-center justify-between p-[0.75rem] gap-[0rem]">
                                <div className="relative leading-[1.5rem]">Reviews:</div>
                                <div className="relative leading-[1.5rem] text-lightgray">13</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-between p-[0.75rem] gap-[0rem]">
                                <div className="relative leading-[1.5rem]">Ratings:</div>
                                <div className="relative leading-[1.5rem] text-lightgray">69</div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start py-[0rem] px-[1.5rem] text-left text-[0.875rem]">
                            <div className="self-stretch rounded bg-gray-200 border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] gap-[0.25rem]">
                                <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                <div className="relative leading-[1.25rem] font-medium">Edit Profile</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[18.688rem] rounded-xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start py-[1.125rem] px-[1rem] box-border">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[0rem]">
                            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                                <div className="relative leading-[1.5rem]">Newsletter</div>
                                <div className="rounded-[999px] bg-goldenrod-200 flex flex-row items-center justify-start py-[0.25rem] px-[0.75rem] text-[0.75rem] text-goldenrod-100">
                                    <div className="relative leading-[1rem]">Selected</div>
                                </div>
                            </div>
                            <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={setting} />
                        </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start py-[1.125rem] px-[1rem]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[0rem]">
                            <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                                <div className="relative leading-[1.5rem]">Podcsats</div>
                                <div className="rounded-[999px] bg-goldenrod-200 flex flex-row items-center justify-start py-[0.25rem] px-[0.75rem] text-[0.75rem] text-goldenrod-100">
                                    <div className="relative leading-[1rem]">All</div>
                                </div>
                            </div>
                            <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={setting} />
                        </div>
                    </div>
                    <div className="w-[18.688rem] rounded-xl bg-gray-200 overflow-hidden flex flex-row items-center justify-between py-[1.125rem] px-[1rem] box-border gap-[0rem]">
                        <div className="relative leading-[1.5rem]">Share my profile</div>
                        <div className="w-[7.456rem] flex flex-row items-center justify-end gap-[0.75rem]">
                            <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={facebook1} />
                            <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={twitter1} />
                            <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={whatsapp} />
                        </div>
                    </div>
                </div>
                <div className="absolute top-24 left-4 sm:left-12 md:left-24 lg:left-[26.063rem] min-h-screen flex flex-col items-start justify-start gap-8 text-left text-base sm:text-lg md:text-xl lg:text-2xl">
                    <div className="w-full max-w-[46.188rem] 
rounded-xl 
[background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] 
border-gray-100 border-solid border-[1px] box-border 
overflow-hidden 
flex flex-row flex-wrap content-start items-start justify-start 
py-[1.25rem] px-0 
gap-x-[clamp(2rem,5vw,14.562rem)] gap-y-[1.25rem]">
                        <div className="flex-1 flex flex-row items-start justify-between py-[0rem] px-[1.5rem] gap-[0rem]">
                            <b className="relative leading-[2rem]">My Streaming Subscriptions</b>
                            <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-goldenrod-100 flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.875rem] text-black">
                                <img className="w-[0.975rem] relative h-[0.975rem]" alt="" src={Add} />
                                <div className="relative leading-[1.25rem] font-medium">Add Platform</div>
                            </div>
                        </div>
                        <div className="w-full max-w-[46.25rem] mx-auto relative border-t border-gray-100 border-solid box-border h-px" />
                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[1.5rem] gap-[2rem] text-[0.875rem]">
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                                <img className="w-[5rem] relative h-[5rem] object-cover" alt="" src={apple} />
                                <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                                    <div className="relative leading-[1.25rem] font-medium">Apple TV</div>
                                    <div className="relative text-[0.75rem] leading-[1rem] font-medium text-darkgray">expires 11/09/24</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                                <img className="w-[5rem] relative rounded-[14px] h-[5rem] object-cover" alt="" src={max} />
                                <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                                    <div className="relative leading-[1.25rem] font-medium">HBO Max</div>
                                    <div className="relative text-[0.75rem] leading-[1rem] font-medium text-darkgray">expires 28/03/24</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                                <img className="w-[5rem] relative rounded-xl h-[5rem] object-cover" alt="" src={prime} />
                                <div className="flex flex-col items-start justify-start gap-[0.125rem]">
                                    <div className="relative leading-[1.25rem] font-medium">Amazon Prime</div>
                                    <div className="relative text-[0.75rem] leading-[1rem] font-medium text-salmon">Expired 24/03/24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[70rem] mx-auto rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border border-gray-100 border-solid overflow-hidden flex flex-wrap items-start justify-center content-start py-5 px-4 sm:px-6 md:px-8 gap-x-4 sm:gap-x-6 md:gap-x-12 gap-y-5">
                        <div className="flex-1 flex flex-row items-center justify-between py-[0rem] px-[1.5rem] gap-[0rem]">
                            <b className="relative leading-[2rem]">Recently Viewed</b>
                            <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_left} />
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_rights} />
                            </div>
                        </div>
                        <div className="w-full max-w-[46.25rem] mx-auto relative border-t border-gray-100 border-solid box-border h-px" />
                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[1.5rem] gap-[0.75rem] text-[0.733rem]">
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={image1} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Game of Thrones</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-center p-[0.325rem] gap-[0.325rem] text-[0.57rem]">
                                        <img className="w-[0.975rem] relative h-[0.975rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.814rem]">Add to the Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={suits} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Suits</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-center p-[0.325rem] gap-[0.325rem] text-[0.57rem]">
                                        <img className="w-[0.975rem] relative h-[0.975rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.814rem]">Add to the Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={breaking} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Breaking Bad</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">{`Breaking Bad: Created by Vince Gilligan. With Bryan Cranston, Anna Gunn, Aaron Paul, Betsy Brandt. A chemistry teacher diagnosed with inoperable lung cancer `}</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-center p-[0.325rem] gap-[0.325rem] text-[0.57rem]">
                                        <img className="w-[0.975rem] relative h-[0.975rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.814rem]">Add to the Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={witcher} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">The Witcher</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-center p-[0.325rem] gap-[0.325rem] text-[0.57rem]">
                                        <img className="w-[0.975rem] relative h-[0.975rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.814rem]">Add to the Watchlist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border-gray-100 border-solid border-[1px] overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-[1.25rem] px-[0rem] gap-x-[14.562rem] gap-y-[1.25rem]">
                        <div className="flex-1 flex flex-row items-start justify-between py-[0rem] px-[1.5rem] gap-[0rem]">
                            <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                                <b className="relative leading-[2rem]">My Watchlist</b>
                                <div className="rounded-[999px] bg-goldenrod-200 border-goldenrod-100 border-solid border-[1px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.875rem] text-goldenrod-100">
                                    <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                    <div className="relative leading-[1.25rem] font-medium">264 Items</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[0.75rem] text-[0.875rem] text-darkgray">
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_left} />
                                <div className="relative leading-[1.25rem] font-medium">View All</div>
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_rights} />
                            </div>
                        </div>
                        <div className="w-full max-w-[46.25rem] mx-auto relative border-t border-gray-100 border-solid box-border h-px" />
                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[1.5rem] gap-[0.75rem] text-[0.733rem]">
                            <div className="flex-1 rounded bg-gray-200 overflow-hidden flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={image1} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Game of Thrones</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.625rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.625rem]">Remove from Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={suits} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Suits</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.625rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.625rem]">Remove from Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={breaking} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Breaking Bad</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">{`Breaking Bad: Created by Vince Gilligan. With Bryan Cranston, Anna Gunn, Aaron Paul, Betsy Brandt. A chemistry teacher diagnosed with inoperable lung cancer `}</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.625rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.625rem]">Remove from Watchlist</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={witcher} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">The Witcher</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[0.625rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[0.625rem]">Remove from Watchlist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border-gray-100 border-solid border-[1px] overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-[1.25rem] px-[0rem] gap-x-[14.562rem] gap-y-[1.25rem]">
                        <div className="flex-1 flex flex-row items-center justify-between py-[0rem] px-[1.5rem] gap-[0rem]">
                            <b className="relative leading-[2rem]">My Reviews</b>
                            <div className="flex flex-row items-center justify-center gap-[0.75rem] text-[0.875rem] text-darkgray">
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_left} />
                                <div className="relative leading-[1.25rem] font-medium">View All</div>
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_rights} />
                            </div>
                        </div>
                        <div className="w-full relative border-t border-gray-100 border-solid box-border h-px" />
                        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[1.5rem] gap-[0.75rem] text-[0.733rem]">
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={image1} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Game of Thrones</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-between p-[0.25rem] gap-[0rem] text-[0.57rem] text-lightgray">
                                        <div className="relative leading-[0.814rem]">My Rating</div>
                                        <b className="relative leading-[0.814rem] text-goldenrod-100">8/10</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={suits} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Suits</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-between p-[0.25rem] gap-[0rem] text-[0.57rem] text-lightgray">
                                        <div className="relative leading-[0.814rem]">My Rating</div>
                                        <b className="relative leading-[0.814rem] text-goldenrod-100">6.5/10</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={breaking} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">Breaking Bad</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">{`Breaking Bad: Created by Vince Gilligan. With Bryan Cranston, Anna Gunn, Aaron Paul, Betsy Brandt. A chemistry teacher diagnosed with inoperable lung cancer `}</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-between p-[0.25rem] gap-[0rem] text-[0.57rem] text-lightgray">
                                        <div className="relative leading-[0.814rem]">My Rating</div>
                                        <b className="relative leading-[0.814rem] text-goldenrod-100">10/10</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <img className="self-stretch relative rounded-t-[5.21px] rounded-b-none max-w-full overflow-hidden h-[13.625rem] shrink-0 object-cover" alt="" src={witcher} />
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.487rem] gap-[0.487rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.325rem]">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.325rem]">
                                            <div className="flex-1 relative leading-[1.14rem] font-medium">The Witcher</div>
                                            <div className="flex flex-row items-center justify-start gap-[0.162rem] text-[0.57rem]">
                                                <img className="w-[0.813rem] relative h-[0.813rem] object-cover mix-blend-lighten" alt="" src="image 12.png" />
                                                <div className="relative leading-[0.814rem] font-medium">8.9</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch relative text-[0.489rem] leading-[0.651rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.</div>
                                    </div>
                                    <div className="self-stretch rounded-[2.61px] bg-gray-100 flex flex-row items-center justify-between p-[0.25rem] gap-[0rem] text-[0.57rem] text-lightgray">
                                        <div className="relative leading-[0.814rem]">My Rating</div>
                                        <b className="relative leading-[0.814rem] text-goldenrod-100">7/10</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border-gray-100 border-solid border-[1px] overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-[1.25rem] px-[0rem] gap-x-[14.562rem] gap-y-[1.25rem]">
                        <div className="w-full max-w-6xl flex flex-row items-center justify-between py-0 px-6 box-border gap-0">
                            <b className="relative leading-[2rem]">Personalities I Follow</b>
                            <div className="flex flex-row items-center justify-center gap-[0.75rem] text-[0.875rem] text-darkgray">
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_left} />
                                <div className="relative leading-[1.25rem] font-medium">View All</div>
                                <img className="w-[1.75rem] rounded-[32px] h-[1.75rem] object-contain" alt="" src={arrow_rights} />
                            </div>
                        </div>
                        <div className="w-full max-w-[46.25rem] relative border-t border-gray-100 border-solid box-border mx-auto" />
                        <div className="w-full flex flex-row items-start justify-start py-0 px-6 box-border gap-5 text-base">
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <div className="self-stretch relative rounded-t-[5.21px] rounded-b-none h-[14rem] overflow-hidden shrink-0 bg-[url('./assets/CharlieHunnam.png')] bg-cover bg-no-repeat bg-[top]">
                                    <div className="absolute top-[0rem] left-[0rem] w-[10.188rem] h-[10.188rem]" />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[1.5rem] font-medium">Charlie Hunnam</div>
                                        <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">Actor, Sons of Anarchy</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.325rem] text-[0.75rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[1rem]">Following</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <div className="self-stretch relative rounded-t-[5.21px] rounded-b-none h-[14rem] overflow-hidden shrink-0 bg-[url('./assets/TomCruise.png')] bg-cover bg-no-repeat bg-[top]">
                                    <div className="absolute top-[0rem] left-[0rem] w-[10.188rem] h-[10.188rem]" />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[1.5rem] font-medium">Tom Cruise</div>
                                        <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">Actor, Top Gun: Maverick</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.325rem] text-[0.75rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[1rem]">Following</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 rounded bg-gray-200 flex flex-col items-start justify-start">
                                <div className="self-stretch relative rounded-t-[5.21px] rounded-b-none h-[14rem] overflow-hidden shrink-0 bg-[url('./assets/SydneySweeney.png')] bg-cover bg-no-repeat bg-[top]">
                                    <div className="absolute top-[0rem] left-[0rem] w-[10.188rem] h-[10.188rem]" />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start p-[0.75rem] gap-[0.75rem]">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[1.5rem] font-medium">Sydney Sweeney</div>
                                        <div className="self-stretch relative text-[0.75rem] leading-[1rem] text-darkgray overflow-hidden text-ellipsis whitespace-nowrap">Actress, Euphoria</div>
                                    </div>
                                    <div className="self-stretch rounded bg-goldenrod-200 border-goldenrod-100 border-solid border-[0.7px] flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.325rem] text-[0.75rem] text-goldenrod-100">
                                        <img className="w-[1rem] relative h-[1rem]" alt="" src="Frame.svg" />
                                        <div className="relative leading-[1rem]">Following</div>
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

export default Review
