let post=document.getElementById('post')
let height=6500
let cnt=1

//posts/1 will show first 10,posts/2 will show extra 10. so if the scrollY reaches full ,but after tht need to call next api posts/2 so on 
function loadpost(){
    $.get(`https://edyoda-instagram-data-sourav-4erf.vercel.app/posts/${cnt}`,function(response){
        console.log(response)

        for(let i=0;i<response.length;i++){
            let tagstring=""
            for(let k=0;k<response[i].tags.length;k++){  //tags from json is array formast. so to get data from array use forloop
              tagstring+='#'+response[i].tags[k] + ' '
            }
            post.innerHTML+=`
            <div class="postbody">
                <div class="postheader">
            <div class="profilepic">
                 <img src=${response[i].user.photo} >
            </div>
                <div class="username">
                <span>${response[i].user.name}</span>
                </div>
                </div>
                <div class="postimage">
                <img src=${response[i].postPic} >
                </div>
                <div class="reactions">
                <div> 
                <i class="far fa-heart"></i>
                <i class="fa fa-comments-o"></i>
                <i class="fa-solid fa-share"></i>
               
                <i class="fa-regular fa-bookmark left"></i>
                </div>
                <div class="likes"><p>${response[i].reactions}  likes</p></div>
                
                </div>
                <div class="content">
                     <span class="name">${response[i].user.name}</span>
                     <span class="body"> ${response[i].body}</span>
                </div>
                <div class="tags">
                  ${tagstring}
                </div>
                <div class="comments">
                <input type="text" placeholder="Add A comment..."/>
                </div>
            </div>
            `
        }
    })
    //if cnt = 100 means 100 posts so gainc come back to origibal first 1 otherwise cnt +1 next api
    cnt=cnt==10?1:cnt+1
}
loadpost()

// infinity posts /scrolling

window.addEventListener('scroll',function(){
    console.log(window.innerHeight)
    console.log(window.scrollY) //if the scroll reaches 6012 it completes all  10 posts.,u can view this from network (right click)
    if(window.innerHeight+window.scrollY >=height){
        // height+=6500
loadpost()
    }
})