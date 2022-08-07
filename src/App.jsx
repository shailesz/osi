import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <h1 className="blog-title">OSI</h1>
        <h4 className="blog-title-author ms-2">by shailesz</h4>
      </div>
      <div className="mb-4">{Date()}</div>
      <hr />
      <div>
        <h3 className="post-title">
          <span className="me-2">#</span>well shit, and now i have a blog
        </h3>
        <div>
          <p className="post-content">
            <span className="post-date">Aug 07 -</span> Hello world! didn't mean
            to start in a crappy way but it is what it is. i have never written
            personal blogs and this is a fresh start. i believe i will keep this
            blog going and turn writing into a habit. i have always been wanting
            to start writing a blog and today i just found that little push i
            needed. here's to a new hobby in the making 🥂
          </p>
          <p className="fst-italic">
            what i feel today: some people come into your life and
            bless you with inspiration
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
