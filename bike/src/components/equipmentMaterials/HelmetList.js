import React from 'react';
import HelmetCard from './helmetCard';
import './uiEquip.css';

const helmetinfo = [
    {
      title: 'HJC 홍진 오토바이 헬멧 CL2 CL33 CH5 IS33 FGJET IS2 반모 오픈페이스',
      link: 'https://search.shopping.naver.com/gate.nhn?id=11969790973',
      image: 'https://shopping-phinf.pstatic.net/main_1196979/11969790973.2.jpg',
      lprice: '41890',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '11969790973',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'CRNK RETRO 크랭크레트로 오토바이헬멧 하이바 바이크 클래식 오픈페이스 풀페이스헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82134639250',
      image: 'https://shopping-phinf.pstatic.net/main_8213463/82134639250.5.jpg',
      lprice: '64000',
      hprice: '0',
      mallName: '크랭크스포츠',
      productId: '82134639250',
      productType: '2',
      brand: '크랭크',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '홍진HJC CS-R3 C70 C90 i90 i70 F70 DS-X1풀페이스 시스템 오토바이헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12457282750',
      image: 'https://shopping-phinf.pstatic.net/main_1245728/12457282750.18.jpg',
      lprice: '89900',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '12457282750',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 오토바이 헬멧 알파11 70 90 F70 베놈2 카니지 풀페이스 시스템헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=80446207155',
      image: 'https://shopping-phinf.pstatic.net/main_8044620/80446207155.1.jpg',
      lprice: '372900',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '80446207155',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 오토바이헬멧 IS33 FGJET CH5 CL33 CL2 오픈페이스 반모',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12395319876',
      image: 'https://shopping-phinf.pstatic.net/main_1239531/12395319876.22.jpg',
      lprice: '39490',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '12395319876',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '아우라 오토바이헬멧 바이크 고글모 반모 전동킥보드헬멧 하이바 빈티지헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=9935895331',
      image: 'https://shopping-phinf.pstatic.net/main_9935895/9935895331.51.jpg',
      lprice: '14000',
      hprice: '0',
      mallName: '스텔스헬멧',
      productId: '9935895331',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'VARUN 배런 오토바이헬멧 시스템 오픈페이스 풀페이스 KC DOT 신고필증',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81082146425',
      image: 'https://shopping-phinf.pstatic.net/main_8108214/81082146425.1.jpg',
      lprice: '27900',
      hprice: '0',
      mallName: '배런',
      productId: '81082146425',
      productType: '2',
      brand: '배런',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '티티앤코 TT&amp;CO 500TX 소두핏 클래식 헬멧 베스파 할리헬멧 S-4XL',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82131075233',
      image: 'https://shopping-phinf.pstatic.net/main_8213107/82131075233.5.jpg',
      lprice: '79000',
      hprice: '0',
      mallName: 'Webike',
      productId: '82131075233',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 오토바이 헬멧 IS-2 CL-2 XF-312 오픈페이스 반모',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12874203307',
      image: 'https://shopping-phinf.pstatic.net/main_1287420/12874203307.8.jpg',
      lprice: '39190',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '12874203307',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '소닉스 헬멧 JX-3 JX-5 오토바이헬멧 하이바 하프페이스 헬멧 바이크용품',
      link: 'https://search.shopping.naver.com/gate.nhn?id=10314818332',
      image: 'https://shopping-phinf.pstatic.net/main_1031481/10314818332.10.jpg',
      lprice: '41800',
      hprice: '0',
      mallName: '제이모비스',
      productId: '10314818332',
      productType: '2',
      brand: '아우라',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 헬멧 IS- 33 II FG- JET 오픈페이스 오토바이 헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12706134203',
      image: 'https://shopping-phinf.pstatic.net/main_1270613/12706134203.5.jpg',
      lprice: '139000',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '12706134203',
      productType: '2',
      brand: 'HJC',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '세나 블루투스 오픈페이스 헬멧 ECONO',
      link: 'https://search.shopping.naver.com/gate.nhn?id=23022957490',
      image: 'https://shopping-phinf.pstatic.net/main_2302295/23022957490.20200603174341.jpg',
      lprice: '169400',
      hprice: '169400',
      mallName: '네이버',
      productId: '23022957490',
      productType: '1',
      brand: '세나',
      maker: '세나',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '비모토 V8 오토바이 헬멧 블루투스 헤드셋 VIMOTO V8',
      link: 'https://search.shopping.naver.com/gate.nhn?id=21761996430',
      image: 'https://shopping-phinf.pstatic.net/main_2176199/21761996430.20200115175338.jpg',
      lprice: '64840',
      hprice: '72000',
      mallName: '네이버',
      productId: '21761996430',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '홍진HJC CS-R3 C70 I70 I90 C90 F70 DSX1 풀페이스 오토바이 헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81446818172',
      image: 'https://shopping-phinf.pstatic.net/main_8144681/81446818172.2.jpg',
      lprice: '89900',
      hprice: '0',
      mallName: '더바이커',
      productId: '81446818172',
      productType: '2',
      brand: 'HJC',
      maker: '홍진HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 오토바이 헬멧 CL33 CH5 CL2 XF312 오픈페이스 반모 헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12725783682',
      image: 'https://shopping-phinf.pstatic.net/main_1272578/12725783682.17.jpg',
      lprice: '42390',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '12725783682',
      productType: '2',
      brand: 'HJC',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 오토바이 헬멧 쉴드면 김서림 방지핀락 기어판 총모음전',
      link: 'https://search.shopping.naver.com/gate.nhn?id=80864525868',
      image: 'https://shopping-phinf.pstatic.net/main_8086452/80864525868.10.jpg',
      lprice: '10890',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '80864525868',
      productType: '2',
      brand: '',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: 'HJC 홍진 오토바이 헬멧 알파 11 VENOM 2/CARNAGE 카니지 풀페이스 헬멧',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81981973452',
      image: 'https://shopping-phinf.pstatic.net/main_8198197/81981973452.jpg',
      lprice: '523900',
      hprice: '0',
      mallName: 'KYMCO YAMAHA',
      productId: '81981973452',
      productType: '2',
      brand: '',
      maker: 'HJC',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '아우라 반모 고글모 미군모 오토바이 헬멧 전동킥보드 하이바 바이크 스쿠터 남성 여성 여름',
      link: 'https://search.shopping.naver.com/gate.nhn?id=10799687134',
      image: 'https://shopping-phinf.pstatic.net/main_1079968/10799687134.4.jpg',
      lprice: '17900',
      hprice: '0',
      mallName: '라온컴퍼니e',
      productId: '10799687134',
      productType: '2',
      brand: '한미',
      maker: '한미',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '오토바이 헬멧용 김서림방지필름 안티포그',
      link: 'https://search.shopping.naver.com/gate.nhn?id=20507237175',
      image: 'https://shopping-phinf.pstatic.net/main_2050723/20507237175.20190804141625.jpg',
      lprice: '10180',
      hprice: '23130',
      mallName: '네이버',
      productId: '20507237175',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    },
    {
      title: '코모  스쿠터 오토바이헬멧 668',
      link: 'https://search.shopping.naver.com/gate.nhn?id=20172231466',
      image: 'https://shopping-phinf.pstatic.net/main_2017223/20172231466.20200402043024.jpg',
      lprice: '34300',
      hprice: '35000',
      mallName: '네이버',
      productId: '20172231466',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '오토바이/스쿠터',
      category3: '오토바이용품',
      category4: '헬멧'
    }
  ];

const HelmetList = (props) => {
    return (
        <div className="list">
            {
                helmetinfo.map((helmet, i) => {
                    return <HelmetCard
                                key={i}
                                image={helmet.image}
                                title={helmet.title}
                                author={helmet.lprice}
                                published={helmet.brand}
                                link={helmet.link}
                                json={helmet} />
                })
            }

        </div>

    )
}

export default HelmetList;