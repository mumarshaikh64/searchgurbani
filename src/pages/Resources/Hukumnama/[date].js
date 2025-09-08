// import '../../../assets/css/dashboard.css';
// import '../../../assets/css/style.css';
// import '../../../assets/css/sds.css';
import React, { useEffect, useState, useRef } from 'react';
// import { Link, useLocation, useParams } from "react-router-dom";
import sdsbannar from '../../../assets/img/sds-banner.jpg';
import { ApiHelper } from '../../../helpers/ApiHelper';
import { API } from '../../../config/api';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from "react-helmet";
import HelmetWrapper from '../../../components/CommonHelmet';
import SriDarbarSahib from './index';
import { useRouter } from 'next/router';


function SriDarbarSahibHukumDate() {
    // const location = useLocation();
    // const { date } = useParams();
    const router = useRouter();
    const { date } = router.query;
  const [data, setData] = useState(null);
    const [isNos, setIsNos] = useState(false);
    const hasReloaded = useRef(false);
    // useEffect(() => {
    //     const reloadedPath = sessionStorage.getItem("reloadedPath");

    //     if (reloadedPath !== location.pathname) {
    //         sessionStorage.setItem("reloadedPath", location.pathname);
    //         window.location.reload();
    //     }
    // }, [location.pathname]);
  useEffect(() => {
    if (!date) return;

    // Fetch data for this date
    const fetchData = async () => {
      const res = await fetch(`/api/hukum?date=${date}`);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [date]);
  if (!date) return <p>Loading...</p>;

    useEffect(() => {
        console.log('NO', date);
        if (date !== '') {
            setIsNos(true)
        }

    }, [date])

    return (
        <div>
            {isNos ?
                <SriDarbarSahib hukum_date={date} /> : null}
        </div>
    )
}

export default SriDarbarSahibHukumDate