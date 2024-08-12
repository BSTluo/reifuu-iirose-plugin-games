import style from './style.css';
import partingLine from '../element/partingLine.jsx';
import { h, render } from 'preact';

const Menu = () =>
{
  return (
    <div class={style.menu}>
      <div class={style.view}>
        <div class={style.logo}></div>
        <div class={style.title}>
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