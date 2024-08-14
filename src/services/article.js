import  {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// const options = {
// 	method: 'GET',
// 	hostname: 'article-extractor-and-summarizer.p.rapidapi.com',
// 	port: null,
// 	path: '/extract?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F',
// 	headers: {
// 		'x-rapidapi-key': '',
// 		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
// 	}
// };

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key',rapidApiKey)
                headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')

                return headers
            }
        
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=> `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })

})

export const {useLazyGetSummaryQuery} = articleApi