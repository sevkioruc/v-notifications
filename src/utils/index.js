export default {
  insertBody(elx, parent){
    let bodyx = document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  }
}