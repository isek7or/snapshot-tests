import { render, screen } from '@testing-library/react';
import GitHubCard from '../src/components/GitHubCard';
import renderer from 'react-test-renderer'

test('snapshot of my github account', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })