import { makeButton } from "../element/button";
import { switchDom } from "..";
import { partingLine } from "../element/partingLine";

// 主页面事件
export const menu = () =>
{
  // 创建主页面外部框体
  const menu = document.createElement('div');
  menu.style.width = '100%';
  menu.style.height = '100%';
  menu.style.background = 'url(http://r.iirose.com/i/24/6/21/16/3317-30.jpg)';// 主页面背景url
  menu.style.backgroundSize = 'cover';
  menu.style.display = 'flex';
  menu.style.justifyContent = 'center';
  menu.style.alignItems = 'center';

  const menuView = document.createElement('div');
  menuView.style.width = '90%';
  menuView.style.height = '90%';
  menuView.style.display = 'flex';
  menuView.style.flexDirection = 'column';
  menuView.style.border = '1px solid black';
  menu.append(menuView);

  // 创建Logo
  const characterImg = document.createElement('div');
  characterImg.style.height = '10%';
  characterImg.style.width = '100%';
  characterImg.style.background = "url(http://r.iirose.com/i/24/6/21/16/5043-D4.png) left no-repeat";
  
  menuView.append(characterImg);


  // 创建分割线
  const line = partingLine();
  // 创建存放分割线的div
  const titleLine = document.createElement('div');
  titleLine.style.display = 'flex';
  titleLine.style.justifyContent = 'center';
  titleLine.style.alignItems = 'center';
  titleLine.style.width = '100%';
  titleLine.style.height = '1%';
  titleLine.append(line);
  menuView.append(titleLine);

  // 创建开始游戏按钮
  
  switchDom(menu);
};