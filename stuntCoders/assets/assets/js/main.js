var menutext=["Home","Features","Service","Listed", "Contact"];
var jump = ["#index.html","#work","#housesWrapper","#neighborhoodWrapper","#footerWrapper"]
for(let i=0;i<menutext.length;i++){
 document.querySelector("#menuDiv").innerHTML+=`<li><a href="${jump[i]}"
id="${menutext[i]}">${menutext[i]}</a></li>`;
}


var starDiv = document.querySelector("#stars");

for(let i = 0; i < 5; i++){
    starDiv.innerHTML+=`<i class="fa fa-star"></i>`;
}

var ratingBottomPicturesSrc = ["assets/assets/img/me-undies-logo.svg","assets/assets/img/slack-logo.svg","assets/assets/img/d.png","assets/assets/img/woocommerce-logo.svg","assets/assets/img/sitepoint-logo.svg"];
var ratingBottomPicturesAlt = ["Me Undies","Slack","Amazon","Woocommerce","Sitepoint"];
for (let i = 0; i < ratingBottomPicturesSrc.length; i++){
    document.querySelector("#logos").innerHTML+=`<img class="pic" src="${ratingBottomPicturesSrc[i]}" alt="${ratingBottomPicturesAlt[i]}"/>`;
}

var howToPicturesSrc = ["assets/assets/img/cart-icon.svg","assets/assets/img/rent-icon.svg","assets/assets/img/seller-icon.svg"];
var howToPicturesAlt = ["Cart","Rent","Sell"];
var howToTitles = ["Buyer Guides","Renter Guides","Seller Guides"];
var howToLinks = ["How to buy  ","How to rent  ","How to sell  "];

var howToDiv = document.querySelector("#howTo");

for(let i = 0; i < howToPicturesSrc.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class","howToSection");
    howToDiv.appendChild(div);
    var pic=document.createElement("img");
    pic.setAttribute("class", "howToPic");
    pic.setAttribute("src", howToPicturesSrc[i]);
    pic.setAttribute("alt", howToPicturesAlt[i]);
    div.appendChild(pic);
    var txt=document.createElement("p");
    txt.setAttribute("class","howToUnderPicText");
    txt.innerHTML = howToTitles[i];
    div.appendChild(txt);
    var links = document.createElement("a");
    links.setAttribute("class","howToLinks");
    links.setAttribute("href","#");
    links.innerHTML = howToLinks[i] + `&#10230;`;
    div.appendChild(links);
}

var propertiesPicturesSrc = ["assets/assets/img/property-1.jpg","assets/assets/img/property-2.jpg","assets/assets/img/property-3.jpg"];
var propertiesPicturesAlt = ["House 1","House 2","House 3"];
var icons = ["fa fa-bed", "fa fa-bath", "fa fa-layer-group"];
var iconsText = ["5 Beds","2 Bath","2000 Sqft"];

var housesDiv = document.querySelector("#housesPictures");

for(let i = 0; i < propertiesPicturesSrc.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class","housesSection");
    housesDiv.appendChild(div);
    var pic=document.createElement("img");
    pic.setAttribute("class", "housesSectionPic");
    pic.setAttribute("src", propertiesPicturesSrc[i]);
    pic.setAttribute("alt", propertiesPicturesAlt[i]);
    div.appendChild(pic);
    var span1 = document.createElement("span");
    span1.setAttribute("id","propertiesSpan1");
    span1.innerHTML = "$35000";
    div.appendChild(span1);
    var span2 = document.createElement("span");
    span2.setAttribute("id","propertiesSpan2");
    span2.innerHTML = "8502 Preston Rd. Inglewood, Maine 98280";
    div.appendChild(span2);
    var iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "propertiserIconDiv");
    for(let j = 0; j < icons.length; j++){
        var span1 = document.createElement("span");
        span1.setAttribute("class", "spanIcons");
        var pack = document.createElement("p");
        pack.setAttribute("class", "packClass")
        var icon = document.createElement("i");
        icon.setAttribute("class",`${icons[j]} iconClass`);
        span1.appendChild(icon);
        pack.innerHTML=`${iconsText[j]}`;
        span1.appendChild(pack);
        iconDiv.appendChild(span1);
    }
    div.appendChild(iconDiv);
}

var numbers = ["2,500","5000+","170+"];
var numbersText = ["Homes For Sale","Homes Recently Sold","Price Reduced"];

var numbersDiv = document.querySelector("#numberWrapper");

for(let i = 0; i < numbers.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class","numbersSection");

    var p1 = document.createElement("p");
    p1.setAttribute("class", "numbersSectionTitle");
    p1.innerHTML = numbers[i];

    var p2 = document.createElement("p");
    p2.setAttribute("class", "numbersSectionDesc");
    p2.innerHTML = numbersText[i];

    div.appendChild(p1);
    div.appendChild(p2);
    numbersDiv.appendChild(div);
}

var footerTitles = ["Product", "Resources", "Company"];
var footerText = [["Listing", "Property", "Agents", "Blog"], ["Our Homes", "Member Stories", "Videos", "Free Trial"], ["Partnerships", "Terms of Use", "Privacy", "Sitemap"]];

var footerLeftDiv = document.querySelector("#footerLeft");

for(let i = 0; i < footerTitles.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class", "footerSection");
    var title = document.createElement("p");
    title.setAttribute("class", "footerTitle");
    title.innerHTML = footerTitles[i];
    div.appendChild(title);

    var desc = footerText[i];

    for(let j = 0; j < desc.length; j++){
        var a = document.createElement("a");
        a.setAttribute("class", "footerDesc");
        a.innerHTML = desc[j];
        div.appendChild(a);

    }
    footerLeftDiv.appendChild(div);
}

var soc=["fab fa-facebook-square","fab fa-twitter","fab fa-linkedin"];
var socL=["https://www.facebook.com/","https://www.twitter.com/","https://www.linkedin.com/"];
var footTh=document.getElementById("social");
for(let i=0;i<soc.length;i++){
 var socLi=document.createElement("li");
 footTh.appendChild(socLi);
 var hrf=document.createElement("a");
 hrf.setAttribute("href",socL[i]);
 socLi.appendChild(hrf);
 var ffi=document.createElement("i");
 hrf.appendChild(ffi);
 ffi.setAttribute("class",soc[i]);
}