import { SvgList } from '@monorepo/ui-shares';
import { useCountdown } from '@monorepo/function-shares';

export interface CountDownProps {
  targetDate?: any;
}

export function CountDown({ targetDate }: CountDownProps) {
  // const [daysFormat, hoursFormat, minutesFormat, secondsFormat] = useCountdown(
  //   '2022-05-16T20:24:00'
  // );

  return (
    <div>
      <div>11</div>
    </div>
  );
}

export default CountDown;
