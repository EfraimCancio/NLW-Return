import html2canvas from "html2canvas";
import  * as Icon  from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton ({ 
                    screenshot, 
                    onScreenshotTook }: ScreenshotButtonProps) {
    
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);

        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return(
            <button 
                type="button" 
                onClick = {() => onScreenshotTook(null)}
                className="
                 p-1
                 w-10
                 h-10
                 rounded-md
                 border-transparent
                 flex
                 justify-end
                 items-end
                 text-brand-500
                 hover:text-brand-100
                 transition-colors"
                style={{
                    backgroundImage:`url(${screenshot})`,
                }}
            >
                <Icon.Trash weight="fill"/>
            </button>
        );
    }

    return (
        <button 
            type="button"
            onClick={handleTakeScreenshot}
            className="
            p-2
            bg-brand-400
            rounded-md
            border-transparent
            hover:bg-green-200
            hover:text-brand-500
            transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-brand-500"
        >            
           { isTakingScreenshot ? <Loading/> : <Icon.Camera className="w-6 h-6" /> } 
        </button>
    )
}