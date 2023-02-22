import { get, post, put, getTwitterApi } from "./axios"
import { BACKEND_API_URL } from '../config'
import curation from "@/store/curation"
import { sleep } from "@/utils/helper"
import store from '@/store'

export const postErr = async (module, title, error) =>
    post(BACKEND_API_URL + '/sys/err', {module, title, error})
export const getCommon = async () => 
    get("https://api-walnut.nutbox.app/common")

export const getPrice = async () =>
    get("https://api-walnut.nutbox.app/token/getPrices")

/****************************************  auth  ***********************************************/
export const twitterAuth = async(needLogin) => 
    get(BACKEND_API_URL + '/auth/login', {needLogin})

export const twitterLogin = async(state) =>
    get(BACKEND_API_URL + '/users/login', {state})

export const twitterRefreshAccessToken = async (twitterId) => 
    post(BACKEND_API_URL + '/auth/refresh', {twitterId})

export const logout = async (twitterId) => 
    get(BACKEND_API_URL + '/auth/logout', {twitterId})

export const register = async (params) => 
    post(BACKEND_API_URL + '/register', params)

export const check = async (params) =>
    post(BACKEND_API_URL + '/register/check', params)
    
/****************************************  user  ***********************************************/
export const getUserInfo = async (username, ethAddress) =>
    get(BACKEND_API_URL + '/users/byusername', {username, ethAddress})

export const readNft = async (twitterId) =>
    post(BACKEND_API_URL + '/users/readNft', {twitterId})

export const getNftReceivedState = async (twitterId) =>
    get(BACKEND_API_URL + '/users/nftReceiveState', {twitterId})

export const getUsersTransaction = async (twitterId, pageSize, time, newTrans) =>
    get(BACKEND_API_URL + '/transaction/byTwitterId', { twitterId, pageSize, time, newTrans })

export const cacheKey = async (params) =>
    post(BACKEND_API_URL + '/register/cachePwd', params)

export const getProfile = async (twitterId) =>
    post(BACKEND_API_URL + '/users/profile', {twitterId})

export const getUserByEth = async (ethAddress) =>
    get(BACKEND_API_URL + '/users/getUserByEth', {ethAddress})

export const getUserByIds = async (twitterIds) => 
    get(BACKEND_API_URL + '/users/byTwitterIds', {twitterIds})

export const searchUsers = async (text) => 
    get(BACKEND_API_URL + '/users/searchUsers', {text})

/****************************************  posts  ***********************************************/
export const getUsersPosts = async (twitterId, targetTwitterId, lastTime) => 
    get(BACKEND_API_URL + '/post/getUserPostByTime', {twitterId, targetTwitterId, lastTime})

export const getPostById = async (twitterId, postId) => 
    get(BACKEND_API_URL + '/post/getPostById', {postId, twitterId})

export const getCommentsByPostid = async (postId, lastCommentTime) =>
    get(BACKEND_API_URL + '/post/getCommentsByPostid', {postId, lastCommentTime})

export const getTrendingTags = async () => 
    get(BACKEND_API_URL + '/post/getTrendingTags')

export const getPostByTrending = async (tag, pageIndex, pageSize, twitterId) =>
    get(BACKEND_API_URL + '/post/getPostByTrending', {tag, pageIndex, pageSize, twitterId})

export const getPostByTime = async (tag, pageIndex, pageSize, twitterId) =>
    get(BACKEND_API_URL + '/post/getPostByTime', {tag, pageIndex, pageSize, twitterId})

export const quotePost = async (twitterId, tweetId, content) =>
    post(BACKEND_API_URL + '/post/quotePost', {twitterId, tweetId, content})

export const replyPost = async (twitterId, tweetId, content, parentTwitterId) =>
    post(BACKEND_API_URL + '/post/replyPost', {twitterId, tweetId, content, parentTwitterId})

export const likePost = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/likePost', {twitterId, tweetId})

export const retweetPost = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/retweetPost', {twitterId, tweetId})

export const userFollow = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/post/followPost', {twitterId, tweetId})


/****************************************  curation  ***********************************************/
export const preNewCuration = async (curation) =>
    post(BACKEND_API_URL + '/curation/preCreate', curation)
    
export const newCuration = async (curation) =>
    post(BACKEND_API_URL + '/curation/newCuration', curation)

export const newCurationWithTweet = async (curation) => 
    post(BACKEND_API_URL + '/curation/newCurationWithTweet', curation)

export const likeCuration = async (twitterId, tweetId, curationId) =>
    post(BACKEND_API_URL + '/curation/likeCuration', {twitterId, tweetId, curationId})

export const followCuration = async (twitterId, authorId, curationId) =>
    post(BACKEND_API_URL + '/curation/followCuration', {twitterId, authorId, curationId})

export const quoteCuration = async (twitterId, userInfo, content, curationId) =>
    post(BACKEND_API_URL + '/curation/quoteCuration', {twitterId, userInfo, content, curationId})

export const replyCuration = async (twitterId, userInfo, content, curationId) =>
    post(BACKEND_API_URL + '/curation/replyCuration', {twitterId, userInfo, content, curationId})

export const retweetCuration = async (twitterId, curationId) => 
    post(BACKEND_API_URL + '/curation/retweetCuration', {twitterId, curationId})

export const getCurations = async (status, endtime, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurations', {status, endtime, twitterId})

export const getCurationsByTrend = async (status, score, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurationsByTrend', { status, score, twitterId })

export const getTrendingCurationsNew = async (tag, pageIndex, twitterId) =>
    get(BACKEND_API_URL + '/curation/getTrendingCurationsNew', { tag, pageIndex, twitterId })

export const getRecommendedCurations = async () =>
    get(BACKEND_API_URL + '/curation/getRecommendedCurations')

export const getCurationById = async (curationId, twitterId) =>
    get(BACKEND_API_URL + '/curation/getCurationById', {curationId, twitterId})

export const getMyJoinedCurations = async (twitterId, endtime) =>
    post(BACKEND_API_URL + '/curation/getMyJoinedCurations', {twitterId, endtime})

export const getMyCreatedCurations = async (twitterId, endtime) => 
    post(BACKEND_API_URL + '/curation/getMyCreatedCurations', {twitterId, endtime})

export const getUserCreatedCurations = async (twitterId, endtime) =>
    get(BACKEND_API_URL + '/curation/getUserCreatedCurations', {twitterId, endtime})

export const getCurationsOfTweet = async (tweetId) =>
    get(BACKEND_API_URL + '/curation/getCurationsOfTweet', {tweetId})

export const getCurationRecord = async (curationId, createAt, isFeed) =>
    get(BACKEND_API_URL + '/curation/getCurationRecord', { curationId, createAt, isFeed })

export const getCurationCreateRelation = async (tweetId) => 
    get(BACKEND_API_URL + '/curation/getCurationCreateRelation', {tweetId})

export const getMyParticipantionInCuration = async (twitterId, curationId) =>
    post(BACKEND_API_URL + '/curation/getMyParticipantionInCuration', {twitterId, curationId})

export const checkMyCurationRecord = async (twitterId, curationId) =>
    post(BACKEND_API_URL + '/curation/checkMyParticipantion', {twitterId, curationId})

export const replyToCurationByWH3 = async (twitterId, twitterUsername, curationId, tweetId, amount, symbol, chainName) =>
    post(BACKEND_API_URL + '/curation/replyByWh3', {twitterId, twitterUsername, curationId, tweetId, amount, symbol, chainName})

export const curation_test = async (twitterId) =>
    post(BACKEND_API_URL + '/curation/test', {twitterId})

/****************************************  topics  ***********************************************/
export const getPopularTopics = async () =>
    get(BACKEND_API_URL + '/curation/getPopularTopics')

export const getNewCurationsByTag = async (twitterId, status, endtime, tag) =>
    get(BACKEND_API_URL + '/curation/getNewCurationsByTag', {twitterId, status, endtime, tag})

export const getTrendingCurationsByTag = async (twitterId, status, score, tag) =>
    get(BACKEND_API_URL + '/curation/getTrendingCurationsByTag', {twitterId, status, score, tag})


/****************************************  popup  ***********************************************/
export const popupsOfCuration = async (twitterId, curationId) =>
    get(BACKEND_API_URL + '/popup/popupsOfCuration', {twitterId, curationId})

export const popupRecords = async (tweetId, rowIndex) =>
    get(BACKEND_API_URL + '/popup/popupRecords', {tweetId, rowIndex})

export const newPopup = async (popup) =>
    post(BACKEND_API_URL + '/popup/newPopup', popup)

export const checkMyPopupRecord = async (twitterId, popupId) =>
    post(BACKEND_API_URL + '/popup/checkMyParticipantion', {twitterId, popupId})

/****************************************  space  ***********************************************/
export const getSpaceInfoById = async (spaceId) =>
    get(BACKEND_API_URL + '/space/bySpaceId', {spaceId})

/****************************************  tip  ***********************************************/
export const tipEVM = async (tip) =>
    post(BACKEND_API_URL + '/tip/tip', tip)

export const getAllTipsOfCuration = async (curationId) => 
    get(BACKEND_API_URL + '/tip/tipsByCurationId', {curationId})

export const getAllTipsByTweetId = async (tweetId) =>
    get(BACKEND_API_URL + '/tip/tipsByTweetId', {tweetId})

export const getTopTipsOfCuration = async (curationId) => 
    get(BACKEND_API_URL + '/tip/topTipsByCurationId', {curationId})

export const getTopTipsOfTweetId = async (tweetId) =>
    get(BACKEND_API_URL + '/tip/topTipsByTweetId', {tweetId})

export const getUsersTips = async (params) =>
    post(BACKEND_API_URL + '/tip/tipsByTwitterId', params)

/****************************************  rewards  ***********************************************/
export const getCurationRewardList = async (twitterId, chainId, createAt) => 
    post(BACKEND_API_URL + '/users/curationRewardList', {twitterId, chainId, createAt})

export const autoCurationRewardList = async (twitterId, createdAt) =>
    post(BACKEND_API_URL + '/users/autoCurationRewardList', {twitterId, createdAt})

export const getClaimParas = async (twitterId, chainId, ids) =>
    post(BACKEND_API_URL + '/curation/getClaimParas', {twitterId, chainId, ids})

export const getPromotionCurationClaimParas = async (twitterId, chainId, createdAt) =>
    post(BACKEND_API_URL + '/curation/getPromotionCurationClaimParas', {twitterId, chainId, createdAt})

export const setCurationIsFeed = async (twitterId, curationIds) =>
    post(BACKEND_API_URL + '/curation/setCurationIsFeed', {twitterId, curationIds})

export const setAutoCurationIsDistributed = async (twitterId, curationIds) =>
    post(BACKEND_API_URL + '/curation/setAutoCurationIsDistributed', {twitterId, curationIds})

/****************************************  map  ***********************************************/
export const bMapToGMapLocations = async (locations) => {
    return get('https://restapi.amap.com/v3/assistant/coordinate/convert', {
        key: 'c69f301c227fe2c5c9c1442ce51f905a',
        locations: locations,
        coordsys: 'baidu'
    })
}

/****************************************  twitter api  ***********************************************/
export const getTweetsById = async (twitterId, tweetIds) => 
    post(BACKEND_API_URL + '/twitter-api/getTweetsById', {twitterId, tweetIds})

export const getTweetById = async (twitterId, tweetId) =>
    post(BACKEND_API_URL + '/twitter-api/getTweetById', {twitterId, tweetId})

export const getSapceBySpaceId = async (twitterId, spaceId) =>
    post(BACKEND_API_URL + '/twitter-api/getSpaceInfo', {twitterId, spaceId})

export const userFollowing = async (twitterId, authorId) => 
    post(BACKEND_API_URL + '/twitter-api/userFollowing', {twitterId, authorId})
    
export const userLike = async (twitterId, tweetId) => 
    post(BACKEND_API_URL + '/twitter-api/userLike', {twitterId, tweetId})

export const userTweet = async (twitterId, text) =>
    post(BACKEND_API_URL + '/twitter-api/tweet', {twitterId, text})

export const userReply = async (twitterId, tweetId, text) =>
    post(BACKEND_API_URL + '/twitter-api/reply', {twitterId, tweetId, text})

// userId can be twitter_id or username
export const getUserInfoFromTwitter = async (twitterId, userId) => 
    post(BACKEND_API_URL + '/twitter-api/getUserInfo', {twitterId, userId})

/****************************************  faucet  ***********************************************/
export const getFaucet = async (address) =>
    get(BACKEND_API_URL + '/faucet/usdt', {address})

export const applyAirdrop = async (twitterId) =>
    post(BACKEND_API_URL + '/faucet/apply', {twitterId})

export const getDropRecord = async (twitterId) => 
    get(BACKEND_API_URL + '/faucet/record', {twitterId})

/****************************************  NFT  ***********************************************/
export const getLiquidationMetaBy = async (url) => 
    get(url)

/****************************************  New year card  ***********************************************/
export const newBlindCards = async (params) =>
    post(BACKEND_API_URL + '/newYear/newBlindCards', params)

export const getBlindCardsByIds = async (ids) =>
    get(BACKEND_API_URL + '/newYear/getBlindCardsByIds', {ids})

export const getBanner = async () =>
    get(BACKEND_API_URL + '/newYear/getBanner')