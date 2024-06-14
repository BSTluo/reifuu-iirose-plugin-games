// 构建一个创建按钮的函数
export const makeButton = (text) =>
{
    const button = document.createElement('div');
    button.style.width = "100%";
    button.innerHTML = text;
    button.style.fontSize = '3vw';
    button.style.color = 'white';
    button.style.display = 'flex';
    button.style.justifyContent = 'center';
    button.style.alignItems = 'center';
    button.addEventListener('mousemove', () =>
    {
        button.style.fontSize = '4vw';
        button.style.color = '#66ccff';
    });
    button.addEventListener('mouseout', () =>
    {
        button.style.color = 'white';
        button.style.fontSize = '3vw';
    });
    return button;
};