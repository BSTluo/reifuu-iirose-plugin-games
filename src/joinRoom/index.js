export const joinRoomDom = () => {
  // 创建主页面菜单
  const menu = document.createElement('div');
  menu.style.width = '97vw';
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
}