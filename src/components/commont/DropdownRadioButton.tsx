'use client';
import useClickOutside from '@/hook/useClickOutside';
import React, {useState, MouseEvent, useCallback, useRef} from 'react';
import {useEffect} from 'react';

type selfProps = {
  getStatus: Function;
};
const show = {
  display: 'block',
};
const hidden = {
  display: 'none',
};
const rotate = {
  transform: 'rotate(0deg)',
  transformOrigin: 'center',
};
const isRotate = {
  transform: 'rotate(180deg)',
  transformOrigin: 'center',
};
const DropdownRadioButton: React.FC<selfProps> = (props) => {
  // 子传父
  const {getStatus} = props;
  var [options, setIndex] = useState<Array<object>>([
    {
      title: 'Yearly',
      isCheck: false,
      index: 1,
    },
    {
      title: 'Monthly',
      isCheck: false,
      index: 2,
    },
    {
      title: 'Weekly',
      isCheck: false,
      index: 3,
    },
    {
      title: 'Daily',
      isCheck: false,
      index: 4,
    },
    {
      title: 'Hourly',
      isCheck: false,
      index: 5,
    },
  ]);
  var [countIndex, setCount] = useState(-1);
  var [text, setText] = useState('Weekly');
  //
  //点击高亮
  const targetClick = useCallback((item: any, index: number) => {
    return (event: MouseEvent<HTMLInputElement>) => {
      if (countIndex == index) {
        return;
      }
      setCount((countIndex = index));
      setText((text = item.title));
      getStatus(item);
    };
  }, []);
  const [selectedValue, setSelectedValue] = useState('');
 
  const handleChange = (event:any,item:any,index:number) => {
    setSelectedValue(event.target.value);
    setText((text = item.title));
      getStatus(item);
  };
  //点击高亮
  var [isModel, setFlag] = useState(false);
  const buttonClick = useCallback(() => {
    setFlag((isModel = !isModel));
  }, []);
  const click = useCallback(() => {
    setFlag((isModel = false));
  }, []);
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside(divRef, click);

  return (
    <div className="relative" ref={divRef}>
      <button
        id="dropdownRadioBgHoverButton"
        data-dropdown-toggle="dropdownRadioBgHover"
        className="w-[18.125rem] h-[4.5rem] pl-5 pr-4 flex cursor-pointer items-center justify-between 
      rounded-xl border-solid border-[#A3A3A3] border-[0.0625rem]
        focus:ring-4 focus:outline-none focus:ring-[transparent]
       font-medium text-[2rem] px-5 py-2.5 text-center 
         bg-[transparent] hover:bg-[#1F2A37] hover:border-[#2AECDA] outline-none"
        type="button"
        onClick={buttonClick}
      >
        <div>
          <span className="text-right text-[2rem] font-normal font-Inter text-[#9CA3AF]">
            View:
          </span>
          <span className="text-right text-[2rem] font-bold font-Inter text-white">
            {text}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 32 32"
          fill="none"
          style={isModel ? isRotate : rotate}
        >
          <path
            d="M16 22.0001L6 12.0001L7.4 10.6001L16 19.2001L24.6 10.6001L26 12.0001L16 22.0001Z"
            fill="#F3F4F6"
          />
        </svg>
      </button>
      <div
        id="dropdownRadioBgHover"
        className="z-10 w-[18.125rem]
         absolute top-[4.5rem] bg-[#1F2A37] divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600"
        style={isModel ? show : hidden}
      >
        <ul
          className="p-3 space-y-1 text-gray-700 rounded-lg dark:text-[#1F2A37]"
          style={{padding: 0, border: '1px solid #4B5563', marginBottom: '0'}}
          aria-labelledby="dropdownRadioBgHoverButton"
        >
          {options.map((item: any, index: number) => {
            return (
              <li key={index}>
                <div
                  className="bg-[#1F2A37] box-border flex items-center pl-5 pr-4 
                    rounded
             hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                 <input
                    id={item.title}
                    type="radio"
                    value={item.title}
                    checked={selectedValue==item.title}
                    name={item.title}
                    onChange={(e)=>handleChange(e,item,index)}
                    className="w-[2rem] h-[2rem] m-0 text-[#2AECDA]"
                  />
                  <label
                    htmlFor={item.title}
                    className="w-full ms-2 ml-1 text-[1.75rem] py-5
                    tex-[#F3F4F6] font-medium rounded dark:text-gray-300"
                  >
                    {item.title}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DropdownRadioButton;
