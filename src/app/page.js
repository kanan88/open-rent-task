import styles from './page.module.css';

import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import SideBar from '@/components/SideBar';
import Overview from '@/components/Overview';
import Details from '@/components/Details';
import Gallery from '@/components/Gallery';
import Description from '@/components/Description';
import List from '@/components/List';
import Recommend from '@/components/Recommend';
import UserReviews from '@/components/UserReviews';
import Review from '@/components/Review';
import InlineButton from '@/components/InlineButton';
import CTA from '@/components/CTA';
import CTAButton from '@/components/CTAButton';

const reviews = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    image: '/img/monkey.png',
    name: 'Longhouse Lettings Brighton',
    title: 'Landlord',
    rating: '8.9',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    image: '/img/user-2.jpg',
    name: 'Isabelle Thomas',
    title: 'Last renter',
    rating: '9.3',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <SideBar />

        <MainContent>
          <Gallery />
          <Overview />

          <Details>
            <Description>
              <p className={styles.paragraph}>
                We are so proud of this beautiful house, it was completely
                redone to a high standard, brand new flooring throughout the
                house, and the parquet flooring on the ground floor brings out
                the character of the house.
              </p>

              <p className={styles.paragraph}>
                The views from the house are stunning from the front rooms, you
                can see the sea. Back rooms you can see the rolling hills of the
                South Downs. And there is even a private gate, so you can access
                the downs through the garden. Do you love walks? This home is
                for you!
              </p>

              <List />
              <Recommend />
              <br />
              <CTAButton title1="Rent Now" title2="Request Viewing" />
            </Description>

            <UserReviews>
              {reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}

              <InlineButton link="#/">
                Other similar properties <span>&rarr;</span>
              </InlineButton>
            </UserReviews>
          </Details>

          <CTA />
        </MainContent>
      </div>
    </div>
  );
}
