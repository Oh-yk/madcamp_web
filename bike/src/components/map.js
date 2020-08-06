/*global kakao*/
import React, { Component } from 'react';
import { Collapse, Media, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, FormGroup, Input, TabContent,
    TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, CardHeader, UncontrolledDropdown} from 'reactstrap';
import { data } from "./data";
import ReviewForm from './review/reviewForm';
import ReviewList from './review/reviewList';
import * as d3 from "d3"
import { Container } from '../Container';
const margin = { top: 0, right: 0, bottom: 15, left: 50 }
const width = 700 - margin.left - margin.right
const height = 155 - margin.top - margin.bottom

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          latitude: 0,
          longitude: 0,
          route:0,
          route_name: '',
          review_begin: 0,
          review_end: 0,
          showButton: false,
          information: [
            //출발
            {
                id: 0,
                name: '이주훈',
                level_score: 1,
                view_score: 3,
                safety_score: 3,
                comment: "굿"
            },
            {
                id: 1,
                name: '오유경',
                level_score: 1,
                view_score: 4,
                safety_score: 5,
                comment: "메일 달리던 곳이라 좋아요^0^ 여행 시작해서 떨리네요"
            },{
                id: 2,
                name: '김경연',
                level_score: 4,
                view_score: 4,
                safety_score: 5,
                comment: "국토종주 하기에는 체력이 딸리네요. 포기하고 강남으로 아아나 마시러갑니다"
            },{
                id: 3,
                name: '김민규',
                level_score: 1,
                view_score: 4,
                safety_score: 5,
                comment: ""
            },{
                id: 4,
                name: '이상현',
                level_score: 1,
                view_score: 3,
                safety_score: 3,
                comment: "인증센터가 더 나은 곳에 있어야할 것 같다"
            },
            //문경새재
            {
                id: 5,
                name: '송윤민',
                level_score: 5,
                view_score: 5,
                safety_score: 2,
                comment: "힘들어서 매운탕 먹고 죽어라 오른 것 밖에 기억 안남."
            },{
                id: 6,
                name: '이수훈',
                level_score: 5,
                view_score: 3,
                safety_score: 3,
                comment: "죽을거같다"
            },{
                id: 7,
                name: '오현민',
                level_score: 5,
                view_score: 1,
                safety_score: 1,
                comment: "8월 7일 산사태로 내리막 엉망입니다"
            },
            //도착
            {
                id: 8,
                name: '오유경',
                level_score: 2,
                view_score: 2,
                safety_score: 5,
                comment: "다 와간다!!! 남부 내려오니 더워요"
            },
            {
                id: 9,
                name: '배주현',
                level_score: 1,
                view_score: 4,
                safety_score: 4,
                comment: "역에서 기차타고 집감. 너무 편하다"
            },
            {
                id: 10,
                name: '윤영일',
                level_score: 3,
                view_score: 3,
                safety_score: 4,
                comment: "휴게소에서 꿀떡파는데 맛있음"
            },               
          ],
          keyword: ''
        }
      }

    componentDidMount() {
        this.setState({ data }, () => this.drawChart())
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=18cc3e61199f83c6980100faf1d845bf&autoload=false&libraries=services";
        document.head.appendChild(script);
        
        script.onload = () => {
          kakao.maps.load(() => {
            let container = document.getElementById("Mymap");
            let options = {
              center: new kakao.maps.LatLng(36.3721, 127.3604),
              level: 6
            };
            var map = new kakao.maps.Map(container, options);
        
            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            var mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            var mapTypes = {
                terrain : kakao.maps.MapTypeId.TERRAIN,    
                traffic :  kakao.maps.MapTypeId.TRAFFIC,
                bicycle : kakao.maps.MapTypeId.BICYCLE,
                useDistrict : kakao.maps.MapTypeId.USE_DISTRICT
            };

            this.setOverlayMapTypeId = () => {
                var chkTerrain = document.getElementById('chkTerrain'),  
                    chkTraffic = document.getElementById('chkTraffic'),
                    chkBicycle = document.getElementById('chkBicycle'),
                    chkUseDistrict = document.getElementById('chkUseDistrict');
                
                // 지도 타입을 제거합니다
                for (var type in mapTypes) {
                    map.removeOverlayMapTypeId(mapTypes[type]);    
                }
            
                // 지적편집도정보 체크박스가 체크되어있으면 지도에 지적편집도정보 지도타입을 추가합니다
                if (chkUseDistrict.checked) {
                    map.addOverlayMapTypeId(mapTypes.useDistrict);    
                }
                
                // 지형정보 체크박스가 체크되어있으면 지도에 지형정보 지도타입을 추가합니다
                if (chkTerrain.checked) {
                    map.addOverlayMapTypeId(mapTypes.terrain);    
                }
                
                // 교통정보 체크박스가 체크되어있으면 지도에 교통정보 지도타입을 추가합니다
                if (chkTraffic.checked) {
                    map.addOverlayMapTypeId(mapTypes.traffic);    
                }
                
                // 자전거도로정보 체크박스가 체크되어있으면 지도에 자전거도로정보 지도타입을 추가합니다
                if (chkBicycle.checked) {
                    map.addOverlayMapTypeId(mapTypes.bicycle);    
                }
            }  

            // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
            var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}), 
            contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
            markers = [], // 마커를 담을 배열입니다
            currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

            // 장소 검색 객체를 생성합니다
            var ps = new kakao.maps.services.Places(map); 

            // 지도에 idle 이벤트를 등록합니다
            kakao.maps.event.addListener(map, 'idle', searchPlaces);

            // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
            contentNode.className = 'placeinfo_wrap';

            // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
            // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
            addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
            addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

            // 커스텀 오버레이 컨텐츠를 설정합니다
            placeOverlay.setContent(contentNode);  

            // 각 카테고리에 클릭 이벤트를 등록합니다
            addCategoryClickEvent();

            // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
            function addEventHandle(target, type, callback) {
                if (target.addEventListener) {
                    target.addEventListener(type, callback);
                } else {
                    target.attachEvent('on' + type, callback);
                }
            }

            // 카테고리 검색을 요청하는 함수입니다
            function searchPlaces() {
                if (!currCategory) {
                    return;
                }

                // 커스텀 오버레이를 숨깁니다 
                placeOverlay.setMap(null);

                // 지도에 표시되고 있는 마커를 제거합니다
                removeMarker();

                ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true}); 
            }

            // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
            function placesSearchCB(data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {

                    // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
                    displayPlaces(data);
                } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                    // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

                } else if (status === kakao.maps.services.Status.ERROR) {
                    // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
                    
                }
            }

            // 지도에 마커를 표출하는 함수입니다
            function displayPlaces(places) {

                // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
                // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
                var order = document.getElementById(currCategory).getAttribute('data-order');

                for ( var i=0; i<places.length; i++ ) {

                        // 마커를 생성하고 지도에 표시합니다
                        var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

                        // 마커와 검색결과 항목을 클릭 했을 때
                        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                        (function(marker, place) {
                            kakao.maps.event.addListener(marker, 'click', function() {
                                displayPlaceInfo(place);
                            });
                        })(marker, places[i]);
                }
            }

            // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
            function addMarker(position, order) {
                var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                    imageSize = new kakao.maps.Size(27, 28),  // 마커 이미지의 크기
                    imgOptions =  {
                        spriteSize : new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
                        spriteOrigin : new kakao.maps.Point(46, (order*36)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                        offset: new kakao.maps.Point(11, 28) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                    },
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                        marker = new kakao.maps.Marker({
                        position: position, // 마커의 위치
                        image: markerImage 
                    });

                marker.setMap(map); // 지도 위에 마커를 표출합니다
                markers.push(marker);  // 배열에 생성된 마커를 추가합니다

                return marker;
            }

            // 지도 위에 표시되고 있는 마커를 모두 제거합니다
            function removeMarker() {
                for ( var i = 0; i < markers.length; i++ ) {
                    markers[i].setMap(null);
                }   
                markers = [];
            }

            // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
            function displayPlaceInfo (place) {
                var content = '<div class="placeinfo">' +
                                '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';   

                if (place.road_address_name) {
                    content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                                '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
                }  else {
                    content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
                }                

                content += '    <span class="tel">' + place.phone + '</span>' + 
                            '</div>' + 
                            '<div class="after"></div>';

                contentNode.innerHTML = content;
                placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
                placeOverlay.setMap(map);  
            }


            // 각 카테고리에 클릭 이벤트를 등록합니다
            function addCategoryClickEvent() {
                var category = document.getElementById('category'),
                    children = category.children;

                for (var i=0; i<children.length; i++) {
                    children[i].onclick = onClickCategory;
                }
            }

            // 카테고리를 클릭했을 때 호출되는 함수입니다
            function onClickCategory() {
                var id = this.id,
                    className = this.className;

                placeOverlay.setMap(null);

                if (className === 'on') {
                    currCategory = '';
                    changeCategoryClass();
                    removeMarker();
                } else {
                    currCategory = id;
                    changeCategoryClass(this);
                    searchPlaces();
                }
            }

            // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
            function changeCategoryClass(el) {
                var category = document.getElementById('category'),
                    children = category.children,
                    i;

                for ( i=0; i<children.length; i++ ) {
                    children[i].className = '';
                }

                if (el) {
                    el.className = 'on';
                } 
            }
            
            this.loadMap = () => {
                // 이동할 위도 경도 위치를 생성합니다 
                var moveLatLon = new kakao.maps.LatLng(36.43726271, 128.0519829);
                this.setState({showButton: true})

                // 지도 중심을 부드럽게 이동시킵니다
                // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                map.setLevel(12);
                map.panTo(moveLatLon);  
            }

            this.panTo = (lat, long, level) => {
                // 이동할 위도 경도 위치를 생성합니다 
                var moveLatLon = new kakao.maps.LatLng(lat, long);
                
                // 지도 중심을 부드럽게 이동시킵니다
                // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
                map.setLevel(level);
                map.panTo(moveLatLon);     
            }

            this.panOut = () => {
                var moveLatLon = kakao.maps.LatLng(36.43726271, 128.0519829);
                map.setLevel(12);
                map.panTo(moveLatLon); 
            }

            var colors = ["green", ""]
            var segments = []
            for ( var i=0; i<22; i++) {
                var movePath = []
                for ( var j=0; j<8; j++ ) {
                    movePath.push(new kakao.maps.LatLng(data[510*i+64*j].latitude, data[510*i+64*j].longitude))
                    var polyline = new kakao.maps.Polyline({
                        path: movePath,
                        strokeColor:"red",
                        strokeOpacity: 0.8,
                        strokStyle: "solid"
                    });
                    polyline.setMap(map);
                    segments.push(polyline)
                }
            }
          });
        };
    }


    drawChart = () => {
        const { data } = this.state
        const xScale = d3
          .scaleLinear()
          .domain(d3.extent(data, d => d.distance))
          .range([0, width])
        const yScale = d3
          .scaleLinear()
          .domain([d3.min(data, co => co.altitude), d3.max(data, co => co.altitude)])
          .range([height, 0])
        const svg = d3
          .select("#elevationChart")
          .append("svg")
          .attr("width", 700)
          .attr("height", 155)
          .attr("viewBox", "0 0 " + width + " " + 160)
          .attr("preserveAspectRatio", "xMinYMid")
          .append("g")
          .attr("transform", `translate(${margin.left}, 2.5)`)
        svg
          .append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(xScale))
        svg.append("g").call(d3.axisLeft(yScale))
    
        const area = d3
        .area()
        .x(d => xScale(d.distance))
        .y0(yScale(yScale.domain()[0]))
        .y1(d => yScale(d.altitude)).curve(d3.curveCatmullRom.alpha(0.005))
        
        // 2.)
        svg
        .append("path")
        .attr("d", area(data))
        .attr("class", "chartLine")
        .style("stroke", "#787979")
        .style("stroke-opacity", 0.2)
        .style("stroke-width", 1)
        .style("fill", "#787979")
        .style("fill-opacity", 0.2)
    
        var isClicked = false;
    
        const section1 = svg
        .append("rect")
        .attr("class", "section1")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
          if(!isClicked){
            section1.attr("fill", "green")
          }
          crossBar.style("display", null)
          infoBox.style("display", null)
         })
        .on("mouseout", function() {
          if(!isClicked){
            section1.attr("fill", "white")
          }
          crossBar.style("display", "none")
          infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 1})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section1.attr("fill", "blue")
        })
        
        const section2 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 28.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section2.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
           })
          .on("mouseout", function() {
            if(!isClicked){
                section2.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
          })
          .on("mousemove", mousemove)
          .on("click", () => {
              isClicked = !isClicked;
              if (isClicked) {
                  this.setState({route: 2})
                  this.handleShow();
                  this.panTo(37.123451, 128.235254, 7);
              } else {
                  this.handleShowAll();
                  this.panOut();
              }
              section2.attr("fill", "blue")
          })

        const section3 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 57)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section3.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
           })
          .on("mouseout", function() {
            if(!isClicked){
                section3.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
          })
          .on("mousemove", mousemove)
          .on("click", () => {
              isClicked = !isClicked;
              if (isClicked) {
                  this.setState({route: 3})
                  this.handleShow();
                  this.panTo(37.123451, 128.235254, 7);
              } else {
                  this.handleShowAll();
                  this.panOut();
              }
              section3.attr("fill", "blue")
          })
    
        const section4 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 85.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
            section4.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
            section4.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 4})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section4.attr("fill", "blue")
        })
    
        const section5 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 114)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section5.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section5.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 5})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section5.attr("fill", "blue")
        })

        const section6 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 142.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section6.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section6.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 6})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section6.attr("fill", "blue")
        })

        const section7 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 171)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section7.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section7.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 7})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section7.attr("fill", "blue")
        })

        const section8 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 199.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section8.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section8.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 8})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section8.attr("fill", "blue")
        })

        const section9 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 228)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section9.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section9.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 9})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section9.attr("fill", "blue")
        })

        const section10 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 256.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section10.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section10.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 10})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section10.attr("fill", "blue")
        })

        const section11 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 285)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section11.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section11.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 11})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section11.attr("fill", "blue")
        })

        const section12 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 313.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section12.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section12.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 12})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section12.attr("fill", "blue")
        })

        const section13 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 342)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section13.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section13.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 13})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section13.attr("fill", "blue")
        })

        const section14 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 370.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section14.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section14.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 14})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section14.attr("fill", "blue")
        })

        const section15 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 399)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section15.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section15.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 15})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section15.attr("fill", "blue")
        })

        const section16 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 427.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section16.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section16.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 16})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section16.attr("fill", "blue")
        })

        const section17 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 456)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section17.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section17.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 17})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section17.attr("fill", "blue")
        })

        const section18 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 484.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section18.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section18.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 18})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section18.attr("fill", "blue")
        })

        const section19 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 513)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section19.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section19.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 19})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section19.attr("fill", "blue")
        })

        const section20 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 541.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section20.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section20.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 20})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section20.attr("fill", "blue")
        })
      
        const section21 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 570)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section21.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section21.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 21})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section21.attr("fill", "blue")
        })        

        const section22 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 598.5)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section22.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section22.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 22})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section22.attr("fill", "blue")
        }) 

        const section23 = svg
        .append("rect")
        .attr("class", "section2")
        .attr("width", 28.5)
        .attr("height", height)
        .attr("x", 627)
        .attr("fill", "white")
        .style("fill-opacity", 0.15)
        .on("mouseover", function() {
            if(!isClicked){
                section23.attr("fill", "green")
            }
            crossBar.style("display", null)
            infoBox.style("display", null)
            })
        .on("mouseout", function() {
            if(!isClicked){
                section23.attr("fill", "white")
            }
            crossBar.style("display", "none")
            infoBox.style("display", "none")
        })
        .on("mousemove", mousemove)
        .on("click", () => {
            isClicked = !isClicked;
            if (isClicked) {
                this.setState({route: 23})
                this.handleShow();
                this.panTo(37.123451, 128.235254, 7);
            } else {
                this.handleShowAll();
                this.panOut();
            }
            section23.attr("fill", "blue")
        }) 

        const crossBar = svg
        .append("g")
        .attr("class", "crossBar")
        .style("display", "none")
        crossBar
        .append("line")
        .attr("x1", 2)
        .attr("x2", 0)
        .attr("y1", height)
        .attr("y2", 0)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        const infoBox = svg
        .append("g")
        .attr("class", "infoBox")
        .style("display", "none")
        infoBox
        .append("rect")
        .attr("x", 0)
        .attr("y", 10)
        .style("height", 15)
        .style("width", 125)
        .style("fill", "none")
        const infoBoxElevation = infoBox
        .append("text")
        .attr("x", 4)
        .attr("y", 0)
        .attr("class", "infoBoxElevation")
        infoBoxElevation
        .append("tspan")
        .attr("class", "infoBoxElevationTitle")
        .text("고도: ")
        infoBoxElevation.append("tspan").attr("class", "infoBoxElevationValue")
        const infoBoxDistance = infoBox
        .append("text")
        .attr("x", 4)
        .attr("y", 15)
        .attr("class", "infoBoxDistance")
        infoBoxDistance
        .append("tspan")
        .attr("class", "infoBoxDistanceTitle")
        .text("거리: ")
        infoBoxDistance.append("tspan").attr("class", "infoBoxDistanceValue")
    
        const bisect = d3.bisector(function(d) {
            return d.distance
          }).left
    
        function mousemove() {
            const x0 = xScale.invert(d3.mouse(this)[0])
            const i = bisect(data, x0, 1)
            const d0 = data[i - 1]
            const d1 = data[i]
            const d = !d1 ? d0 : x0 - d0.distance > d1.distance - x0 ? d1 : d0
            crossBar.attr("transform", `translate(${xScale(d.distance)}, 0)`)
            infoBox.attr("transform", `translate(${xScale(d.distance) + 10}, 12.5)`)
            infoBox
              .select(".infoBoxElevationValue")
              .text(d3.format(",.0f")(d.altitude) + " m")
            infoBox
              .select(".infoBoxDistanceValue")
              .text(d3.format(",.0f")(d.distance)+ " km")
            return null
          }
    
        // Let’s write functions that handle spacing our ticks out:
        const xAxisTicks = 8
        const yAxisTicks = 6
        const makeXGridlines = xScale => d3.axisBottom(xScale).ticks(xAxisTicks)
        const makeYGridlines = yScale => d3.axisLeft(yScale).ticks(yAxisTicks)
        d3.axisBottom(xScale)
        // ...
        .ticks(yAxisTicks)
        .tickSize(0)
        .tickPadding(9)
        d3.axisLeft(yScale)
        // ...
        .tickSize(0)
        .tickPadding(8)
        .ticks(yAxisTicks)
    
      }

    onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.level_score.value);
    }

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
          information: information.concat({ id: this.id++, ...data })
        })
      }
      handleChange = (e) => {
        const { information } = this.state;
        this.setState({
          keyword: e.target.value,
        });
      }
      handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
          information: information.filter(info => info.id !== id)
        })
      }
      handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
          information: information.map(
            info => id === info.id
              ? { ...info, ...data}
              : info
          )
        })
      }
      handleShow() {
          if (this.state.route == 1) {
            this.setState({review_begin: 0, review_end: 5})
          }
          else if (this.state.route == 9) {
            this.setState({review_begin: 5, review_end: 8})
          }
          else if (this.state.route == 20) {
            this.setState({review_begin: 8, review_end: 10})
          }
      }
      handleShowAll() {
        this.setState({review_begin: 0, review_end: 0})
    }


    render() {
        const { information, keyword } = this.state;
        const reviews = this.state.information.slice(this.state.review_begin, this.state.review_end)

        return(
            <div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>내 경로</CardHeader>
                            <CardBody>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        자전거길
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => this.loadMap()}>서울-부산 자전거길</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>아라 자전거길</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>남한강 자전거길</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>금강 자전거길</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>제주환상 자전거길</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <div id="Mymap" style={{ width: "47vw", height: "70vh" }}></div>
                                <ul id="category">
                                    <li id="MT1" data-order="1"> 
                                        <span class="category_bg mart"></span>
                                        마트
                                    </li>  
                                    <li id="BK9" data-order="0"> 
                                        <span class="category_bg bank"></span>
                                        은행
                                    </li>       
                                    <li id="PM9" data-order="2"> 
                                        <span class="category_bg pharmacy"></span>
                                        약국
                                    </li>  
                                    <li id="OL7" data-order="3"> 
                                        <span class="category_bg oil"></span>
                                        주유소
                                    </li>  
                                    <li id="CE7" data-order="4"> 
                                        <span class="category_bg cafe"></span>
                                        카페
                                    </li>  
                                    <li id="CS2" data-order="5"> 
                                        <span class="category_bg store"></span>
                                        편의점
                                    </li>      
                                </ul>
                                <input type="checkbox" id="chkUseDistrict" onClick={() => this.setOverlayMapTypeId()}/> 지적편집도 정보 보기 
                                <input type="checkbox" id="chkTerrain" onClick={() => this.setOverlayMapTypeId()}/> 지형정보 보기 
                                <input type="checkbox" id="chkTraffic" onClick={() => this.setOverlayMapTypeId()}/> 교통정보 보기 
                                <input type="checkbox" id="chkBicycle" onClick={() => this.setOverlayMapTypeId()}/> 자전거도로 정보 보기 
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='mt-5' style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}>
                        <h2>서울-부산 자전거길</h2>
                        <div>무려 600 km를 육박하는 이 자전거길은 한국 자전거 여행자의 최종 관문이라 할 수 있습니다. 여의도 마리나부터 부산시청까지 5~7일을 거쳐 죽음의 고비로 불리는 문경새재를 통과해야 합니다.
                             체력을 유지하면서 포기하지 않고 꾸준히 매일 나아가는게 중요한 길입니다.</div>
                        <hr/>
                        <div><h3>고도 정보</h3></div>
                        <div className="row">
                            <div>
                                <h5>총 거리</h5>
                                <h7>571.7 km</h7>
                                <h5>최저/최고 고도</h5>
                                <h7>1 m / 539 m</h7>
                                <h5>예상 시간</h5>
                                <h7>31시간 57분</h7>
                                <h5>칼로리 소비량</h5>
                                <h7>11,502 kcal</h7>
                            </div>
                            <div style={{display: "flex"}}>
                            {this.state.data.length > 0 && <div id="elevationChart" />}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <h3>리뷰</h3>
                            <Container triggerText="리뷰 작성" onSubmit={this.onSubmit} />
                        </div>
                        <ReviewList
                            data={reviews}
                            onRemove={this.handleRemove}
                            onUpdate={this.handleUpdate}
                        />
                    </Col>
                </Row>
            </div>
        );
    }   
}
export default Map;