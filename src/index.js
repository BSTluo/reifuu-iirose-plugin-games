import { makeMenu } from "./menu";

/**
 * 定义循环尝试运行
 * 直到运行回调时不再抛出错误
 * @param {function (number, number): void} callback 第一个参数为尝试运行的次数 第二个参数为尝试运行的时间
 * @param {number} interval 执行间隔
 * @param {function (): void} canDo 可以执行时执行此函数
 * @param {boolean} [immediate]
 */
function intervalTry(callback, interval, canDo, immediate = false) {
  let countOfCall = 0;
  let startTime = Date.now();
  let intervalId = null;
  let func = (() => {
    countOfCall++;
    try {
      callback(countOfCall, Date.now() - startTime);
      if (intervalId != null) {
        clearInterval(intervalId);
      }

      canDo();
      return;
    }
    catch (err) { }
  });
  intervalId = setInterval(func, interval);
  if (immediate)
    func();
}

const msgDom = document.querySelector('#msgholder > div:nth-child(1) > div');

const switchDomOrigin = () => {
  let oldDom
  return (/**@type {Element} */dom) => {
    if (oldDom != null) {
      msgDom.replaceChild(dom, oldDom);
    } else {

      msgDom.append(dom);
    }

    oldDom = dom;
  }
}

export const switchDom = switchDomOrigin();

intervalTry(() => {
  window.socket._onmessage.bind;
  if (msgDom.childNodes.length <= 0) { throw 'error'; }
  msgDom.innerHTML = '';

}, 100, () => {
  const pageListObserver = new MutationObserver(mutationsList => {
    // @ts-ignore

    const /**@type {Element} */ addList = mutationsList[0].addedNodes;
    addList.forEach((/**@type {Element} */element) => {
      if (element.className == 'msg' || element.className == 'pubMsgTime') { element.remove(); }
    });
  });
  pageListObserver.observe(msgDom, { characterData: true, childList: true, subtree: true });

  switchDom(makeMenu())
});

// 加入每局需要花钞
// 每日结束后，根据排行榜，分配每日获得的花钞
// 每人都可以开房间打怪，根据不同的怪物等级，可以加入不同的人数
// 主页面有创建房间和加入房间两个选项，和说明