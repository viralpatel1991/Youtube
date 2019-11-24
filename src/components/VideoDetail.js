import React from 'react';

const selectedVideo = ({ selectedVideo }) =>{
    if(!selectedVideo){
        return <div>loading</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title= "video-player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4> {selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    );
}

export default selectedVideo;