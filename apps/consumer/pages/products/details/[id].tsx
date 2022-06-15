import {
  getProductDetail,
  getListProduct,
  isWeb,
} from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import Detail from './IonDetail';
import { GetServerSideProps } from 'next';
export default dynamic(() => Promise.resolve(Detail), { ssr: true });

// export const getStaticPaths = async () => {
//   // const res = await fetch(`https://dev-api.itaphoa.com/customer/products`);
//   // const data = await res.json();

//   const data = await getListProduct();
//   const paths = data.map((item) => ({
//     params: { id: item.id.toString() },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     // const res = await fetch(
//     //   `https://dev-api.itaphoa.com/customer/products/${id}`
//     // );
//     const detail = await getProductDetail(id);
//     return { props: { detail } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context?.params?.id;
    // // const res = await fetch(
    // //   `https://dev-api.itaphoa.com/customer/products/${id}`
    // // );
    const detail = await getProductDetail(id.toString());
    // const detail = {
    //   id: '0RXLviyI3zT1FUYslMUB',
    //   name: 'Đậu rồng (vỉ 200gr)',
    //   photo:
    //     'https://cdn.itaphoa.com/photos/897cbccb87702cb4399ca277fc941446.jpg',
    //   category: 'Rau Củ',
    //   origin: 'Big C',
    //   market_price: 2400,
    //   unit: 'vỉ 200gr',
    //   out_of_stock: false,
    //   price_list: {
    //     '1651564432356': {
    //       qty: 1,
    //       label: 'Từ 1',
    //       price: 9500,
    //     },
    //   },
    //   info: {
    //     tags: 'Giá Rẻ Nhất, Giao trong 24h',
    //     banner:
    //       'https://cdn.itaphoa.com/photos/0c0c4678aca7013acab773af98c9a518.jpg',
    //     photos: [],
    //     description:
    //       'Với phương châm mang nông sản sạch đến khắp mọi nhà, HTX sản xuất nông sản Hóc Môn không ngừng tìm kiếm và cải tiến quy trịnh sản xuất theo chuẩn VietGAP để tạo nên những sản phẩm rau, củ, quả tươi ngon và thật sự chất lượng.\n\nĐậu Rồng và 3 công dụng chính:\n•        Giảm cân: giàu chất xơ lại có hàm lượng calo thấp, đậu rồng đích thực là nguyên liệu hiệu quả giúp chị em giảm cân lành mạnh;\n•        Trị đau nửa đầu: hoạt chất Tryptophan có trong đậu rồng hỗ trợ giảm các cơn đau nửa đầu và cơn đau đầu do căng thẳng gây nên;\n•        Bổ xương khớp: đậu rồng chứa hàm lượng canxi cao nhất trong tất cả các loại đậu, vì vậy ăn nhiều đậu rồng sẽ giúp duy trì hệ xương chắc khỏe và phòng ngừa loãng xương hiệu quả. \n\nTrổ tài nấu nướng cùng Mio: đậu rồng xào thịt bò, đậu rồng xào tỏi, gỏi xoài đậu rồng bắp bò, đậu rồng luộc chấm mắm tép,...',
    //   },
    //   updated_at: '2022-05-31T03:00:00.617Z',
    //   created_at: '2020-08-24T08:38:04.043Z',
    //   sold_out: false,
    //   is_deleted: false,
    //   partner_id: null,
    //   partner_type: ['partner', 'kcn'],
    //   kcn_price_list: {
    //     '1651564432356': {
    //       qty: 1,
    //       label: 'Từ 1',
    //       price: 9500,
    //     },
    //   },
    //   product_type: 'single',
    //   uom_id: 3,
    //   region_code: 'HCM',
    //   delivery_type: 'normal',
    //   product_type_id: 8,
    //   product_id: '0RXLviyI3zT1FUYslMUB',
    //   profit: null,
    //   log_time:
    //     'Đặt trước 21h, nhận trước 11h hôm sau. Freeship cho đơn từ 200k.',
    //   note: null,
    //   benefits: [
    //     {
    //       title: 'vui cùng 7up',
    //       image_url:
    //         'https://cdn.itaphoa.com/photos/8FRyJJfbWzrDqVE7xFDRo0c9cEHqJEMs.jpg',
    //       view_more_title: '5%',
    //       view_more_content: '5%',
    //     },
    //   ],
    // };
    return { props: { detail } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
