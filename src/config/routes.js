// import React, { useState, useEffect, lazy, Suspense } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Spinner from "../components/Spinner.js";
// import AkShabadSharePage from "../views/AK/AKShabadShare.js";
// import BvgSharePage from "../views/BGV/BvgShare.js";
// import KsSharePage from "../views/KS/KsShare.js";
// import AngSharePage from "../views/GGS/AngShare.js";
// import AngShabadShare from "../views/GGS/AngShabadShare.js";
// import DgSharePage from "../views/DGS/DgShare.js";
// import DgShabadSharePage from "../views/DGS/DgShabadShare.js";
// import BnlSharePage from "../views/BNL/BnlSharePage.js";
// import BnlShabadSharePage from "../views/BNL/BnlShabadShare.js";
// import SriDarbarSahibHukumDate from "../views/Resources/Hukumnama/SDSDate.js";
// const Layout = lazy(() => import("../views/layout"));
// const Home = lazy(() => import("../views/Home"));
// const GgsIntroduction = lazy(() => import("../views/GGS/GgsIntro"));
// const GurbaniSearch = lazy(() => import("../views/GurbaniSearch"));
// const GurbaniSearching = lazy(() => import("../views/GurbaniSearching"));
// const DiscoverMore = lazy(() => import("../views/DiscoverMore"));
// const GurbaniFeatures = lazy(() => import("../views/GurbaniFeatures.js"));
// const AngByAng = lazy(() => import("../views/GGS/AngByAng"));
// const SggsInWorldLanguage = lazy(() => import("../views/GGS/SggsWorldLanguage"));
// const SggsShabadIndex = lazy(() => import("../views/GGS/SggsIndex"));
// const AuthorIndex = lazy(() => import("../views/GGS/AuthorIndex"));
// const GgsAdvancedSearch = lazy(() => import("../views/GGS/GgsAdvanceSearch"));
// const Feedback = lazy(() => import("../views/Feedback"));
// const AuthorRaga = lazy(() => import("../views/GGS/AuthorRaga"));
// const SiteMap = lazy(() => import("../views/SiteMap"));
// const PrivacyPolicy = lazy(() => import("../views/PrivacyPolicy.js"));
// const SitePreference = lazy(() => import("../views/SitePreference"));
// const AkIntroduction = lazy(() => import("../views/AK/AkInro"));
// const BgvIntroduction = lazy(() => import("../views/BGV/BgvIntro"));
// const DgsIntroduction = lazy(() => import("../views/DGS/DsgIntro"));
// const ShabadLine = lazy(() => import("../views/GGS/GGSShabadLine"));
// const AngLine = lazy(() => import("../views/GGS/AngLine"));
// const PageByPage = lazy(() => import("../views/AK/PageByPage"));
// const AkSharePage = lazy(() => import("../views/AK/AkShare.js"));
// const EnglishIndex = lazy(() => import("../views/AK/EnglishIndex"));
// const HindiIndex = lazy(() => import("../views/AK/HindiIndex"));
// const PunjabiIndex = lazy(() => import("../views/AK/PunjabiIndex"));
// const AkShabadLine = lazy(() => import("../views/AK/AkShabadLine"));
// const ChapterIndex = lazy(() => import("../views/AK/ChapterIndex"));
// const ChapterName = lazy(() => import("../views/AK/ChapterName"));
// const GGSVerse = lazy(() => import("../views/GGS/GGSVerse"));
// const SGGKSearch = lazy(() => import("../views/Resources/SGGK/SGGKSearch"));
// const AkAdvancedSearch = lazy(() => import("../views/AK/AkSearch"));
// const BgvAdvancedSearch = lazy(() => import("../views/BGV/BgvSearch"));
// const DgsAdvancedSearch = lazy(() => import("../views/DGS/DgsSearch"));
// const KsAdvancedSearch = lazy(() => import("../views/KS/KsSearch"));
// const BnlAdvancedSearch = lazy(() => import("../views/BNL/BnlSearch"));
// const PauriByPauri = lazy(() => import("../views/BGV/PauriByPauri"));
// const VaarIndex = lazy(() => import("../views/BGV/VaarIndex"));
// const DGPageByPage = lazy(() => import("../views/DGS/DGPageByPage"));
// const DgChapterPb = lazy(() => import("../views/DGS/DgChapterIndexPB"));
// const DgChapterEn = lazy(() => import("../views/DGS/DgChapterIndexEN"));
// const ISearchGurbani = lazy(() => import("../views/Resources/ISearchGurbani"));
// const PageLine = lazy(() => import("../views/DGS/PageLine"));
// const DgShabadLine = lazy(() => import("../views/DGS/DgShabad"));
// const DgVerse = lazy(() => import("../views/DGS/DgVerse"));
// const KabitByKabit = lazy(() => import("../views/KS/KabitByKabit"));
// const KabitPageLine = lazy(() => import("../views/KS/KabitPageLine.js"));
// const Ghazalas = lazy(() => import("../views/BNL/Ghazals"));
// const Rubaayee = lazy(() => import("../views/BNL/Rubaayee"));
// const Zindginama = lazy(() => import("../views/BNL/Zindginama"));
// const Ganjnama = lazy(() => import("../views/BNL/Ganjnama"));
// const JotBikasPb = lazy(() => import("../views/BNL/JotBikasPb"));
// const JotBikasPersian = lazy(() => import("../views/BNL/JotBikasPersian"));
// const Rahitnama = lazy(() => import("../views/BNL/Rahitnama"));
// const Tankahnama = lazy(() => import("../views/BNL/Tankahnama"));
// const BnlShabadLine = lazy(() => import("../views/BNL/BnlShabad"));
// const BnlPageLine = lazy(() => import("../views/BNL/BnlPageLine"));
// const BnlVerse = lazy(() => import("../views/BNL/BnlVerse"));
// const JapjiSahib = lazy(() => import("../views/SG/Nitnem/JapjiSahib"));
// const JaapSahib = lazy(() => import("../views/SG/Nitnem/JaapSahib"));
// const TvaiPrasadh = lazy(() => import("../views/SG/Nitnem/TvaiPrasadhSavaiye"));
// const ChaupaiSahib = lazy(() => import("../views/SG/Nitnem/ChaupaiSahib"));
// const AnandSahib = lazy(() => import("../views/SG/Nitnem/AnandSahib"));
// const RehraasSahib = lazy(() => import("../views/SG/Nitnem/RehraasSahib"));
// const KirtanSohila = lazy(() => import("../views/SG/Nitnem/Kirtansohila"));
// const AkalUstati = lazy(() => import("../views/SG/DasamGranth/AkalUstati"));
// const BachitarNatak = lazy(() => import("../views/SG/DasamGranth/BachitarNatak"));
// const ShabadHazare = lazy(() => import("../views/SG/DasamGranth/ShabadHazare"));
// const DGTvai = lazy(() => import("../views/SG/DasamGranth/TvaiPrasadh"));
// const AnandBhog = lazy(() => import("../views/SG/GuruGranthSahib/AnandSahibBhog"));
// const Aarti = lazy(() => import("../views/SG/GuruGranthSahib/Aarti"));
// const Laavan = lazy(() => import("../views/SG/GuruGranthSahib/Laavan"));
// const AsaKiVaar = lazy(() => import("../views/SG/GuruGranthSahib/AsaKiVaar"));
// const SukhmaniSahib = lazy(() => import("../views/SG/GuruGranthSahib/SukhmaniSahib"));
// const SidhGosht = lazy(() => import("../views/SG/GuruGranthSahib/SidhGosht"));
// const RamkaliSadh = lazy(() => import("../views/SG/GuruGranthSahib/RamkaliSadh"));
// const DhakaneeOankaar = lazy(() => import("../views/SG/GuruGranthSahib/DhakaneeOankaar"));
// const Baavan = lazy(() => import("../views/SG/GuruGranthSahib/Baavan"));
// const GGSShabadHazare = lazy(() => import("../views/SG/GuruGranthSahib/GGSShabadHazare"));
// const BaarahMaaha = lazy(() => import("../views/SG/GuruGranthSahib/BaarahMaaha"));
// const SukhmanaSahib = lazy(() => import("../views/SG/GuruGranthSahib/SukhmanaSahib"));
// const DukhBhanjani = lazy(() => import("../views/SG/GuruGranthSahib/DukhBhanjani"));
// const Salok = lazy(() => import("../views/SG/GuruGranthSahib/Salok"));
// const Gathaa = lazy(() => import("../views/SG/GuruGranthSahib/Gathaa"));
// const Phunhay = lazy(() => import("../views/SG/GuruGranthSahib/Phunhay"));
// const Chaubolay = lazy(() => import("../views/SG/GuruGranthSahib/Chaubolay"));
// const SalokKabeer = lazy(() => import("../views/SG/GuruGranthSahib/SalokKabeer"));
// const SalokFarid = lazy(() => import("../views/SG/GuruGranthSahib/SalokFarid"));
// const SavaiyeM1 = lazy(() => import("../views/SG/GuruGranthSahib/SavaiyeM1"));
// const SavaiyeM2 = lazy(() => import("../views/SG/GuruGranthSahib/SavaiyeM2"));
// const SavaiyeM3 = lazy(() => import("../views/SG/GuruGranthSahib/SavaiyeM3"));
// const SavaiyeM4 = lazy(() => import("../views/SG/GuruGranthSahib/SavaiyeM4"));
// const SavaiyeM5 = lazy(() => import("../views/SG/GuruGranthSahib/SavaiyeM5"));
// const SalokM9 = lazy(() => import("../views/SG/GuruGranthSahib/SalokM9"));
// const SundarGutka = lazy(() => import("../views/SG/SundarGutka"));
// const ISearch = lazy(() => import("../views/Resources/ISearch"));
// const SearchGurbaniDV = lazy(() => import("../views/Resources/SearchGurbaniDV"));
// const Mahankosh = lazy(() => import("../views/Resources/GSRM/Mahankosh.js"));
// const MahankoshView = lazy(() => import("../views/Resources/GSRM/MahankoshView.js"));
// const GurbaniRaags = lazy(() => import("../views/Resources/GurbaniRaag/Gurbaniraags"));
// const SGGKView = lazy(() => import("../views/Resources/SGGK/SGGKView.js"));
// const SggskSearch = lazy(() => import("../views/Resources/SGGSKhosh/Sggsk.js"));
// const SggskView = lazy(() => import("../views/Resources/SGGSKhosh/SggskView.js"));
// const Maansarovar = lazy(() => import("../views/Resources/MAANSARO/Maansarovar.js"));
// const MaansarovarView = lazy(() => import("../views/Resources/MAANSARO/MaansarovarView.js"));
// const MaansarovarIndex = lazy(() => import("../views/Resources/MAANSARO/MaansarovarIndex.js"));
// const SNPrakash = lazy(() => import("../views/Resources/SNP/SNPrakash.js"));
// const SNPrakashSectn1 = lazy(() => import("../views/Resources/SNP/SNPrakashSectn.js"));
// const SNPrakashSectn = lazy(() => import("../views/Resources/SNP/SNPrakashSectn.js"));
// const SNPrakashView = lazy(() => import("../views/Resources/SNP/SNPrakashView.js"));
// const SGPSGSearch = lazy(() => import("../views/Resources/SGPSGranth/SGPSG.js"));
// const SGPSGIndex = lazy(() => import("../views/Resources/SGPSGranth/SGPSGIndex.js"));
// const SGPSGView = lazy(() => import("../views/Resources/SGPSGranth/SGPSGView.js"));
// const SGPSGVolume = lazy(() => import("../views/Resources/SGPSGranth/SGPSGVolume.js"));
// const FWTSearch = lazy(() => import("../views/Resources/FWT/FWTSearch.js"));
// const FWTIndex = lazy(() => import("../views/Resources/FWT/FWTIndex.js"));
// const FWTView = lazy(() => import("../views/Resources/FWT/FWTView.js"));
// const FWTSearchView = lazy(() => import("../views/Resources/FWT/FWTSearchView.js"));
// const SNPSearchView = lazy(() => import("../views/Resources/SNP/SNPrakashSearchView.js"));
// const SgpsgSearchView = lazy(() => import("../views/Resources/SGPSGranth/SgpsgSearchView.js"));
// const SearchResultPreview = lazy(() => import("../components/SearchResultPreview.js"));
// const Timing = lazy(() => import("../views/Resources/GurbaniRaag/Timing.js"));
// const Taal = lazy(() => import("../views/Resources/GurbaniRaag/Taal.js"));
// const Golssary = lazy(() => import("../views/Resources/GurbaniRaag/Glossary.js"));
// const Muscical = lazy(() => import("../views/Resources/GurbaniRaag/Musical.js"));
// const HukumIndex = lazy(() => import("../views/Resources/Hukumnama/HukumIndex.js"));
// const SriDarbarSahib = lazy(() => import("../views/Resources/Hukumnama/SDS.js"));
// const CyberHukumnama = lazy(() => import("../views/Resources/Hukumnama/CyberHukumnama.js"));
// const SGGDSearch = lazy(() => import("../views/Resources/SGGD/SGGDSeach.js"));
// const SGGDView = lazy(() => import("../views/Resources/SGGD/SGGDView.js"));
// const SGGDSeachView = lazy(() => import("../views/Resources/SGGD/SGGDSearchView.js"));
// const HukumAng = lazy(() => import("../views/Resources/Hukumnama/HukumAng.js"));
// const SriRaag = lazy(() => import("../views/Resources/GurbaniRaag/SriRaag.js"));
// const Unicode = lazy(() => import("../views/UnicodeFonts.js"));
// const Sahiban = lazy(() => import("../views/Resources/GuruSahiban/Sahiban.js"));
// const GuruNanak = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak.js"));
// const IndianClassical = lazy(() => import("../views/Resources/ClassicalMusic/IndianClassical.js"));
// const BhattSahiban = lazy(() => import("../views/Resources/Bhatts/BhattSahiban.js"));
// const VersePrintView = lazy(() => import("../components/VersePrint.js"));
// const Kalshar = lazy(() => import("../views/Resources/Bhatts/Kalshar.js"));
// const Salh = lazy(() => import("../views/Resources/Bhatts/Salh.js"));
// const Mathura = lazy(() => import("../views/Resources/Bhatts/Mathura.js"));
// const SattaBalwand = lazy(() => import("../views/Resources/Bhatts/SattaBalwand.js"));
// const AngPrint = lazy(() => import("../views/GGS/AngPrint.js"));
// const AkPagePrint = lazy(() => import("../views/AK/PrintPage.js"));
// const PrintPauri = lazy(() => import("../views/BGV/PrintPauri.js"));
// const DgPagePrint = lazy(() => import("../views/DGS/DgPrintPage.js"));
// const KsPagePrint = lazy(() => import("../views/KS/KsPrintPage.js"));
// const BnlPrintPage = lazy(() => import("../views/BNL/BnlPrintPage.js"));
// const Jalap = lazy(() => import("../views/Resources/Bhatts/Jalap.js"));
// const Balh = lazy(() => import("../views/Resources/Bhatts/Balh.js"));
// const Bhalh = lazy(() => import("../views/Resources/Bhatts/Bhalh.js"));
// const Mardana = lazy(() => import("../views/Resources/Bhatts/Mardana.js"));
// const ShabadPrint = lazy(() => import("../components/ShabadPrint.js"));
// const GgsShabadPrint = lazy(() => import("../views/GGS/GgsShabdPrint.js"));
// const AkShabadPrint = lazy(() => import("../views/AK/AkShabadPrint.js"));
// const DgShabadPrint = lazy(() => import("../views/DGS/DgShabadPrint.js"));
// const BNlShabadPrint = lazy(() => import("../views/BNL/BnlShabadPrint.js"));
// const BnlShabadPrint = lazy(() => import("../views/BNL/BnlShabadPrint.js"));
// const GgsVersePrint = lazy(() => import("../views/GGS/GgsVersePrint.js"));
// const DgVersePrint = lazy(() => import("../views/DGS/DgVersePrint.js"));
// const BnlVersePrint = lazy(() => import("../views/BNL/BnlVersePrint.js"));
// const SgPrintPage = lazy(() => import("../views/SG/SgPrintPage.js"));
// const Kirat = lazy(() => import("../views/Resources/Bhatts/Kirat.js"));
// const Nalh = lazy(() => import("../views/Resources/Bhatts/Nalh.js"));
// const Haribans = lazy(() => import("../views/Resources/Bhatts/Haribans.js"));
// const Gyand = lazy(() => import("../views/Resources/Bhatts/Gyand.js"));
// const Bhika = lazy(() => import("../views/Resources/Bhatts/Bhika.js"));
// const BabaSundar = lazy(() => import("../views/Resources/Bhatts/BabaSundar.js"));
// const GuruNanak2 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak2.js"));
// const GuruAngad = lazy(() => import("../views/Resources/GuruSahiban/GuruAngad.js"));
// const GuruNanak3 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak3.js"));
// const GuruNanak4 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak4.js"));
// const GuruNanak5 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak5.js"));
// const GuruNanak6 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak6.js"));
// const GuruNanak7 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak7.js"));
// const GuruNanak9 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak9.js"));
// const GuruNanak10 = lazy(() => import("../views/Resources/GuruSahiban/GuruNanak10.js"));
// const CompilationSGGS = lazy(() => import("../views/Resources/ClassicalMusic/CompilationSGGS.js"));
// const GuruAngad2 = lazy(() => import("../views/Resources/GuruSahiban/GuruAngad2.js"));
// const GuruAngad3 = lazy(() => import("../views/Resources/GuruSahiban/GuruAngad3.js"));
// const Devghandhari = lazy(() => import("../views/Resources/GurbaniRaag/Dev.js"));
// const Jaitsiri = lazy(() => import("../views/Resources/GurbaniRaag/Jaitsiri.js"));
// const Bilawal = lazy(() => import("../views/Resources/GurbaniRaag/Bilawal.js"));
// const SNPPrint = lazy(() => import("../views/Resources/SNP/SNPPrint.js"));
// const SGPSGPrint = lazy(() => import("../views/Resources/SGPSGranth/SGPSGPrint.js"));
// const FWTPrint = lazy(() => import("../views/Resources/FWT/FWTPrint.js"));
// const SGGDPrint = lazy(() => import("../views/Resources/SGGD/SGGDPrint.js"));
// const GuruAmarDas = lazy(() => import("../views/Resources/GuruSahiban/GuruAmarDas.js"));
// const GuruAmarDas2 = lazy(() => import("../views/Resources/GuruSahiban/GuruAmarDas2.js"));
// const GuruRamDas = lazy(() => import("../views/Resources/GuruSahiban/GuruRamDas.js"));
// const BhagatSahiban = lazy(() => import("../views/Resources/BhagatSahiban/Bhagat.js"));
// const Maru = lazy(() => import("../views/Resources/GurbaniRaag/Maru.js"));
// const SheikhFarid = lazy(() => import("../views/Resources/BhagatSahiban/SheikhFarid.js"));
// const Namdev = lazy(() => import("../views/Resources/BhagatSahiban/Namdev.js"));
// const Sain = lazy(() => import("../views/Resources/BhagatSahiban/Sain.js"));
// const Jaidev = lazy(() => import("../views/Resources/BhagatSahiban/Jaidev.js"));
// const Kabir = lazy(() => import("../views/Resources/BhagatSahiban/Kabir.js"));
// const Sadhana = lazy(() => import("../views/Resources/BhagatSahiban/Sadhana.js"));
// const Dhanna = lazy(() => import("../views/Resources/BhagatSahiban/Dhanna.js"));
// const Ramanand = lazy(() => import("../views/Resources/BhagatSahiban/RamAnand.js"));
// const Ravidas = lazy(() => import("../views/Resources/BhagatSahiban/Ravidas.js"));
// const Bhikhan = lazy(() => import("../views/Resources/BhagatSahiban/Bhikhan.js"));
// const Pipa = lazy(() => import("../views/Resources/BhagatSahiban/Pipa.js"));
// const Trilochan = lazy(() => import("../views/Resources/BhagatSahiban/Trilochan.js"));
// const Beni = lazy(() => import("../views/Resources/BhagatSahiban/Beni.js"));
// const Parmanand = lazy(() => import("../views/Resources/BhagatSahiban/Parmanand.js"));
// const Surdas = lazy(() => import("../views/Resources/BhagatSahiban/Surdas.js"));
// const GuruArjan = lazy(() => import("../views/Resources/GuruSahiban/GuruArjan.js"));
// const GuruArjan2 = lazy(() => import("../views/Resources/GuruSahiban/GuruArjan2.js"));
// const GuruArjan3 = lazy(() => import("../views/Resources/GuruSahiban/GuruArjan3.js"));
// const GuruArjan4 = lazy(() => import("../views/Resources/GuruSahiban/GuruArjan4.js"));
// const Sarang = lazy(() => import("../views/Resources/GurbaniRaag/Sarang.js"));
// const Maj = lazy(() => import("../views/Resources/GurbaniRaag/Maj.js"));
// const Bihagra = lazy(() => import("../views/Resources/GurbaniRaag/Bihagra.js"));
// const Todi = lazy(() => import("../views/Resources/GurbaniRaag/Todi.js"));
// const Gaund = lazy(() => import("../views/Resources/GurbaniRaag/Gaund.js"));
// const Tukhari = lazy(() => import("../views/Resources/GurbaniRaag/Tukhari.js"));
// const Malhar = lazy(() => import("../views/Resources/GurbaniRaag/Malhar.js"));
// const Gauri = lazy(() => import("../views/Resources/GurbaniRaag/Gauri.js"));
// const Wadhans = lazy(() => import("../views/Resources/GurbaniRaag/Wadhans.js"));
// const Berari = lazy(() => import("../views/Resources/GurbaniRaag/Berari.js"));
// const Ramkali = lazy(() => import("../views/Resources/GurbaniRaag/Ramkali.js"));
// const Kedara = lazy(() => import("../views/Resources/GurbaniRaag/Kedara.js"));
// const Kanara = lazy(() => import("../views/Resources/GurbaniRaag/Kanara.js"));
// const GuruHarGubind = lazy(() => import("../views/Resources/GuruSahiban/GuruHarGobind.js"));
// const GuruHarGubind2 = lazy(() => import("../views/Resources/GuruSahiban/GuruHarGobind2.js"));
// const GuruHarGubind3 = lazy(() => import("../views/Resources/GuruSahiban/GuruHarGobind3.js"));
// const GuruHarGubind4 = lazy(() => import("../views/Resources/GuruSahiban/GuruHarGobind4.js"));
// const GuruHarRai = lazy(() => import("../views/Resources/GuruSahiban/GuruHarRai.js"));
// const GuruHarKrishnan = lazy(() => import("../views/Resources/GuruSahiban/GuruHarKrishnan.js"));
// const GuruBahadur = lazy(() => import("../views/Resources/GuruSahiban/GuruBahadur.js"));
// const GuruBahadur1 = lazy(() => import("../views/Resources/GuruSahiban/GuruBahdur1.js"));
// const Sorath = lazy(() => import("../views/Resources/GurbaniRaag/Sorath.js"));
// const Tilang = lazy(() => import("../views/Resources/GurbaniRaag/Tilang.js"));
// const Nutnarain = lazy(() => import("../views/Resources/GurbaniRaag/Nutnarain.js"));
// const Bhairav = lazy(() => import("../views/Resources/GurbaniRaag/Bhairav.js"));
// const Kalyan = lazy(() => import("../views/Resources/GurbaniRaag/Kalyan.js"));
// const Gujri = lazy(() => import("../views/Resources/GurbaniRaag/Gujri.js"));
// const Dhanasri = lazy(() => import("../views/Resources/GurbaniRaag/Dhanasri.js"));
// const Suhi = lazy(() => import("../views/Resources/GurbaniRaag/Suhi.js"));
// const Mali = lazy(() => import("../views/Resources/GurbaniRaag/Mali.js"));
// const Basant = lazy(() => import("../views/Resources/GurbaniRaag/Basant.js"));
// const Parbhati = lazy(() => import("../views/Resources/GurbaniRaag/Parbhati.js"));
// const Jaijaiwanti = lazy(() => import("../views/Resources/GurbaniRaag/Jaijaiwanti.js"));
// const Asa = lazy(() => import("../views/Resources/GurbaniRaag/Asa.js"));
// const GuruGobind = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind.js"));
// const GuruGobind2 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind2.js"));
// const GuruGobind9 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind9.js"));
// const GuruGobind8 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind8.js"));
// const GuruGobind7 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind7.js"));
// const GuruGobind6 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobid6.js"));
// const GuruGobind5 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobid5.js"));
// const GuruGobind4 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind4.js"));
// const GuruGobind3 = lazy(() => import("../views/Resources/GuruSahiban/GuruGobind3.js"));





// /* const initialFormState = {
//   translation: {
//     ggs: {
//       eng_mms: false,
//       punj_mms: false,
//       ggd: false,
//       ft: false,
//       fth: false,
//       ss: false,
//     },
//     bgv: {
//       teeka: false,
//       teeka_roman: false,
//       teeka_hindi: false,
//     },
//     dg: {
//       teeka: false,
//     },
//     ks: {
//       teeka: false,
//       teeka_roman: false,
//       teeka_hindi: false,
//     },
//     bnl: {
//       teeka: false,
//       teekahindi: false,
//     },
//     english: true,
//   },
//   transliteration: {
//     roman: true,
//     english: false,
//     hindi: false,
//     shahmukhi: false,
//     main_lang: true,
//     lareevar: false,
//     lareevar_assist: false,
//     punctuation: false,
//     punctuation_assist: false,
//   },
//   displayMode: {
//     split_view: false,
//     center_align: false,
//     dark_mode: false,    
//   },
//   font: {
//     gurmukhi: {
//       name: 'AnmolUniBani',
//       color: '#333333',
//       size: 18,
//     },
//     english: {
//       name: 'arial',
//       color: '#366732',
//       size: 18,
//     },
//     hindi: {
//       name: 'arial',
//       color: '#880808',
//       size: 18,
//     },
//     phonetic: {
//       name: 'arial',
//       color: '#06035b',
//       size: 18,
//     },
//     attributes: {
//       name: 'AnmolUniBani',
//       color: '#670464',
//       size: 18,
//     }
//   },
//   mouseover_gurmukhi_dic: false,
//   show_attributes: true,
//   social_flag: false,
//   share: {
//     translation: {
//       english: true,
//     },
//     transliteration: {
//       roman: true,
//       english: false,
//       hindi: false,
//       shahmukhi: false
//     }
//   },
//   ggs_audio: {
//     audio1: false,
//     audio2: false,
//     audio3: false,
//     audio4: true,
// }
// };
// const sgFormState = {  
//     showEnglish: false,
//     showPhonetic: false,
//     showHindi: false,
// }; */

// const Routing = () => {
//   const location = useLocation();


//   /* useEffect(() => {
//     const savedForm = localStorage.getItem('Preference');
//     console.log('###',initialFormState)
//     console.log('TESTING')
//     if (!savedForm) {
//       localStorage.setItem('Preference', JSON.stringify(form));
//     } 
//     const sgForm = localStorage.getItem('sgPreference');
//     console.log('************',sgForm)
//     if (!sgForm) {
//       localStorage.setItem('sgPreference', JSON.stringify(sgFormState));
//     } 
//     }, []); */
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
//   return (
//     <Suspense fallback={<Spinner />}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="dicover-more" element={<DiscoverMore />} />
//           <Route path="isearchgurbani-features" element={<GurbaniFeatures />} />
//           <Route path="gurbani-search" element={<GurbaniSearch />} />
//           <Route path="feedback" element={<Feedback />} />
//           <Route path="site-map" element={<SiteMap />} />
//           <Route path="preferences" element={<SitePreference />} />
//           <Route path="unicode" element={<Unicode />} />
//           <Route path="privacy-policy" element={<PrivacyPolicy />} />

//           <Route path="guru-granth-sahib/introduction" element={<GgsIntroduction />} />
//           <Route path="guru-granth-sahib/ang-by-ang" element={<AngByAng />} />
//           <Route path="guru-granth-sahib/ang/:page_no/line/:line_no" element={<AngLine />} />
//           <Route path="guru-granth-sahib/ang/:page_no" element={<AngLine />} />
//           <Route path="shared/guru-granth-sahib/ang/:page_no/line/:line_no" element={<AngSharePage />} />
//           <Route path="guru-granth-sahib/shabad/:shabad_id/line/:lineno" element={<ShabadLine />} />
//           <Route path="guru-granth-sahib/shabad/:shabad_id/:shabadE" element={<ShabadLine />} />
//           <Route path="shared/guru-granth-sahib/shabad/:shabad_id/line/:line_no" element={<AngShabadShare />} />
//           <Route path="guru-granth-sahib/verse/:page_no" element={<GGSVerse />} />
//           <Route path="guru-granth-sahib/index/chapter" element={<SggsShabadIndex />} />
//           <Route path="guru-granth-sahib/index/author" element={<AuthorIndex />} />
//           <Route path="guru-granth-sahib/index/author/:slug" element={<AuthorRaga />} />
//           <Route path="guru-granth-sahib/sggs-world-language" element={<SggsInWorldLanguage />} />
//           <Route path="guru-granth-sahib/search" element={<GgsAdvancedSearch />} />
//           <Route path="scriptures/search" element={<GurbaniSearching />} />

//           <Route path="amrit-keertan/introduction" element={<AkIntroduction />} />
//           <Route path="amrit-keertan/page-by-page" element={<PageByPage />} />
//           <Route path="amrit-keertan/page/:page_no" element={<PageByPage />} />
//           <Route path="amrit-keertan/page/:page_no/line/:line_no" element={<PageByPage />} />
//           <Route path="shared/amrit-keertan/page/:page_no/line/:line_no" element={<AkSharePage />} />
//           <Route path="shared/amrit-keertan/shabad/:shabad_id/line/:line_no" element={<AkShabadSharePage />} />
//           <Route path="amrit-keertan/index/chapter" element={<ChapterIndex />} />
//           <Route path="amrit-keertan/chapter/:chapter_no/:chapter_name" element={<ChapterName />} />
//           <Route path="amrit-keertan/index/english" element={<EnglishIndex />} />
//           <Route path="amrit-keertan/index/hindi" element={<HindiIndex />} />
//           <Route path="amrit-keertan/index/punjabi" element={<PunjabiIndex />} />
//           <Route path="amrit-keertan/shabad/:shabad_id/line/:lineno" element={<AkShabadLine />} />
//           <Route path="amrit-keertan/shabad/:shabad_id/:shabad_name" element={<AkShabadLine />} />
//           <Route path="amrit-keertan/shabad/:shabad_id/:shabad_name/line/:lineno" element={<AkShabadLine />} />
          
//           <Route path="amrit-keertan/search" element={<AkAdvancedSearch />} />

//           <Route path="bhai-gurdas-vaaran/introduction" element={<BgvIntroduction />} />
//           <Route path="bhai-gurdas-vaaran/pauri-by-pauri" element={<PauriByPauri />} />
//           <Route path="bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/line/:line_no" element={<PauriByPauri />} />
//           <Route path="bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no" element={<PauriByPauri />} />
//           <Route path="shared/bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/line/:line_no" element={<BvgSharePage />} />
//           <Route path="bhai-gurdas-vaaran/index/vaar" element={<VaarIndex />} />
//           <Route path="bhai-gurdas-vaaran/vaar-index/:vaar_no" element={<VaarIndex />} />
//           <Route path="bhai-gurdas-vaaran/search" element={<BgvAdvancedSearch />} />

//           <Route path="dasam-granth/introduction" element={<DgsIntroduction />} />
//           <Route path="dasam-granth/page-by-page" element={<DGPageByPage />} />
//           <Route path="dasam-granth/page/:page_no" element={<PageLine />} />
//           <Route path="shared/dasam-granth/page/:page_no/line/:line_no" element={<DgSharePage />} />
//           <Route path="dasam-granth/shabad/:shabad_id/line/:lineno" element={<DgShabadLine />} />
//           <Route path="shared/dasam-granth/shabad/:shabad_id/line/:line_no" element={<DgShabadSharePage />} />
//           <Route path="dasam-granth/page/:page_no/line/:line_no" element={<PageLine />} />
//           <Route path="dasam-granth/verse/:page_no" element={<DgVerse />} />
//           <Route path="dasam-granth/index/chapter/pb" element={<DgChapterPb />} />
//           <Route path="dasam-granth/index/chapter/en" element={<DgChapterEn />} />
//           <Route path="dasam-granth/search" element={<DgsAdvancedSearch />} />

//           <Route path="kabit-savaiye/kabit-by-kabit" element={<KabitByKabit />} />
//           <Route path="kabit-savaiye/kabit/:page_no/line/:line_no" element={<KabitPageLine />} />
//           <Route path="kabit-savaiye/kabit/:page_no" element={<KabitPageLine />} />
//           <Route path="shared/kabit-savaiye/kabit/:page_no/line/:line_no" element={<KsSharePage />} />
//           <Route path="kabit-savaiye/search" element={<KsAdvancedSearch />} />

//           <Route path="bhai-nand-lal/ghazal" element={<Ghazalas />} />
//           <Route path="bhai-nand-lal/quatrains" element={<Rubaayee />} />
//           <Route path="bhai-nand-lal/zindginama" element={<Zindginama />} />
//           <Route path="bhai-nand-lal/ganjnama" element={<Ganjnama />} />
//           <Route path="bhai-nand-lal/jot-bikas" element={<JotBikasPb />} />
//           <Route path="bhai-nand-lal/jot-bikas-persian" element={<JotBikasPersian />} />
//           <Route path="bhai-nand-lal/rahitnama" element={<Rahitnama />} />
//           <Route path="bhai-nand-lal/tankahnama" element={<Tankahnama />} />
//           <Route path="bhai-nand-lal/:type/shabad/:shabad_id/line/:lineno" element={<BnlShabadLine />} />
//           <Route path="bhai-nand-lal/:type/page/:page_no/line/:lineno" element={<BnlPageLine />} />
//           <Route path="bhai-nand-lal/:type/page/:page_no" element={<BnlPageLine />} />
//           <Route path="shared/bhai-nand-lal/:type/page/:page_no/line/:line_no" element={<BnlSharePage />} />
//           <Route path="shared/bhai-nand-lal/:type/shabad/:shabad_id/line/:line_no" element={<BnlShabadSharePage />} />
//           <Route path="bhai-nand-lal/:type/verse/:page_no" element={<BnlVerse />} />
//           <Route path="bhai-nand-lal/search" element={<BnlAdvancedSearch />} />

//           <Route path="sundar-gutka" element={<SundarGutka />} />
//           <Route path="baanis/japji-sahib" element={<JapjiSahib />} />
//           <Route path="baanis/jaap-sahib" element={<JaapSahib />} />
//           <Route path="baanis/tvai-prasadh-savaiye" element={<TvaiPrasadh />} />
//           <Route path="baanis/chaupai-sahib" element={<ChaupaiSahib />} />
//           <Route path="baanis/anand-sahib" element={<AnandSahib />} />
//           <Route path="baanis/rehraas-sahib" element={<RehraasSahib />} />
//           <Route path="baanis/kirtan-sohila" element={<KirtanSohila />} />

//           <Route path="baanis/anand-sahib-bhog" element={<AnandBhog />} />
//           <Route path="baanis/aarti" element={<Aarti />} />
//           <Route path="baanis/laavan-anand-karaj" element={<Laavan />} />
//           <Route path="baanis/asa-ki-vaar" element={<AsaKiVaar />} />
//           <Route path="baanis/sukhmani-sahib" element={<SukhmaniSahib />} />
//           <Route path="baanis/sidh-gosht" element={<SidhGosht />} />
//           <Route path="baanis/ramkali-sadh" element={<RamkaliSadh />} />
//           <Route path="baanis/dhakanee-oankaar" element={<DhakaneeOankaar />} />
//           <Route path="baanis/baavan-akhree" element={<Baavan />} />
//           <Route path="baanis/shabad-hazare" element={<GGSShabadHazare />} />
//           <Route path="baanis/baarah-maaha" element={<BaarahMaaha />} />
//           <Route path="baanis/sukhmana-sahib" element={<SukhmanaSahib />} />
//           <Route path="baanis/dukh-bhanjani-sahib" element={<DukhBhanjani />} />
//           <Route path="baanis/salok-sehskritee" element={<Salok />} />
//           <Route path="baanis/gathaa" element={<Gathaa />} />
//           <Route path="baanis/phunhay-m5" element={<Phunhay />} />
//           <Route path="baanis/chaubolay-m5" element={<Chaubolay />} />
//           <Route path="baanis/salok-kabeer-ji" element={<SalokKabeer />} />
//           <Route path="baanis/salok-farid-ji" element={<SalokFarid />} />
//           <Route path="baanis/savaiye-m1" element={<SavaiyeM1 />} />
//           <Route path="baanis/savaiye-m2" element={<SavaiyeM2 />} />
//           <Route path="baanis/savaiye-m3" element={<SavaiyeM3 />} />
//           <Route path="baanis/savaiye-m4" element={<SavaiyeM4 />} />
//           <Route path="baanis/savaiye-m5" element={<SavaiyeM5 />} />
//           <Route path="baanis/salok-m9" element={<SalokM9 />} />

//           <Route path="baanis/akal-ustati" element={<AkalUstati />} />
//           <Route path="baanis/bachitar-natak" element={<BachitarNatak />} />
//           <Route path="baanis/shabad-hazare-paatishahi-10" element={<ShabadHazare />} />
//           <Route path="baanis/tvai-prasaadh-savaiye-dheenan-kee" element={<DGTvai />} />

//           <Route path="hukumnama" element={<HukumIndex />} />
//           <Route path="hukumnama/ang/:ang" element={<HukumAng />} />
//           <Route path="hukum" element={<SriDarbarSahib />} />
//           <Route path="hukum/:h_date" element={<SriDarbarSahibHukumDate />} />
//           <Route path="hukumnama/cyber" element={<CyberHukumnama />} />

//           <Route path="sgdv/isg" element={<ISearchGurbani />} />
//           <Route path="sgdv" element={<SearchGurbaniDV />} />

//           <Route path="mahan-kosh" element={<Mahankosh />} />
//           <Route path="mahan-kosh/view" element={<MahankoshView />} />
//           <Route path="guru-granth-sahib/search-results" element={<SearchResultPreview />} />

//           <Route path="guru-granth-kosh" element={<SGGKSearch />} />
//           <Route path="guru-granth-kosh/view" element={<SGGKView />} />

//           <Route path="sggs-kosh" element={<SggskSearch />} />
//           <Route path="sggs-kosh/view" element={<SggskView />} />

//           <Route path="maansarovar" element={<Maansarovar />} />
//           <Route path="maansarovar/words" element={<MaansarovarView />} />
//           <Route path="maansarovar/quotations/:word" element={<MaansarovarIndex />} />

//           <Route path="sri-nanak-prakash" element={<SNPrakash />} />
//           <Route path="sri-nanak-prakash/search-preview" element={< SNPSearchView />} />
//           <Route path="sri-nanak-prakash/chapters/:chapterId" element={< SNPrakashSectn />} />
//           <Route path="sri-nanak-prakash/page/:pageno/volume/:volumeno" element={< SNPrakashView />} />
//           <Route path="sri-nanak-prakash/page" element={< SNPrakashView />} />

//           <Route path="sri-gur-pratap-suraj-granth" element={<SGPSGSearch />} />
//           <Route path="sri-gur-pratap-suraj-granth/search-preview" element={< SgpsgSearchView />} />
//           <Route path="sri-gur-pratap-suraj-granth/volumes" element={<SGPSGVolume />} />
//           <Route path="sri-gur-pratap-suraj-granth/chapters/:volume_id/:volume_name" element={<SGPSGIndex />} />
//           <Route path="sri-gur-pratap-suraj-granth/chapters/:volume_id" element={<SGPSGIndex />} />
//           <Route path="sri-gur-pratap-suraj-granth/page/:pageno/volume/:volumeno" element={<SGPSGView />} />
//           <Route path="sri-gur-pratap-suraj-granth/page" element={<SGPSGView />} />

//           <Route path="faridkot-wala-teeka" element={<FWTSearch />} />
//           <Route path="faridkot-wala-teeka/search-preview" element={< FWTSearchView />} />
//           <Route path="faridkot-wala-teeka/chapters" element={<FWTIndex />} />
//           <Route path="faridkot-wala-teeka/page/:pageno/volume/:volumeno" element={<FWTView />} />
//           <Route path="faridkot-wala-teeka/page" element={<FWTView />} />

//           <Route path="sri-guru-granth-darpan" element={<SGGDSearch />} />
//           <Route path="sri-guru-granth-darpan/search-preview" element={< SGGDSeachView />} />
//           <Route path="sri-guru-granth-darpan/page" element={<SGGDView />} />

//           <Route path="gurus" element={<Sahiban />} />
//           <Route path="gurus/gurunanak" element={<GuruNanak />} />
//           <Route path="gurus/gurunanak2" element={<GuruNanak2 />} />
//           <Route path="gurus/gurunanak3" element={<GuruNanak3 />} />
//           <Route path="gurus/gurunanak4" element={<GuruNanak4 />} />
//           <Route path="gurus/gurunanak5" element={<GuruNanak5 />} />
//           <Route path="gurus/gurunanak6" element={<GuruNanak6 />} />
//           <Route path="gurus/gurunanak7" element={<GuruNanak7 />} />
//           <Route path="gurus/gurunanak9" element={<GuruNanak9 />} />
//           <Route path="gurus/gurunanak10" element={<GuruNanak10 />} />
//           <Route path="gurus/guruangad" element={<GuruAngad />} />
//           <Route path="gurus/guruangad2" element={<GuruAngad2 />} />
//           <Route path="gurus/guruangad3" element={<GuruAngad3 />} />
//           <Route path="gurus/guruamar" element={<GuruAmarDas />} />
//           <Route path="gurus/guruamar2" element={<GuruAmarDas2 />} />
//           <Route path="gurus/gururamdas" element={<GuruRamDas />} />
//           <Route path="gurus/guruarjun" element={<GuruArjan />} />
//           <Route path="gurus/guruarjun2" element={<GuruArjan2 />} />
//           <Route path="gurus/guruarjun3" element={<GuruArjan3 />} />
//           <Route path="gurus/guruarjun4" element={<GuruArjan4 />} />
//           <Route path="gurus/guruhargobindi" element={<GuruHarGubind />} />
//           <Route path="gurus/guruhargobindi2" element={<GuruHarGubind2 />} />
//           <Route path="gurus/guruhargobindi3" element={<GuruHarGubind3 />} />
//           <Route path="gurus/guruhargobindi4" element={<GuruHarGubind4 />} />
//           <Route path="gurus/guruharrai" element={<GuruHarRai />} />
//           <Route path="gurus/guruharkrishan" element={<GuruHarKrishnan />} />
//           <Route path="gurus/guruteghbhadur" element={<GuruBahadur />} />
//           <Route path="gurus/guruteghbhadur1" element={<GuruBahadur1 />} />
//           <Route path="gurus/gurugobind" element={<GuruGobind />} />
//           <Route path="gurus/gurugobind2" element={<GuruGobind2 />} />
//           <Route path="gurus/gurugobind3" element={<GuruGobind3 />} />
//           <Route path="gurus/gurugobind4" element={<GuruGobind4 />} />
//           <Route path="gurus/gurugobind5" element={<GuruGobind5 />} />
//           <Route path="gurus/gurugobind6" element={<GuruGobind6 />} />
//           <Route path="gurus/gurugobind7" element={<GuruGobind7 />} />
//           <Route path="gurus/gurugobind8" element={<GuruGobind8 />} />
//           <Route path="gurus/gurugobind9" element={<GuruGobind9 />} />

//           <Route path="bhagats" element={<BhagatSahiban />} />
//           <Route path="bhagats/baba-farid" element={<SheikhFarid />} />
//           <Route path="bhagats/bhagat-namdev" element={<Namdev />} />
//           <Route path="bhagats/bhagat-sain" element={<Sain />} />
//           <Route path="bhagats/bhagat-jaidev" element={<Jaidev />} />
//           <Route path="bhagats/bhagat-kabir" element={<Kabir />} />
//           <Route path="bhagats/bhagat-sadhna" element={<Sadhana />} />
//           <Route path="bhagats/bhagat-dhanna" element={<Dhanna />} />
//           <Route path="bhagats/bhagat-ramanand" element={<Ramanand />} />
//           <Route path="bhagats/bhagat-ravidas" element={<Ravidas />} />
//           <Route path="bhagats/bhagat-bhikan" element={<Bhikhan />} />
//           <Route path="bhagats/bhagat-pipa" element={<Pipa />} />
//           <Route path="bhagats/bhagat-trilochan" element={<Trilochan />} />
//           <Route path="bhagats/bhagat-beni" element={<Beni />} />
//           <Route path="bhagats/bhagat-parmanand" element={<Parmanand />} />
//           <Route path="bhagats/bhagat-surdas" element={<Surdas />} />

//           <Route path="bhatts" element={<BhattSahiban />} />
//           <Route path="bhatts/bhatt-kalshar" element={<Kalshar />} />
//           <Route path="bhatts/bhatt-salh" element={<Salh />} />
//           <Route path="bhatts/bhatt-mathura" element={<Mathura />} />
//           <Route path="bhatts/satta" element={<SattaBalwand />} />
//           <Route path="bhatts/bhatt-jalap" element={<Jalap />} />
//           <Route path="bhatts/bhatt-balh" element={<Balh />} />
//           <Route path="bhatts/bhatt-bhalh" element={<Bhalh />} />
//           <Route path="bhatts/mardana" element={<Mardana />} />
//           <Route path="bhatts/bhatt-kirat" element={<Kirat />} />
//           <Route path="bhatts/bhatt-nalh" element={<Nalh />} />
//           <Route path="bhatts/bhatt-haribans" element={<Haribans />} />
//           <Route path="bhatts/bhatt-bhika" element={<Bhika />} />
//           <Route path="bhatts/bhatt-gyand" element={<Gyand />} />
//           <Route path="bhatts/sunderbaba" element={<BabaSundar />} />

//           <Route path="raags" element={<GurbaniRaags />} />
//           <Route path="raags/raag-siri" element={<SriRaag />} />
//           <Route path="raags/raag-devgandhari" element={<Devghandhari />} />
//           <Route path="raags/raag-jaitsri" element={<Jaitsiri />} />
//           <Route path="raags/raag-bilaval" element={<Bilawal />} />
//           <Route path="raags/raag-maru" element={<Maru />} />
//           <Route path="raags/raag-sarang" element={<Sarang />} />
//           <Route path="raags/raag-majh" element={<Maj />} />
//           <Route path="raags/raag-bihagara" element={<Bihagra />} />
//           <Route path="raags/raag-todi" element={<Todi />} />
//           <Route path="raags/raag-gond" element={<Gaund />} />
//           <Route path="raags/raag-tukhari" element={<Tukhari />} />
//           <Route path="raags/raag-malar" element={<Malhar />} />
//           <Route path="raags/raag-gauri" element={<Gauri />} />
//           <Route path="raags/raag-vadahans" element={<Wadhans />} />
//           <Route path="raags/raag-bairari" element={<Berari />} />
//           <Route path="raags/raag-ramkali" element={<Ramkali />} />
//           <Route path="raags/raag-kedara" element={<Kedara />} />
//           <Route path="raags/raag-kanara" element={<Kanara />} />

//           <Route path="raags/raag-asa" element={<Asa />} />
//           <Route path="raags/raag-sorathi" element={<Sorath />} />
//           <Route path="raags/raag-tilang" element={<Tilang />} />
//           <Route path="raags/raag-nutnarain" element={<Nutnarain />} />
//           <Route path="raags/raag-bhairav" element={<Bhairav />} />
//           <Route path="raags/raag-kalyan" element={<Kalyan />} />
//           <Route path="raags/raag-gujri" element={<Gujri />} />
//           <Route path="raags/raag-dhanasri" element={<Dhanasri />} />
//           <Route path="raags/raag-suhi" element={<Suhi />} />
//           <Route path="raags/raag-maligaura" element={<Mali />} />
//           <Route path="raags/raag-basant" element={<Basant />} />
//           <Route path="raags/raag-prabhati" element={<Parbhati />} />
//           <Route path="raags/raag-jaijaiwanti" element={<Jaijaiwanti />} />

//           <Route path="raags/raags_time" element={<Timing />} />
//           <Route path="taal" element={<Taal />} />
//           <Route path="raags/glossary" element={<Golssary />} />
//           <Route path="saaj" element={<Muscical />} />

//           <Route path="music/page/:pageno" element={<IndianClassical />} />
//           <Route path="compilation/page/:pageno" element={<CompilationSGGS />} />


//         </Route>
//         <Route path="guru-granth-sahib/ang/:page_no/print-view" element={<AngPrint />} />
//         <Route path="guru-granth-sahib/verse/:page_no/print" element={<VersePrintView />} />
//         <Route path="amrit-keertan/page/:page_no/print-view" element={<AkPagePrint />} />
//         <Route path="bhai-gurdas-vaaran/vaar/:vaar_no/pauri/:pauri_no/print-view" element={<PrintPauri />} />
//         <Route path="dasam-granth/page/:page_no/print-view" element={<DgPagePrint />} />
//         <Route path="kabit-savaiye/kabit/:page_no/print-view" element={<KsPagePrint />} />

//         <Route path="bhai-nand-lal/:type/page/:page_no/print-view" element={<BnlPrintPage />} />
//         <Route path="guru-granth-sahib/shabad/:shabad_id/line/:lineno/print-view" element={<GgsShabadPrint />} />
//         <Route path="amrit-keertan/shabad/:shabad_id/line/:lineno/print-view" element={<AkShabadPrint />} />
//         <Route path="dasam-granth/shabad/:shabad_id/line/:lineno/print-view" element={<DgShabadPrint />} />
//         <Route path="bhai-nand-lal/:type/:shabad_id/line/:lineno/:title/print-view" element={<BnlShabadPrint />} />
//         <Route path="guru-granth-sahib/verse/:page_no/print-view" element={<GgsVersePrint />} />
//         <Route path="dasam-granth/verse/:page_no/print-view" element={<DgVersePrint />} />
//         <Route path="bhai-nand-lal/:type/verse/:page_no/print-view" element={<BnlVersePrint />} />
//         <Route path="baanis/:type/page/:page_no/print-view" element={<SgPrintPage />} />
//         <Route path="sri-nanak-prakash/page/:page_no/volume/:vol_no/:lang/print-view" element={<SNPPrint />} />
//         <Route path="sri-gur-pratap-suraj-granth/page/:page_no/volume/:vol_no/:lang/print-view" element={<SGPSGPrint />} />
//         <Route path="faridkot-wala-teeka/page/:page_no/volume/:vol_no/:lang/print-view" element={<FWTPrint />} />
//         <Route path="sri-guru-granth-darpan/page/:page_no/volume/:vol_no/:lang/print-view" element={<SGGDPrint />} />

//       </Routes>
//     </Suspense>
//   )
// }
// export default Routing