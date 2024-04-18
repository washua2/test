export function setRem() {
  const baseSize = 16;
  let fontSize = 16;
  // // 设置 rem 函数
  function setRem() {
    // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 3840;
    // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
    document.documentElement.style.fontSize =
      baseSize * Math.min(scale, 2) + 'px';
    fontSize = baseSize * Math.min(scale, 4);
  }
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    if (fontSize < 7) {
      return;
    }
    setRem();
  };
  // 1.设计稿尺寸
  // let targetWidth = 3840;
  // let targetHeight = 2160;

  // let targetRatio = 16 / 9; // 宽高比率 （宽 / 高）

  // // 2.拿到当前设备（浏览器）的宽度和高度
  // let currentWidth =
  //   document.documentElement.clientWidth || document.body.clientWidth;

  // let currentHeight =
  //   document.documentElement.clientHeight || document.body.clientHeight;

  // // 3.计算缩放比率(屏幕过宽，根据高度计算缩放比例)
  //     // 若currentWidth是4k屏宽度 3840 除于 我们设计稿的宽度 1920  3840/1920 = 2
  //     // 这样页面就行进行2倍缩放
  // let scaleRatio = currentWidth / targetWidth; // 参照宽度进行缩放（默认情况下）

  // // 当前页面宽高比例，当页面越宽currentRatio值就越大
  // let currentRatio = currentWidth / currentHeight;

  //     // 判断是根据宽度进行缩放，还是根据高度进行缩放
  // if (currentRatio > targetRatio) {
  //   // 根据高度进行网页的缩放
  //   scaleRatio = currentHeight / targetHeight; // 参照高度进行缩放（屏幕很宽的情况下）
  //   document.body.style.transform = `scale(${scaleRatio}) translateX(-50%)`;
  // } else {
  //   // 根据宽度进行网页的缩放
  //   document.body.style.transform = `scale(${scaleRatio})`;
  // }
  // (function flexible(window, document) {
  //   var docEl = document.documentElement
  //   var dpr = window.devicePixelRatio || 1

  //   // adjust body font size
  //   function setBodyFontSize() {
  //     if (document.body) {
  //       document.body.style.fontSize = (16 * dpr) + 'px'
  //     }
  //     else {
  //       document.addEventListener('DOMContentLoaded', setBodyFontSize)
  //     }
  //   }
  //   setBodyFontSize();

  //   function setRemUnit() {
  //     var rem = docEl.clientWidth / 240
  //     docEl.style.fontSize = rem + 'px'
  //   }

  //   setRemUnit()

  //   // reset rem unit on page resize
  //   window.addEventListener('resize', setRemUnit)
  //   window.addEventListener('pageshow', function (e) {
  //     if (e.persisted) {
  //       setRemUnit()
  //     }
  //   })

  //   // detect 0.5px supports
  //   if (dpr >= 2) {
  //     var fakeBody = document.createElement('body')
  //     var testElement = document.createElement('div')
  //     testElement.style.border = '.5px solid transparent'
  //     fakeBody.appendChild(testElement)
  //     docEl.appendChild(fakeBody)
  //     if (testElement.offsetHeight === 1) {
  //       docEl.classList.add('hairlines')
  //     }
  //     docEl.removeChild(fakeBody)
  //   }
  // }(window, document))
  //
  // let baseWidth = document.documentElement.clientWidth;
  //    let baseHeight = document.documentElement.clientHeight;
  //    let appStyle = document.body.style;
  //    let realRatio = baseWidth/baseHeight
  //    let designRatio = 16/9
  //    let scaleRate =  baseWidth/3840
  //    if(realRatio>designRatio){
  //      scaleRate = baseHeight/2160
  //    }
  //    appStyle.transformOrigin = 'left top';
  //    appStyle.transform=`scale(${scaleRate}) translateX(-50%)`;
  //    appStyle.width = `${baseWidth/scaleRate}px`
}
