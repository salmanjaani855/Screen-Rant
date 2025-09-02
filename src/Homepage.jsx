import React from 'react'
import Navbar from './Navbar'
import CoverImage from './assets/CoverImage.png'
import Poster from './assets/Poster.png'
import Frame1 from './assets/Frame1.svg'
import Frame2 from './assets/Frame2.png'
import Frame3 from './assets/Frame3.svg'
import Platform1 from './assets/Platform1.png'
import prime from './assets/prime.png'
import platforms from './assets/platforms.png'
import platformss from './assets/platform4.png'
import platformsss from './assets/platform5.png'
import Add from './assets/Add.svg'
import Add2 from './assets/Add2.svg'
import ChevronDown from './assets/ChevronDown.svg'
import Country from './assets/Country.png'
import ArrowRight from './assets/ArrowRight.svg'
import PlayButton from './assets/PlayButton.svg'
import Trailer1 from './assets/Trailer1.png'
import Trailer3 from './assets/Trailer3.png'
import Trailer4 from './assets/Trailer4.png'
import review14 from './assets/review14.png'
import Trailer01 from './assets/Trailer01.png'
import Trailer02 from './assets/Trailer02.png'
import Trailer03 from './assets/Trailer03.png'
import downArrow from './assets/downArrow.svg'
import upArrow from './assets/upArrow.svg'
import pen from './assets/pen.svg'
import star from './assets/star.svg'
import image10 from './assets/image10.png'
import like from './assets/like.svg'
import dislike from './assets/dislike.svg'
import share from './assets/share.svg'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import Arrow_right from './assets/Arrow_right.svg'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

const Homepage = () => {
  return (
    <div>
      <div className="w-full relative bg-gray-400 h-[268rem] overflow-hidden text-center text-[2rem] text-white font-dm-sans">
        <img className="absolute top-0 left-0 w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" alt="" src={CoverImage} />
        <div className="absolute top-[23rem] left-1/2 transform -translate-x-1/2 flex flex-col items-start justify-start gap-[4rem] text-left">
          <div className="flex flex-row items-start justify-start gap-[1.25rem] text-[1.25rem]">
            <div data-scroll-container className="self-stretch flex flex-col items-start justify-start gap-[2rem]">
              {/* Poster with parallax effect */}
              <img
                data-scroll
                data-scroll-speed="1"
                className="w-[25.875rem] relative rounded-xl h-[38.25rem] object-cover"
                alt=""
                src={Poster}
              />

              {/* Info box with smooth scroll effect */}
              <div
                data-scroll
                data-scroll-section
                data-scroll-speed="2"
                className="w-full max-w-[25.875rem] rounded-xl bg-goldenrod-200 border border-goldenrod-100 box-border h-auto overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 sm:p-6 md:p-8"
              >
                <div className="flex-1 flex flex-col items-start justify-start gap-3 sm:gap-4">

                  {/* Genre */}
                  <div data-scroll data-scroll-speed="1" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Genre(s):</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">
                      Action, Drama, Crime, Thriller
                    </div>
                  </div>

                  {/* Release date */}
                  <div data-scroll data-scroll-speed="1.5" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Release date:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">
                      3 September, 2008
                    </div>
                  </div>

                  {/* Cast */}
                  <div data-scroll data-scroll-speed="2" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Cast:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">
                      Charlie Hunnam, Katey Sagal, Mark Boone Junior, Kim Coates, Tommy Flanagan,
                      Theo Rossi, Dayton Callie, Maggie Siff, Ron Perlman and more...
                    </div>
                  </div>

                  {/* Rating */}
                  <div data-scroll data-scroll-speed="1" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Rating:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">TV-MA</div>
                  </div>

                  {/* Duration */}
                  <div data-scroll data-scroll-speed="1.2" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Duration:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">45 minutes</div>
                  </div>

                  {/* Writers */}
                  <div data-scroll data-scroll-speed="1.5" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Writer(s):</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">Kurt Sutter</div>
                  </div>

                  {/* Budget */}
                  <div data-scroll data-scroll-speed="2" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Budget:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">
                      $2 million - $2.5 million per episode
                    </div>
                  </div>

                  {/* Studio */}
                  <div data-scroll data-scroll-speed="1.3" className="w-full flex flex-col gap-1">
                    <b className="leading-7">Studio:</b>
                    <div className="text-sm sm:text-base leading-6 text-darkgray">Fox 21</div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="w-[39.375rem] relative h-[102rem] text-[1rem]">
              <div
                data-scroll
                data-scroll-section
                data-scroll-speed="1"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[39.375rem] [backdrop-filter:blur(48px)] rounded-xl [background:linear-gradient(180deg,_rgba(24,_24,_27,_0.75),_rgba(24,_24,_27,_0))] border-gray-700 border-solid border-2 box-border overflow-hidden flex flex-col items-start justify-start p-4 sm:p-6 md:p-8"
              >
                <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8">

                  {/* Title Section */}
                  <div
                    data-scroll
                    data-scroll-speed="1.2"
                    className="w-full flex flex-col items-start justify-start gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-[3rem] font-staatliches"
                  >
                    <div className="w-full flex flex-row items-end justify-start gap-2">
                      <div className="leading-[100%]">Sons of anarchy</div>
                      <div className="flex-1 text-lg sm:text-xl md:text-2xl leading-tight text-darkgray">(2008)</div>
                    </div>

                    {/* Ratings Section */}
                    <div
                      data-scroll
                      data-scroll-speed="1.5"
                      className="w-full flex flex-row items-start justify-start gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base"
                    >
                      {/* User rating */}
                      <div className="flex-1 rounded-md bg-gray-200 border border-gray-100 flex flex-col items-center justify-center p-2 sm:p-3">
                        <div className="flex flex-col items-center gap-1">
                          <img className="w-5 h-5 sm:w-6 sm:h-6 rounded-md" alt="" src={Frame1} />
                          <div className="flex flex-row items-end justify-center gap-1">
                            <div className="leading-6 sm:leading-7">8.6/10</div>
                            <div className="text-xs text-darkgray font-dm-sans">(322k)</div>
                          </div>
                          <div className="text-xs font-dm-sans text-center">User rating</div>
                        </div>
                      </div>

                      {/* Review */}
                      <div className="flex-1 rounded-md bg-gray-200 border border-gray-100 flex flex-col items-center justify-center p-2 sm:p-3 text-xs font-dm-sans">
                        <img className="w-5 h-5 sm:w-6 sm:h-6 object-cover" alt="" src={Frame2} />
                        <div className="py-1">
                          <img className="w-20 h-4 object-cover " alt="" src={review14} />
                        </div>
                        <div className="leading-4">
                          <span className="underline">Review</span> by <span className="underline">Simon G.</span>
                        </div>
                      </div>

                      {/* My Rating */}
                      <div className="flex-1 rounded-md bg-gray-200 border border-gray-100 flex flex-col items-center justify-center p-2 sm:p-3">
                        <img className="w-5 h-5 sm:w-6 sm:h-6" alt="" src={Frame3} />
                        <div className="leading-6 sm:leading-7">9/10</div>
                        <div className="text-xs font-dm-sans text-center">My Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div data-scroll data-scroll-speed="1" className="w-full border-t border-gray-100" />

                  {/* Stream Section */}
                  <div data-scroll data-scroll-speed="1.3" className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-row items-center justify-between gap-2">
                      <div className="font-medium">Stream</div>
                      <div className="w-36 sm:w-40 rounded border border-gray-100 flex flex-row items-center justify-between px-2 py-1 text-xs text-darkgray">
                        <div><img src={Country} alt="" /></div>
                        <img className="w-4 h-4" alt="" src={ChevronDown} />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4">
                      <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover" alt="" src={Platform1} />
                      <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md" alt="" src={platforms} />
                      <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md" alt="" src={prime} />
                    </div>
                  </div>

                  {/* Rent/Buy Section */}
                  <div data-scroll data-scroll-speed="1.5" className="w-full flex flex-col gap-4">
                    <div className="font-medium">Rent/Buy</div>
                    <div className="flex flex-row flex-wrap gap-4 text-xs text-darkgray">
                      <div className="flex flex-col items-center gap-1">
                        <img className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md" alt="" src={prime} />
                        <div>Rent</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img className="w-12 h-12 sm:w-14 sm:h-14 object-cover" alt="" src={Platform1} />
                        <div>Rent</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md" alt="" src={platformss} />
                        <div>Buy</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md" alt="" src={platformsss} />
                        <div>Buy</div>
                      </div>
                    </div>
                  </div>

                  {/* Add to Watchlist */}
                  <div
                    data-scroll
                    data-scroll-speed="2"
                    className="w-full rounded-lg bg-goldenrod-100 flex flex-row items-center justify-center p-3 gap-2 text-black"
                  >
                    <img className="w-5 h-5" alt="" src={Add} />
                    <b className="leading-5">Add to the Watchlist</b>
                  </div>
                </div>
              </div>


              <div className="absolute top-[39.75rem] left-0 flex flex-col items-start justify-start gap-8 text-xl w-full max-w-[39.375rem] px-4 sm:px-0">

                {/* Section 1: Videos */}
                <div className="w-full border-b border-darkslategray box-border flex flex-col gap-5 pb-5">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="font-medium leading-8">Videos</div>
                    <div className="flex flex-row items-center gap-1 text-base">
                      <div className="font-medium leading-6">View all</div>
                      <img className="w-6 h-6" alt="" src={ArrowRight} />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 w-full">
                    {/* Trailer 1 */}
                    <div className="relative w-full sm:w-1/2 h-40 sm:h-44">
                      <img className="absolute inset-0 w-full h-full rounded-lg object-cover" alt="" src={Trailer1} />

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-sm sm:text-base">
                        <img className="w-10 h-10" alt="" src={PlayButton} />
                        <b>Play Trailer</b>
                      </div>
                    </div>

                    {/* Trailer 2 */}
                    <div className="relative w-full sm:w-1/2 h-40 sm:h-44 rounded-lg bg-[url('./assets/Trailer2.png')] bg-cover bg-no-repeat">
                      <div className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-0.5 rounded">10:30</div>
                      <img className="w-[1.25rem] absolute !!m-[0 important] top-[calc(50%_-_11px)] right-[0.75rem] h-[1.25rem] object-contain z-[5]" alt="" src={Arrow_right} />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#09090b]/90 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Photos */}
                <div className="w-full border-b border-darkslategray box-border flex flex-col gap-5 pb-5">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="font-medium leading-8">Photos</div>
                    <div className="flex flex-row items-center gap-1 text-base">
                      <div className="font-medium leading-6">View all</div>

                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 w-full">

                    <img className="flex-1 h-40 sm:h-44 rounded-lg object-cover" alt="" src={Trailer3} />

                    <img className="flex-1 h-40 sm:h-44 rounded-lg object-cover" alt="" src={Trailer4} />
                    <img className="w-[1.25rem] absolute !!m-[0 important] top-[calc(43%_-_11px)] right-[0] h-[1.25rem] object-contain z-[5]" alt="" src={Arrow_right} />

                  </div>

                </div>

                {/* Section 3: Top Cast */}
                <div className="w-full border-b border-darkslategray box-border flex flex-col gap-5 pb-5">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="font-medium leading-8">Top Cast</div>
                    <div className="flex flex-row items-center gap-1 text-base">
                      <div className="font-medium leading-6">View all</div>
                      <img className="w-6 h-6" alt="" src={ArrowRight} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    {/* Cast card */}
                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer01} />
                      <div>
                        <div className="font-medium">Charlie Hunnam</div>
                        <div className="text-xs text-darkgray">Jax Teller</div>
                      </div>
                    </div>



                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer02} />
                      <div>
                        <div className="font-medium">Katey Sagal</div>
                        <div className="text-xs text-darkgray">Gemma Teller Morrow</div>
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer03} />
                      <div>
                        <div className="font-medium">Kim Coates</div>
                        <div className="text-xs text-darkgray">Alexander 'Tig' Trager</div>
                      </div>
                    </div>




                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer01} />
                      <div>
                        <div className="font-medium">Charlie Hunnam</div>
                        <div className="text-xs text-darkgray">Jax Teller</div>
                      </div>
                    </div>


                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer02} />
                      <div>
                        <div className="font-medium">Katey Sagal</div>
                        <div className="text-xs text-darkgray">Gemma Teller Morrow</div>
                      </div>
                    </div>




                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer03} />
                      <div>
                        <div className="font-medium">Kim Coates</div>
                        <div className="text-xs text-darkgray">Alexander 'Tig' Trager</div>
                      </div>
                    </div>


                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer01} />
                      <div>
                        <div className="font-medium">Charlie Hunnam</div>
                        <div className="text-xs text-darkgray">Jax Teller</div>
                      </div>
                    </div>







                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer02} />
                      <div>
                        <div className="font-medium">Katey Sagal</div>
                        <div className="text-xs text-darkgray">Gemma Teller Morrow</div>
                      </div>
                    </div>






                    <div className="flex flex-row items-center gap-2">
                      <img className="w-14 h-14 rounded object-cover" alt="" src={Trailer03} />
                      <div>
                        <div className="font-medium">Kim Coates</div>
                        <div className="text-xs text-darkgray">Alexander 'Tig' Trager</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Creator */}
                <div className="w-full border-b border-darkslategray box-border flex flex-row items-center justify-between pb-5">
                  <div className="flex flex-row items-center gap-3">
                    <div className="font-medium leading-8">Creator</div>
                    <div className="font-medium underline text-goldenrod-100 leading-8">Kurt Sutter</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                    <img className="w-5 h-5" alt="" src={downArrow} />
                  </div>
                </div>

                {/* Section 5: All & crew */}
                <div className="w-full border-b border-darkslategray box-border flex flex-row items-center justify-between pb-5">
                  <div className="font-medium leading-8">All & crew</div>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                    <img className="w-5 h-5" alt="" src={downArrow} />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="w-full max-w-[66.5rem] flex flex-col items-start justify-start gap-[1.5rem] px-4 sm:px-6 lg:px-1">
            <div className="self-stretch relative leading-[2rem] font-medium">
              Synopsis
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[1rem] text-darkgray">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[1.5rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">
                  Sons of Anarchy, aka SAMCRO, is a motorcycle club that operates both
                  illegal and legal businesses in the small town of Charming. They combine
                  gun-running and a garage, plus involvement in porn film. Clay, the
                  president, likes it old school and violent; while Jax, his stepson and
                  the club's VP, has thoughts about changing the way things are, based on
                  his dead father's journal. Their conflict has effects on both the club
                  and their personal relationships.
                </div>
              </div>

              <div className="self-stretch border-gray-100 border-solid border-b-[1px] flex flex-col sm:flex-row items-start sm:items-center justify-start pt-[0rem] px-[0rem] pb-[0.75rem] gap-[1rem] sm:gap-[1.25rem] text-[1.25rem] text-white">
                <div className="relative leading-[1.75rem] font-medium">Genres:</div>
                <div className="flex flex-wrap items-center justify-start gap-[0.75rem] text-[0.875rem] text-darkgray">
                  <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                    <div className="relative leading-[1.25rem]">Crime</div>
                  </div>
                  <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                    <div className="relative leading-[1.25rem]">Drama</div>
                  </div>
                  <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start pt-[0.25rem] px-[0.75rem] pb-[0.375rem]">
                    <div className="relative leading-[1.25rem]">Thriller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[66.5rem] mx-auto flex flex-col gap-8 px-4">
            {/* Header Section */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1 text-lg sm:text-xl md:text-2xl font-medium">
                Read about Sons of Anarchy
              </div>
              <div className="rounded border border-darkslategray flex flex-row items-center justify-start py-1 px-3 gap-1 text-sm text-darkgray cursor-pointer">
                <div className="font-medium">View All</div>
                <img className="w-4 h-4" alt="" src={upArrow} />
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
              {/* Card 1 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <div className="relative h-36 w-full bg-[url('./assets/Article_Thumbnail.png')] bg-cover bg-no-repeat rounded-t-lg">
                  <div className="absolute top-2 right-2 rounded-full bg-gray-500 px-3 py-1 text-[0.75rem]">
                    2 Days ago
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-3 text-darkgray">
                  <div className="flex flex-col gap-2">
                    <div className="text-base leading-6 font-medium text-white line-clamp-3">
                      10 Harsh Realities Of Rewatching Sons Of Anarchy 10 Years After It Ended
                    </div>
                    <div className="text-sm leading-4 line-clamp-2">
                      Sons of Anarchy is a great show, chronicling the Shakespearean saga of a biker gang, but there are some flaws that stick out on a rewatch today.
                    </div>
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      <a href="https://screenrant.com/author/bsher/" target="_blank" className="text-inherit no-underline">
                        Ben Sherlock
                      </a>
                    </div>
                  </div>
                  <div className="rounded border border-darkslategray flex items-center justify-center py-2 text-sm text-white cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <div className="relative h-36 w-full bg-[url('./assets/Article-Thumbnail.png')] bg-cover bg-no-repeat rounded-t-lg">
                  <div className="absolute top-2 right-2 rounded-full bg-gray-500 px-3 py-1 text-[0.75rem]">
                    2 Days ago
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-3 text-darkgray">
                  <div className="flex flex-col gap-2">
                    <div className="text-base leading-6 font-medium text-white line-clamp-3">
                      Austin Butler & Tom Hardy's Biker Movie Was Already Spoiled By A 16-Year-Old TV Show
                    </div>
                    <div className="text-sm leading-4 line-clamp-2">
                      Sons of Anarchy is a great show, chronicling the Shakespearean saga of a biker gang, but there are some flaws that stick out on a rewatch today.
                    </div>
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      Adrienne Tyler
                    </div>
                  </div>
                  <div className="rounded border border-darkslategray flex items-center justify-center py-2 text-sm text-white cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <div className="relative h-36 w-full bg-[url('./assets/Article-Thumbnails.png')] bg-cover bg-no-repeat rounded-t-lg">
                  <div className="absolute top-2 right-2 rounded-full bg-gray-500 px-3 py-1 text-[0.75rem]">
                    2 Days ago
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-3 text-darkgray h-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="text-base leading-6 font-medium text-white">
                      Sons Of Anarchy: Why Opie Was Killed Off In Season 5
                    </div>
                    <div className="text-sm leading-4 line-clamp-3 flex-1">
                      Sons of Anarchy is a great show, chronicling the Shakespearean saga of a biker gang, but there are some flaws that stick out on a rewatch today.
                    </div>
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      by <a href="https://screenrant.com/author/bsher/" target="_blank" className="underline text-inherit">Ben Sherlock</a>
                    </div>
                  </div>
                  <div className="rounded border border-darkslategray flex items-center justify-center py-2 text-sm text-white cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>


              <div className="rounded-md bg-gray-200 flex flex-col">
                <div className="relative h-36 w-full bg-[url('./assets/Article_Thumbnail2.png')] bg-cover bg-no-repeat rounded-t-lg">
                  <div className="absolute top-2 right-2 rounded-full bg-gray-500 px-3 py-1 text-[0.75rem]">
                    2 Days ago
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-3 text-darkgray">
                  <div className="flex flex-col gap-2">
                    <div className="text-base leading-6 font-medium text-white line-clamp-3">
                      Sons Of Anarchy: Every Major Character Who Survived The Entire Show
                    </div>
                    <div className="text-sm leading-4 line-clamp-2">
                      Sons of Anarchy is a great show, chronicling the Shakespearean saga of a biker gang, but there are some flaws that stick out on a rewatch today.
                    </div>
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      by <a href="https://screenrant.com/author/bsher/" target="_blank" className="underline text-inherit">Ben Sherlock</a>
                    </div>
                  </div>
                  <div className="rounded border border-darkslategray flex items-center justify-center py-2 text-sm text-white cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[66.5rem]  flex flex-col items-start justify-start gap-[1.5rem] text-[0.875rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex-1 relative text-[2rem] leading-[2rem] font-medium">User Reviews</div>
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-goldenrod-100 flex flex-row items-center justify-center py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-black">
                <img className="w-[1rem] relative h-[1rem]" alt="" src={pen} />
                <div className="relative leading-[1.25rem] font-medium">Write a review</div>
              </div>
              <div className="rounded border-darkslategray border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-darkgray">
                <div className="relative leading-[1.25rem] font-medium">View All</div>
                <img className="w-[1rem] relative h-[1rem]" alt="" src={upArrow} />
              </div>
            </div>
            <div className="self-stretch h-[16rem flex flex-row items-start justify-start gap-[1.5rem]">
              <div className="self-stretch flex-1 rounded-md bg-gray-200 border-gray-100 border-solid border-[1px] flex flex-col items-start justify-start p-[1.25rem] gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] text-[1rem]">
                  <div className="flex-1 relative leading-[1.5rem] font-medium">Once you watch it, you won't be able to stop recommending it</div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem] text-[0.875rem]">
                    <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={star} />
                    <div className="relative leading-[1.25rem] font-medium">8.9</div>
                  </div>
                </div>
                <div className="self-stretch flex-1 relative leading-[1.25rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical]">
                  <p className="m-0">Sons of Anarchy (2008-2014)</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">It took me 4 months to watch the first 4 episodes of this show. Everytime I tried, I just couldn't get into it until something clicked and all of a sudden, I found myself experiencing an absolutely marvelous TV Series. Every subsequent season impressed me more and more with it's detailed level of storytelling and complex characters that go through monumental growth over the course of the journey. The show that often came to my mind was Breaking Bad so hopefully you understand the quality that I am talking about.</p>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[0rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <img className="w-[2.5rem] relative rounded-[32px] h-[2.5rem] object-cover" alt="" src={image10} />
                    <div className="flex flex-col items-start justify-center gap-[0.125rem]">
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">Johnson Jack</div>
                      <div className="relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">23 December 2023</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.75rem] text-darkgray">
                    <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                      <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={like} />
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">28</div>
                    </div>
                    <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                      <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={dislike} />
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">02</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-md bg-gray-200 border-gray-100 border-solid border-[1px] flex flex-col items-start justify-start p-[1.25rem] gap-[0.75rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[0rem] text-[1rem]">
                  <div className="flex-1 relative leading-[1.5rem] font-medium">One of the best shows ever</div>
                  <div className="flex flex-row items-center justify-start gap-[0.25rem] text-[0.875rem]">
                    <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={star} />
                    <div className="relative leading-[1.25rem] font-medium">8.9</div>
                  </div>
                </div>
                <div className="self-stretch flex-1 relative leading-[1.25rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">Sons of Anarchy is easily one of my two or three favorite shows I've ever seen. I really can't say enough about this amazing show that hasn't already been said, all you have to do is read through the reviews to see how loved this show really is. I know that people say this all the time about a ton of different shows but Sons of Anarchy is absolutely one of the best shows ever created! Every season is just as amazing as the others, which everyone knows is really rare for a tv show but which Sons of Anarchy definitely pulls off. Do yourself a favor and just go watch it. I promise it will not only meet your expectations but it'll pass them.</div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[0rem]">
                  <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                    <img className="w-[2.5rem] relative rounded-[32px] h-[2.5rem] object-cover" alt="" src={image10} />
                    <div className="flex flex-col items-start justify-center gap-[0.125rem]">
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">Johnson Jack</div>
                      <div className="relative text-[0.75rem] leading-[1rem] text-darkgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">23 December 2023</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.75rem] text-darkgray">
                    <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                      <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={like} />
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">28</div>
                    </div>
                    <div className="rounded-[32px] border-gray-100 border-solid border-[1px] flex flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
                      <img className="w-[1.25rem] relative h-[1.25rem]" alt="" src={dislike} />
                      <div className="relative leading-[1.25rem] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">02</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[66.5rem] flex flex-col items-start justify-start gap-8 px-4">
            {/* Header */}
            <div className="w-full flex flex-row items-center justify-between">
              <div className="text-lg md:text-xl font-medium leading-8">More like this</div>
              <div className="rounded border border-darkslategray flex flex-row items-center justify-start py-1.5 px-3 gap-1 text-sm text-darkgray cursor-pointer hover:bg-gray-100">
                <div className="font-medium leading-5">View All</div>
                <img className="w-4 h-4" alt="" src={upArrow} />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-[1.125rem]">
              {/* Card 1 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <img
                  className="w-full h-80 object-cover rounded-t-lg"
                  alt=""
                  src={image1}
                />
                <div className="flex flex-col p-3 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="font-medium text-base leading-7 flex-1">
                        Game of Thrones
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm">
                        <img className="w-5 h-5 object-cover" alt="" src={Frame2} />
                        <div className="font-medium">8.9</div>
                      </div>
                    </div>
                    <div className="text-xs text-darkgray leading-4 line-clamp-2">
                      Nine noble families fight for control over the lands of Westeros,
                      while an ancient enemy returns after being dormant for a millennia.
                    </div>
                  </div>
                  <div className="rounded bg-gray-100 flex flex-row items-center justify-center p-2 gap-2 text-sm cursor-pointer hover:bg-gray-200">
                    <img className="w-6 h-6 " alt="" src={Add2} />
                    <div>Add to the Watchlist</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <img
                  className="w-full h-80 object-cover rounded-t-lg"
                  alt=""
                  src={image2}
                />
                <div className="flex flex-col p-3 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="font-medium text-base leading-7 flex-1">Suits</div>
                      <div className="flex flex-row items-center gap-1 text-sm">
                        <img className="w-5 h-5 object-cover" alt="" src={Frame2} />
                        <div className="font-medium">8.9</div>
                      </div>
                    </div>
                    <div className="text-xs text-darkgray leading-4 line-clamp-2">
                      On the run from a drug deal gone bad, brilliant college dropout Mike
                      Ross finds himself working with Harvey Specter, one of New York
                      City's best lawyers.
                    </div>
                  </div>
                  <div className="rounded bg-gray-100 flex flex-row items-center justify-center p-2 gap-2 text-sm cursor-pointer hover:bg-gray-200">
                    <img className="w-6 h-6" alt="" src={Add2} />
                    <div>Add to the Watchlist</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <img
                  className="w-full h-80 object-cover rounded-t-lg"
                  alt=""
                  src={image3}
                />
                <div className="flex flex-col p-3 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="font-medium text-base leading-7 flex-1">
                        Breaking Bad
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm">
                        <img className="w-5 h-5 object-cover" alt="" src={Frame2} />
                        <div className="font-medium">8.9</div>
                      </div>
                    </div>
                    <div className="text-xs text-darkgray leading-4 line-clamp-2">
                      Breaking Bad: Created by Vince Gilligan. With Bryan Cranston, Anna
                      Gunn, Aaron Paul, Betsy Brandt. A chemistry teacher diagnosed with
                      inoperable lung cancer
                    </div>
                  </div>
                  <div className="rounded bg-gray-100 flex flex-row items-center justify-center p-2 gap-2 text-sm cursor-pointer hover:bg-gray-200">
                    <img className="w-6 h-6" alt="" src={Add2} />
                    <div>Add to the Watchlist</div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-md bg-gray-200 flex flex-col">
                <img
                  className="w-full h-80 object-cover rounded-t-lg"
                  alt=""
                  src={image4}
                />
                <div className="flex flex-col p-3 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="font-medium text-base leading-7 flex-1">
                        The Witcher
                      </div>
                      <div className="flex flex-row items-center gap-1 text-sm">
                        <img className="w-5 h-5 object-cover" alt="" src={Frame2} />
                        <div className="font-medium">8.9</div>
                      </div>
                    </div>
                    <div className="text-xs text-darkgray leading-4 line-clamp-2">
                      Geralt of Rivia, a solitary monster hunter, struggles to find his
                      place in a world where people often prove more wicked than beasts.
                    </div>
                  </div>
                  <div className="rounded bg-gray-100 flex flex-row items-center justify-center p-2 gap-2 text-sm cursor-pointer hover:bg-gray-200">
                    <img className="w-6 h-6" alt="" src={Add2} />
                    <div>Add to the Watchlist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[66.5rem] flex flex-col gap-6 px-4">
            {/* Header */}
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="text-lg md:text-xl font-medium">Trivia</div>
              <div className="rounded border border-darkslategray flex flex-row items-center gap-1 py-1 px-3 text-sm text-darkgray cursor-pointer">
                <span className="font-medium">View All</span>
                <img className="w-4 h-4" alt="" src={upArrow} />
              </div>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="rounded-md bg-gray-200 border border-gray-100 p-5 flex flex-col gap-3 h-auto">
                <div className="text-sm leading-relaxed text-goldenrod-100 line-clamp-6">
                  <span className="underline">David Labrava</span>
                  <span className="text-darkgray">
                    , who plays Happy Lowman, is a real life member of Hells Angel MC. He
                    was hired as a technical advisor but asked{" "}
                  </span>
                  <span className="underline">Kurt Sutter</span>
                  <span className="text-darkgray">
                    {" "}
                    for a chance to be on the show. He won't talk about his association
                    with Hells Angels (though photos of him wearing his kutte can be found
                    online and he has the death head tatted on him). It is said he's
                    currently an inactive member since doing the show, but is still in
                    good standing with the club.
                  </span>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 flex flex-row items-center justify-between pt-3">
                  <div className="flex flex-row gap-3">
                    <div className="rounded-full bg-goldenrod-200 border border-goldenrod-100 flex flex-row items-center gap-2 py-1 px-3">
                      <img className="w-5 h-5" alt="" src={like} />
                      <span className="text-sm">28</span>
                    </div>
                    <div className="rounded-full border border-gray-100 text-darkgray flex flex-row items-center gap-2 py-1 px-3">
                      <img className="w-5 h-5" alt="" src={dislike} />
                      <span className="text-sm">02</span>
                    </div>
                  </div>
                  <img className="w-11 h-8 rounded-full" alt="" src={share} />
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-md bg-gray-200 border border-gray-100 p-5 flex flex-col gap-3 h-auto text-darkgray">
                <div className="text-sm leading-relaxed line-clamp-6">
                  During his brief guest appearance in one episode,{" "}
                  <span className="underline text-goldenrod-100">Stephen King</span> played
                  a character called Bachman. The name comes from a pen name, Richard
                  Bachman, that Stephen King used early on in his career so that he could
                  publish a large quantity of books without diluting the Stephen King
                  brand.
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 flex flex-row items-center justify-between pt-9">
                  <div className="flex flex-row gap-3">
                    <div className="rounded-full border border-gray-100 flex flex-row items-center gap-2 py-1 px-3">
                      <img className="w-5 h-5" alt="" src={like} />
                      <span className="text-sm">11</span>
                    </div>
                    <div className="rounded-full border border-gray-100 flex flex-row items-center gap-2 py-1 px-3">
                      <img className="w-5 h-5" alt="" src={dislike} />
                      <span className="text-sm">04</span>
                    </div>
                  </div>
                  <img className="w-11 h-8 rounded-full" alt="" src={share} />
                </div>
              </div>
            </div>
          </div>

        </div>
       


        

      </div>
    </div>
  )
}

export default Homepage
