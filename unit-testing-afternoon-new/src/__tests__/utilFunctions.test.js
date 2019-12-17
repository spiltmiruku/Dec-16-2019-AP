import { shortenText } from '../utils/functions/';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

it('shortenText should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
})

it('shortenText should cut off extra characters after 100 and add threee periods', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

it('wordCount should correctly sum up the number of words in an array full of posts', () => {
    expect(wordCount(posts)).toBe(233);
})

it(`attachUserName should correctly attach a user's full name to a post`, () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

it('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
})