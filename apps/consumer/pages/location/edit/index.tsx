import {
  TransitionLayout,
  Header,
  LocationScreen,
  withIonicPage,
} from '@monorepo/ui-shares';
import { getParams } from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const EditAddress = (props) => {
  const [id, setId] = useState<string>();
  useEffect(() => {
    const listParam = getParams();
    if (!listParam) return;
    setId(listParam.get(`id`));
  }, []);

  return (
    <TransitionLayout title={'Sửa địa chỉ'}>
      <Header keyPage="add-edit-location" title="Sửa địa chỉ" />
      <LocationScreen id={id} type={'edit'} />
    </TransitionLayout>
  );
};

export default dynamic(() => Promise.resolve(withIonicPage(EditAddress)), {
  ssr: false,
});
