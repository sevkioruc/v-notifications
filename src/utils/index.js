export default {
  insertBody(elx, parent){
    let bodyx = parent ? parent : document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  }
}