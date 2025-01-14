import { FC, KeyboardEvent, TextareaHTMLAttributes } from 'react';
export interface MdeTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    setValue: (text: string) => void;
    /**
     * Custom textarea component. "textareaComponent" can be any React component which
     * props are a subset of the props of an HTMLTextAreaElement
     */
    textareaComponent?: FC;
    /**
     * On keydown, the TextArea will trigger "onKeyCommand" as an opportunity for React-Mde to
     * execute a command. If a command is executed, React-Mde should return true, otherwise, false.
     */
    onKeyCommand?: (e: KeyboardEvent<HTMLTextAreaElement>) => Promise<boolean>;
}
