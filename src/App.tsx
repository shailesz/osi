import { Container } from "@mantine/core";
import Header from "components/header/Header";
import Post, { PostProps } from "components/post/Post";
import React from "react";

const data: PostProps[] = [
  {
    title: "well shit, and now i have a blog",
    timestamp: 1659830400000,
    body: "Hello world! didn't mean to start in a crappy way but it is what it is. i have never written personal blogs and this is a fresh start. i believe i will keep this blog going and turn writing into a habit. i have always been wanting to start writing a blog and today i just found that little push i needed. here's to a new hobby in the making 🥂",
    feeling: "some people come into your life and bless you with inspiration",
  },
  {
    title: "It's been a month",
    timestamp: 1662514093888,
    body: "I have started to take care of myself more this past month. I have been working out, reading more books, eating less junk and am listening to more new music. Also got a new guitar, sweet right? It has been my goal to learn a few musical instruments, i figured guitar would be the first one i learn. I was listening to Dire Straits one day and yk their music is fire, will learn to play that song. This past month, my dad fell ill, had to stay in the hospital for a few days. I also took my 8th semester exams. Yes sir, i am a free bird now. Was also doing a project, which floped! I am smiling writing this. teehee.",
    feeling: "0x777 the angels are with me",
  },
];

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      {data.reverse().map((post) => (
        <Post {...post} />
      ))}
    </Container>
  );
};

export default App;
