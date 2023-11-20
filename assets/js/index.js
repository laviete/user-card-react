const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const user = {
    name: "Emma",
    surname: "Watson",
    nickname: "@EmWatson",
    gender: "female",
    tweets: 1337,
    following: 561,
    followers: 718,
    image:
      "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg",
  };
  return (
    <>
      <UserCard user={user} />
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
  const buttonStyle = {
    boxShadow:
      gender === "female"
        ? "0px 0px 30px 2px #cc4eb5"
        : "0px 0px 30px 2px #4f58cc",
    background:
      gender === "female"
        ? "linear-gradient(to bottom, #fc9adb 5%, #d40098 100%)"
        : "linear-gradient(to bottom, #a09bfa 5%, #0019d4 100%)",
    backgroundColor: gender === "female" ? "#fc9adb" : "rgb(121, 159, 208)",
    color: "#fff",
  };
  const cardShadowStyle = {
    boxShadow:
      gender === "female"
        ? "0px 0px 10px 0px #fc9adb"
        : "0px 0px 10px 0px #a09bfa",
  };
  const nicknameStyle = {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 6,
  };
  const nameStyle = {
    fontSize: 20,
    fontWeight: "bold",
  };
  const statsStyle = {
    fontSize: 13,
  };
  return (
    <div className="user-card" style={cardShadowStyle}>
      <div className="user-avatar">
        <img src={image} alt={`${name} ${surname}`} />
      </div>
      <button style={buttonStyle}>+</button>
      <div className="user-info">
        <h1 style={nameStyle}>
          {name} {surname}
        </h1>
        <p style={nicknameStyle}>{nickname}</p>
      </div>
      <div className="user-stats">
        <p style={statsStyle}>Tweets: {tweets}</p>
        <p style={statsStyle}>Following: {following}</p>
        <p style={statsStyle}>Followers: {followers}</p>
      </div>
    </div>
  );
}
