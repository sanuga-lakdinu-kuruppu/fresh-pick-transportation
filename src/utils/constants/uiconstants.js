import {
  AccountCircle,
  FireTruck,
  GridView,
  Payment,
  Poll,
} from "@mui/icons-material";
import { LOGO_X64 } from "./configconstants";
import courierdash_analytics from "../../assets/graphics/images/dashboard_imgs/courierdash_analytics_.png";
import shippingdash_analytics from "../../assets/graphics/images/dashboard_imgs/shippingdash_analytics_.png";
import boxesdash_analytics from "../../assets/graphics/images/dashboard_imgs/boxesdash_analytics_.png";
import investmentdash_analytics_ from "../../assets/graphics/images/dashboard_imgs/return-of-investmentdash_analytics_.png";
import payment_payment from "../../assets/graphics/images/payments_imgs/payement_payment.png";
import payment_increse from "../../assets/graphics/images/payments_imgs/payment_increase.png";
import report_warranty_img from "../../assets/graphics/images/report_imgs/report_warranty_img.png";
import report_bill_img from "../../assets/graphics/images/report_imgs/report_bill_img.png";
import fast_man from "../../assets/graphics/images/report_imgs/fast.png";
import delivery_truck from "../../assets/graphics/images/report_imgs/delivery-truck.png";
const gloablesearchoption = [
  {
    id: 1,
    title: "Search Item 1",
  },
  {
    id: 2,
    title: "Search Item 2",
  },
  {
    id: 3,
    title: "Search Item 3",
  },
  {
    id: 4,
    title: "Search Item 4",
  },
  {
    id: 5,
    title: "Search Item 5",
  },
];
const navMenuData = [
  {
    id: 1,
    key: "dashboard",
    icon: <GridView className="nav-menu-icon" />,
    item: "Dashboard",
  },
  {
    id: 2,
    key: "ride",
    icon: <FireTruck className="nav-menu-icon" />,
    item: "Rides",
  },
  {
    id: 3,
    key: "payment",
    icon: <Payment className="nav-menu-icon" />,
    item: "Payments",
  },
  {
    id: 4,
    key: "report",
    icon: <Poll className="nav-menu-icon" />,
    item: "Reports",
  },
];
const dashboardAnalyticsCardData = [
  {
    id: 1,
    header: "Requested Delivers",
    value: 24,
    image: courierdash_analytics,
    gradientAngle: "315deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 2,
    header: "Ongoing Deliver",
    value: 5,
    image: shippingdash_analytics,
    gradientAngle: "315deg",
    fromColor: "#e67e22",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 3,
    header: "Completed Delivers",
    value: 24,
    image: boxesdash_analytics,
    gradientAngle: "315deg",
    fromColor: "#3498db",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 4,
    header: "Total Earned",
    value: 426523,
    image: investmentdash_analytics_,
    gradientAngle: "315deg",
    fromColor: "#e74c3c",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
];
//Dashboard Table Rows
const dashBoardTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 2,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 3,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 4,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 5,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 6,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 7,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 8,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 9,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 10,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 11,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
];
//Rides Table Rows
const ridesTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 2,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 3,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 4,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 5,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 6,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 7,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 8,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 9,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 10,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 11,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
];

//Payment Analytics Card Data
const paymentsAnalyticsCardData = [
  {
    id: 1,
    header: "Total Earn",
    value: 80000,
    image: payment_increse,
    gradientAngle: "315deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
  {
    id: 2,
    header: "Pending",
    value: 42000,
    image: payment_payment,
    gradientAngle: "315deg",
    fromColor: "#3498db",
    toColor: "#FFF",
    width: 250,
    height: 140,
  },
];

//Payment Table Rows
const paymentsTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 2,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 3,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 4,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 5,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 6,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 7,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 8,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 9,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 10,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 11,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
];

//Reports Table Report Card
const reportCardData = [
  {
    id: 1,
    gradientAngle: "45deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    cardHeader: "Delivery Report",
    iconImage: report_warranty_img,
    cardDescription:
      "You can generate delivery report<br/> for your selected period below.",
    sideImage: fast_man,
  },
  {
    id: 2,
    gradientAngle: "45deg",
    fromColor: "#e74c3c",
    toColor: "#FFF",
    cardHeader: "Payment Report",
    iconImage: report_bill_img,
    cardDescription:
      "You can generate payment report<br/> for your selected period below.",
    sideImage: delivery_truck,
  },
];
export const gloableSearchOption = gloablesearchoption;
export const DashboardTableRows = dashBoardTableRows;
export const NavMenuData = navMenuData;
export const DashboardAnalyticsCardData = dashboardAnalyticsCardData;
export const RidesTableRows = ridesTableRows;
export const PaymentsAnalyticsCardData = paymentsAnalyticsCardData;
export const PaymentsTableRows = paymentsTableRows;
export const ReportCardData = reportCardData;
