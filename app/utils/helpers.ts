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
