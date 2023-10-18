const videoCardContainer = document.querySelector('.video-container')

let api_key = "AIzaSyC3gaIKe29BfTTADwbeyXRXKYl5AYsAeSo";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http ="https://www.googleapis.com/youtube/v3/channels?"
fetch(video_http + new URLSearchParams({
key: api_key,
part: 'snippet',
chart: 'mostPopular',
maxResults:50,
regionCode: 'BR'

}))
.then(res => res.json())
.then(data=>{
  data.items.forEach(item => {
    getChannelIcon(item)
  });
})
.catch(err => console.log(err))
getChannelIcon = (video_data)=>{
  fetch(channel_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    id: video_data.snippet.channelId
  }))
  .then(res=> res.json())
  .then(data=> {
   video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
   makeVideoCard(video_data)
    })
}

const makeVideoCard = (data)=>{
 videoCardContainer.innerHTML += `
 <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
          <img src="${data.channelThumbnail}" class="channel-icon" alt="">
          <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
          </div>
        </div>
 
 `
}
//pesquisa

const inputSearch = document.querySelector('.search-bar')
const btnSearch = document.querySelector('.search-btn')
let searchLink = "https://www.youtube.com/results?search_query="

btnSearch.addEventListener('click', ()=>{
  if(inputSearch.value.length){
    location.href = searchLink + inputSearch.value
  }
})
