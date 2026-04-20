/**
 * OMNIVIS Design System - Componente Base de Ícone
 * Grade 24x24px, stroke 2px, consistência geométrica
 */

import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function createIcon(
  displayName: string,
  pathData: string,
  viewBox: string = '0 0 24 24'
) {
  const IconComponent = ({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = '',
    ...props
  }: IconProps) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d={pathData} />
      </svg>
    );
  };

  IconComponent.displayName = displayName;
  return IconComponent;
}
