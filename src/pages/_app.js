import Layout from "../components/Layout";
import { PageProvider } from "../components/PageContext";
import "bootstrap/dist/css/bootstrap.min.css"; 
import 'react-tooltip/dist/react-tooltip.css';


// import '../assets/scss/'
import '../assets/css/advan-search.css'
import '../assets/css/ang-by-ang.css'
import '../assets/css/author.css'
import '../assets/css/bhatts.css'
import '../assets/css/cyber.css'
import '../assets/css/dashboard.css'
import '../assets/css/feedbck.css'
import '../assets/css/footer.css'
import '../assets/css/guru-amar-das.css'
import '../assets/css/header.css'
import '../assets/css/hukumindex.css'
import '../assets/css/indian-class.css'
import '../assets/css/intro.css'
import '../assets/css/kalshar.css'
import '../assets/css/keyboard.css'
import '../assets/css/mardana.css'
import '../assets/css/nanak.css'
import '../assets/css/nanak-two.css'
import '../assets/css/print.css'
import '../assets/css/resource.css'
import '../assets/css/sahiban.css'
import '../assets/css/sds.css'
import '../assets/css/sgg-index.css'
import '../assets/css/shabad-line.css'
import '../assets/css/share.css'
import '../assets/css/spinner.css'
import '../assets/css/style.css'
import '../assets/css/unicodefont.css'

function App({ Component, pageProps }) {
  return (
    <PageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageProvider>
  );
}

export default App;