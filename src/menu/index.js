import { makeButton } from "../button";
import { switchDom } from "..";
import { joinRoomDom } from "../joinRoom";

export const makeMenu = () => {
  // 创建主页面菜单
  const menu = document.createElement('div');
  menu.style.width = '100vw';
  menu.style.height = '45vh';
  menu.style.background = '#333333';
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';

  // 创建图标/Logo
  const logo = document.createElement('div');
  logo.style.width = "100%";
  logo.style.height = "60%";
  logo.style.display = 'flex';
  logo.style.justifyContent = 'center';
  logo.style.alignItems = 'center';

  // 创建图标内容
  const logoImg = document.createElement('img');
  logoImg.src = 'https://xc.null.red:8043/XCimg/img/save/2024/06/14/1718351806_748462-1980927735.png';

  logo.append(logoImg);
  menu.append(logo);

  // 创建菜单点选按钮
  const menuButton = document.createElement('div');
  menuButton.style.width = "100%";
  menuButton.style.height = "40%";
  menuButton.style.display = 'flex';
  menuButton.style.alignItems = 'center';
  menuButton.style.flexDirection = 'column';

  // 创建第一个按钮（进入房间）
  const joinRoom = makeButton('1. 进入房间', () => { switchDom(joinRoomDom()); });

  // 创建第二个按钮（创建房间）
  const createRoom = makeButton('2. 创建房间', () => { switchDom(); });

  // 创建第三个按钮（游玩说明）
  const playInfo = makeButton('3. 游玩说明', () => { switchDom(); });

  menuButton.append(joinRoom);
  menuButton.append(createRoom);
  menuButton.append(playInfo);
  menu.append(menuButton);

  return menu;
};