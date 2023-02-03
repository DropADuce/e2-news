type TMods = Record<string, boolean | string>;

export const classNames = (className: string, mods: TMods, additional: Array<string>): string => {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([className]) => className)
    ].join(' ');
}
