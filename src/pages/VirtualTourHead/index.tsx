import React, {useState} from 'react';
import  './index.css';
import Temperature from '@/components/Temperature';
const VirtualTour = () => {
  const style = {
    border: 'solid red 0.0625rem'
  }
  const NormalStyle = {
    border: '1px solid var(--green-700, #046C4E)',
    background: 'rgba(49, 196, 141, 0.10)',
  }
  const AbnormalStyle = {
    border: '1px solid var(--red-400, #F98080)',
    background: 'rgba(240, 82, 82, 0.20)',
  }
  const [stateList, setStateList] = useState([
    {id: 1, name: 'Server Name', state: 'Normal'},
    {id: 2, name: 'Server Name', state: 'Normal'},
    {id: 3, name: 'Server Name', state: 'Abnormal'},
    {id: 4, name: 'Server Name', state: 'Normal'},
  ])
  return (
    <div className="font-Inter">
      <div className="w-[48rem] h-[5.75rem] flex flex-row items-center placeTop">
        <div className="text-white text-[2rem] ml-[2rem]">
          <span>Place: </span><span className="font-[700]">Tree of Wisdom</span>
        </div>
        <svg className="ml-auto mr-[1.625rem]" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none">
          <path d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z" fill="white" />
        </svg>
      </div>
      <div className="w-[48rem] h-[90rem] mt-[1rem] flex flex-col items-center RealTime">
        <div className="w-[44rem] h-[5.5rem] mt-[2.5rem] text-[1.75rem] flex flex-row items-center Analysis">
          <span className="text-[#9CA3AF] ml-[1.5rem]">View：</span><span
          className="font-[500] text-[#F3F4F6]">I-O-T</span>
          <svg className="ml-auto mr-[1.625rem]" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem"
               viewBox="0 0 40 40" fill="none">
            <path d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z" fill="white" />
          </svg>
        </div>
        <div
          className="w-[44rem] flex flex-row justify-start mt-[2.5rem] text-[1.75rem] text-[#F3F4F6] font-[600]">Lights
        </div>
        <div className="w-[44rem] flex flex-wrap justify-between">
          <div className="w-[48.5%] h-[11.75rem] mt-[1.25rem] flex flex-col justify-between lightsBg">
            <div className="w-full flex flex-row justify-between">
              <svg className="w-[4.5rem] h-[4.5rem]" xmlns="http://www.w3.org/2000/svg" width="686" height="740"
                   viewBox="0 0 686 740" fill="none">
                <g filter="url(#filter0_ddf_3506_3067)">
                  <circle cx="320" cy="370" r="36" fill="#5DF5E7" flood-opacity="0.5" />
                </g>
                <g filter="url(#filter1_dddddd_3506_3067)">
                  <path
                    d="M342.04 364.491H345.714V368.164H342.04V364.491ZM334.286 349.424L336.883 346.827L339.48 349.424L336.883 352.021L334.286 349.424ZM318.163 340.613H321.836V344.287H318.163V340.613ZM303.116 352.062L300.517 349.463L303.116 346.866L305.713 349.463L303.116 352.062ZM294.285 364.491H297.959V368.164H294.285V364.491ZM314.489 395.715H325.51V399.389H314.489V395.715ZM310.816 388.368H329.183V392.042H310.816V388.368ZM319.999 347.96C309.897 347.96 301.632 356.226 301.632 366.328C301.632 374.409 305.306 377.899 308.061 380.287C309.897 381.94 310.816 383.042 310.816 384.695H314.489C314.489 381.389 312.469 379.368 310.448 377.532C307.877 375.328 305.306 372.756 305.306 366.328C305.306 358.246 311.918 351.634 319.999 351.634C328.081 351.634 334.693 358.246 334.693 366.328C334.693 372.756 332.122 375.328 329.55 377.532C327.53 379.368 325.51 381.205 325.51 384.695H329.183C329.183 383.042 330.101 381.94 331.938 380.287C334.693 377.899 338.367 374.409 338.367 366.328C338.367 356.226 330.101 347.96 319.999 347.96Z"
                    fill="#D0FFFB" />
                </g>
                <defs>
                  <filter id="filter0_ddf_3506_3067" x="34" y="84" width="572" height="572" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3506_3067" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect3_foregroundBlur_3506_3067" />
                  </filter>
                  <filter id="filter1_dddddd_3506_3067" x="-45.9149" y="0.413269" width="731.829" height="739.175"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.05" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28.35" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_3506_3067" result="effect3_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="56.7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_3506_3067" result="effect4_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="97.2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_3506_3067" result="effect5_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="170.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect5_dropShadow_3506_3067" result="effect6_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3506_3067" result="shape" />
                  </filter>
                </defs>
              </svg>
              <label className="switch mr-[1.25rem] mt-[1.25rem]">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="text-[#F3F4F6] text-[1.125rem] ml-[1.25rem] mb-[1.25rem]">
                <p className="text-[1.875rem]">Zone 1</p>
                <p>Active for 3 hours</p>
              </div>
              <div
                className="text-[1.625rem] text-[#F3F4F6] mr-[1.25rem] mb-[1.25rem] flex flex-col justify-end">0.42Kwh
              </div>
            </div>
          </div>
          <div className="w-[48.5%] h-[11.75rem] mt-[1.25rem] flex flex-col justify-between lightsBg">
            <div className="w-full flex flex-row justify-between">
              <svg className="w-[4.5rem] h-[4.5rem]" xmlns="http://www.w3.org/2000/svg" width="686" height="740"
                   viewBox="0 0 686 740" fill="none">
                <g filter="url(#filter0_ddf_3506_3067)">
                  <circle cx="320" cy="370" r="36" fill="#5DF5E7" flood-opacity="0.5" />
                </g>
                <g filter="url(#filter1_dddddd_3506_3067)">
                  <path
                    d="M342.04 364.491H345.714V368.164H342.04V364.491ZM334.286 349.424L336.883 346.827L339.48 349.424L336.883 352.021L334.286 349.424ZM318.163 340.613H321.836V344.287H318.163V340.613ZM303.116 352.062L300.517 349.463L303.116 346.866L305.713 349.463L303.116 352.062ZM294.285 364.491H297.959V368.164H294.285V364.491ZM314.489 395.715H325.51V399.389H314.489V395.715ZM310.816 388.368H329.183V392.042H310.816V388.368ZM319.999 347.96C309.897 347.96 301.632 356.226 301.632 366.328C301.632 374.409 305.306 377.899 308.061 380.287C309.897 381.94 310.816 383.042 310.816 384.695H314.489C314.489 381.389 312.469 379.368 310.448 377.532C307.877 375.328 305.306 372.756 305.306 366.328C305.306 358.246 311.918 351.634 319.999 351.634C328.081 351.634 334.693 358.246 334.693 366.328C334.693 372.756 332.122 375.328 329.55 377.532C327.53 379.368 325.51 381.205 325.51 384.695H329.183C329.183 383.042 330.101 381.94 331.938 380.287C334.693 377.899 338.367 374.409 338.367 366.328C338.367 356.226 330.101 347.96 319.999 347.96Z"
                    fill="#D0FFFB" />
                </g>
                <defs>
                  <filter id="filter0_ddf_3506_3067" x="34" y="84" width="572" height="572" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3506_3067" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect3_foregroundBlur_3506_3067" />
                  </filter>
                  <filter id="filter1_dddddd_3506_3067" x="-45.9149" y="0.413269" width="731.829" height="739.175"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.05" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28.35" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_3506_3067" result="effect3_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="56.7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_3506_3067" result="effect4_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="97.2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_3506_3067" result="effect5_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="170.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect5_dropShadow_3506_3067" result="effect6_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3506_3067" result="shape" />
                  </filter>
                </defs>
              </svg>
              <label className="switch mr-[1.25rem] mt-[1.25rem]">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="text-[#F3F4F6] text-[1.125rem] ml-[1.25rem] mb-[1.25rem]">
                <p className="text-[1.875rem]">Zone 1</p>
                <p>Active for 3 hours</p>
              </div>
              <div
                className="text-[1.625rem] text-[#F3F4F6] mr-[1.25rem] mb-[1.25rem] flex flex-col justify-end">0.42Kwh
              </div>
            </div>
          </div>
          <div className="w-[48.5%] h-[11.75rem] mt-[1.2rem] flex flex-col justify-between lightsBg">
            <div className="w-full flex flex-row justify-between">
              <svg className="w-[4.5rem] h-[4.5rem]" xmlns="http://www.w3.org/2000/svg" width="686" height="740"
                   viewBox="0 0 686 740" fill="none">
                <g filter="url(#filter0_ddf_3506_3067)">
                  <circle cx="320" cy="370" r="36" fill="#5DF5E7" flood-opacity="0.5" />
                </g>
                <g filter="url(#filter1_dddddd_3506_3067)">
                  <path
                    d="M342.04 364.491H345.714V368.164H342.04V364.491ZM334.286 349.424L336.883 346.827L339.48 349.424L336.883 352.021L334.286 349.424ZM318.163 340.613H321.836V344.287H318.163V340.613ZM303.116 352.062L300.517 349.463L303.116 346.866L305.713 349.463L303.116 352.062ZM294.285 364.491H297.959V368.164H294.285V364.491ZM314.489 395.715H325.51V399.389H314.489V395.715ZM310.816 388.368H329.183V392.042H310.816V388.368ZM319.999 347.96C309.897 347.96 301.632 356.226 301.632 366.328C301.632 374.409 305.306 377.899 308.061 380.287C309.897 381.94 310.816 383.042 310.816 384.695H314.489C314.489 381.389 312.469 379.368 310.448 377.532C307.877 375.328 305.306 372.756 305.306 366.328C305.306 358.246 311.918 351.634 319.999 351.634C328.081 351.634 334.693 358.246 334.693 366.328C334.693 372.756 332.122 375.328 329.55 377.532C327.53 379.368 325.51 381.205 325.51 384.695H329.183C329.183 383.042 330.101 381.94 331.938 380.287C334.693 377.899 338.367 374.409 338.367 366.328C338.367 356.226 330.101 347.96 319.999 347.96Z"
                    fill="#D0FFFB" />
                </g>
                <defs>
                  <filter id="filter0_ddf_3506_3067" x="34" y="84" width="572" height="572" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3506_3067" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect3_foregroundBlur_3506_3067" />
                  </filter>
                  <filter id="filter1_dddddd_3506_3067" x="-45.9149" y="0.413269" width="731.829" height="739.175"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.05" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28.35" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_3506_3067" result="effect3_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="56.7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_3506_3067" result="effect4_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="97.2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_3506_3067" result="effect5_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="170.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect5_dropShadow_3506_3067" result="effect6_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3506_3067" result="shape" />
                  </filter>
                </defs>
              </svg>
              <label className="switch mr-[1.25rem] mt-[1.25rem]">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="text-[#F3F4F6] text-[1.125rem] ml-[1.25rem] mb-[1.25rem]">
                <p className="text-[1.875rem]">Zone 1</p>
                <p>Active for 3 hours</p>
              </div>
              <div
                className="text-[1.625rem] text-[#F3F4F6] mr-[1.25rem] mb-[1.25rem] flex flex-col justify-end">0.42Kwh
              </div>
            </div>
          </div>
          <div className="w-[48.5%] h-[11.75rem] mt-[1.2rem] flex flex-col justify-between lightsBg">
            <div className="w-full flex flex-row justify-between">
              <svg className="w-[4.5rem] h-[4.5rem]" xmlns="http://www.w3.org/2000/svg" width="686" height="740"
                   viewBox="0 0 686 740" fill="none">
                <g filter="url(#filter0_ddf_3506_3067)">
                  <circle cx="320" cy="370" r="36" fill="#5DF5E7" flood-opacity="0.5" />
                </g>
                <g filter="url(#filter1_dddddd_3506_3067)">
                  <path
                    d="M342.04 364.491H345.714V368.164H342.04V364.491ZM334.286 349.424L336.883 346.827L339.48 349.424L336.883 352.021L334.286 349.424ZM318.163 340.613H321.836V344.287H318.163V340.613ZM303.116 352.062L300.517 349.463L303.116 346.866L305.713 349.463L303.116 352.062ZM294.285 364.491H297.959V368.164H294.285V364.491ZM314.489 395.715H325.51V399.389H314.489V395.715ZM310.816 388.368H329.183V392.042H310.816V388.368ZM319.999 347.96C309.897 347.96 301.632 356.226 301.632 366.328C301.632 374.409 305.306 377.899 308.061 380.287C309.897 381.94 310.816 383.042 310.816 384.695H314.489C314.489 381.389 312.469 379.368 310.448 377.532C307.877 375.328 305.306 372.756 305.306 366.328C305.306 358.246 311.918 351.634 319.999 351.634C328.081 351.634 334.693 358.246 334.693 366.328C334.693 372.756 332.122 375.328 329.55 377.532C327.53 379.368 325.51 381.205 325.51 384.695H329.183C329.183 383.042 330.101 381.94 331.938 380.287C334.693 377.899 338.367 374.409 338.367 366.328C338.367 356.226 330.101 347.96 319.999 347.96Z"
                    fill="#D0FFFB" />
                </g>
                <defs>
                  <filter id="filter0_ddf_3506_3067" x="34" y="84" width="572" height="572" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="60" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3506_3067" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect3_foregroundBlur_3506_3067" />
                  </filter>
                  <filter id="filter1_dddddd_3506_3067" x="-45.9149" y="0.413269" width="731.829" height="739.175"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.05" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_3067" result="effect2_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28.35" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_3506_3067" result="effect3_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="56.7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_3506_3067" result="effect4_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="97.2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_3506_3067" result="effect5_dropShadow_3506_3067" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="170.1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect5_dropShadow_3506_3067" result="effect6_dropShadow_3506_3067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3506_3067" result="shape" />
                  </filter>
                </defs>
              </svg>
              <label className="switch mr-[1.25rem] mt-[1.25rem]">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="text-[#F3F4F6] text-[1.125rem] ml-[1.25rem] mb-[1.25rem]">
                <p className="text-[1.875rem]">Zone 1</p>
                <p>Active for 3 hours</p>
              </div>
              <div
                className="text-[1.625rem] text-[#F3F4F6] mr-[1.25rem] mb-[1.25rem] flex flex-col justify-end">0.42Kwh
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45.125rem] h-[0.0625rem] bg-[#4B5563] mt-[2.5rem]"></div>
        <div
          className="w-[44rem] flex flex-row justify-start mt-[2.5rem] text-[1.75rem] text-[#F3F4F6] font-[600]">Router
        </div>
        <div className="w-[44rem] flex flex-wrap justify-between">
          <div className="w-[48.5%] h-[11.75rem] mt-[1.25rem] flex flex-col justify-between lightsBg">
            <div className="w-full flex flex-row justify-between">
              <svg className="w-[4.5rem] h-[4.5rem]" xmlns="http://www.w3.org/2000/svg" width="564" height="564"
                   viewBox="0 0 564 564" fill="none">
                <g filter="url(#filter0_df_3506_4179)">
                  <circle cx="282" cy="282" r="32" fill="#5DF5E7" flood-opacity="0.5" />
                </g>
                <g filter="url(#filter1_dddddd_3506_4179)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M282.903 256.709C291.574 256.709 298.981 262.851 300.607 271.161H296.813C295.187 265.019 289.587 260.322 282.903 260.322C275.497 260.322 269.355 265.922 268.452 273.148V274.774H266.826C261.587 275.135 257.613 279.47 257.613 284.709C257.613 290.128 262.129 294.645 267.548 294.645H273.871V298.257H267.548C260.142 298.257 254 292.115 254 284.709C254 278.025 258.877 272.606 265.2 271.341C266.826 262.851 274.232 256.709 282.903 256.709ZM279.29 291.936C279.29 283.446 286.155 276.581 294.645 276.581C303.135 276.581 310 283.446 310 291.936C310 300.427 303.135 307.291 294.645 307.291C286.155 307.291 279.29 300.427 279.29 291.936ZM300.968 291.033H306.387C306.026 286.517 303.135 282.904 299.342 281.097C300.426 283.807 300.968 287.42 300.968 291.033ZM291.935 294.646C292.297 300.427 293.922 303.317 294.645 303.678C295.368 303.317 296.813 300.427 297.174 294.646H291.935ZM294.464 280.194C293.922 280.556 292.116 284.168 291.935 291.033H297.174C296.993 284.168 295.187 280.556 294.464 280.194ZM288.322 291.033C288.503 287.42 288.864 283.807 289.948 281.097C286.155 282.904 283.264 286.517 282.903 291.033H288.322ZM288.322 294.646H283.264C284.168 298.259 286.697 301.33 289.948 302.775C289.045 300.427 288.503 297.536 288.322 294.646ZM300.968 294.646C300.787 297.717 300.245 300.427 299.342 302.775C302.593 301.33 305.122 298.259 306.206 294.646H300.968Z"
                        fill="#D0FFFB" />
                </g>
                <defs>
                  <filter id="filter0_df_3506_4179" x="0" y="0" width="564" height="564" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_4179" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3506_4179" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect2_foregroundBlur_3506_4179" />
                  </filter>
                  <filter id="filter1_dddddd_3506_4179" x="4" y="6.70898" width="556" height="550.582"
                          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.898039 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3506_4179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_3506_4179" result="effect2_dropShadow_3506_4179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="28" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_3506_4179" result="effect3_dropShadow_3506_4179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="56.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_3506_4179" result="effect4_dropShadow_3506_4179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="97" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_3506_4179" result="effect5_dropShadow_3506_4179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="125" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.8 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect5_dropShadow_3506_4179" result="effect6_dropShadow_3506_4179" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_3506_4179" result="shape" />
                  </filter>
                </defs>
              </svg>
              <label className="switch mr-[1.25rem] mt-[1.25rem]">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="text-[#F3F4F6] text-[1.125rem] ml-[1.25rem] mb-[1.25rem]">
                <p className="text-[1.875rem]">Wifi</p>
                <p>Active for 3 hours</p>
              </div>
              <div
                className="text-[1.625rem] text-[#F3F4F6] mr-[1.25rem] mb-[1.25rem] flex flex-col justify-end">0.42Kwh
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45.125rem] h-[0.0625rem] bg-[#4B5563] mt-[2.5rem]"></div>
        <div className="canvas h-[25rem]">
          <Temperature></Temperature>
          <div className="w-full h-[0.0625rem] bg-[#4B5563] mt-[2.5rem]"></div>
          <div
            className="w-[44rem] flex flex-row justify-start mt-[2.5rem] text-[1.75rem] text-[#F3F4F6] font-[600]">Status
          </div>
          <div>
            {
              stateList.map((item) => {
                return <div key={item.id}
                  className="server w-full flex flex-row justify-between items-center border-b-[0.0625rem] border-dashed border-[#4B5563] mt-[1.5rem] pb-[1.5rem]">
                  <span className="text-white text-[2rem] font-Inter">{item.name}</span>
                  <div className="w-[12.5rem] h-[4.5rem] text-[1.625rem] flex states text-white" style={item.state === 'Normal' ? NormalStyle: AbnormalStyle}>
                    <span className="m-auto" style={{color: item.state === 'Normal' ? '#31C48D' : '#F98080'}}>{item.state}</span>
                  </div>
                </div>
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default VirtualTour;