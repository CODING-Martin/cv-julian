import type { CSSProperties } from 'react';

import './FoldText.css';

export interface FoldTextProps {
  text?: string;
  splitBy?: 'char' | 'word' | 'line';
  hinge?: 'top' | 'bottom' | 'left' | 'right';
  foldStyle?: 'paper' | 'blinds' | 'flip';
  duration?: number;
  stagger?: number;
  foldAngle?: number;
  perspective?: number;
  creaseShading?: number;
  trigger?: 'mount' | 'hover' | 'scroll' | 'loop';
  fontSize?: string | number;
  fontWeight?: string | number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

type FoldTextStyle = CSSProperties & {
  '--fold-text-font-size': string;
  '--fold-text-font-weight': string | number;
  '--fold-text-color': string;
  '--fold-perspective': string;
  '--fold-duration': string;
  '--fold-angle': string;
  '--fold-crease': number;
};

export default function FoldText({
  text = 'Design unfolds',
  duration = 0.65,
  stagger = 0.045,
  foldAngle = 92,
  perspective = 700,
  creaseShading = 0.55,
  fontSize = 'inherit',
  fontWeight = 'inherit',
  color = 'currentColor',
  className = '',
  style = {}
}: FoldTextProps) {
  let characterIndex = 0;
  const rootStyle: FoldTextStyle = {
    '--fold-text-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    '--fold-text-font-weight': fontWeight,
    '--fold-text-color': color,
    '--fold-perspective': `${Math.max(120, perspective)}px`,
    '--fold-duration': `${Math.max(0, duration)}s`,
    '--fold-angle': `${-Math.min(180, Math.max(0, foldAngle))}deg`,
    '--fold-crease': Math.min(1, Math.max(0, creaseShading)),
    ...style
  };

  return (
    <span className={`fold-text ${className}`.trim()} style={rootStyle}>
      <span className="fold-text-sr-only">{text}</span>
      <span className="fold-text-visual" aria-hidden="true">
        {text.split(/(\s+)/).map((part, partIndex) => {
          if (/^\s+$/.test(part)) return part;

          return (
            <span className="fold-text-word" key={`${part}-${partIndex}`}>
              {Array.from(part).map((character, index) => {
                const delay = characterIndex++ * Math.max(0, stagger);

                return (
                  <span className="fold-text-segment" key={`${character}-${index}`}>
                    <span
                      className="fold-text-piece"
                      data-fold-text={character}
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {character}
                    </span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}
