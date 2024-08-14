import style from './style.css';
import partingLine from '../element/partingLine.jsx';
import { h, render } from 'preact';

const Menu = () =>
{
  return (
    <div className={style.menu}>
      <div className={style.view}>
        <div className={style.logo}></div>
        <div className={style.title}>
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