document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById("open-menu");
	const closeMenu = document.getElementById("close-menu");
	const navMenu = document.getElementById("mobile-menu");

	if (menuToggle && navMenu && closeMenu) {
		menuToggle.addEventListener("click", () => {
			navMenu.classList.toggle("hidden");
			closeMenu.classList.toggle("hidden");
			menuToggle.classList.toggle("hidden");
		});

		closeMenu.addEventListener("click", () => {
			navMenu.classList.toggle("hidden");
			closeMenu.classList.toggle("hidden");
			menuToggle.classList.toggle("hidden");
		});
	}
	const chooseUsContainer = document.getElementById("choose-us-container");
	const chooseUsData = [
		{
			imgSrc: "assert/card.png",
			altText: "payment method",
			heading: "Payment Method",
			description:
				"We offer a wide range of payment methods, from cryptocurrencies to traditional options.",
		},
		{
			imgSrc: "assert/search-process.png",
			altText: "simple search",
			heading: "Simple Search Process",
			description:
				"We checked it out, even the kid did it, but it was my mom's friend's son.",
		},
		{
			imgSrc: "assert/support.svg",
			altText: "support",
			heading: "24/7 Support",
			description:
				"Is there something you don't understand? Feel free to call us. Phone number in the footer.",
		},
		{
			imgSrc: "assert/friendly.svg",
			altText: "warmly image",
			heading: "We are nice",
			description:
				"Fantasy is over, there will be something really convincing here.",
		},
	];

	if (chooseUsContainer) {
		let content = "";
		chooseUsData.forEach((card) => {
			content += `
					<div className="choose-us-details-card">
						<img src=${card.imgSrc} alt=${card.altText} />
						<h3>${card.heading}</h3>
						<p>${card.description}</p>
					</div>`;
		});

		chooseUsContainer.innerHTML = content;
	}
});

const specialOfferContent = document.getElementById("special-offer-content");
const specialOffers = [
	{
		mainImage: "assert/wilderness_club.svg",
		mainImageAlt: "2 bed room lodge",
		title: "Wilderness Club at Big Cedar",
		date: "28th October - 1st November",
		price: "$2016",
		duration: "6 days",
	},
	{
		mainImage: "assert/wilderness_club2.png",
		mainImageAlt: "Ocean view room",
		title: "Ocean View Resort",
		date: "15th November - 20th November",
		price: "$2500",
		duration: "5 days",
	},
	{
		mainImage: "assert/wilderness_club3.png",
		mainImageAlt: "Mountain retreat",
		title: "Mountain Retreat",
		date: "5th December - 10th December",
		price: "$3000",
		duration: "5 days",
	},
];

if (specialOfferContent) {
	let content = "";

	specialOffers.forEach((offer) => {
		content += `
				<div class="special-offer-cards">
					<div class="header">
						<img
							class="main-image"
							src=${offer.mainImage}
							alt=${offer.mainImageAlt}
						/>
						<div class="like">
							<img src="assert/like.svg" alt="like" />
						</div>
						<img class="rating" src="assert/rating.svg" alt="rating" />
					</div>
					<div class="body">
						<div class="details">
							<h3 class="title">${offer.title}</h3>
							<p class="date">${offer.date}</p>
						</div>
						<div class="price">
							<p class="priceperday">
								<span class="amount">${offer.price}</span> /${offer.duration}
							</p>
						</div>
					</div>
				</div>
			`;
	});

	specialOfferContent.innerHTML = content;
}

	const reviewContent = document.getElementById(review-content)
	const reviewData = [
	{
		imgSrc: "assert/headshot.svg",
		altText: "headshots",
		description:
		"I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all myquestions within an hour. The vacation itself was perfect. Thankyou very much. I will come back again and again.",
		author: "Jannike Borge",
		profession: ",Publisher",

	},
	{
		imgSrc: "assert/lebron.svg",
		altText: "headshots",
		description:
		"I quickly found the right tour for me, but I had a few questionsabout the hotel, I wrote to tech support and they answered all myquestions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
		author: "LeBron Durant",
		profession: ",Flight attendant",
	},
	{
		imgSrc: "assert/piho-image.svg",
		altText:"headshots",
		description:
		"I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thankyou very much. I will come back again and again.",
		author:"Kaarel Piho",
		profession:", Chiropodist",
	},
	];

	if(reviewContent){
	let content = "";
	reviewData.forEach((card) => {
	content += `
	<div class="review-card">
					<img 
					src=${card.imgSrc} 
					alt=${card.altText} />
					<div>
						<p>${card.description}</p>
						<div class="review-source">
							<p class="review-author">
								<span class="name">${card.author} </span>${card.profession}
							</p>
						</div>
					</div>
				</div>
				<div class="review-card">
					<img 
					src=${card.imgSrc} 
					alt=${card.altText} />
					<div>
						<p>
						${card.description}
						</p>
						<div class="review-source">
							<p class="review-author">
								<span class="name">${card.author} </span>${card.profession}
							</p>
						</div>
					</div>
				</div>
				<div class="review-card">
					<img 
					src=${card.imgSrc} 
					alt=${card.altText} />
					<div>
						<p>
						${card.description}
						</p>
						<div class="review-source">
							<p class="review-author">
								<span class="name">${card.author} </span>${card.profession}
							</p>
						</div>
					</div>
				</div>`;
	
	
	});

	reviewContent.innerHTML = content;
}

const recentPostContent = getElementById("recent-post-content")
const recentPostdata =[
	{ 
		imgSrc: "assert/trip to athlens.svg",
		altText: "View Of Athens",
		date: "May 23,2022",
		title:"My trip to Athens",
		description:"It would seem that in a city where Theseus, Plato and Epic once walked, the very idea of the subway is alien to the city, but already..."
},
{
	imgSrc: "assert/vilnius.svg",
	altText: "View Of Vilnius",
	date: "May 22,2022",
	title: "Vilnius resorts",
	description:"I haven't seen any resorts in Vilnius, but there are wonderful people and pubs",
},
{
	imgSrc:"assert/tips-for-flying.svg",
	altText:"plane image",
	date:"May 20,2022",
	title: "Tips for flying on a plane",
	description:"If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you",
},
]
	if (recentPostContent) {
		let content = "";
		recentPostdata .forEach((card) => {
			content =`
						<div class="header">
						<img
							src=${card.imgSrc}
							alt=${card.altText}
							class="main-image"
						/>
						<div class="visit-info">
							<p class="visit-date">${card.date}</p>
							<div class="visit-time">
								<img src="assert/bx_time-five.svg" alt="clock" />
								<p>1 minute</p>
							</div>
						</div>
					</div>
					<div class="body">
						<h3 class="title">${card.title}</h3>
						<p class="description">
						${card.description}
						</p>
					</div>
				</div>
				<div class="recent-post-card">
					<div class="header">
						<img
							src=${card.imgSrc}
							alt=${card.altText}
							class="main-image"
						/>
						<div class="visit-info">
							<p class="visit-date">${card.date}</p>
							<div class="visit-time">
								<img src="assert/bx_time-five.svg" alt="clock" />
								<p>1 minute</p>
							</div>
						</div>
					</div>
					<div class="body">
						<h3 class="title">${card.title}s</h3>
						<p class="description">
						${card.description}
						</p>
					</div>
				</div>
				<div class="recent-post-card">
					<div class="header">
						<img
							img
							src=${card.imgSrc}
							alt=${card.altText}
							class="main-image"
						/>
						<div class="visit-info">
							<p class="visit-date">${card.date}</p>
							<div class="visit-time">
								<img src="assert/bx_time-five.svg" alt="clock" />
								<p>15 minutes</p>
							</div>
						</div>
					</div>
					<div class="body">
						<h3 class="title">${card.title}</h3>
						<p class="description">
						${card.description}
						</p>
					</div>
				</div>`
		
	});
	recentPostContent .innerHTML = content;
}