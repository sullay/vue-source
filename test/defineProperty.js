let test={}
let x=""
Object.defineProperty(test,'v1',{
  get:()=>{
    console.log('get')
    return x
  },
  set:(val)=>{
    console.log('set',val)
    x=val
  },
  // value:111,
  //是否可以修改(不能与get，set同时使用)
  // writable:true,
  //是否可以循环
  enumerable:true,
  //是否可以删除
  configurable:true
})
test.v1=222
// delete test.v1
console.log(test.v1)