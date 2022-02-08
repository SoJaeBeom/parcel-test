// // 뒤에 rc(Runtime Configuration의 약어)가 붙은 파일은 구성 파일을 의미합니다.
// // ESM <- js(브라우저 환경에서)
// // CommonJS <- node js

// // postcssrc.js -> bundler를 통해서 변환하는 용도로 사용하는 것이기 때문에 브라우저에서 동작되는 것이 아니라 nodejs환경에서 동작되는 것이다. 따라서 commonjs를 통해...

// //import <- js
// // import autoprefixer from "autoprefixer"
// const autoprefixer = require("autoprefixer"); // node js

// //export <- js
// /**
//  * export {
//  *  plugins: [
//  *      autoprefixer 
//  *   ]
//  * }
//  */
// module.exports = { // node js
//   plugins: [
//     autoprefixer
//   ]
// }



module.exports = {
  plugins: [
    require("autoprefixer")
  ]
}