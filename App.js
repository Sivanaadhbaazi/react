    import React from 'react'
    import ReactDOM  from 'react-dom/client'

    const Header = () => (
        <div className="header">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="navbar">
                <ul className="items">
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Contatc us</li>
                    <li>Cart</li>

                </ul>

            </div>
        </div>
    );

    const styleCard = {
        backgroundColor: "#f0f0f0",
    };

    const restData = [{
        "info": {
        "id": "439120",
        "name": "Hotel Swagath Grand - Dhanturi Group of Hotels",
        "cloudinaryImageId": "padaszixbtkymakkbqpr",
        "locality": "Kukatpally",
        "areaName": "Kukatpally",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "Tandoor",
        "Chinese",
        "Seafood",
        "Beverages",
        "Desserts"
        ],
        "avgRating": 3.9,
        "parentId": "351556",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-12-25 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
        "context": "seo-data-47f36a5d-1ea5-4af7-a4e2-564c2e5b1982"
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-swagath-grand-dhanturi-group-of-hotels-kukatpally-hyderabad-439120",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {

        "info": {
"id": "4123",
"name": "Hotel Sitara Grand - Dhanturi Group of hotels",
"cloudinaryImageId": "o7bpk54rns2rygy39myq",
"locality": "KPHB Phase 1",
"areaName": "Kukatpally",
"costForTwo": "₹300 for two",
"cuisines": [
"Biryani",
"Chinese",
"South Indian",
"North Indian",
"Tandoor"
],
"avgRating": 4,
"parentId": "351561",
"avgRatingString": "4.0",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 1.3,
"serviceability": "SERVICEABLE",
"slaString": "21 mins",
"lastMileTravelString": "1.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2023-12-25 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-47f36a5d-1ea5-4af7-a4e2-564c2e5b1982"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/hotel-sitara-grand-dhanturi-group-of-hotels-kphb-phase-1-kukatpally-hyderabad-4123",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
    
    
    ];

    const RestroCard = (props) => {
        
        const { id,name,cuisines,avgRatingString,costForTwo,cloudinaryImageId} = props.resData.info;
        
        return(
            <div className="restrocard"  style={styleCard}>
                <div className="image">
                    <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId }/>

                </div>
                <div className="details">
                    <h4 className='title'>{name} </h4>
                    <h4>{cuisines.join(",")}</h4>
                    <h4> {avgRatingString} </h4>
                    <h4> {costForTwo} </h4>
                </div>
            </div>
        )
    };
    
    const Body = () => (
        <div className="body">
            <div className='search'></div>
            <div className="resConatainer">
                {
                    restData.map((resturant) => (
                        <RestroCard key= { resturant.info.id } resData={ resturant } />
                    )) 

                }
                                     
                                   
            </div>
        </div>
    );

    const AppLayout = () => {

        return(
            <div className = "app">
                <Header/>
                <Body></Body>
            </div>

        )
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>)