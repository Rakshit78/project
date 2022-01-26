import "./styles.css";
import Nav from "./Nav";
import { useState, useEffect } from "react";

export default function App() {
  const [api, setapi] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = await fetch(
        "https://api.unsplash.com/photos?page=1&&client_id=41d46225d571eaf038ef9de4a666a459a6ff9a1e19b433390fdd98794693621d"
      );
      const jdata = await res.json();
      setapi(jdata);
    }
    getdata();
  }, []);
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <div className="one">
          <i class="far fa-user-circle" id="one_icon"></i>
          <div className="div_one">
            <h1>Rakshit Kumar</h1>
            <p>Full stack developer</p>
            <p>linkedin.com/rakshit</p>
          </div>
          <div className="conection">
            <span className="connection_span">
              Connection
              <br />
              100
            </span>
            <span>
              Views
              <br />
              1200
            </span>
          </div>
          <div className="two_div">
            <p>Free acess Exclusive tools and insights</p>
            <p>
              <a href="" id="pri">
                get primium
              </a>
            </p>
          </div>
        </div>
        <div className="two">
          <p>Write here add images or videos for video impact</p>
          <hr />
          <div className="bar">
            <div>
              <i class="far fa-newspaper my"></i>Article
              <i class="fas fa-images my"></i> Image
              <i class="fas fa-video my"></i>Video
            </div>
            <i class="far fa-paper-plane my-blue"></i>
          </div>
          <div className="api_data">
            {api.map((res) => {
              return (
                <>
                  <div className="api_one">
                    <img
                      src={res.user.profile_image.medium}
                      alt="iamge"
                      id="api_profile"
                    />
                    <div>
                      <p>{res.user.name}</p>
                      <p className="create">{res.created_at}</p>
                    </div>
                  </div>
                  <div className="api_two">
                    <p>{res.user.bio}</p>
                  </div>
                  <div className="api_three">
                    <img src={res.urls.regular} alt="feed" id="feed" />
                  </div>
                  <div className="api_four">
                    <i class="far fa-heart"></i>
                    <i class="fas fa-envelope-open"></i>
                    <i class="fas fa-share-alt"></i>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="three">
          <p>People you know</p>
          <hr />
          {api.map((res) => {
            return (
              <>
                <div className="api_one mags">
                  <img
                    src={res.user.profile_image.medium}
                    alt="iamge"
                    id="api_profile"
                  />

                  <p>{res.user.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
