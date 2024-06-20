import { makeButton } from "../button";
import { switchDom } from "..";

// 主页面事件
export const menu = () => {

  // 创建主页面外部框体
  const menu = document.createElement('div');
  menu.style.width = '100%';
  menu.style.height = '100%';
  menu.style.background = '#333333';// 主页面背景url
  menu.style.backgroundSize = 'cover';
  menu.style.display = 'flex';
  menu.style.flexDirection = 'row';

  // 创建人物形象
  const characterImg = document.createElement('div')
  characterImg.style.height = '20%'
  characterImg.style.width = '100%'
  characterImg.style.background = "url(http://r.iirose.com/i/23/1/4/19/5120-QX.jpg)";
  characterImg.style.backgroundSize = 'cover';
  menu.append(characterImg)
  
  switchDom(menu);
};