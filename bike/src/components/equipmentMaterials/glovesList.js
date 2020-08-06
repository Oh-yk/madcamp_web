import React from 'react';
import GloveCard from './glovesCard';
import './uiEquip.css';

const glovesinfo = [
    {
      title: '락브로스 자전거 여름 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=15282353768',
      image: 'https://shopping-phinf.pstatic.net/main_1528235/15282353768.20191209010715.jpg',
      lprice: '4800',
      hprice: '9080',
      mallName: '네이버',
      productId: '15282353768',
      productType: '1',
      brand: '락브로스',
      maker: '락브로스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    
    {
      title: '락브로스 스파이더 자전거 장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81894889593',
      image: 'https://shopping-phinf.pstatic.net/main_8189488/81894889593.2.jpg',
      lprice: '8900',
      hprice: '0',
      mallName: '옐로바이크',
      productId: '81894889593',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '자전거 반장갑 긴장갑 스파이더 사이클 라이딩 로드 여름 mtb',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82429379353',
      image: 'https://shopping-phinf.pstatic.net/main_8242937/82429379353.jpg',
      lprice: '8900',
      hprice: '0',
      mallName: '알엔에이',
      productId: '82429379353',
      productType: '2',
      brand: '락브로스',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '락브로스 spider 자전거 장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12587714017',
      image: 'https://shopping-phinf.pstatic.net/main_1258771/12587714017.2.jpg',
      lprice: '7900',
      hprice: '0',
      mallName: '원인터내셔널',
      productId: '12587714017',
      productType: '2',
      brand: '락브로스',
      maker: '락브로스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '락브로스 젤패드 자전거 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22369205767',
      image: 'https://shopping-phinf.pstatic.net/main_2236920/22369205767.20200402160401.jpg',
      lprice: '17780',
      hprice: '50660',
      mallName: '네이버',
      productId: '22369205767',
      productType: '1',
      brand: '락브로스',
      maker: '락브로스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '지요 S02 에어로 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=19737449418',
      image: 'https://shopping-phinf.pstatic.net/main_1973744/19737449418.20190612150838.jpg',
      lprice: '9090',
      hprice: '12458',
      mallName: '네이버',
      productId: '19737449418',
      productType: '1',
      brand: '지요',
      maker: '지요',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '스페셜라이즈드 신형 스포츠젤 자전거 반장갑 긴장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81857144362',
      image: 'https://shopping-phinf.pstatic.net/main_8185714/81857144362.10.jpg',
      lprice: '28000',
      hprice: '0',
      mallName: '잇츠자전거',
      productId: '81857144362',
      productType: '2',
      brand: '스페셜라이즈드',
      maker: '스페셜라이즈드',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '오스탈레띠 자전거 가죽 장갑(예약구매 2)',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82467924891',
      image: 'https://shopping-phinf.pstatic.net/main_8246792/82467924891.2.jpg',
      lprice: '19900',
      hprice: '0',
      mallName: '오스탈레띠',
      productId: '82467924891',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '지요 S02 라이딩 자전거 장갑 반장갑 글러브 쿠션패드 충격흡수',
      link: 'https://search.shopping.naver.com/gate.nhn?id=21167612174',
      image: 'https://shopping-phinf.pstatic.net/main_2116761/21167612174.20191026152726.jpg',
      lprice: '15090',
      hprice: '15660',
      mallName: '네이버',
      productId: '21167612174',
      productType: '1',
      brand: '지요',
      maker: '지요',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '2020 그립그랩 프로젤 PROGEL 사이클링 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81896181671',
      image: 'https://shopping-phinf.pstatic.net/main_8189618/81896181671.jpg',
      lprice: '36370',
      hprice: '0',
      mallName: '달려라자전거',
      productId: '81896181671',
      productType: '2',
      brand: '그립그랩',
      maker: '그립그랩',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '락브로스 스파이더 자전거장갑 반장갑 남성용 여성용',
      link: 'https://search.shopping.naver.com/gate.nhn?id=20139271699',
      image: 'https://shopping-phinf.pstatic.net/main_2013927/20139271699.20190709134517.jpg',
      lprice: '8310',
      hprice: '12500',
      mallName: '네이버',
      productId: '20139271699',
      productType: '1',
      brand: '락브로스',
      maker: '락브로스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: 'CBR S189 반장갑 신축성 에어홀 자전거 장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=19342374978',
      image: 'https://shopping-phinf.pstatic.net/main_1934237/19342374978.20191204021953.jpg',
      lprice: '9730',
      hprice: '18000',
      mallName: '네이버',
      productId: '19342374978',
      productType: '1',
      brand: 'CBR',
      maker: 'CBR',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '락브로스 S106 충격흡수 자전거 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=20155433712',
      image: 'https://shopping-phinf.pstatic.net/main_2015543/20155433712.20191217011229.jpg',
      lprice: '6790',
      hprice: '6900',
      mallName: '네이버',
      productId: '20155433712',
      productType: '1',
      brand: '락브로스',
      maker: '락브로스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '필모리스 자전거 장갑 MG-107',
      link: 'https://search.shopping.naver.com/gate.nhn?id=8602884085',
      image: 'https://shopping-phinf.pstatic.net/main_8602884/8602884085.20151113144920.jpg',
      lprice: '13900',
      hprice: '17960',
      mallName: '네이버',
      productId: '8602884085',
      productType: '1',
      brand: '필모리스',
      maker: '필모리스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '마누스 아동용 주니어 인라인 반장갑 자전거 보호장갑 라이딩 어린이',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82431451074',
      image: 'https://shopping-phinf.pstatic.net/main_8243145/82431451074.jpg',
      lprice: '12400',
      hprice: '0',
      mallName: '프로니마',
      productId: '82431451074',
      productType: '2',
      brand: '',
      maker: '삼구무역',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: 'GIYO-S02 라이딩 킥보드 싸이클 자전거 등산 헬스 충격흡수패드 논슬립 여름 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82237274908',
      image: 'https://shopping-phinf.pstatic.net/main_8223727/82237274908.jpg',
      lprice: '9100',
      hprice: '0',
      mallName: '건스포츠',
      productId: '82237274908',
      productType: '2',
      brand: '지요',
      maker: '지요',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '락브로스 락브로스 자전거장갑 S109 반장갑 미끄럼방지패드 세련된디자인',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22581982297',
      image: 'https://shopping-phinf.pstatic.net/main_2258198/22581982297.20200422161640.jpg',
      lprice: '7900',
      hprice: '10900',
      mallName: '네이버',
      productId: '22581982297',
      productType: '1',
      brand: '락브로스',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '하이진 ROCKBROS 프린팅 자전거 장갑 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22823430896',
      image: 'https://shopping-phinf.pstatic.net/main_2282343/22823430896.20200511175940.jpg',
      lprice: '7610',
      hprice: '8400',
      mallName: '네이버',
      productId: '22823430896',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '스페셜라이즈드 듀얼젤 자전거 반장갑 긴장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81864929682',
      image: 'https://shopping-phinf.pstatic.net/main_8186492/81864929682.3.jpg',
      lprice: '35000',
      hprice: '0',
      mallName: '잇츠자전거',
      productId: '81864929682',
      productType: '2',
      brand: '스페셜라이즈드',
      maker: '스페셜라이즈드',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    },
    {
      title: '2020 [당일발송] 그립그랩 라이드 RIDE 반장갑',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81896294978',
      image: 'https://shopping-phinf.pstatic.net/main_8189629/81896294978.jpg',
      lprice: '21850',
      hprice: '0',
      mallName: '달려라자전거',
      productId: '81896294978',
      productType: '2',
      brand: '그립그랩',
      maker: '그립그랩',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '장갑'
    }
  ];

const GlovesList = (props) => {
    return (
        <div className="list">
            {
                glovesinfo.map((helmet, i) => {
                    return <GloveCard
                                key={i}
                                image={helmet.image}
                                title={helmet.title}
                                author={helmet.lprice}
                                published={helmet.brand} />
                })
            }

        </div>

    )
}

export default GlovesList;