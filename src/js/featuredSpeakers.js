const speakers = [
  {
    name: 'Tobias Koppers',
    title: 'Webpack Creator',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/tobias-koppers.jpg',
    },
    description: 'Creator of webpack. Working full time or Open Source.        Father of two children. Likes to play board games',
  },
  {
    name: 'Ryan Carniato',
    title: 'SolidJS Creator',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/Ryan-Carniato.webp',
    },
    description: 'As a Javascript performance enthusiast an fine grained reactivity super-fan. Ryan is obsessively passionate about the feature of javascript frameworks',
  },
  {
    name: 'Sarah Drasner',
    title: 'Director of Engineering Core Developer ',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/sarah.jpg',
    },
    description: 'Sarah Drasner is Director of engineering, Core Developer Web at Google, where she runs web infrastructure, including opens source projects like Angular',
  },
  {
    name: 'Rich Harris',
    title: 'Software Engineer',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/Rich-Harris.jpg',
    },
    description: 'Recovering Journalist, open source provocateur. Started Rollup and Svelte. on a mission to make web development fun',
  },
  {
    name: 'Addy Osmani',
    title: 'Engineering Manager',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/Addy-Osmani.jpg',
    },
    description: 'Addy Osmani is an Engineering Manager working on Google Chrome. He leads up a Web Performance and tools team focused on making the web fast.',
  },
  {
    name: 'Kyle Simpson',
    title: 'Software Engineer',
    images: {
      backgroundPic: 'assets/speakers/squared.png',
      speakerPic: 'assets/speakers/Kyle-Simpson.jpg',
    },
    description: 'Kyle Simpson is a human first and then an engineer. His mission is to show the world that the culture of empathy and relational information exchange.',
  },
];

const fetchSpeakers = (speakersCards) => {
  speakers.forEach((speaker) => {
    const {
      name,
      title,
      images: { backgroundPic, speakerPic },
      description,
    } = speaker;

    const speakerProfile = document.createElement('div');
    speakerProfile.className = 'speaker-profile';
    speakerProfile.style.backgroundImage = `url(${backgroundPic})`;

    const speakerProfilePic = document.createElement('div');
    speakerProfilePic.className = 'speaker-profile-pic';
    speakerProfilePic.style.backgroundImage = `url(${speakerPic})`;

    speakerProfile.appendChild(speakerProfilePic);

    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speaker-info flex';

    const speakerName = document.createElement('h3');
    speakerName.className = '"speaker-name';
    speakerName.innerHTML = name;

    const speakerTitle = document.createElement('h4');
    speakerTitle.className = 'speaker-title flex';
    speakerTitle.innerHTML = title;

    const indicator = document.createElement('span');
    indicator.className = 'indicator';

    const desc = document.createElement('p');
    desc.className = 'speaker-description';
    desc.innerHTML = description;

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerTitle);
    speakerInfo.appendChild(indicator);
    speakerInfo.appendChild(desc);

    const speakerCard = document.createElement('div');
    speakerCard.className = 'speakers-card flex';
    speakerCard.appendChild(speakerProfile);
    speakerCard.appendChild(speakerInfo);

    speakersCards.appendChild(speakerCard);
  });
};

function placeSpeakers() {
  const speakerSection = document.querySelector('.speakers-section');

  const speaker = document.createElement('h2');
  speaker.className = 'speakers-title  flex';
  speaker.innerHTML = 'Featured Speakers';

  const indicator = document.createElement('span');
  indicator.className = 'indicator p-i';
  speaker.appendChild(indicator);
  speakerSection.appendChild(speaker);

  const speakersContainer = document.createElement('div');
  speakersContainer.className = 'speakers-cards flex';
  fetchSpeakers(speakersContainer);
  speakerSection.appendChild(speakersContainer);
}

window.onload = placeSpeakers();
