import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
//path to image = './../../assets/images/features-split-image-01.png'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  title,
  description,
  caption,
  imageUrl,
  isAllignedRight,
  topOuterDivider,
  bottomOuterDivider,
  sectionHeader,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props[0]}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
            <div className={splitClasses}>
                <div className="split-item">
                    <div className={
                        classNames(
                        'split-item-image center-content-mobile reveal-from-bottom',
                        imageFill && 'split-item-image-fill'
                        )}
                        data-reveal-container=".split-item">
                        <Image
                        src={imageUrl}
                        alt="Features split 01"
                        width={528}
                        height={396} />
                    </div>
                    <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" style = {{marginLeft:"30px"}}>
                        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                        {caption}
                        </div>
                        <h3 className="mt-0 mb-12">
                        {title}
                        </h3>
                        <p className="m-0">
                        {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;