import { get, post, put, getTwitterApi } from "./axios"
import { BACKEND_API_URL } from '../config'

// for test
export const registerAccount = async (acc) => 
    post(BACKEND_API_URL + '/register/register-test-account', acc)

export const getUserBindInfo = async (twitterId) => 
    get(BACKEND_API_URL + '/users/bytwitterid', {twitterId})

export const getRegisterOp = async (params) =>
    get(BACKEND_API_URL + '/register/registerOp', params)

export const getUserInfo = async (username, ethAddress) => 
    get(BACKEND_API_URL + '/users/byusername', {username, ethAddress})

export const getRegisterTicket = async (publicKey) => 
    get(BACKEND_API_URL + '/register/getRegisterTicket', {publicKey})

// export const getUsersPosts = async (username, pageSize, pageIndex) =>
//     get(BACKEND_API_URL + '/twitter/getUsersPosts', {username, pageSize, pageIndex})

export const getUsersPosts = async (username, pageSize, time, newPost) => 
    get(BACKEND_API_URL + '/twitter/getUsersPostsByTime', {username, pageSize, time, newPost})

export const getTwitterAccount = async (username) =>
    getTwitterApi('https://api.twitter.com/twitter/2/users/by/username/' + username + '?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld')