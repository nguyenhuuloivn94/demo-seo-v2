import { useState, ReactNode, useEffect, memo } from 'react';
import styles from './layout.module.scss';
import Head from 'next/head';
import { useWindowSize } from '@monorepo/function-shares';
import { useRouter } from 'next/router';
export interface LayoutTransProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  photo?: string;
  showTab?: boolean;
}

export const TransitionLayout = memo(
  ({
    children,
    title = 'Mio',
    description,
    photo,
    showTab = false,
  }: LayoutTransProps) => {
    const router = useRouter();
    const path = router.pathname;

    const [displayChildren, setDisplayChildren] = useState(children);
    const [routeChildren, setRouteChildren] = useState(path);
    const [transitionStage, setTransitionStage] = useState('fadeOut');
    const { height, widthFixed } = useWindowSize();

    useEffect(() => {
      setTransitionStage('fadeIn');
    }, []);

    useEffect(() => {
      if (children !== displayChildren && path !== routeChildren) {
        setTransitionStage('fadeOut');
        setRouteChildren(path);
      } else {
        setDisplayChildren(children);
      }
    }, [
      children,
      path,
      setDisplayChildren,
      displayChildren,
      setRouteChildren,
      routeChildren,
    ]);

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="title" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta name="description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
    <meta name="keywords" content="macbook pro m1, mua macbook pro m1, giá macbook pro m1, macbook pro 2020, macbook pro m1 2020"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="copyright" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta name="author" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta http-equiv="audience" content="General"/>
    <meta name="resource-type" content="Document"/>
    <meta name="distribution" content="Global"/>
            <meta content="INDEX,FOLLOW" name="robots"/>
    <meta name="revisit-after" content="1 days"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="GENERATOR" content="Công ty Cổ phần Bán lẻ Kỹ thuật số FPT"/>
    <meta property="og:site_name" content="FPTShop.com.vn"/>
    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="vi_VN"/>
    <meta property="og:title" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta property="og:description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
    <meta property="og:url" content="https://fptshop.com.vn/may-tinh-xach-tay/macbook-pro-13-2020-touch-bar-m1-256gb"/>
        <meta property="og:image" content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"/>
    <meta itemprop="name" content="MacBook Pro M1 2020 13 inch | Trả góp 0%, ưu đãi hấp dẫn | Fptshop.com.vn"/>
    <meta itemprop="description" content="Mua máy tính MacBook Pro M1 2020 13 inch 256GB chính hãng tại FPTShop với loạt ưu đãi hấp dẫn: Trả góp 0%, giảm giá lớn khi mua online, nhiều quà tặng giá trị, bảo hành chuẩn Apple trên toàn quốc"/>
        <meta itemprop="image" content="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/13/637408530311831907_mbp-2020-m1-gray-dd-1.png"/>
    <meta property="fb:app_id" content="948243871965133"/>
    <meta name="referrer" content="no-referrer-when-downgrade"/>
        </Head>
        <div style={{ height: height }} className={styles['container']}>
          <div
            style={{ width: widthFixed }}
            onTransitionEnd={() => {
              if (transitionStage === 'fadeOut') {
                setDisplayChildren(children);
                setTransitionStage('fadeIn');
              }
            }}
            className={`${styles['frame']} ${styles['content']} ${styles['fadeIn']}`}
          >
            {displayChildren}
          </div>
        </div>
      </div>
    );
  }
);
