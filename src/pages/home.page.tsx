import React from 'react';
import { ExampleItem } from '../components/example/example-item';

export const HomePage: React.FC = () => (
  <div>
    <h1>Home Page</h1>
    <ExampleItem props1="1" props2="3" />
  </div>
);
