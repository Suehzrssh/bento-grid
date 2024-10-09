
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <div className="item item1">
            <h2>Create and Schedule content</h2>
            <span><i>quicker</i></span>
            <button>
              Create Post <span>+</span>
            </button>
          </div>
          <div className="item item2">
            <h2>Write your content using AI</h2>
            <img src="/images/illustration-ai-content.webp" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="item item3">
            <h2> Social Media <span>10x</span> </h2>
            <h2><i>Faster</i> with AI</h2>
            <img src="/images/illustration-five-stars.webp" alt="" />
            <p>Over 4.000 5 -star reviews</p>
          </div>
          <div className="item item4">
            <h3>Schedule to social media</h3>
            <img src="/images/illustration-schedule-posts.webp" alt="" />
            <p>
              Optimize post timings to publish content at the perfect time for your audience
            </p>
          </div>
          <div className="item item5">
            <div className="top">
              <img src="/images/illustration-multiple-platforms.webp" alt="" />
              <h2>Manage</h2>
              <h2>multiple</h2>
              <h2>accounts and</h2>
              <h2>platforms</h2>
            </div>
            <div className="bottom">
              <h2> >56% </h2>
              <p>faster audience growth</p>
              <img src="/images/illustration-audience-growth.webp" alt="" />
            </div>
          </div>
          <div className="item item6">
            <h2>Maintain a </h2>
            <h2>consistentting </h2>
            <h2>schedule</h2>
            <img src="/images/illustration-consistent-schedule.webp" alt="" />
          </div>
          <div className="item item7">
            <img src="/images/illustration-grow-followers.webp" alt="" />
            <h2>Grow followers with non-stop content</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
