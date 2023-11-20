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
    /* image:
      "https://images.mubicdn.net/images/cast_member/23751/cache-2603-1627313155/image-w856.jpg",
   */
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
    backgroundColor: gender === "female" ? "pink" : "rgb(121, 159, 208)",
  };
  /*   const imgStyle = {
    backgroundImage: `url("${image}")`,
  }; */

  return (
    <div className="user-card">
      <div className="img-wrapper" /* style={imgStyle} */>
        {/*  <img src={image} alt={`${name} ${surname}`} /> */}
      </div>
      <button style={buttonStyle}>+</button>
      <div className="user-info">
        <h1>
          {name} {surname}
        </h1>
        <p>{nickname}</p>
      </div>
      <div className="user-stats">
        <p>Tweets: {tweets}</p>
        <p>Following: {following}</p>
        <p>Followers: {followers}</p>
      </div>
    </div>
  );
}
