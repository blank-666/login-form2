import React from 'react';
import { VideoContainer } from '../styledComponents';

function Page() {
    return (
        <VideoContainer>
            <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0" ></iframe>
        </VideoContainer>
    );
}

export default Page;