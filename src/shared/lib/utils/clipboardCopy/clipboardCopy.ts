export const clipboardCopy = (value: string) => {
    window.navigator.clipboard.writeText(value);
};
