import React, { useEffect, useRef } from 'react';
import track from '../../assets/audio/track_1.mp3';

type Props = {
    audio: {
        name: string;
        value: boolean;
        setValue: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default function Music({ audio }: Props) {
    const audioElement = useRef(new Audio());

    useEffect(() => {
        if (audio.value) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [audio.value]);

    const handlerIsPlaying = () => {
        audio.setValue(!audio.value);
    };

    document.body.addEventListener('mousedown', () => {
        if (audio.value) {
            audioElement.current.play();
        } else audioElement.current.pause();
    });

    return (
        <div className="audio">
            <audio src={track} ref={audioElement}>
                <track kind="captions" />
            </audio>

            <button
                className={`button button_audio ${audio.value ? 'button_audio_active' : ''}`}
                type="button"
                aria-label="audio"
                onClick={handlerIsPlaying}
            />
        </div>
    );
}
