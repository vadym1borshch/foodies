import React from 'react'

interface IBackgroundProps {
  // define your props here
}

const Background: React.FC<IBackgroundProps> = ({}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="w-full h-full bg-gradient-to-b from-orange-800 to-black relative ">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="#1e293b"
            d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Background
