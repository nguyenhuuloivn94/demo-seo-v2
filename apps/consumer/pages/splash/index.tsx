import { useWindowSize } from '@monorepo/function-shares';
import { Loading, SvgList, TransitionLayout } from '@monorepo/ui-shares';

export function Splash() {
  const { height, widthFixed } = useWindowSize();
  return (
    <div
      style={{
        display: 'flex',
        width: widthFixed,
        flex: 1,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SvgList.SvgMioIcon />
      <Loading />
    </div>
  );
}

export default Splash;
