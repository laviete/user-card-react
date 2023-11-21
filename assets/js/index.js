const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const user1 = {
    name: "Emma",
    surname: "Watson",
    nickname: "@EmWatson",
    gender: "female",
    tweets: 718,
    following: 561,
    followers: 1337,
    image:
      "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg",
  };
  const user2 = {
    name: "Tom",
    surname: "Felton",
    nickname: "@FelTom",
    gender: "male",
    tweets: 411,
    following: 357,
    followers: 1521,
    image:
      "https://images.mubicdn.net/images/cast_member/24555/cache-162910-1627289058/image-w856.jpg?size=800x",
  };
  return (
    <>
      <UserCard user={user1} />
      <UserCard user={user2} />
    </>
  );
}

function UserCard(props) {
  const {
    name,
    surname,
    nickname,
    gender,
    tweets,
    following,
    followers,
    image,
  } = props.user;
  
  const femaleStyle = {
    boxShadow: "0px 0px 30px 2px #cc4eb5",
    background: "linear-gradient(to bottom, #fc9adb 5%, #d40098 100%)",
    backgroundColor: "#fc9adb",
  };

  const maleStyle = {
    boxShadow: "0px 0px 30px 2px #4f58cc",
    background: "linear-gradient(to bottom, #a09bfa 5%, #0019d4 100%)",
    backgroundColor: "rgb(121, 159, 208)",
  };

  const buttonStyle = {
    ...(gender === "female" ? femaleStyle : maleStyle),
    color: "#fff",
  };

  const cardShadowStyle = {
    boxShadow:
      gender === "female"
        ? "0px 0px 10px 0px #fc9adb"
        : "0px 0px 10px 0px #a09bfa",
  };

  return (
    <div className="user-card" style={cardShadowStyle}>
      <div className="img-wrapper">
        <img className="user-avatar" src={image} alt={`${name} ${surname}`} />
      </div>
      <button className="follow-btn" style={buttonStyle}>
        +
      </button>
      <div className="user-info">
        <h1 className="user-name">
          {name} {surname}
        </h1>
        <p className="user-nickname">{nickname}</p>
      </div>
      <div className="user-stats">
        <p>Tweets: {tweets}</p>
        <p>Following: {following}</p>
        <p>Followers: {followers}</p>
      </div>
    </div>
  );
}
