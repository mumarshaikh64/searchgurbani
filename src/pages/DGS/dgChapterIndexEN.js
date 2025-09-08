//Gurbani search//
import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate, useOutletContext } from "react-router";
// import { Link, useLocation, useParams} from "react-router-dom";
import 'react-h5-audio-player/lib/styles.css';
import DgChapterIndex from '../../components/DgChapterIndex';
import { useParams } from 'next/navigation';


function DgChapterEn() {
    // const { page_no, line_no } = useParams();
    const params = useParams();
    const page_no = params?.page_no;
    const line_no = params?.line_no;

    const [isNos, setIsNos] = useState(false);
    return (
        <div>
            <DgChapterIndex lang="en"/>
        </div>
    )
}

export default DgChapterEn