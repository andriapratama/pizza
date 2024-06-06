import React from 'react';

interface Props {
  text: string;
  className?: string;
  isActive: boolean;
}

const CurveText: React.FC<Props> = ({ text, className, isActive }) => {
  return (
    <svg className={`hidden lg:block ${className ? className : ''}`}>
      <path
        id="curve"
        fill="transparent"
        d="M 0 120 C 0 120, 130 40, 260 120"
      ></path>
      <text
        fill={isActive ? '#ffffff' : '#9ca3af'}
        className="text-3xl font-instrument shadow-xl shadow-white"
        textAnchor="middle"
      >
        <textPath startOffset="50%" href="#curve">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurveText;
