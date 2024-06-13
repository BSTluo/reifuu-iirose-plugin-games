/**
 * 定义循环尝试运行
 * 直到运行回调时不再抛出错误
 * @param {function (number, number): void} callback 第一个参数为尝试运行的次数 第二个参数为尝试运行的时间
 * @param {number} interval 执行间隔
 * @param {function (): void} canDo 可以执行时执行此函数
 * @param {boolean} [immediate]
 */
function intervalTry(callback, interval, canDo, immediate = false)
{
  let countOfCall = 0;
  let startTime = Date.now();
  let intervalId = null;
  let func = (() =>
  {
    countOfCall++;
    try
    {
      callback(countOfCall, Date.now() - startTime);
      if (intervalId != null)
      {
        clearInterval(intervalId);
      }

      canDo();
      return;
    }
    catch (err)
    { }
  });
  intervalId = setInterval(func, interval);
  if (immediate)
    func();
}

intervalTry(() =>
{
  window.socket._onmessage.bind;
}, 10, () =>
{
  // 检测msg的Dom，进行调用处理
  const msgDomArray = document.querySelector('#msgholder > div:nth-child(1) > div');

  const pageListObserver = new MutationObserver(mutationsList =>
  {
    // @ts-ignore

    const /**@type {Element} */ isPage = mutationsList[0].addedNodes[0];

    const className = isPage?.className;
    if (className === "msg")
    {
      let msgDom = isPage.querySelector("div.chatContentHolder.publicMsgHasBubble");
      if (!msgDom.innerHTML) { return; }

      // 接下来是koishi的专属适配
      const koishiArg = /当前可用的指令有：([\s\S]+)输入“help 指令名”查看特定指令的语法和使用示例。/;

      if (koishiArg.test(msgDom.innerHTML))
      {
        makeKoishiDom(msgDom);
      }

      const arg = /(\[([\S]+)\])/g;
      // 开始制作html dom
      if (arg.test(msgDom.innerHTML))
      {
        makeHtmlDom(msgDom);
        // msgDom.parentNode.replaceChild(a, msgDom);
      }
    }
  });
  pageListObserver.observe(msgDomArray, { characterData: true, childList: true, subtree: true });
});

/**
 * 将消息转换为html卡片
 * @param {Element} dom 
 */
function makeHtmlDom(dom)
{
  const arg = /(\[([\S]+)\])/g;

  const data = dom.innerHTML.match(arg);
  if (data.length <= 0) { return; }

  data.forEach(a =>
  {
    console.log(a);
    const msg = a.slice(1, -1);

    const msgList = msg.split(':');
    console.log(msgList);
    if (msgList[0] != 'input' && msgList[0] != 'button') { return; }

    // [input:输入框提示:回复内容]
    if (msgList[0] == 'input')
    {
      const inputDom = document.createElement('input');
      inputDom.placeholder = msgList[1] || '';
      inputDom.style.border = '2px solid #4a4a4a';
      inputDom.style.borderRadius = '3px';
      inputDom.style.backgroundColor = '#4a4a4a';

      const buttonDom = document.createElement('button');
      buttonDom.innerHTML = '确定';
      buttonDom.style.border = '2px solid #4a4a4a';
      buttonDom.style.borderRadius = '3px';
      buttonDom.style.backgroundColor = '#424242';
      dom.innerHTML = dom.innerHTML.replace(a, `${inputDom.outerHTML}${buttonDom.outerHTML}`);
    }

    // [button:按钮文本:回复内容]
    if (msgList[0] == 'button')
    {
      const buttonDom = document.createElement('button');
      buttonDom.innerHTML = msgList[1] || '';
      buttonDom.style.border = '2px solid #4a4a4a';
      buttonDom.style.borderRadius = '3px';
      buttonDom.style.backgroundColor = '#424242';
      buttonDom.style.width = '100%';
      dom.innerHTML = dom.innerHTML.replace(a, `${buttonDom.outerHTML}`);
    }
  });
}

/**
 * 将消息转换为html卡片
 * @param {Element} dom 
 */
function makeKoishiDom(dom) {

}

// 安装插件的人，发送带特殊信息的时候，先把特殊信息转换成正常信息发送到群聊，然后再把特殊信息发送给基站，基站接收后发送给当前安装插件的人，把群聊对应的信息转换成特殊信息？