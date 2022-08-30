import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Post from './components/Post';

const posts = [
  {
    id: 1,
    title: 'iPadOS on a sunny day! [iOS 15 | iPad Air 4]',
    community: 'r/iOSsetups',
    icon: 'https://styles.redditmedia.com/t5_5nujb/styles/communityIcon_qy8r4ln4xtd41.jpg?width=256&s=fe8c1b8f12713bedf4dca71b4ccc3a980f60c113',
    author: 'u/aaron6685',
    tags: ['Tags support'],
    time: '1 hour ago',
    content: '',
    image:
      'https://preview.redd.it/6wqsupz7rnk91.png?width=960&crop=smart&auto=webp&s=1648e9cbcfe0d8e09e0b9c35a2fcf07e3c4a6c94',
    comments: 2,
    votes: 0,
  },
  {
    id: 2,
    title:
      'For anyone who think the majority of Vietnamese support the war in Ukraine',
    community: 'r/VietNam',
    icon: 'https://styles.redditmedia.com/t5_2qkcr/styles/communityIcon_tmba7simqwp31.jpg?width=256&s=7be8b507dea9baa99ee90b8e76d3d277745c0aff',
    author: 'u/crazycat9x',
    tags: ['Discussion'],
    time: '1 hour ago',
    content: `Check out the most recents articles & their comments section below from VnExpress. This is Vietnam largest state run news site. With all comments monitored & needing to go through approvals from government officers before being published.
    EDIT: bonus article from a couple while back https://vnexpress.net/su-menh-giai-cuu-tuyet-mat-o-nha-may-azovstal-4479426.html`,
    image: '',
    comments: 36,
    votes: 17,
    upvoted: true,
  },
  {
    id: 3,
    title:
      'Coming from Linux, I decided to rice it up a bit to feel like home :)',
    community: 'r/windowsporn',
    icon: 'https://styles.redditmedia.com/t5_36405/styles/communityIcon_qe01pxf5dvq71.jpg?format=pjpg&s=a54a88802d5202e52a028c037452fec620c40fbc',
    author: 'u/an0nn3342',
    tags: [],
    time: '8 hours ago',
    content: '',
    image:
      'https://preview.redd.it/ah5xwtxmxok91.png?width=640&crop=smart&auto=webp&s=2686c67d6371d6164890fe838a2c73821d3e2c85',
    comments: 1,
    votes: 5,
    downvoted: true,
  },
];

const Posts: FC = () => {
  return (
    <Flex gap={4} w="100%" direction="column">
      {posts.map((x: any) => (
        <Post key={x.id} item={x} />
      ))}
    </Flex>
  );
};

export default Posts;
