export const testFn = (args: number): Array<string> => {
    const results = []
    for (let i = 0; i < args; i++) {
        results.push(`Тест ${i} прошел`)
    }
    return results
}
