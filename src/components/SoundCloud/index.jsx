/* import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import createWidget from '../../utils/createWidget';

const SoundCloud = ({ url, id, height, opts, onPlay, onPause, onEnd }) => {
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    createWidget(id, (widget) => {
      widgetRef.current = widget;
      setupWidget(widget);
      reloadWidget();
    });

    return () => {
      unbindEvents();
    };
  }, []);

  useEffect(() => {
    reloadWidget();
  }, [url]);

  const setupWidget = (widget) => {
    bindEvents(widget);
  };

  const reloadWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.load(url, opts);
    }
  };

  const bindEvents = (widget) => {
    widget.bind(window.SC.Widget.Events.PLAY, onPlay);
    widget.bind(window.SC.Widget.Events.PAUSE, onPause);
    widget.bind(window.SC.Widget.Events.FINISH, onEnd);
  };

  const unbindEvents = () => {
    if (widgetRef.current) {
      widgetRef.current.unbind(window.SC.Widget.Events.PLAY);
      widgetRef.current.unbind(window.SC.Widget.Events.PAUSE);
      widgetRef.current.unbind(window.SC.Widget.Events.FINISH);
    }
  };

  return (
    <iframe
      ref={iframeRef}
      id={id}
      width="100%"
      height={height || (opts.visual ? '450' : '166')}
      scrolling="no"
      frameBorder="no"
       src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}`} 
    />
  );
};

SoundCloud.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opts: PropTypes.objectOf(PropTypes.bool),
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
};

SoundCloud.defaultProps = {
  id: 'react-sc-widget',
  opts: {},
  onPlay: () => {},
  onPause: () => {},
  onEnd: () => {},
};

export default SoundCloud;
 */