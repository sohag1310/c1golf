export interface NewsItem {
  tag: string;
  t: string;
  ex?: string;
  by?: string;
  img: string;
  href: string;
  f?: number;
  lock?: number;
}

export interface FavItem {
  title: string;
  href: string;
  img: string;
}

export interface ArticleCardItem {
  title: string;
  href: string;
  img: string;
  author: string;
}

export interface SeriesItem {
  title: string;
  subtitle: string;
  href: string;
}

export interface VideoItem {
  key: string;
  title: string;
  duration: string;
  img: string;
  streamUrl: string;
  description: string;
  streamOk?: boolean;
}

export interface PodcastItem {
  name: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  img: string;
  youtubeUrl: string;
  spotifyUrl: string;
}

export interface RankEntry {
  name: string;
  region: string;
  href: string;
}

export interface LifestyleTile {
  title: string;
  subtitle: string;
  img: string;
  href: string;
  big?: boolean;
}

export interface ShopCollection {
  title: string;
  subtitle: string;
  img: string;
  href: string;
}

export interface ShopCategory {
  label: string;
  href: string;
}

export interface MenuGroup {
  t: string;
  h: string;
  i: string[];
}

export const COURSE_FINDER_IMG = "/assets/golf/coure-finder-homepage-1x1-1_ce60ee.jpg";
export const INSIDE_GOLF_COLLAGE_IMG = "/assets/golf/InsideGOLF-Premium-Collage_3_16_26-2_c59f15.avif";

export const NEWS: NewsItem[] = [
  {
    "tag": "Feature",
    "t": "How a dazzling New England college course gave an extra dose of golf gratitude",
    "ex": "On a crisp afternoon at Taconic Golf Club, a quiet walk delivers golf in its purest form.",
    "by": "By GOLF Staff",
    "img": "/assets/golf/taconic_2069f9.webp",
    "href": "https://golf.com/travel/dazzling-new-england-course-golf-gratitude/",
    "f": 1
  },
  {
    "tag": "Courses",
    "t": "7 things to know about Skins Game host course Atlantic Fields",
    "by": "By GOLF Staff",
    "img": "/assets/golf/Atlantic-Fields-Club_aace35.webp",
    "href": "https://golf.com/news/7-things-to-know-skins-game-host-course-atlantic-fields/"
  },
  {
    "tag": "Travel",
    "t": "Rater Confidential: Our favorite newcomers on the U.S. Top 100 list",
    "by": "By GOLF Staff",
    "img": "/assets/golf/yale-2_0db77e.webp",
    "href": "https://golf.com/travel/rater-confidential-top-100-newcomers-favorites/",
    "lock": 1
  },
  {
    "tag": "Instruction",
    "t": "How to easily shoot lower scores without changing your swing",
    "by": "By GOLF Staff",
    "img": "/assets/golf/happy-golfer_e2ee21.jpg",
    "href": "https://golf.com/instruction/easily-shoot-lower-scores-without-changing-swing/"
  },
  {
    "tag": "Year in Review",
    "t": "2026 Turkey Awards: The most unsavory golf moments of the year",
    "by": "By GOLF Staff",
    "img": "/assets/golf/sergio-garcias-scaled_1f8492.webp",
    "href": "https://golf.com/news/turkey-awards-2026-bad-behavior-codes-conduct/"
  }
];

export const FAVS: FavItem[] = [
  {
    "title": "2026 Farmers Insurance Skins Game: How to watch the action on Black Friday",
    "href": "https://golf.com/news/2026-farmers-insurance-skins-game-how-watch-friday/",
    "img": "/assets/golf/brooks-koepka-justin-thomas-skins-game_61c6cd.webp"
  },
  {
    "title": "How Bounty Club cracked GOLF's list of Top 100 Courses in the U.S.",
    "href": "https://golf.com/travel/bounty-club-rob-collins-tad-king-us-top-100/",
    "img": "/assets/golf/bounty-club_d40ce6.webp"
  },
  {
    "title": "Biggest risers (and fallers) on our new Top 100 Courses in the U.S. list",
    "href": "https://golf.com/travel/biggest-risers-fallers-top-100-courses-us/",
    "img": "/assets/golf/FINAL_caprock-ranch-brian-oar-15-16_f6a869.jpg"
  },
  {
    "title": "Brooks Koepka swipes Bryson DeChambeau over match fail: 'Didn't hole a putt the entire time'",
    "href": "https://golf.com/news/brooks-koepka-swipes-bryson-dechambeau-match-fail/",
    "img": "/assets/golf/brooks-koepka-bryson-dechambeau-swipe_7ca576.webp"
  },
  {
    "title": "50 golf courses that *just* missed making our latest Top 100 Courses ranking",
    "href": "https://golf.com/travel/50-golf-courses-just-missed-top-100-ranking/",
    "img": "/assets/golf/fox-chapel-hole_4130e5.jpg"
  }
];

export const INST: Record<string, ArticleCardItem[]> = {
  "Driving": [
    {
      "title": "The right (and wrong) way to shift your pressure for longer drives",
      "href": "https://golf.com/instruction/driving/right-way-pressure-shift-longer-drives/",
      "img": "/assets/golf/trent-wearner-pressure_2eb567.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Johnny Miller's best tip for never losing a tee shot out of bounds",
      "href": "https://golf.com/instruction/driving/johnny-miller-never-lose-tee-shot-timeless-tips/",
      "img": "/assets/golf/johnny-miller-timeless-tips_cd7cbe.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Greg Norman's 3 tips for driving the ball long and straight",
      "href": "https://golf.com/instruction/driving/greg-norman-tips-drive-ball-long-straight-timeless-tips/",
      "img": "/assets/golf/greg-norman-timeless-tips_ad78f0.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "What's the optimal tee height for maximizing driving distance?",
      "href": "https://golf.com/instruction/driving/optimal-tee-height-maximizing-driver-distance-timeless-tips/",
      "img": "/assets/golf/golfer-teeing-up-ball_95433c.jpg",
      "author": "GOLF Staff"
    }
  ],
  "Approach Shots": [
    {
      "title": "Lee Trevino explains how to hit approach shots with more spin",
      "href": "https://golf.com/instruction/approach-shots/lee-trevino-approach-shots-more-spin-timeless-tips/",
      "img": "/assets/golf/lee-trevino-timeless-tips_28b8e3.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Fred Couples shares his 5 best tips for hitting crisp iron shots",
      "href": "https://golf.com/instruction/approach-shots/fred-couples-best-tips-iron-shots-timeless-tips/",
      "img": "/assets/golf/fred-couples-timeless-tips_d7f2a7.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Find the center of your stance for better contact with your irons",
      "href": "https://golf.com/instruction/approach-shots/find-center-stance-better-contact-irons/",
      "img": "/assets/golf/center-stance-shaving-strokes_c9f3d4.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Johnny Miller's 5 moves you can use to become an elite ball striker",
      "href": "https://golf.com/instruction/approach-shots/johnny-miller-five-moves-elite-ball-striker/",
      "img": "/assets/golf/johnny-miller-timeless-tips_cd7cbe.jpg",
      "author": "GOLF Staff"
    }
  ],
  "Bunker Shots": [
    {
      "title": "The 2 best drills for practicing bunker shots, according to a bunker expert",
      "href": "https://golf.com/instruction/bunker-shots/two-best-drills-practicing-bunker-shots/",
      "img": "/assets/golf/armitage-bunker-play-smart_0f01dd.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "This common mistake kills your bunker game. Here's how to fix it",
      "href": "https://golf.com/instruction/bunker-shots/common-mistake-kills-bunker-game-shaving-strokes/",
      "img": "/assets/golf/bunker-shaving-strokes_b7e570.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "5 tips for hitting fairway bunker shots with confidence",
      "href": "https://golf.com/instruction/bunker-shots/five-tips-hit-fairway-bunker-shots-with-confidence/",
      "img": "/assets/golf/10-ways-conquer-fairway-bunkers-kellie-s_78b00e.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "How to change bunker-shot distances — without changing your swing",
      "href": "https://golf.com/instruction/bunker-shots/change-distances-bunker-shots-without-different-swing/",
      "img": "/assets/golf/armitage-bunkers_82729b.webp",
      "author": "GOLF Staff"
    }
  ],
  "Short Game": [
    {
      "title": "This common chipping mistake makes solid contact harder to achieve",
      "href": "https://golf.com/instruction/short-game/common-chipping-mistake-solid-contact-harder/",
      "img": "/assets/golf/chiipping-correct-claude_b1a448.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Use this swing thought for crisp contact off tight lies around the green",
      "href": "https://golf.com/instruction/short-game/swing-thought-crisp-contact-tight-lies-around-green/",
      "img": "/assets/golf/DD-HTHES-open-faced-wedge_d3a829.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Is the bump-and-run *really* more reliable than a chip shot?",
      "href": "https://golf.com/instruction/short-game/is-bump-and-run-more-reliable-than-chip/",
      "img": "/assets/golf/bump-and-run-scaled_6575c6.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "The best way to learn how to change trajectories with your wedges",
      "href": "https://golf.com/instruction/short-game/best-way-learn-change-trajectories-wedges/",
      "img": "/assets/golf/ramp-drill_034a6e.webp",
      "author": "GOLF Staff"
    }
  ],
  "Putting": [
    {
      "title": "How a Tour putting coach fixed my putting with 2 small adjustments",
      "href": "https://golf.com/instruction/putting/stephen-sweeney-shares-improved-putting-setup/",
      "img": "/assets/golf/putting-setup-ft-scaled_73f0f7.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "This Tour coach's putting drill changed the way I practice",
      "href": "https://golf.com/instruction/putting/sweeney-putting-drill-changed-way-i-practice/",
      "img": "/assets/golf/sweeney-drill-scaled_1cb0ec.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "This training aid helps you dial in the most important putting keys",
      "href": "https://golf.com/instruction/putting/why-golf-putting-thing-dials-in/",
      "img": "/assets/golf/putting-thing_7b3406.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "This putting guru’s simple drill helped me make more putts immediately",
      "href": "https://golf.com/instruction/putting/putting-gurus-drill-make-more-putts/",
      "img": "/assets/golf/putting-drill-scaled_c7ac49.webp",
      "author": "GOLF Staff"
    }
  ],
  "Rules": [
    {
      "title": "Rules Guy: Can I use my ball marker as a focal point while putting?",
      "href": "https://golf.com/instruction/rules/rules-guy-use-ball-mark-focal-point-while-putting/",
      "img": "/assets/golf/Putter-with-ball-mark_489f1e.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Rules Guy: Is it legal to hit a putt while walking?",
      "href": "https://golf.com/instruction/rules/rules-guy-legal-hit-putt-while-walking/",
      "img": "/assets/golf/putting-while-walking_12f1ce.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Rules Guy: Is it a penalty to move a tee marker?",
      "href": "https://golf.com/instruction/rules/penalty-move-tee-marker-rules-guy/",
      "img": "/assets/golf/tee-marker-rules-guy_93846d.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Rules Guy: My tee shot ricocheted into a pond behind me. Where should I hit from next?",
      "href": "https://golf.com/instruction/rules/tee-shot-ricochet-pond-behind-where-hit-next-rules/",
      "img": "/assets/golf/golfer-hitting-over-water_3a705a.webp",
      "author": "GOLF Staff"
    }
  ],
  "Fitness": [
    {
      "title": "Working out helped me add more than just yards off the tee",
      "href": "https://golf.com/instruction/fitness/working-out-more-than-add-yards-off-tee/",
      "img": "/assets/golf/gym-scaled_ecd7cf.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "What a Tour-level body assessment revealed about this 8-handicap",
      "href": "https://golf.com/instruction/fitness/eight-handicap-gets-tour-level-body-assessment/",
      "img": "/assets/golf/TPI-Thumb-V1_0ce0c9.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "How high-tech mobility analysis diagnosed this golfer's swing flaws",
      "href": "https://golf.com/instruction/fitness/high-tech-mobility-analysis-diagnosed-golfers-swing-flaws/",
      "img": "/assets/golf/proscreen-ft-shaving-strokes_9c117d.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "5 exercises every golfer should do to improve their golf games",
      "href": "https://golf.com/instruction/fitness/five-exercises-every-golfer-should-do/",
      "img": "/assets/golf/landmind-press_57742f.jpg",
      "author": "GOLF Staff"
    }
  ]
};

export const ISER: SeriesItem[] = [
  { title: "Top 100 Teachers", subtitle: "Lessons from the best", href: "https://golf.com/instruction/golf-magazine-top-100-teachers-america-26-27/" },
  { title: "The Lab", subtitle: "Putting deep dives", href: "https://golf.com/the-lab-with-stephen-sweeney/" },
  { title: "Rules Guy", subtitle: "Your questions answered", href: "https://golf.com/instruction/rules" },
  { title: "The Etiquetteist", subtitle: "Play like you belong", href: "https://golf.com/etiquetteist/" },
  { title: "Emergency 9", subtitle: "Fix it fast", href: "https://golf.com/instruction/" },
  { title: "Warming Up", subtitle: "Range sessions with pros", href: "https://golf.com/video/" },
  { title: "Play Smart", subtitle: "Strategy and tips", href: "https://golf.com/instruction/" },
  { title: "Pros Teaching Joes", subtitle: "Pros coach amateurs", href: "https://golf.com/pros-teaching-joes" }
];

export const GEAR: Record<string, ArticleCardItem[]> = {
  "Drivers": [
    {
      "title": "Davis Love III reveals the equipment change that transformed his game | Tour Validated",
      "href": "https://golf.com/gear/drivers/davis-love-iii-equipment-tour-validated/",
      "img": "/assets/golf/davis_love_iii_fairway_metal_8f1ebe.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Ping's 2027 driver lineup hits USGA conforming list, includes new G450 mini driver",
      "href": "https://golf.com/gear/drivers/ping-g450-usga-conforming-list/",
      "img": "/assets/golf/PING-G450-COVER_889909.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Rory McIlroy's biggest weapon is in his hotel room this week",
      "href": "https://golf.com/gear/drivers/rory-mcilroys-biggest-weapon-hotel-room/",
      "img": "/assets/golf/RoryMcIlroyIndia2Iron-copy_f9dc4d.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Srixon rethought its whole process for new ZXi RKT metalwoods",
      "href": "https://golf.com/gear/drivers/srixon-zxi-rkt-metalwoods-rethought-process/",
      "img": "/assets/golf/ZXiRKTCore_65cf14.webp",
      "author": "GOLF Staff"
    }
  ],
  "Irons": [
    {
      "title": "Take 25 percent off Miura CB-302 irons for a limited time!",
      "href": "https://golf.com/gear/irons/take-25-percent-off-miura-cb-302-irons-limited-time/",
      "img": "/assets/golf/26-11-19_FJ_BFCM_Miura_CB-302_Irons_Sale_78b704.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "McLaren irons go Black: New DLC finish for Series 1 and 3",
      "href": "https://golf.com/gear/irons/mclaren-irons-black-dlc-finish/",
      "img": "/assets/golf/mclaren-black-irons-1856x1044-1_dcd367.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Best irons of 2026: Top picks for every player category",
      "href": "https://golf.com/gear/irons/best-irons-2026-top-picks-every-iron-category/",
      "img": "/assets/golf/Best-of-Irons-2026_b27d62.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Inside Stephen Curry's Miura Irons: Bringing together golf mastery and basketball royalty",
      "href": "https://golf.com/gear/irons/inside-steph-currys-miura-irons/",
      "img": "/assets/golf/MiuraxCurry_2_02fe0b.webp",
      "author": "GOLF Staff"
    }
  ],
  "Hybrids": [
    {
      "title": "Titleist’s new GTS hybrids hitting the range on PGA Tour this week",
      "href": "https://golf.com/gear/hybrids/titleists-new-gts-hybrids-on-tour/",
      "img": "/assets/golf/GTS_Hybrids_d507d1.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "The year's best-selling hybrid launches high to hold the green",
      "href": "https://golf.com/gear/hybrids/years-best-selling-hybrid-ping-g440/",
      "img": "/assets/golf/ping-g440-hybrid-1_c46d92.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Callaway's 2025 Apex Utility series goes back to a classic",
      "href": "https://golf.com/gear/hybrids/callaway-2025-apex-utility-series/",
      "img": "/assets/golf/Apex2025Utilities_c04cdc.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "PXG unveils new Lightning lineup of drivers, fairway woods, hybrids",
      "href": "https://golf.com/gear/new-pxg-lightning-metal-woods/",
      "img": "/assets/golf/PXG-Lightning-Drivers_1c53cd.jpg",
      "author": "GOLF Staff"
    }
  ],
  "Wedges": [
    {
      "title": "Going Home: Why the Cleveland RTZ 2 wedges earned a spot in my bag",
      "href": "https://golf.com/gear/wedges/why-cleveland-rtz-2-wedges-earned-spot-my-bag/",
      "img": "/assets/golf/RTZ2_d93f62.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "This year's top-selling wedge should surprise absolutely nobody",
      "href": "https://golf.com/gear/wedges/2026-top-seller-vokey-wedges/",
      "img": "/assets/golf/justin-thomas-bunker-shot_cf781a.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Why this specific grind from Cleveland's new RTZ 2 lineup has me intrigued",
      "href": "https://golf.com/gear/wedges/cleveland-rtz2-grind-breakdown/",
      "img": "/assets/golf/RTZ-2-Grind-Testing_dd3dd0.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Which wedge bounce is best for your game? This 4-question quiz will tell you",
      "href": "https://golf.com/gear/wedges/which-wedge-bounce-best-quiz/",
      "img": "/assets/golf/wedge-bounce_0027b1.jpg",
      "author": "GOLF Staff"
    }
  ],
  "Putters": [
    {
      "title": "Save $100 on L.A.B. Golf's popular OZ putters",
      "href": "https://golf.com/gear/putters/save-big-lab-golf-oz-putters/",
      "img": "/assets/golf/OZ_1iHSSole_68c367.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "New Scotty Cameron blade and mid-mallet putters arrive on PGA Tour",
      "href": "https://golf.com/gear/putters/new-scotty-cameron-putters-arrive-rsm-classic/",
      "img": "/assets/golf/Scotty_Cameron_1856x1044_100KB_73e34f.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Did Grant Horvat's putter save his team the Internet Invitational?",
      "href": "https://golf.com/gear/putters/grant-horvat-internet-invitational-anxious-putting-moment/",
      "img": "/assets/golf/Grant_Horvat_1856x1044_100KB_b88f75.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Bettinardi introduces fresh 'Queen B' putters with 1 major change",
      "href": "https://golf.com/gear/putters/bettinardi-2028-queen-b-putter-family/",
      "img": "/assets/golf/Bettinardi-Queen-B-Hero_427f2e.webp",
      "author": "GOLF Staff"
    }
  ],
  "Balls": [
    {
      "title": "Buy 2 dozen, get 1 free on Wilson's Staff Model golf balls",
      "href": "https://golf.com/gear/golf-balls/wilson-staff-model-golf-balls-buy-2-get-1-free/",
      "img": "/assets/golf/wilson-staff-model_a86bee.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Which golf ball is right for you? This 4-question quiz revealed an unexpected winner",
      "href": "https://golf.com/gear/golf-balls/which-golf-ball-right-you-online-quiz/",
      "img": "/assets/golf/Golf-ball-fitting_25f32e.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "These turtle-themed Callaway Chrome Tour golf balls aren't just for show",
      "href": "https://golf.com/gear/golf-balls/callaway-chrome-tour-trtl-golf-balls/",
      "img": "/assets/golf/TRTL-Cover-WEB_321ac4.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "I have slow swing speed. Can the right ball help my game? I Tried It",
      "href": "https://golf.com/gear/golf-balls/can-lower-swing-speed-ball-help-my-game-i-tried-it/",
      "img": "/assets/golf/Bridgestone-Tour-BRX-and-RXS-balls_2c97d2.webp",
      "author": "GOLF Staff"
    }
  ],
  "Shoes": [
    {
      "title": "From Spiked to Spikeless: A Short History",
      "href": "https://golf.com/gear/shoes/",
      "img": "/assets/golf/footjoy-pro-sl-golf-shoes-new_889ea5.jpg",
      "author": "Golf.com Staff"
    },
    {
      "title": "PAYNTR earns U.S. patent for its golf-shoe technology",
      "href": "https://golf.com/gear/shoes/payntr-earns-us-patent-propulsion-plate-technology/",
      "img": "/assets/golf/paynter-patent-2_c73b19.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "I was confused about this shoe, until I walked in them | I Tried It",
      "href": "https://golf.com/gear/shoes/true-linkswear-lux2-player-golf-shoes/",
      "img": "/assets/golf/true-linkswear-lux-2-golf-shoes_c93610.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "Looking for a great holiday golf gift? These popular shoes are a slam dunk",
      "href": "https://golf.com/gear/shoes/great-holiday-golf-gift-popular-shoes-slam-dunk/",
      "img": "/assets/golf/popular-shoes-gift-guide_a95d57.webp",
      "author": "GOLF Staff"
    }
  ],
  "Apparel": [
    {
      "title": "3 UNRL women's layering pieces perfect for fall and winter golf",
      "href": "https://golf.com/gear/golf-apparel/unrl-womens-layering-pieces-perfect-fall-winter-golf/",
      "img": "/assets/golf/UNRL_fall_womens_picks_02ced5.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "I put these golf pants through hell. It made me like them even more",
      "href": "https://golf.com/gear/golf-apparel/vuori-pants-new-favorite-golf-pants-i-tried-it/",
      "img": "/assets/golf/pants_d784fc.jpg",
      "author": "GOLF Staff"
    },
    {
      "title": "Want effortless style on and off the course? Add these Vuori items to your holiday wish list",
      "href": "https://golf.com/gear/golf-apparel/effortless-style-on-off-course-add-vuori-holiday-wish-list/",
      "img": "/assets/golf/Vuori-gift-guide-2026_f581a6.webp",
      "author": "GOLF Staff"
    },
    {
      "title": "When he sensed golf had 'changed,' he launched golf-apparel brand for the people",
      "href": "https://golf.com/gear/golf-apparel/story-behind-golf-brand-public-drip/",
      "img": "/assets/golf/Public-Drip-cover_060586.webp",
      "author": "GOLF Staff"
    }
  ]
};

export const GSER: SeriesItem[] = [
  { title: "Fully Fit", subtitle: "Buyer's guides", href: "https://golf.com/gear/" },
  { title: "Winner's Bag", subtitle: "What won this week", href: "https://golf.com/winners-bag" },
  { title: "Bag Spy", subtitle: "Tour equipment finds", href: "https://golf.com/gear/" },
  { title: "Tour Report", subtitle: "Gear on the range", href: "https://golf.com/gear/" },
  { title: "First Look", subtitle: "New releases", href: "https://golf.com/gear/" },
  { title: "Bag Builders", subtitle: "Build your set", href: "https://golf.com/gear/" },
  { title: "Fully Equipped", subtitle: "The gear podcast", href: "https://golf.com/fully-equipped/" }
];

export const VIDS: VideoItem[] = [
  {
    "key": "a636f1e4",
    "title": "A Day in the Life of a Caddie at Bandon Dunes",
    "img": "/assets/golf/a636f1e4_8bb8da.jpg",
    "streamUrl": "https://cdn63.parone.io/a636f1e4/a636f1e4.m3u8",
    "duration": "15:41",
    "description": "What's it like to loop at one of the most iconic golf resorts in the country? GOLF’s Josh Sens tags along with the caddies at Bandon Dunes for an inside look at life as a caddie, from navigating the legendary links to unwinding at their favorite watering hole: the Arcade Bar.",
    "streamOk": true
  },
  {
    "key": "526a6826",
    "title": "This homeless shelter has its own country club, where golf offers a second shot",
    "img": "/assets/golf/cff55c5f06_776b0a.jpg",
    "streamUrl": "https://cdn63.parone.io/526a6826/526a6826.m3u8",
    "duration": "20:06",
    "description": "Inside the Niagara Gospel Country Club, where homeless men at a Niagara Falls, N.Y. shelter are using golf as a path to recovery. You have to be homeless to get in.",
    "streamOk": true
  },
  {
    "key": "37f615fd",
    "title": "The ‘Super’ School Training Tomorrow’s Greenskeepers",
    "img": "/assets/golf/37f615fd_ee3b89.jpg",
    "streamUrl": "https://cdn63.parone.io/37f615fd/37f615fd.m3u8",
    "duration": "9:14",
    "description": "Superintendents and golf course maintenance workers are some of the most important people in every golf course community. The USGA's new Greenskeeper Apprenticeship Program aims to give up-and-comers the training they need to succeed, providing a pathway to a superintendent career like never before.",
    "streamOk": true
  },
  {
    "key": "3d7f851e",
    "title": "Why New Zealand Might Be the Best Golf Trip on Earth",
    "img": "/assets/golf/2bafc58fe0_c5e30a.jpg",
    "streamUrl": "https://cdn63.parone.io/3d7f851e/3d7f851e.m3u8",
    "duration": "38:16",
    "description": "A trek across New Zealand’s North Island begins with bucket-list golf but becomes something far more adventurous, where World Top 100 courses share center stage with quirky 18s, sweeping landscapes, flocks of sheep and characters you won’t soon forget.",
    "streamOk": true
  },
  {
    "key": "b906d334",
    "title": "‘UNDER THE INFLUENCE’: How Fat Perez and Bob Does Sports Changed Everything",
    "img": "/assets/golf/b906d334_472ca9.jpg",
    "streamUrl": "https://cdn63.parone.io/b906d334/b906d334.m3u8",
    "duration": "32:49",
    "description": "Once upon a time, golf fame and fortune came through trophies, Tour cards and heroic Sunday finishes. Today, a camera, a personality and an internet connection will do the trick.",
    "streamOk": true
  },
  {
    "key": "b03aa343",
    "title": "Behind Closed Doors: Inside Merion's Legendary Archives",
    "img": "/assets/golf/1a15d48023_5abed2.jpg",
    "streamUrl": "https://cdn63.parone.io/b03aa343/b03aa343.m3u8",
    "duration": "11:32",
    "description": "The clubhouse at Merion Golf Club weaves together past and present unlike many others in America. From its 1824 farmhouse roots to an impressive 2026 renovation, these walls are full of stories of one of the most iconic clubs in golf.",
    "streamOk": true
  },
  {
    "key": "91a7f711",
    "title": "Justin Rose's Secret Weapon? His RV",
    "img": "/assets/golf/79559425a4_df719e.jpg",
    "streamUrl": "https://cdn63.parone.io/91a7f711/91a7f711.m3u8",
    "duration": "6:00",
    "description": "Step inside one of the coolest setups in professional golf as Justin Rose gives GOLF an exclusive tour of his custom recovery RV. Rose has everything from a steam shower to a red-light bed that helps one of golf's most accomplished players continue competing at the highest level at the age of 45.",
    "streamOk": true
  },
  {
    "key": "9803cf8a",
    "title": "Tommy Fleetwood's Hometown Major",
    "img": "/assets/golf/88d95e6b03_e1fd07.jpg",
    "streamUrl": "https://cdn63.parone.io/9803cf8a/9803cf8a.m3u8",
    "duration": "7:18",
    "description": "Local legend Tommy Fleetwood is returning to his hometown of Southport for the 154th Open Championship at Royal Birkdale—this time with an even greater chance of capturing the Claret Jug. But what does this really mean to Fleetwood and to the town that raised him? GOLF’s Sean Zak went to this English town to find out.",
    "streamOk": true
  },
  {
    "key": "137a1a9f",
    "title": "She Chose to Lose Her Leg. Now She's Chasing Golf and the Paralympics",
    "img": "/assets/golf/0f845ccf13_ce890c.jpg",
    "streamUrl": "https://cdn63.parone.io/137a1a9f/137a1a9f.m3u8",
    "duration": "7:25",
    "description": "Meredith Dwyer didn't just overcome losing her leg — she rewrote her entire story around it. Most golfers never qualify for a USGA event, even fewer do it as an amputee, and even fewer still do it in their first year after surgery to remove their leg.",
    "streamOk": true
  },
  {
    "key": "c05421db",
    "title": "Inside Cameron Young's Breakthrough: How Golf's Intriguing Star Joined its Elite",
    "img": "/assets/golf/dd9d8d8eb6_5167ae.jpg",
    "streamUrl": "https://cdn63.parone.io/c05421db/c05421db.m3u8",
    "duration": "13:21",
    "description": "Cameron Young may not have grown up on the mean streets of New York City — but his rise to the top of professoinal golf is fascinating nonetheless. Young joins Dylan Dethier as part of his GOLF Magazine cover shoot and lets us behind the curtain in the process, giving in-depth access to the Players champ and World No. 3.",
    "streamOk": true
  }
];

export const SHOWS: { label: string; href: string }[] = [
  { label: "Subpar", href: "https://www.youtube.com/@Golf_Subpar/videos" },
  { label: "The Drop Zone", href: "https://golf.com/news/" },
  { label: "Seen & Heard", href: "https://golf.com/seen-heard" },
  { label: "Warming Up", href: "https://golf.com/video/" },
  { label: "Play Smart", href: "https://golf.com/instruction/" },
  { label: "Pros Teaching Joes", href: "https://golf.com/pros-teaching-joes" },
  { label: "Fully Equipped", href: "https://golf.com/fully-equipped/" },
  { label: "Super Secrets", href: "https://golf.com/super-secrets/" },
  { label: "Destination Golf", href: "https://golf.com/destination-golf" },
  { label: "The Scoop", href: "https://golf.com/lifestyle/" }
];

export const PODS: PodcastItem[] = [
  {
    "name": "Subpar",
    "description": "Stories, laughs and tour insiders every week.",
    "primaryCta": "Listen on Spotify",
    "secondaryCta": "Watch on YouTube",
    "img": "/assets/golf/subpar-white_18256d.jpg",
    "youtubeUrl": "https://www.youtube.com/@Golf_Subpar/videos",
    "spotifyUrl": "https://open.spotify.com/show/0JVg8pE3YOQidsEa3vGBSv"
  },
  {
    "name": "Fully Equipped",
    "description": "Everything about golf gear, fitting and equipment.",
    "primaryCta": "Listen on Spotify",
    "secondaryCta": "Watch on YouTube",
    "img": "/assets/golf/fe-promo_dc2776.jpg",
    "youtubeUrl": "https://www.youtube.com/channel/UCzdMqRWzdF0JUJRIVa-dgDw",
    "spotifyUrl": "https://golf.com/fully-equipped/"
  }
];

export const RANK: Record<string, RankEntry[]> = {
  "World": [
    {
      "name": "Pine Valley",
      "region": "Pine Valley, NJ · Crump / Colt, 1918",
      "href": "https://golf.com/course/pine-valley/"
    },
    {
      "name": "Cypress Point",
      "region": "Pebble Beach, CA · Alister MacKenzie, 1928",
      "href": "https://golf.com/course/cypress-point/"
    },
    {
      "name": "St. Andrews (Old Course)",
      "region": "St. Andrews, Scotland · Old Tom Morris",
      "href": "https://golf.com/course/st-andrews-old-course/"
    },
    {
      "name": "Shinnecock Hills",
      "region": "Southampton, NY · Flynn / Wilson, 1931",
      "href": "https://golf.com/course/shinnecock-hills/"
    },
    {
      "name": "National Golf Links of America",
      "region": "Southampton, NY · C.B. Macdonald, 1911",
      "href": "https://golf.com/course/national-golf-links-of-america/"
    }
  ],
  "You Can Play": [
    {
      "name": "Pebble Beach",
      "region": "Pebble Beach, CA · Neville / Grant, 1919",
      "href": "https://golf.com/travel/top-100-courses-you-can-play/"
    },
    {
      "name": "Pinehurst (No. 2)",
      "region": "Pinehurst, NC · Donald Ross, 1907",
      "href": "https://golf.com/travel/top-100-courses-you-can-play/"
    },
    {
      "name": "Pacific Dunes",
      "region": "Bandon, OR · Tom Doak, 2001",
      "href": "https://golf.com/travel/top-100-courses-you-can-play/"
    },
    {
      "name": "Cabot Cliffs",
      "region": "Inverness, Nova Scotia · Coore & Crenshaw, 2016",
      "href": "https://golf.com/travel/top-100-courses-you-can-play/"
    },
    {
      "name": "Bethpage (Black)",
      "region": "Farmingdale, NY · A.W. Tillinghast, 1935",
      "href": "https://golf.com/travel/top-100-courses-you-can-play/"
    }
  ],
  "U.S.": [
    {
      "name": "Pine Valley",
      "region": "Pine Valley, NJ · George Crump, 1918",
      "href": "https://golf.com/courses/pine-valley-golf-top-100-courses/"
    },
    {
      "name": "Cypress Point",
      "region": "Pebble Beach, CA · Alister MacKenzie, 1928",
      "href": "https://golf.com/courses/cypress-point-golf-top-100-courses/"
    },
    {
      "name": "Shinnecock Hills",
      "region": "Southampton, NY · William Flynn, 1931",
      "href": "https://golf.com/courses/shinnecock-hills-golf-top-100-courses/"
    },
    {
      "name": "National Golf Links of America",
      "region": "Southampton, NY · C.B. Macdonald, 1911",
      "href": "https://golf.com/courses/national-golf-links-of-america-golf-top-100-courses/"
    },
    {
      "name": "Oakmont",
      "region": "Oakmont, PA · Henry Fownes, 1903",
      "href": "https://golf.com/courses/oakmont-golf-top-100-courses/"
    }
  ],
  "Asia-Pacific": [
    {
      "name": "Royal Melbourne (West)",
      "region": "Blackrock, Australia · Alister MacKenzie, 1926",
      "href": "https://golf.com/travel/top-100-courses-asia-pacific/"
    },
    {
      "name": "Kingston Heath",
      "region": "Cheltenham, Australia · Soutar / MacKenzie, 1926",
      "href": "https://golf.com/travel/top-100-courses-asia-pacific/"
    },
    {
      "name": "Tara Iti",
      "region": "Te Arai, New Zealand · Tom Doak, 2015",
      "href": "https://golf.com/travel/top-100-courses-asia-pacific/"
    },
    {
      "name": "Hirono",
      "region": "Miki-Chi, Japan · C.H. Alison, 1932",
      "href": "https://golf.com/travel/top-100-courses-asia-pacific/"
    },
    {
      "name": "Barnbougle Dunes",
      "region": "Bridport, Australia · Doak / Clayton, 2004",
      "href": "https://golf.com/travel/top-100-courses-asia-pacific/"
    }
  ],
  "UK & Ireland": [
    {
      "name": "St. Andrews (Old Course)",
      "region": "Fife, Scotland · Links",
      "href": "https://golf.com/travel/top-100-courses-uk-ireland/"
    },
    {
      "name": "Royal County Down",
      "region": "Newcastle, Northern Ireland · Old Tom Morris, 1889",
      "href": "https://golf.com/travel/top-100-courses-uk-ireland/"
    },
    {
      "name": "Royal Dornoch (Championship)",
      "region": "Highlands, Scotland · Old Tom Morris, 1886",
      "href": "https://golf.com/travel/top-100-courses-uk-ireland/"
    },
    {
      "name": "Muirfield",
      "region": "Gullane, Scotland · Old Tom Morris, 1891",
      "href": "https://golf.com/travel/top-100-courses-uk-ireland/"
    },
    {
      "name": "Royal Portrush (Dunluce)",
      "region": "County Antrim, Northern Ireland · H.S. Colt, 1929",
      "href": "https://golf.com/travel/top-100-courses-uk-ireland/"
    }
  ]
};

export const TRAVEL: NewsItem[] = [
  {
    "tag": "Courses",
    "t": "How Bounty Club cracked GOLF's list of Top 100 Courses in the U.S.",
    "by": "GOLF Travel",
    "img": "/assets/golf/bounty-club_d40ce6.webp",
    "href": "https://golf.com/travel/bounty-club-rob-collins-tad-king-us-top-100/"
  },
  {
    "tag": "Top 100",
    "t": "Biggest risers (and fallers) on our new Top 100 Courses in the U.S. list",
    "by": "GOLF Travel",
    "img": "/assets/golf/FINAL_caprock-ranch-brian-oar-15-16_f6a869.jpg",
    "href": "https://golf.com/travel/biggest-risers-fallers-top-100-courses-us/"
  },
  {
    "tag": "Bucket List",
    "t": "Top 100 Courses in the U.S. for 2026-27: The ultimate bucket list for American golf",
    "by": "GOLF Travel",
    "img": "/assets/golf/T100courses_8347c4.webp",
    "href": "https://golf.com/travel/top-100-golf-courses-us/"
  }
];

export const LIFE: LifestyleTile[] = [
  {
    "title": "The Scoop",
    "subtitle": "Conversations with golf’s biggest names",
    "img": "/assets/golf/lydia-1_757ca7.jpg",
    "href": "https://golf.com/lifestyle/olympic-gold-medalist-lydia-ko-joins-scoop/",
    "big": true
  },
  {
    "title": "Celebrities",
    "subtitle": "Stars on the tee",
    "img": "/assets/golf/Brian-Baumgartner_e36ab4.jpg",
    "href": "https://golf.com/lifestyle/best-golf-destinations-we-need-fourth-subpar/"
  },
  {
    "title": "Food",
    "subtitle": "Clubhouse eats",
    "img": "/assets/golf/gnocchi-omni-pga-frisco-savor_e4efe7.webp",
    "href": "https://golf.com/lifestyle/food/12-tastes-omni-pga-frisco-savor-food-event/"
  },
  {
    "title": "Style",
    "subtitle": "What to wear",
    "img": "/assets/golf/alison-lee-sofi_3d3aa0.webp",
    "href": "https://golf.com/lifestyle/wtgl-eye-popping-new-tradition-naomi-osaka/"
  },
  {
    "title": "Betting Advice",
    "subtitle": "Weekly picks from our expert",
    "img": "/assets/golf/Ben-Kohles_d624be.webp",
    "href": "https://golf.com/lifestyle/rsm-classic-2026-betting-guide-5-picks/"
  },
  {
    "title": "Accessories",
    "subtitle": "Small things, big upgrades",
    "img": "/assets/golf/Our_Picks_Top-100-Course-Boards_Fairway-_10692a.jpg",
    "href": "https://golf.com/gear/golf-accessories"
  }
];

export const COLS: ShopCollection[] = [
  {
    "title": "The GOLF Collection",
    "subtitle": "Signature apparel",
    "img": "/assets/golf/Collection_GOLF_1200x1200_v2_8095d5.webp",
    "href": "https://shop.golf.com/pages/storefront/golf"
  },
  {
    "title": "The Birdie Juice Collection",
    "subtitle": "Fun on-course gear",
    "img": "/assets/golf/image0_6fc2b7.webp",
    "href": "https://shop.golf.com/pages/storefront/golfsp"
  },
  {
    "title": "The Fully Equipped Collection",
    "subtitle": "For gear obsessives",
    "img": "/assets/golf/Collection_FE_1200x1200_v2_bebdeb.webp",
    "href": "https://shop.golf.com/pages/storefront/golffe"
  }
];

export const CATS: ShopCategory[] = [
  { label: "Clubs", href: "https://fairwayjockey.com/collections/golf-clubs?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Shafts", href: "https://fairwayjockey.com/collections/custom-shafts?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Training Aids", href: "https://fairwayjockey.com/collections/training-aids?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Balls", href: "https://fairwayjockey.com/collections/golf-balls?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Bags", href: "https://fairwayjockey.com/collections/golf-bags?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Technology", href: "https://fairwayjockey.com/collections/technology?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Apparel", href: "https://fairwayjockey.com/collections/apparel?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Accessories", href: "https://fairwayjockey.com/collections/accessories?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" },
  { label: "Our Picks", href: "https://fairwayjockey.com/collections/golf-staff-picks?utm_source=golfcom&utm_medium=homepage&utm_campaign=shop-navigation" }
];

export const MARQ: string[] = [
  "Top 100 Courses",
  "Top 100 Teachers",
  "InsideGOLF",
  "Course Finder",
  "Tour Confidential",
  "Fully Fit",
  "Destination Golf",
  "Pros Teaching Joes"
];

export const MENU: MenuGroup[] = [
  {
    t: "News",
    h: "#news",
    i: [
      "Latest News",
      "Features",
      "Shows",
      "Tour Confidential",
      "Monday Finish",
      "Hot Mic",
      "Subpar",
      "The Drop Zone",
      "Seen & Heard"
    ]
  },
  {
    t: "Instruction",
    h: "#instruction",
    i: [
      "Driving",
      "Approach Shots",
      "Bunker Shots",
      "Short Game",
      "Putting",
      "Rules",
      "Fitness",
      "GOLF Schools",
      "Top 100 Teachers",
      "The Lab",
      "Rules Guy",
      "The Etiquetteist",
      "Emergency 9",
      "Warming Up",
      "Play Smart",
      "Pros Teaching Joes"
    ]
  },
  {
    t: "Gear",
    h: "#gear",
    i: [
      "Drivers",
      "Irons",
      "Hybrids",
      "Fairway Woods",
      "Wedges",
      "Putters",
      "Shafts",
      "Club Fitting",
      "Balls",
      "Shoes",
      "Apparel",
      "Golf Accessories",
      "Fully Fit",
      "Winner's Bag",
      "Bag Spy",
      "Tour Report",
      "First Look",
      "Bag Builders",
      "Fully Equipped"
    ]
  },
  {
    t: "Travel & Lifestyle",
    h: "#travel",
    i: [
      "Course Finder",
      "Courses",
      "Resorts",
      "Accessories",
      "Celebrities",
      "Food",
      "Style",
      "Betting Advice",
      "Super Secrets",
      "Destination Golf"
    ]
  },
  {
    t: "Shop",
    h: "#shop",
    i: [
      "Clubs",
      "Shafts",
      "Training Aids",
      "Balls",
      "Bags",
      "Technology",
      "Apparel",
      "Accessories",
      "Our Picks",
      "The GOLF Collection",
      "The Birdie Juice Collection",
      "The Fully Equipped Collection"
    ]
  }
];

export const SINGLES: [string, string][] = [
  ["Videos & Podcasts", "#videos"],
  ["Newsletters", "#newsletter"],
  ["InsideGOLF", "#membership"],
  ["Leaderboards", "#news"]
];
