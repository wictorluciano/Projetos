import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    key: "1",
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    alt: "Foto do jogo league of legends",
  },
  {
    key: "2",
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    alt: "Foto do jogo Valorant",
  },
  {
    key: "3",
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg",
    alt: "Foto do jogo Teamfight Tactics",
  },
];

const channelListData = [
  {
    key: "1",
    url: "https://www.twitch.tv/pijack11",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f21a0dd5-7b35-4e38-8f92-71e9e39f4c07-profile_image-150x150.png",
    alt: "Foto do streamer PIJACK",
  },
  {
    key: "2",
    url: "https://www.twitch.tv/wictor_luciano",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/a8098a31-d659-4a2c-b03f-a7d0863b4d3c-profile_image-150x150.png",
    alt: "Foto do streamer wictor luciano",
  },
  {
    key: "3",
    url: "https://www.twitch.tv/frttt",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/73ea473f-fd04-4669-93eb-af6db3cc5af4-profile_image-150x150.png",
    alt: "Foto do streamer frttt",
  },
  {
    key: "4",
    url: "https://www.twitch.tv/valorant",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e0751cdf-bd99-490d-af4f-4fcb6dc2491f-profile_image-70x70.png",
    alt: "Foto do streamer valorante",
  },
];

const socialListData = [
  {
    key: "1",
    url: "https://www.instagram.com/wictor_luciano/",
    imageUrl: "/assets/instagram.svg",
    alt: "instagram",
  },
  {
    key: "2",
    url: "https://twitter.com/wictor_luciano",
    imageUrl: "/assets/twitter.svg",
    alt: "twitter",
  },
  {
    key: "3",
    url: "https://www.twitch.com/wictor_luciano/",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch",
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          description="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                key={item.key}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          description="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                key={item.key}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          description="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                key={item.key}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
