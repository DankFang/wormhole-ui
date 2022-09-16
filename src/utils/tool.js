import {ethers} from "ethers";
import {notify} from "@/utils/notify";

export function onCopy(msg) {
  navigator.clipboard.writeText(msg).then(() => {
    notify({
      message: 'Copied!',
      duration: 5000,
      type: 'success'
    })
  }, (e) => {
    console.log(e)
  })
}
export function copyAddress(address) {
  if (ethers.utils.isAddress(address)) {
    navigator.clipboard.writeText(address).then(() => {
      notify({
        message: 'Copied address:'+address,
        duration: 5000,
        type: 'success'
      })
    }, (e) => {
      console.log(e)
    })
  }
}

export function formatEmojiText(str) {
  const regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
  // str = str.replace(regStr, (char) => {
  //   return `<span class="c-emoji">${char}</span>`;
  // });
  str = str.replace(regStr, (char) => {
    let code = char.codePointAt(char).toString(16)
    if(code.length<4) code = code + '-20e3'
    return `<img class="w-18px h-18px mx-0.1rem inline-block" src="/emoji/svg/${code}.svg" alt="${char}"/>`
  });
  return str
}
