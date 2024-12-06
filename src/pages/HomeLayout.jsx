import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <main>
      <Navbar />
      <section className='page'>
        {isLoading ? (
          <>
            <section
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
              }}
            >
              <div className='loading'></div>
            </section>
          </>
        ) : (
          <Outlet />
        )}
      </section>
    </main>
  );
};

export default HomeLayout;
