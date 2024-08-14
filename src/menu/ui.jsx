import style from './style.jsx';
import partingLine from '../element/partingLine.jsx';
import { h, render } from 'preact';

const Menu = () =>
{
  return (
    <div style={style.menu}>
      <div style={style.view}>
        <div style={style.logo}></div>
        <div style={style.title}>
          <partingLine />
        </div>
      </div>
    </div>
  );
};

export default (ref) =>
{
  render(<Menu />, ref);
};