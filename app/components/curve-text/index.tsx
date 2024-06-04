import React from 'react';

interface Props {
  text: string;
  className?: string;
}

const CurveText: React.FC<Props> = ({ text, className }) => {
  return (
    <svg className={className ? className : ''}>
      <path
        id="curve"
        fill="transparent"
        d="M 0 120 C 0 120, 130 40, 260 120"
      ></path>
      <text fill="#ffffff" className="text-2xl" textAnchor="middle">
        <textPath startOffset="50%" href="#curve">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurveText;
