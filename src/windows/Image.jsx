import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import useWindowStore from '#store/window';

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if(!data) return null;

    const { name, imageUrl} = data;

    return (
        <>
        <div id = "window-header">
            <WindowControls target = "imgfile"/>
            <h2>{name}</h2>
        </div>

        <div className='p-5 bg-white'>
            {imageUrl ? (
            <div className='w-full'>
                <img src={imageUrl} alt={name} className = "w-full h-auto rounded max - h - [70h] object-contain rounded" />
            </div> ):null}
        </div>
        </>
    )
}

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;