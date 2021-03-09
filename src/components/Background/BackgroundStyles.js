import { keyframes } from 'styled-components';

export const breatheAnim= keyframes`
    0% { height: 100px; width: 100px; }
    30% { height: 400px; width: 400px; opacity: 1 }
    40% { height: 405px; width: 405px; opacity: 0.3; }
    100% { height: 100px; width: 100px; opacity: 0.6; }
`
export const verticalMoveAndRotationAnim = keyframes`
    0%   {top: 0px;transform: rotate(0deg);}
    25%  {top: 200px;transform: rotate(90deg);}
    50%  {top: 100px;transform: rotate(180deg);}
    75%  {top: 200px;transform: rotate(270deg);}
    100% {top: 0px; transform: rotate(360deg);}
`
export const verticalMoveAnim = keyframes`
    0%   {top: 0px;}
    25%  {top: 200px;}
    50%  {top: 100px;}
    75%  {top: 200px;}
    100% {top: 0px;}
`
export const rotationAnim = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(359deg);}
`
export const horizontalMoveAnim = keyframes`
    0%   {left: 0px;}
    25%  {left: 200px;}
    50%  {left: 0px;}
    75%  {left: -200px;}
    100% {left: 0px;}
`
export const horizontalMoveAndRotationAnim = keyframes`
    0%   {left: 0px;transform: rotate(0deg);}
    25%  {left: 100px;transform: rotate(90deg);}
    50%  {left: 200px;transform: rotate(180deg);}
    75%  {left: 100px;transform: rotate(270deg);}
    100% {left: 0px; transform: rotate(360deg);}
`
