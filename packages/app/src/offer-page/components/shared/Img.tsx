import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import React from 'react';

lazySizes.cfg.blurupMode = 'auto';

export type ImgProps = {
  lowSrc: string;
  srcSet: string;
  ratio: number;
  alt: string;
};

export const Img: React.FC<ImgProps> = ({
  srcSet,
  lowSrc,
  ratio,
  alt
}) => {
  return (
    <>
      <div className={'mediabox'}>
        <img
          className="mediabox-img lazyload"
          data-srcset={srcSet}
          data-lowsrc={lowSrc}
          data-sizes="auto"
          alt={alt}
        />
      </div>
      <style jsx global>
        {`
          .mediabox {
            padding-bottom: calc(${ratio} * 100%);
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};
