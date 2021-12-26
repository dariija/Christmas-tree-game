import React, { useEffect, useRef } from 'react';
import track from '../../assets/audio/track_1.mp3';

type Props = {
    audio: {
        audioIsPlaying: boolean;
        setAudioIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default function Music({ audio }: Props) {
    const audioElement = useRef(new Audio(track));
    const handlerIsPlaying = () => {
        audio.setAudioIsPlaying(!audio.audioIsPlaying);
    };

    useEffect(() => {
        if (audio.audioIsPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
        console.log('play');
    }, [audio.audioIsPlaying]);

    return (
        <div className="audio">
            <button
                className={`button button_audio ${audio.audioIsPlaying ? 'button_audio_active' : ''}`}
                type="button"
                aria-label="audio"
                onClick={handlerIsPlaying}
            />
        </div>
    );
}
