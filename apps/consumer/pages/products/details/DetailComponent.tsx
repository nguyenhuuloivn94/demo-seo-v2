import { Detail } from '@monorepo/ui-shares';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
interface DetailProps {
  match?: { id: any };
  detail: any;
}
const DetailComponent = (props: DetailProps) => {
  if(!props.detail) return null;
  return (
    <TransitionLayout
      title={props.detail?.name}
      photo={props.detail?.photo}
      description={props.detail?.log_time}
    >
      <Header title="Chi tiết sản phẩm" />
      <Detail detail={props.detail} />
    </TransitionLayout>
  );
};

export default DetailComponent;
