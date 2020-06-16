import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import 'lazysizes/plugins/attrchange/ls.attrchange';

lazySizes.cfg.blurupMode = 'auto';

export type ImgProps = {
  lowSrc: string;
  srcSet: string;
  ratio: number;
  alt: string;
};

/**
 *
 * @param lowSrc src
 * @param srcSet List of `${src} ${imageWidth}w separated by comma`
 * @param ratio image ratio
 * @param alt
 */
export const Img: React.FC<ImgProps> = ({ srcSet, lowSrc, ratio, alt }) => {
  return (
    <>
      <div className="mediabox">
        <img
          className="mediabox-img lazyload grow"
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

          .grow {
            transition: all 0.2s ease-in-out;
          }
          .grow:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
};
