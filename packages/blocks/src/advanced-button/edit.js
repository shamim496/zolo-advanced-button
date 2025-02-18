/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
import { classArrayToStr, DisplayZoloIcon, SidebarOpener } from "@zoloblocks/library";

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const { uniqueId, preview, preset, label, parentClasses, iconType, icon, iconPosition, link, iconAnimation } = attributes;

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <div
                    className={classnames(
                        'zolo-block-wrapper',
                        'zolo-advanced-button',
                        uniqueId,
                        `${preset !== '' && preset !== undefined && preset !== null && preset !== 'undefined' ? preset : ''}`,
                        `${iconAnimation !== '' && iconAnimation !== undefined && iconAnimation !== 'undefined' && preset !== 'button-1' && preset !== 'button-3' ? iconAnimation : ''}`
                    )}
                >
                    <a
                        className={classnames(
                            'zolo-button',
                            `${
                                iconAnimation === '' ||
                                iconAnimation === null ||
                                iconAnimation === undefined ||
                                (iconAnimation !== '' && (preset === 'button-1' || preset === 'button-3'))
                                    ? iconPosition
                                    : ''
                            }`
                        )}
                        href={link?.url ? link.url : '#'}
                        {...(link?.openInNewTab && { rel: 'noreferrer noopener' })}
                        {...(link?.openInNewTab && { target: '_blank' })}
                        title={label}
                    >
                        {iconType !== 'iconOnly' && (
                            <RichText
                                tagName="span"
                                className={`zolo-button-content`}
                                value={label}
                                onChange={(text) => setAttributes({ label: text })}
                                placeholder={__('Button Text', 'zoloblocks')}
                                allowedFormats={[]}
                            />
                        )}
                        {iconType !== 'none' && <DisplayZoloIcon icon={icon} />}
                        {preset === 'button-9' && (
                            <>
                                <div className="zolo-star zolo-star-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </>
                        )}
                    </a>
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
