import React from 'react';
import { render, act } from '@testing-library/react';
import Post from '../views/Post';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { posts } from './__data__/testData';

it('checking if Post component actually renders a post', () => {
    expect(Post).spyOn(posts);
})