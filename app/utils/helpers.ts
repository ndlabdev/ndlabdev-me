export function splitText(text: string, highlights?: string[]) {
    if (!highlights) return [text]
    let result: string[] = [text]
    for (const word of highlights) {
        result = result.flatMap(part =>
            part.includes(word)
                ? part.split(word).flatMap((p, i, arr) =>
                    i < arr.length - 1 ? [p, word] : [p]
                )
                : [part]
        )
    }
    return result.filter(Boolean)
}

export function createLabelFromKey(key: string): string {
    return key
        .replace(/_/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/^./, char => char.toUpperCase())
}
