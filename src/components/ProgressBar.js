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
   <div class="progress-circle__container" style={{marginRight: marginRight}}>
        <div class="progress-circle" data-progress={porcentage}>
            <svg>
                <circle cx="50" cy="50" r="45" class="circle-bg"></circle>
                <circle cx="50" cy="50" r="45" class="circle"></circle>
            </svg>
            <div class="progress-text">{porcentage}%</div>
        </div>
        <div class="progress-circle__title">{skill}</div>
   </div>
    
 )

}