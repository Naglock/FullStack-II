import React, { useRef, useEffect } from 'react';
function MemeCanvas({ image, topText, bottomText}) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = image || '';
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.font = '40px Impact';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.textAlign = 'center';
            if (topText) ctx.fillText(topText, canvas.width/2, 50);
            if (topText) ctx.strokeText(topText, canvas.width/2, 50);
            if (bottomText) ctx.fillText(bottomText, canvas.width/2, canvas.height-20);
            if (bottomText) ctx.strokeText(bottomText, canvas.width/2, canvas.height-20);
            
        };
    }, [image, topText, bottomText]);
    return <canvas ref={canvasRef} width={500} height={500}></canvas>;
}
export default MemeCanvas;