import { useEffect } from 'react';
import './ProgressBar.scss';

export const ProgressBar = ({
    skill,
    porcentage,
    marginRight
}) => {

    useEffect(() => {
        const circles = document.querySelectorAll('.progress-circle');
        circles.forEach(circle => {
        const progress = circle.dataset.progress;
        circle.style.setProperty('--progress', progress);
      });
    });

 return (
   <div className="progress-circle__container" style={{marginRight: marginRight}}>
        <div className="progress-circle" data-progress={porcentage}>
            <svg>
                <circle cx="50" cy="50" r="45" className="circle-bg"></circle>
                <circle cx="50" cy="50" r="45" className="circle"></circle>
            </svg>
            <div className="progress-text">{porcentage}%</div>
        </div>
        <div className="progress-circle__title">{skill}</div>
   </div>
    
 )

}