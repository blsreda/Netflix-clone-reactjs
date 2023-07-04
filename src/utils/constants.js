export const TMDB_API_LINK = "https://api.themoviedb.org/3";
export const API_KEY = "5d0bf97cce9ecbe0300ab924782776cf";
export const sectionsInfo = [
    {
        id:1,
        imgLink:'/screen-tv.png',
        heading:'Enjoy on your TV.',
        details:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
    },
    {
        id:2,
        imgLink:'/devices.png',
        heading:'Watch everywhere.',
        details:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
    },
    {
        id:3,
        imgLink:'/kids.png',
        heading:'Create profiles for kids.',
        details:'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
    },
    {
        id:4,
        imgLink:'/stranger-things.png',
        heading:'Download your shows to watch offline.',
        details:'Only available on ad-free plans.'
    }
];
export const accordionList =[
    {
        id:1,
        heading:'What is Netflix?',
        details:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        id:2,
        heading:'How much does Netflix cost?',
        details:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts"
    },
    {
        id:3,
        heading:'What’s different on an ad-supported plan?',
        details:"An ad-supported plan is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites with limited ad breaks (some location and device restrictions apply). Downloads are not supported and a limited number of movies and TV shows are not available due to licensing restrictions. Learn more."
    },
    {
        id:4,
        heading:'Where can I watch?',
        details:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        id:5,
        heading:'How do I cancel?',
        details:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id:6,
        heading:'What can I watch on Netflix?',
        details:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id:7,
        heading:'Is Netflix good for kids?',
        details:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
];

export const columnsOfFooter = [
    {
        id:1,
        links: ['FAQ', 'Investor Relations', 'Buy Gift Cards', 'Cookie Preferences', 'Legal Notices'],
    },
    {
        id:2,
        links: ['Help Center', 'Jobs', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
    },
    {
        id:3,
        links: ['Account', 'Netflix Shop', 'Terms of Use', 'Contact Us', 'Do Not Sell or Share My Personal Information'],
    },
    {
        id:4,
        links: ['Media Center', 'Redeem Gift Cards', 'Privacy', 'Speed Test'],
    },
];

export const listOfNavbarHome = [
    {
        id:1,
        value:'Home',
        link:'/home'
    },
    {
        id:2,
        value:'Movies',
        link:'/movies'
    },
    {
        id:3,
        value:'Tv Shows',
        link:'/tv'
    },
]
export const getRandomNumber= (maxNum) => {
    return Math.floor(Math.random() * maxNum);
}

export const getGenreName = (data,type,id) => {
    if(type === 'movie') {
        const elementChoosen =data?.filter(item => item.id === id);
        return elementChoosen[0]?.name;
    }
    else {
        const elementChoosen =data?.filter(item => item.id === id);
        return elementChoosen[0]?.name;
    }
}
export const getName =(item,datatype)=> {
    if(datatype ==='tv') return item.name
    else  return item.title;
}
export const getDate =(item,datatype)=> {
    if(datatype ==='tv') return item.first_air_date.slice(0,4);
    else  return item.release_date.slice(0,4);
}

export const getOverView=(item,num)=> {
    if(item.overview.length > num) return item.overview.slice(0,num)+'...'
    else return item.overview;
}
export const getImage=(item,type)=> {
    if(type === 'poster') {
        return (item.poster_path !==null)?item.poster_path:item.backdrop_path;
    }
    else {
        return (item.backdrop_path !==null)?item.backdrop_path:item.poster_path;
    }
}