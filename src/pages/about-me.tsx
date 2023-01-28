import React from 'react';
import Layout from '../components/Layout';

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="flex h-screen justify-center">
      <div className="m-auto max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum,
        ullam dolore accusantium maxime nesciunt, magnam itaque consequatur vero
        corporis quidem voluptatum esse qui error recusandae quas! Delectus,
        praesentium neque!
      </div>
    </div>
  );
}

AboutMe.Layout = Layout;

export default AboutMe;