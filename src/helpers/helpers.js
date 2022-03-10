export default function likedPosts() {
  const posts = [];
  const keys = Object.keys(localStorage);
  
  let i = keys.length;
  console.log('keys are = ', keys)
  console.log('the item in local storage is:', JSON.parse(localStorage.getItem(keys[i-1])))
  while(i--){
    posts.push(JSON.parse(localStorage.getItem(keys[i])))
  }
  return posts;
}