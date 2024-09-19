import MTNimage from "../images/mtn.bmp";
import AirtelImage from "../images/airtel.jpg";
import GloImage from "../images/glo.bmp";
import Mobileimage from "../images/9mobile.bmp";

const pricing = [
    {
        id: 1,
        title: "MTN Prices",
        image: MTNimage,
        contents: [
            {
                id: 0,
                desc: "300MB MTN-SME Monthly => ₦90"
            },
            {
                id: 1,
                desc: "500MB MTN-SME Monthly => ₦149"
            },
            {
                id: 2,
                desc: "1GB MTN-SME Monthly => ₦290"
            },
            {
                id: 3,
                desc: "2GB MTN-SME Monthly => ₦580"
            },
            {
                id: 4,
                desc: "3GB MTN-SME Monthly => ₦870"
            },
            {
                id: 5,
                desc: "5GB MTN-SME Monthly => ₦1,450"
            },
            {
                id: 6,
                desc: "10GB MTN-SME Monthly => ₦2,900"
            }
        ]
    },
    {
        id: 2,
        title: "9mobile Prices",
        image: Mobileimage,
        contents: [
            {
                id: 1,
                desc: "300MB 9Mobile Data Monthly => ₦51"
            },
            {
                id: 2,
                desc: "500MB 9Mobile Data Monthly => ₦87",
            },
            {
                id: 3,
                desc: "1GB 9Mobile Data Monthly => ₦155"
            },
            {
                id: 4,
                desc: "2GB 9Mobile Data Monthly => ₦310"
            },
            {
                id: 5,
                desc: "3GB 9Mobile Data Monthly => ₦465"
            },
            {
                id: 6,
                desc: "4GB 9Mobile Data Monthly => ₦620"
            },
            {
                id: 7,
                desc: "5GB 9mobile Data Monthly => ₦775"
            }
        ]
    },
    {
        id: 3,
        title: "Glo Prices",
        image: GloImage,
        contents: [
            {
                id: 1,
                desc: "200MB Glo Data 14days => ₦62"
            },
            {
                id: 2,
                desc: "500MB Glo Data Monthly => ₦153"
            },
            {
                id: 3,
                desc: "1GB Glo Data Monthly => ₦300"
            },
            {
                id: 4,
                desc: "2GB Glo Data Monthly => ₦600"
            },
            {
                id: 5,
                desc: "3GB Glo Data Monthly => ₦900"
            },
            {
                id: 6,
                desc: "5GB Glo Data Monthly => ₦1,500"
            },
            {
                id: 7,
                desc: "10GB Glo Data Monthly => ₦3,000"
            }
        ]
    },
    {
        id: 4,
        title: "Airtel Prices",
        image: AirtelImage,
        contents: [
            {
                id: 1,
                desc: "300MB Airtel Data 7days => ₦91"
            },
            {
                id: 2,
                desc: "500MB Airtel Data Monthly => ₦149"
            },
            {
                id: 3,
                desc: "1GB Airtel Data Monthly => ₦300"
            },
            {
                id: 4,
                desc: "2GB Airtel Data Monthly => ₦600"
            },
            {
                id: 5,
                desc: "5GB Airtel Data Monthly => ₦1,500"
            },
            {
                id: 6,
                desc: "10GB Airtel Data Monthly => ₦3,000"
            },
            {
                id: 7,
                desc: "15GB Airtel Data Monthly => ₦4,500"
            }
        ]
    }
];

export default pricing;