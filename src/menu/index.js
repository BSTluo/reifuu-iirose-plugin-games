import { makeButton } from "../button";
import { switchDom } from "..";

// 主页面事件
export const menu = () => {
  // 创建主页面菜单
  const menu = document.createElement('div');
  menu.style.width = '100vw';
  menu.style.height = '85vh';
  menu.style.background = '#333333';// 主页面背景url
  menu.style.backgroundSize = 'cover';
  menu.style.display = 'flex';
  menu.style.flexDirection = 'row';

  // 创建人物形象
  const characterImg = document.createElement('div')
  characterImg.style.height = 'auto'
  characterImg.style.maxWidth = '50vw';
  characterImg.style.minWidth = '85vh'
  characterImg.style.background = "url(http://r.iirose.com/i/23/1/4/19/5120-QX.jpg)";
  characterImg.style.backgroundSize = 'cover';
  menu.append(characterImg)
  
  switchDom(menu);
};