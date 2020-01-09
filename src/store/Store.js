/* REDUX related imports*/

import { createStore } from "redux";
import reducer from "../reducers/RootReducer";

// Resource for the state

import sample1 from "../resources/sample1.jpg";
import sample2 from "../resources/sample2.jpg";
import logos from "../resources/logos.png";
import ceo from "../resources/person1.jpg";
import coo from "../resources/person2.jpg";
import cco from "../resources/person3.jpg";

// Initial State

const initialState = {
  shares: [],

  focussedShare: "",

  footerMenus: [
    {
      title: "Personal",
      items: ["Bank", "Borrow", "Invest", "Plan", "Other Services"]
    },
    {
      title: "Business",
      items: ["Bank", "Borrow", "Manage", "Plan", "Protect"]
    },
    {
      title: "Meet",
      items: ["About", "Meet Our Team", "Careers", "News", "Community"]
    },
    {
      title: "Help",
      items: [
        "Lost or Stolen Card",
        "Contact Us",
        "Locations",
        "Fraud Protection"
      ]
    }
  ],
  footerNavLinks: [
    "SOCIAL MEDIA",
    "MEDIA INQUIRIES",
    "PRIVACY POLICIES",
    "SITEMAP",
    "FDIC NOTICE",
    "INVESTOR INFORMATION"
  ],
  bannerData: {
    cardTitle: "All together now.",
    cardDescription:
      "NewDominion Bank is taking on our family name: Park National Bank. ",
    accountType: [
      "Personal Banking",
      "Business Banking",
      "Trust Online",
      "Online Credit Card Access",
      "OnDemand Payments",
      "Retirement Plans"
    ],
    cardBtnVariant: "link",
    cardBtnTitle: "LEARN MORE"
  },
  smallBanners: [
    {
      bgColor: sample1,
      cardTitle: "INVEST WITH US",
      cardDescription:
        "No matter how much you have to invest, you should feel confident in your choices and financial future."
    },
    {
      bgColor: sample2,
      cardTitle: "CUSTOMISED SOLUTIONS",
      cardDescription:
        "You know what you need and why it’s important. Our flexible loan options can help you with a variety of purchases."
    }
  ],
  serviceCards: [
    {
      cardTitle: "Stay Protected",
      cardDescription:
        "Peace of mind is a good feeling. Our accounts offer three types of overdraft prevention and protection."
    },
    {
      cardTitle: "Refinance Myths Busted",
      cardDescription:
        "It makes sense to refinance when you could save a lot of money. There are myths that make people think a refinance isn’t right for them."
    },
    {
      cardTitle: "24/7 Convenience",
      cardDescription:
        "Use our mobile banking app to quickly manage money on the go. Control your card. Set alerts. Deposit a check. And so much more!"
    }
  ],
  goals: [
    {
      cardTitle:
        "We'll invest in you long before there is any conversation around money.",
      cardDescription:
        "Our first priority is to understand you. Where you are in life. Where you want to go. We look for opportunities in places other banks may see challenges. But as a bank who sees every account as a name and face, not a series of numbers, what else would we do?"
    },
    {
      cardTitle: "Community Involvement",
      cardDescription:
        "The only way for a bank to truly give its customers the service they deserve is to be a part of their community. And when you belong to something as special as that, well, investing time and money in places just a few sidewalks away becomes the natural thing to do."
    }
  ],
  aboutBanner: {
    cardTitle: "About NewDominion Bank",
    cardDescription:
      "To learn about a bank, you’ve got to know the men and women behind it. We could talk up our financial offering or rattle off some corporate values — but at the end of the day, a bank without people is just a glorified safe. For more than a century, Park National has helped local families, businesses and communities achieve financial success with more confidence and ease. Our heritage is firmly rooted in values of service, integrity and local community commitment."
  },
  partOfImgUrls: [
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos,
    logos
  ],
  teamMembersData: [
    {
      image: ceo,
      name: "Abraham Melnon",
      position: "President"
    },
    {
      image: coo,
      name: "Winston Clinton",
      position: "Commercial Bank Executive"
    },
    {
      image: cco,
      name: "Henry David",
      position: "Chief Credit Officer"
    }
  ]
};

/* Creating the REDUX STORE const store */
export const store = createStore(reducer, initialState);
