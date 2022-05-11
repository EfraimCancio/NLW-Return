import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl ,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Idéia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    const [feedbackSent, setFeedbacksent] = useState(false);

    function handleRestartFeedback() {
        setFeedbacksent(false);
        setFeedbackType(null);
    }

    return (
        <div className="
         bg-brand-500 
          p-4 
          relative
          rounded-2xl
          mb-4
          flex
          flex-col
          items-center
          shadow-lg
          w-[calc(100vw-2rem)]
          md:w-auto">
        
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequest={handleRestartFeedback}  
                            onFeedbackSent={() => setFeedbacksent(true)}  
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-brand-100">
                Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/EfraimCancio">Efras</a>
            </footer>  
        </div>
    );
}