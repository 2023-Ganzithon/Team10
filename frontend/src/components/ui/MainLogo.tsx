import React from "react";

export default function MainLogo({
  className,
  color = "#26AD9C",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111 88"
      fill="none"
    >
      <path
        d="M64.0065 34.8098C66.0281 31.6234 67.9641 28.9279 69.8065 26.7232C71.649 24.5184 73.3668 22.7305 74.9639 21.3594C76.5571 19.9882 78.0139 18.991 79.3305 18.3639C80.6471 17.7407 81.8196 17.429 82.844 17.429C84.5073 17.429 85.672 17.9081 86.3381 18.8625C87.0042 19.8168 87.3353 21.0867 87.3353 22.6682C87.3353 23.5836 87.2379 24.5808 87.0432 25.6636C86.8484 26.7426 86.5913 27.8528 86.2758 28.9902C85.9564 30.1276 85.5902 31.2767 85.1734 32.4414C84.7566 33.6061 84.3281 34.728 83.8841 35.8109L76.8998 52.7748C75.1548 57.044 73.7408 60.542 72.6579 63.2726C71.575 66.0032 71.0374 68.0326 71.0374 69.3648C71.0374 69.9179 71.1543 70.3698 71.3919 70.7164C71.6256 71.0631 72.0074 71.2345 72.5332 71.2345C72.728 71.2345 73.0046 71.1722 73.3629 71.0475C73.7213 70.9229 74.1576 70.6931 74.6717 70.362C75.1859 70.0309 75.7858 69.5595 76.4791 68.948C77.1725 68.3364 77.936 67.5496 78.7657 66.5797L99.9404 44.3766C98.8848 45.5958 78.0528 69.8906 77.2076 70.6113C76.3623 71.3319 75.591 71.8772 74.9016 72.2551C74.2082 72.629 73.585 72.8705 73.0318 72.9835C72.4787 73.0926 71.9645 73.151 71.4932 73.151C70.5778 73.151 69.8104 73.0069 69.1872 72.7147C68.5639 72.4226 68.0653 72.0369 67.6914 71.55C67.3175 71.0631 67.0487 70.51 66.8812 69.8867C66.7137 69.2635 66.6319 68.6169 66.6319 67.9547C66.6319 66.8718 66.776 65.7149 67.0682 64.484C67.3603 63.2492 67.7342 61.9754 68.19 60.6588C68.6457 59.3422 69.1599 58.0139 69.7286 56.6662C70.2973 55.3223 70.8583 54.0252 71.4114 52.7787L78.6449 35.8147C79.2526 34.3735 79.8719 32.9128 80.4952 31.4287C81.1184 29.9446 81.6716 28.5267 82.1585 27.1672C82.6415 25.8078 83.0388 24.5691 83.3426 23.4472C83.6465 22.3254 83.7984 21.3905 83.7984 20.6426C83.7984 20.0895 83.701 19.661 83.5062 19.3533C83.3115 19.0495 82.9804 18.8975 82.509 18.8975C80.764 19.1741 78.7384 20.2687 76.4402 22.1813C75.4703 22.9837 74.3835 24.012 73.176 25.2585C71.9723 26.505 70.6752 28.0437 69.2885 29.8744C67.9017 31.7052 66.4138 33.8515 64.8206 36.3172C63.2274 38.7829 61.5563 41.6382 59.8113 44.883L51.8298 62.7857L46.466 65.1189L62.721 25.2585C63.3287 23.79 63.948 22.3059 64.5713 20.8101C65.1945 19.3143 65.7632 17.8926 66.2774 16.5487C66.7916 15.2048 67.2045 13.9661 67.5239 12.8287C67.8433 11.6913 68.003 10.7486 68.003 10.0007C68.003 8.83604 67.5862 8.25565 66.7565 8.25565C64.9842 8.50495 62.9314 9.59952 60.602 11.5394C59.6048 12.3691 58.5102 13.4169 57.3183 14.679C56.1263 15.941 54.8292 17.4991 53.4308 19.3572C52.0324 21.2152 50.5327 23.3966 48.9395 25.9052C47.3464 28.4137 45.6597 31.304 43.8874 34.5722L31.8237 61.36L25.5094 64.6865L45.1767 19.2325C45.7844 17.764 46.4115 16.2799 47.0464 14.7841C47.6852 13.2883 48.254 11.8666 48.7526 10.5227C49.2512 9.17883 49.6602 7.94013 49.9796 6.80271C50.299 5.66529 50.4587 4.72263 50.4587 3.97474C50.4587 2.83732 50.0419 2.2686 49.2122 2.2686C47.2451 2.49064 44.9858 3.36318 42.4344 4.88623C41.3554 5.55232 40.1479 6.38202 38.8157 7.37921C37.4835 8.3764 36.0501 9.60341 34.5114 11.0602C32.9728 12.5171 31.3368 14.2271 29.6073 16.1942C27.8739 18.1613 26.0509 20.4479 24.1383 23.0538L23.3086 17.8575C25.9963 15.088 28.649 12.6378 31.2705 10.5188C33.8921 8.39977 36.3695 6.61184 38.7144 5.15501C41.0555 3.69817 43.1901 2.5997 45.1183 1.84791C47.0464 1.10002 48.6591 0.726074 49.9601 0.726074C51.5416 0.726074 52.6556 1.17793 53.3061 2.07774C53.9567 2.97755 54.2839 4.17729 54.2839 5.67308C54.2839 6.61574 54.1709 7.64019 53.9528 8.75035C53.7307 9.8605 53.4386 11.0018 53.0802 12.1821C52.7218 13.3624 52.3128 14.5504 51.8532 15.758C51.3936 16.9655 50.93 18.1224 50.4587 19.2286L48.5033 23.7589C50.5249 20.6816 52.4648 18.064 54.3228 15.9021C56.1809 13.7402 57.9104 11.9873 59.5191 10.6435C61.1279 9.29958 62.6042 8.32187 63.948 7.7142C65.2919 7.10654 66.4761 6.79881 67.5044 6.79881C69.0859 6.79881 70.1922 7.25067 70.831 8.15048C71.4698 9.05028 71.7892 10.2383 71.7892 11.7069C71.7892 12.6495 71.6763 13.674 71.4581 14.7841C71.2361 15.8943 70.9517 17.0356 70.6051 18.2159C70.2584 19.3961 69.8572 20.5842 69.3975 21.7917C68.9418 22.9993 68.4744 24.1562 68.003 25.2624L64.0104 34.8253L64.0065 34.8098Z"
        fill={color}
      />
      <path
        d="M64.5139 35.1024C68.1404 29.427 72.4213 23.2296 78.2642 19.6187C79.6237 18.7773 81.2168 18.0177 82.8451 18.0138C85.5367 18.006 86.6391 19.8329 86.7403 22.3376C86.8845 25.9212 85.5757 29.6529 84.3564 32.9756C82.1244 39.0639 79.464 45.012 76.9944 51.0029C75.4012 54.8748 73.8158 58.7506 72.2733 62.6459C71.4358 64.761 70.0608 67.589 70.497 69.9496C70.8437 71.8271 72.4875 72.092 74.0417 71.383C76.7295 70.1521 78.6187 67.5695 80.6248 65.4661C82.7905 63.1951 84.9563 60.9242 87.1221 58.6533C91.5315 54.0296 95.941 49.4059 100.354 44.7783L99.5285 43.9525C93.8531 50.5277 88.2089 57.1341 82.5179 63.6976C80.356 66.1906 78.2564 69.3419 75.4713 71.2077C73.6561 72.4231 71.0502 73.206 69.0324 71.9595C66.2356 70.2339 67.2406 65.9452 67.9456 63.3782C68.9545 59.6972 70.5477 56.2226 72.0551 52.7285C73.808 48.658 75.5336 44.5757 77.2709 40.4974C79.4016 35.5036 81.7388 30.541 83.3787 25.3642C83.8929 23.7438 85.8211 18.3683 82.5101 18.2982C81.1467 18.2709 79.4406 19.3226 78.3538 20.0238C76.488 21.2274 74.8286 22.7388 73.2744 24.3125C70.1503 27.4676 67.5444 31.1097 65.106 34.8025C63.0064 37.9849 60.9107 41.2842 59.2436 44.7159C57.1635 48.9969 55.3561 53.4336 53.4201 57.7807C52.8047 59.1596 52.2983 61.2475 51.3439 62.4395C51.6361 62.0772 51.1998 62.4395 50.8882 62.5485C50.2572 62.7706 49.6456 63.09 49.0301 63.3549C48.0797 63.7677 47.1254 64.1845 46.1749 64.5974L47.0319 65.2557C52.4151 52.0585 57.7712 38.8497 63.1778 25.6641C64.2062 23.1595 65.2774 20.6743 66.2706 18.154C67.0224 16.2454 67.7937 14.3055 68.2611 12.3033C68.5299 11.1581 68.9623 9.42861 68.1949 8.37299C66.5706 6.12931 62.2235 9.49873 60.8835 10.5427C57.74 12.9967 55.1263 16.0895 52.7501 19.272C49.0769 24.1917 45.4777 29.6062 42.9496 35.2193C41.3487 38.7756 39.7477 42.332 38.1428 45.8884C36.1251 50.3719 34.1034 54.8554 32.0857 59.3388C31.8714 59.814 31.6923 60.336 31.4352 60.7879C31.3923 60.8619 31.3767 60.967 31.3222 61.0333C31.6845 60.5892 31.1197 61.0605 30.8898 61.1657C28.9578 62.0616 27.0997 63.164 25.2144 64.1534L26.0129 64.9519C30.1069 55.4903 34.2008 46.0287 38.2948 36.567C40.4839 31.5109 42.673 26.451 44.8622 21.3949C45.427 20.0861 45.9801 18.7773 46.5333 17.4646C47.7486 14.5704 49.0146 11.6957 50.0001 8.71188C50.522 7.12261 51.8308 3.97912 50.6545 2.37427C49.4781 0.769411 46.5995 2.19119 45.2478 2.76379C42.3458 3.9947 39.7126 5.85664 37.2742 7.83155C32.0273 12.0813 27.6373 17.3243 23.6407 22.7388L24.708 22.879L24.0926 19.0305C24.0497 18.7578 23.8627 18.2436 23.9212 17.971C24.0419 17.4334 23.8511 18.3293 24.264 17.7022C25.1209 16.3934 26.8465 15.1508 27.9995 14.0952C32.7751 9.73245 38.1312 5.5606 44.0676 2.90402C46.393 1.86398 51.2933 -0.184932 53.0657 2.7599C54.7484 5.55281 53.1981 9.89994 52.2983 12.7162C51.1219 16.3895 49.5326 19.9108 48.0057 23.4477C47.7135 24.1255 48.59 24.6786 49.0146 24.0359C52.2476 19.1551 55.8586 14.2743 60.4706 10.6011C62.6597 8.85991 65.9746 6.61622 68.9311 7.53161C72.3629 8.59503 71.1281 13.8108 70.5126 16.296C68.9467 22.6024 65.9512 28.6557 63.4505 34.6466C63.1622 35.34 64.2918 35.6438 64.5762 34.9583C65.7682 32.103 66.9601 29.2478 68.1521 26.3887C70.1465 21.6169 73.0601 15.7468 72.2811 10.418C71.4046 4.43097 64.9112 6.08647 61.2886 8.54439C55.7846 12.2877 51.6283 17.9632 47.9979 23.4477L49.0068 24.0359C50.2727 21.0989 51.5854 18.1774 52.68 15.1703C53.9616 11.6489 56.9492 4.11156 53.1397 1.05377C49.7118 -1.6963 43.717 1.6069 40.5852 3.35198C35.2019 6.34745 30.29 10.2739 25.8338 14.5081C25.0547 15.2482 23.0097 16.6544 22.7409 17.6827C22.6474 18.0333 22.8266 18.5358 22.8811 18.8786L23.5706 23.1867C23.6602 23.7399 24.3769 23.6814 24.6379 23.327C28.0891 18.6565 31.8442 14.177 36.1757 10.2934C38.2948 8.39637 40.5813 6.62401 43.0353 5.18276C44.2974 4.44266 45.6257 3.78436 47.0202 3.3325C47.4526 3.19227 48.1459 2.87286 48.6056 2.9235C50.0819 3.08321 49.8715 4.59068 49.6495 5.65409C48.4614 11.3295 45.6218 16.7011 43.3236 22.0182C38.6609 32.7886 34.0022 43.5629 29.3395 54.3334C27.8944 57.6755 26.4453 61.0177 25.0002 64.3637C24.7742 64.8857 25.2456 65.4544 25.7987 65.1623C27.3919 64.3248 28.985 63.4834 30.5743 62.6459C31.3806 62.2213 32.0467 62.011 32.4908 61.2475C34.1229 58.4507 35.2253 55.1787 36.5536 52.2299C39.8334 44.9458 42.7977 37.4279 46.8098 30.5099C50.9194 23.4244 55.7105 15.4546 62.5857 10.718C63.9646 9.7675 67.8054 7.32127 67.3263 10.9088C67.0497 12.9772 66.2317 15.0105 65.4838 16.9465C64.4087 19.7316 63.2245 22.47 62.091 25.2279C59.4851 31.5733 56.9103 37.9343 54.3199 44.2875C51.5114 51.1704 48.7068 58.0534 45.8983 64.9402C45.6802 65.4739 46.3541 65.7738 46.7553 65.5985C48.3524 64.9052 50.635 64.3754 52.0022 63.312C52.7346 62.7433 53.0306 61.4734 53.4006 60.6398C55.3794 56.1992 57.3621 51.7547 59.3409 47.3141C61.9819 41.3894 65.5617 35.7919 69.4375 30.6033C72.2772 26.8016 75.7128 22.6687 79.9703 20.4016C80.9364 19.8874 82.7477 18.7111 83.2073 20.6159C83.4294 21.539 82.8567 22.9725 82.6113 23.8372C81.9492 26.1433 81.1 28.3986 80.1885 30.6189C76.7334 39.0172 73.0562 47.3258 69.4998 55.6812C67.8327 59.5998 65.7058 64.2235 66.0681 68.5901C66.3602 72.127 69.0129 74.0902 72.4875 73.6384C76.3049 73.1398 78.646 69.9106 80.9831 67.2268C87.4804 59.7751 93.8921 52.2494 100.354 44.7666C100.841 44.2018 100.054 43.3915 99.5285 43.9408C95.7774 47.875 92.0262 51.8092 88.2751 55.7435C85.8016 58.3377 83.3281 60.932 80.8546 63.5224C79.2108 65.2441 77.6137 67.1878 75.8141 68.7303C74.6845 69.6964 71.876 72.0998 71.6267 68.9952C71.5215 67.6513 72.2811 65.9413 72.7212 64.7143C73.7807 61.7617 75.0311 58.8675 76.2114 55.9655C77.3917 53.0635 78.5018 50.3758 79.6509 47.5829C81.0415 44.2018 82.4361 40.8246 83.8267 37.4435C85.5523 33.2482 87.3052 28.9323 87.8115 24.3904C88.0686 22.0571 87.9712 18.824 85.6691 17.4724C83.2463 16.0467 80.1028 17.1491 77.902 18.4579C71.7591 22.1116 67.2756 28.6012 63.5011 34.5025C63.096 35.1375 64.1049 35.7256 64.51 35.0907L64.5139 35.1024Z"
        fill={color}
      />
      <path
        d="M0.132812 77.3038C36.0161 58.2247 72.9706 40.0922 110.034 23.4165C74.1548 42.5034 37.1925 60.6164 0.132812 77.3038Z"
        fill={color}
      />
      <path
        d="M0 82.543C35.8833 63.464 72.8378 45.3315 109.901 28.6558C74.022 47.7426 37.0597 65.8557 0 82.543Z"
        fill={color}
      />
      <path
        d="M1.09863 87.9029C36.9819 68.8238 73.9364 50.6913 111 34.0156C75.1167 53.1025 38.1544 71.2155 1.09863 87.9029Z"
        fill={color}
      />
      <path
        d="M17.7354 26.2798L33.3359 22.1002L21.9189 10.6792L17.7354 26.2798Z"
        fill={color}
      />
    </svg>
  );
}
