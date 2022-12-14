const sentence = 'This is a short sentence'
sentence.includes('is')

interface PostGateKeeper {
    title: string,
    daysOld: number,
    published: boolean
}

const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true,
}

const printPost = (postToPrint: PostGateKeeper) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old) `
}

printPost(post)

