const detectType = (arr: string[]): 'numbers' | 'letters'| 'words' => {
    if(arr.every(item => !isNaN(Number(item)))) return 'numbers'
    if(arr.every(item => /^[a-zA-Z]$/.test(item))) return 'letters'
    return 'words'
}

export default detectType;