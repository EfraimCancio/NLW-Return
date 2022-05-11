import { FeedbackType, feedbackTypes } from "..";
import * as Icon from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep ( {
    feedbackType,
    onFeedbackRestartRequest,
    onFeedbackSent
} : FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);

    const [comment, setComment] = useState('');
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        console.log({
            screenshot,
            comment
        })

        onFeedbackSent();

    }

    return (
        <>
            <header>
                <button 
                    type="button"
                    className=" 
                     top-5 
                     left-5 
                     absolute 
                     text-brand-100
                     hover:text-white"
                    onClick={onFeedbackRestartRequest} 
                >
                    < Icon.ArrowArcLeft className=" w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form 
                className="my-4 w-full"
                onSubmit={handleSubmitFeedback}>
               
                <textarea
                    placeholder="Conte para o ET o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                    className="
                     min-w-[384px] 
                     w-full min-h-[112px]
                     text-sm 
                     border-brand-400
                     bg-transparent
                     rounded-md
                     focus:border-brand-100
                     focus:ring-brand-400
                     focus:ring-1
                     focus:outline-none
                     resize-none
                     scrollbar
                     scrollbar-thumb-brand-100
                     scrollbar-track-transparent
                     scrollbar-thin "  
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot ={screenshot}
                        onScreenshotTook = {setScreenshot}
                    />

                    <button 
                        type="submit"
                        disabled={comment.length === 0}
                        className="
                         p-2
                         bg-brand-400
                         rounded-md
                         border-transparent
                         flex-1
                         flex
                         justify-center
                         items-center
                         text-sm
                         hover:bg-green-200
                         hover:text-brand-500
                         focus:outline-none
                         focus:ring-2
                         focus:ring-offset-2
                         focus:ring-offset-brand-500
                         transition-colors
                         disabled:opacity-50
                         disabled:hover:bg-brand-400
                         disabled:hover:text-brand-100
                          "
                    > Enviar mensagen!
                    </button>
                </footer>
            </form>
        </>
    )
}