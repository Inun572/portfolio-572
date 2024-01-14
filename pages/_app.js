import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

const metadata = {
  title: "Helmi Ainun Naim's Personal Website",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
