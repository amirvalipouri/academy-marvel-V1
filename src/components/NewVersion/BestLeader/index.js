import React from 'react'
import Badge from '../../Badge'

import './index.scss'

const BestLeaderCard = ({
    name = "",
    term,
    src = "",
    score,
    number
}) => {
    return (
        <div className="BestLeaderCard d-flex my-3">
            <div>
                {number == 1 &&
                    <div className="number1 d-flex justify-content-center align-items-center">
                        <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                                <g clip-path="url(#clip0_125_1306)">
                                    <path d="M5.34726 27.1335C8.01428 28.214 10.6318 29.4225 13.3342 30.3893C14.5156 30.8087 15.2018 31.4627 15.6828 32.5574C17.3029 36.2895 19.8991 39.0619 23.7476 40.5192C24.3064 40.7325 24.6601 41.0026 24.6318 41.6495C24.4904 45.0617 23.882 47.3507 20.6066 48.616C19.8921 48.8933 19.1563 49.0923 18.4489 49.3838C16.8218 50.0449 16.3125 51.296 16.6803 53.5068C16.9633 55.2129 18.272 54.9854 19.4181 54.9854C26.2519 55.0068 33.0857 54.9925 39.9194 54.9925C42.728 54.9925 43.7608 53.2367 42.4379 50.7131C41.9922 49.86 41.214 49.4691 40.3298 49.2416C36.6582 48.2961 34.8259 45.9289 34.7057 42.1044C34.6845 41.3367 34.734 40.9031 35.4697 40.6116C39.5233 39.0122 42.2681 36.0691 43.973 32.1025C44.3409 31.2494 44.9351 30.8158 45.7275 30.5101C48.3025 29.5149 50.8563 28.4842 53.4314 27.496C55.1717 26.8278 56.0418 25.6833 55.9852 23.7213C55.8933 20.5224 55.964 17.3235 55.964 14.1246C55.964 9.1769 55.6174 8.82857 50.637 8.82857C46.4703 8.82857 46.4703 8.82857 46.7249 4.606C46.8452 2.6511 46.5905 2.37386 44.5461 2.37386C39.594 2.36675 34.6491 2.37386 29.6971 2.37386C24.6318 2.37386 19.5596 2.4023 14.4944 2.35964C13.0229 2.34543 12.4428 2.8928 12.6975 4.38563C12.846 5.25289 12.7611 6.1628 12.8814 7.03718C13.0724 8.39494 12.6763 8.98496 11.1977 8.86411C9.69089 8.73616 8.15576 8.80724 6.62064 8.84279C4.50542 8.88544 3.43719 9.85933 3.40182 11.9848C3.33108 16.0084 3.35938 20.039 3.38767 24.0696C3.39475 25.4701 3.94654 26.5648 5.34726 27.1335ZM45.3596 23.7569C45.5365 20.8707 45.6992 17.9775 45.8407 15.0913C45.876 14.4445 46.1024 14.089 46.7886 14.1317C46.8452 14.1388 46.9089 14.1317 46.9655 14.1317C50.7149 13.8331 50.7149 13.8331 50.7149 18.6386C50.7149 18.6955 50.7149 18.7594 50.7149 18.8163C50.7149 23.2379 50.7078 23.2237 46.4986 24.6099C45.6001 24.9014 45.303 24.6739 45.3596 23.7569ZM19.4817 6.3263C22.835 6.29787 26.1953 6.3192 29.5485 6.3192C32.8451 6.3192 36.1418 6.33341 39.4384 6.31209C40.9099 6.30498 41.9215 6.90211 41.8437 8.45892C41.4687 15.6814 41.5182 22.9536 39.6365 30.0267C38.54 34.1569 35.7668 36.5099 31.7274 37.0857C27.8011 37.6473 23.9598 37.2065 21.2362 33.7091C19.5879 31.5978 18.9441 29.0457 18.5904 26.4937C17.9042 21.5958 17.5151 16.6624 17.4585 11.7076C17.4443 10.7124 17.1755 9.72427 17.1543 8.72194C17.1118 7.07272 17.8264 6.33341 19.4817 6.3263ZM8.67926 18.532C8.67926 18.0628 8.67926 17.5865 8.67926 17.1173C8.67926 14.1032 8.67926 14.1814 11.6293 14.0961C13.1149 14.0535 13.5605 14.6008 13.5888 16.0084C13.6384 18.4182 13.7728 20.8281 14.0062 23.2308C14.1619 24.8018 13.5747 24.9227 12.365 24.3682C11.4595 23.9559 10.5469 23.5578 9.61307 23.2237C8.48118 22.8114 8.67926 21.8802 8.67219 21.0129C8.67219 20.1812 8.67926 19.3566 8.67926 18.532Z" fill="#F2DB62" />
                                    <path d="M18.5902 26.4859C18.9439 29.0379 19.5877 31.59 21.236 33.7012C23.9667 37.1987 27.801 37.6395 31.7272 37.0779C35.7666 36.5021 38.5327 34.1491 39.6363 30.0189C41.5181 22.9458 41.4685 15.6736 41.8435 8.45111C41.9213 6.90141 40.9167 6.29717 39.4382 6.30428C36.1416 6.32561 32.8449 6.31139 29.5483 6.31139C26.1951 6.31139 22.8348 6.29006 19.4816 6.3185C17.8332 6.33271 17.1117 7.06491 17.1541 8.72124C17.1824 9.71646 17.4512 10.7117 17.4583 11.7069C17.5149 16.6617 17.904 21.5951 18.5902 26.4859ZM26.1526 16.0432C27.7868 14.9485 29.3715 13.6263 31.5999 14.1096C32.279 14.2589 32.2366 14.6854 32.2366 15.1475C32.2366 19.3417 32.2224 23.5358 32.2507 27.737C32.2578 29.2512 31.1683 28.6043 30.4963 28.6754C29.803 28.7465 28.9611 28.9953 28.9894 27.6731C29.0602 24.3249 29.0107 20.9696 29.0107 17.3654C27.8363 18.0337 26.8601 18.5952 25.5089 19.3701C25.8343 17.9981 25.042 16.7825 26.1526 16.0432Z" fill="#FCF1A5" />
                                    <path d="M29.0106 17.3662C29.0106 20.9703 29.0601 24.3256 28.9894 27.6738C28.9611 28.996 29.8029 28.7472 30.4962 28.6761C31.1682 28.6051 32.2577 29.252 32.2506 27.7378C32.2223 23.5437 32.2435 19.3495 32.2365 15.1483C32.2365 14.6791 32.2789 14.2526 31.5998 14.1104C29.3714 13.627 27.7867 14.9492 26.1526 16.044C25.0419 16.7833 25.8413 17.9989 25.5088 19.3637C26.8529 18.596 27.8362 18.0344 29.0106 17.3662Z" fill="#07080F" />
                                </g>
                            </g>
                            <g clip-path="url(#clip1_125_1306)">
                                <path d="M1.98788 24.7741C4.6549 25.8546 7.2724 27.0631 9.97479 28.0299C11.1562 28.4493 11.8424 29.1033 12.3235 30.1981C13.9435 33.9301 16.5398 36.7025 20.3882 38.1598C20.9471 38.3731 21.3008 38.6432 21.2725 39.2901C21.131 42.7023 20.5226 44.9913 17.2472 46.2566C16.5327 46.5339 15.797 46.7329 15.0895 47.0244C13.4624 47.6855 12.9531 48.9366 13.3209 51.1474C13.6039 52.8535 14.9127 52.626 16.0587 52.626C22.8925 52.6474 29.7263 52.6332 36.5601 52.6332C39.3686 52.6332 40.4014 50.8773 39.0785 48.3537C38.6328 47.5007 37.8547 47.1097 36.9704 46.8822C33.2988 45.9368 31.4666 43.5696 31.3463 39.7451C31.3251 38.9773 31.3746 38.5437 32.1103 38.2522C36.1639 36.6528 38.9087 33.7098 40.6137 29.7431C40.9815 28.8901 41.5758 28.4564 42.3681 28.1508C44.9431 27.1555 47.497 26.1248 50.072 25.1367C51.8123 24.4684 52.6824 23.3239 52.6258 21.3619C52.5339 18.163 52.6046 14.9641 52.6046 11.7652C52.6046 6.81752 52.258 6.4692 47.2777 6.4692C43.1109 6.4692 43.1109 6.4692 43.3656 2.24662C43.4858 0.291726 43.2312 0.0144866 41.1867 0.0144866C36.2347 0.00737789 31.2897 0.0144866 26.3377 0.0144866C21.2725 0.0144866 16.2002 0.0429214 11.135 0.000269177C9.66352 -0.0139482 9.08342 0.533422 9.3381 2.02625C9.48666 2.89351 9.40177 3.80343 9.52203 4.6778C9.71304 6.03556 9.31688 6.62559 7.83834 6.50474C6.33151 6.37678 4.79639 6.44787 3.26126 6.48341C1.14604 6.52606 0.0778182 7.49996 0.0424466 9.62546C-0.0282966 13.649 6.5985e-07 17.6796 0.0282979 21.7103C0.0353722 23.1107 0.587169 24.2054 1.98788 24.7741ZM42.0002 21.3975C42.1771 18.5114 42.3398 15.6181 42.4813 12.732C42.5166 12.0851 42.743 11.7296 43.4292 11.7723C43.4858 11.7794 43.5495 11.7723 43.6061 11.7723C47.3555 11.4737 47.3555 11.4737 47.3555 16.2792C47.3555 16.3361 47.3555 16.4001 47.3555 16.4569C47.3555 20.8786 47.3484 20.8643 43.1392 22.2505C42.2407 22.542 41.9436 22.3145 42.0002 21.3975ZM16.1224 3.96693C19.4756 3.93849 22.8359 3.95982 26.1891 3.95982C29.4858 3.95982 32.7824 3.97404 36.079 3.95271C37.5505 3.9456 38.5621 4.54273 38.4843 6.09954C38.1093 13.322 38.1589 20.5942 36.2771 27.6674C35.1806 31.7975 32.4074 34.1505 28.368 34.7263C24.4418 35.2879 20.6004 34.8472 17.8768 31.3497C16.2285 29.2384 15.5847 26.6864 15.231 24.1343C14.5448 19.2364 14.1557 14.303 14.0991 9.34822C14.085 8.353 13.8161 7.36489 13.7949 6.36256C13.7525 4.71334 14.467 3.97404 16.1224 3.96693ZM5.31989 16.1726C5.31989 15.7034 5.31989 15.2271 5.31989 14.758C5.31989 11.7439 5.31989 11.8221 8.26988 11.7367C9.75548 11.6941 10.2012 12.2415 10.2295 13.649C10.279 16.0588 10.4134 18.4687 10.6468 20.8714C10.8025 22.4425 10.2153 22.5633 9.00561 22.0088C8.10009 21.5965 7.18751 21.1984 6.2537 20.8643C5.12181 20.452 5.31989 19.5208 5.31281 18.6535C5.31281 17.8218 5.31989 16.9972 5.31989 16.1726Z" fill="#F2DB62" />
                                <path d="M15.2308 24.1265C15.5845 26.6786 16.2283 29.2306 17.8766 31.3419C20.6073 34.8394 24.4416 35.2801 28.3678 34.7185C32.4073 34.1427 35.1733 31.7897 36.2769 27.6596C38.1587 20.5864 38.1092 13.3142 38.4841 6.09173C38.5619 4.54204 37.5574 3.9378 36.0788 3.9449C32.7822 3.96623 29.4856 3.95201 26.1889 3.95201C22.8357 3.95201 19.4754 3.93069 16.1222 3.95912C14.4739 3.97334 13.7523 4.70554 13.7947 6.36187C13.823 7.35709 14.0919 8.3523 14.0989 9.34752C14.1555 14.3023 14.5446 19.2357 15.2308 24.1265ZM22.7933 13.6838C24.4274 12.5891 26.0121 11.2669 28.2405 11.7503C28.9196 11.8996 28.8772 12.3261 28.8772 12.7881C28.8772 16.9823 28.863 21.1764 28.8913 25.3777C28.8984 26.8918 27.809 26.2449 27.1369 26.316C26.4436 26.3871 25.6018 26.6359 25.6301 25.3137C25.7008 21.9655 25.6513 18.6102 25.6513 15.0061C24.477 15.6743 23.5007 16.2359 22.1495 17.0107C22.4749 15.6387 21.6826 14.4231 22.7933 13.6838Z" fill="url(#paint0_linear_125_1306)" />
                                <path d="M25.6512 15.0068C25.6512 18.6109 25.7007 21.9662 25.63 25.3144C25.6017 26.6367 26.4435 26.3879 27.1368 26.3168C27.8089 26.2457 28.8983 26.8926 28.8912 25.3784C28.8629 21.1843 28.8842 16.9901 28.8771 12.7889C28.8771 12.3197 28.9195 11.8932 28.2404 11.751C26.012 11.2676 24.4273 12.5899 22.7932 13.6846C21.6825 14.4239 22.4819 15.6395 22.1494 17.0044C23.4935 16.2366 24.4769 15.675 25.6512 15.0068Z" fill="#07080F" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_125_1306" x1="26.1406" y1="3.94434" x2="26.1406" y2="34.922" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFF6B8" />
                                    <stop offset="1" stop-color="#F3E07C" />
                                </linearGradient>
                                <clipPath id="clip0_125_1306">
                                    <rect width="52.64" height="52.64" fill="white" transform="translate(3.35938 2.35938)" />
                                </clipPath>
                                <clipPath id="clip1_125_1306">
                                    <rect width="52.64" height="52.64" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                }
                {number == 2 &&
                    <div className="number2 d-flex justify-content-center align-items-center">
                        <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4" clip-path="url(#clip0_125_1305)">
                                <path d="M52.1259 9.02504C51.7136 9.01083 51.3013 9.08192 50.896 9.10325C46.5594 9.3023 46.2466 8.96106 46.8011 4.69552C47.0642 2.70494 46.8296 2.41346 44.8461 2.40635C39.8696 2.39213 34.9003 2.39924 29.9238 2.39924C24.8336 2.39924 19.7434 2.42768 14.6532 2.37791C13.2171 2.3637 12.7621 3.01064 12.8403 4.31873C12.9114 5.49887 12.9185 6.68611 12.9967 7.86624C13.0607 8.78333 12.691 9.13879 11.7668 9.11746C10.0464 9.07481 8.32597 9.08903 6.61264 9.10325C4.47276 9.12457 3.43482 10.0772 3.41349 12.2029C3.37083 16.049 3.35661 19.9022 3.41349 23.7483C3.44903 26.1227 4.07465 26.8123 6.27851 27.6441C8.85205 28.611 11.4185 29.6276 13.9565 30.694C14.5181 30.9286 15.1508 31.1916 15.4281 31.8954C17.0277 36.0117 19.8927 38.898 23.9521 40.6256C24.3146 40.782 24.7412 40.8886 24.862 41.3792C25.5232 43.9669 23.6392 47.5784 21.1013 48.5595C20.1699 48.922 19.2031 49.2206 18.3073 49.6685C16.985 50.3297 16.4518 52.0359 16.8499 53.8843C17.0703 54.8867 17.8097 54.9862 18.5988 54.9862C26.1772 54.9933 33.7557 54.9862 41.3341 55.0004C42.628 55.0004 43.1114 54.3393 43.147 53.1307C43.211 50.9482 42.4645 50.0524 39.6137 48.9789C36.3434 47.749 34.5164 44.8769 34.8292 41.5498C34.8789 40.9953 35.1989 40.917 35.597 40.7606C39.3791 39.2179 42.1304 36.6089 43.7939 32.8623C44.3129 31.6822 45.102 30.8859 46.3817 30.438C48.7704 29.5992 51.0595 28.4688 53.4625 27.6797C55.6734 26.9545 56.2919 25.3976 56.2919 23.343C56.2919 20.023 56.2919 16.7101 56.2919 13.3901C56.2919 9.82128 55.645 9.13879 52.1259 9.02504ZM9.37813 23.2648C8.75963 23.0302 8.73119 22.497 8.73119 21.9496C8.7383 19.7671 8.75963 17.5774 8.71697 15.3949C8.70276 14.4992 9.00845 14.1792 9.93976 14.1295C13.6223 13.9304 13.5655 13.8949 13.7148 17.613C13.8072 20.0088 14.0773 22.4046 14.2906 25.1346C12.5204 24.4592 10.9493 23.862 9.37813 23.2648ZM40.2322 28.8882C39.1445 33.6799 35.8671 37.6326 29.611 37.2345C24.0729 37.7392 20.2126 33.5448 19.2955 29.2295C18.5277 25.6393 18.3429 22.0065 17.8737 18.4021C17.4755 15.3451 17.895 12.2669 17.2907 9.23121C16.9139 7.32594 17.5964 6.65056 19.5941 6.65056C26.3692 6.63634 33.1443 6.67189 39.9194 6.62923C41.5261 6.62213 42.1872 7.26906 42.1019 8.86153C41.7465 15.5584 41.7251 22.3193 40.2322 28.8882ZM50.9885 18.6296C50.9885 22.9947 50.9458 22.9023 46.9788 24.5587C45.2371 25.2839 45.4361 24.7507 45.5925 23.3644C45.884 20.7411 45.9551 18.0893 46.0333 15.4518C46.0618 14.4636 46.3888 14.1579 47.377 14.1295C50.9885 14.0157 50.9885 13.9802 50.9885 17.5774C50.9885 17.9187 50.9885 18.2742 50.9885 18.6296Z" fill="#BDBEC1" />
                                <path d="M39.9192 6.62913C33.1441 6.67179 26.369 6.64335 19.5939 6.65046C17.5962 6.65046 16.9137 7.33295 17.2905 9.21689C17.8948 12.2525 17.4754 15.3308 17.8735 18.3878C18.3427 21.9993 18.5275 25.625 19.2953 29.2152C20.2124 33.5376 24.0727 37.732 29.6108 37.2201C35.8669 37.6183 39.1443 33.6655 40.232 28.8739C41.725 22.305 41.7463 15.5512 42.1089 8.84721C42.1942 7.26896 41.533 6.61491 39.9192 6.62913ZM34.0043 28.7175C31.1677 28.6535 28.3312 28.7033 25.4946 28.6891C25.1249 28.6891 24.5562 28.8597 24.5633 28.2128C24.5704 27.3596 24.2789 26.4639 25.0965 25.7316C26.7742 24.2387 28.4023 22.6889 30.0161 21.1249C30.5208 20.6414 31.0327 20.0869 31.3242 19.4684C31.836 18.3807 31.6725 17.3143 30.4639 16.7882C29.362 16.3048 28.1748 16.511 27.7766 17.6982C27.1439 19.5821 25.7647 18.5158 24.7268 18.6579C24.3002 18.7148 24.4282 18.1319 24.4566 17.7977C24.6059 16.1555 25.914 14.5773 27.67 14.1862C29.945 13.6815 32.1773 13.7241 33.8764 15.665C34.9854 16.9304 35.0565 19.0418 34.0896 20.6414C32.8882 22.6249 30.9331 23.9401 29.1629 25.9876C31.0185 25.9876 32.4972 26.0444 33.9688 25.9662C35.092 25.9094 35.0281 26.5776 35.0067 27.317C34.9783 28.0208 35.1774 28.7459 34.0043 28.7175Z" fill="#E1E4E6" />
                                <path d="M33.9614 25.9732C32.4898 26.0514 31.0111 25.9946 29.1556 25.9946C30.9258 23.9471 32.8808 22.6319 34.0823 20.6484C35.0491 19.0488 34.9851 16.9445 33.869 15.672C32.1699 13.7311 29.9376 13.6885 27.6626 14.1932C25.9067 14.5842 24.5986 16.1625 24.4493 17.8047C24.4208 18.1389 24.2929 18.7218 24.7194 18.6649C25.7645 18.5299 27.1366 19.5891 27.7693 17.7052C28.1674 16.518 29.3546 16.3118 30.4566 16.7952C31.6651 17.3213 31.8287 18.3877 31.3168 19.4754C31.0253 20.0939 30.5134 20.6484 30.0087 21.1318C28.3949 22.6959 26.7598 24.2386 25.0891 25.7386C24.2715 26.4709 24.5559 27.3666 24.5559 28.2197C24.5488 28.8667 25.1175 28.6961 25.4872 28.6961C28.3238 28.7103 31.1604 28.6605 33.997 28.7245C35.17 28.7529 34.9709 28.0278 34.9923 27.3311C35.0207 26.5846 35.0847 25.9164 33.9614 25.9732Z" fill="#06070E" />
                            </g>
                            <g clip-path="url(#clip1_125_1305)">
                                <path d="M48.748 6.64711C48.3357 6.6329 47.9233 6.70399 47.5181 6.72532C43.1815 6.92437 42.8687 6.58313 43.4232 2.31759C43.6862 0.32701 43.4516 0.0355313 41.4682 0.0284221C36.4917 0.0142036 31.5223 0.0213129 26.5459 0.0213129C21.4557 0.0213129 16.3655 0.0497498 11.2753 -1.48107e-05C9.83919 -0.0142333 9.3842 0.632707 9.4624 1.9408C9.53349 3.12094 9.5406 4.30818 9.6188 5.48831C9.68278 6.4054 9.3131 6.76086 8.3889 6.73953C6.66847 6.69688 4.94804 6.7111 3.23471 6.72532C1.09483 6.74664 0.0568865 7.69928 0.0355589 9.82494C-0.00709652 13.671 -0.021315 17.5242 0.0355589 21.3703C0.071105 23.7448 0.696717 24.4344 2.90058 25.2662C5.47412 26.233 8.04055 27.2497 10.5785 28.316C11.1402 28.5507 11.7729 28.8137 12.0502 29.5175C13.6497 33.6338 16.5148 36.5201 20.5741 38.2476C20.9367 38.404 21.3632 38.5107 21.4841 39.0012C22.1453 41.589 20.2613 45.2005 17.7233 46.1815C16.792 46.5441 15.8252 46.8427 14.9294 47.2906C13.6071 47.9517 13.0739 49.658 13.472 51.5063C13.6924 52.5088 14.4317 52.6083 15.2209 52.6083C22.7993 52.6154 30.3778 52.6083 37.9562 52.6225C39.2501 52.6225 39.7335 51.9613 39.769 50.7528C39.833 48.5702 39.0866 47.6745 36.2358 46.601C32.9655 45.3711 31.1384 42.499 31.4512 39.1718C31.501 38.6173 31.8209 38.5391 32.219 38.3827C36.0012 36.84 38.7524 34.2309 40.416 30.4844C40.935 29.3042 41.7241 28.508 43.0037 28.0601C45.3924 27.2212 47.6816 26.0909 50.0845 25.3017C52.2955 24.5766 52.914 23.0197 52.914 20.9651C52.914 17.6451 52.914 14.3322 52.914 11.0122C52.914 7.44335 52.2671 6.76086 48.748 6.64711ZM6.0002 20.8869C5.3817 20.6523 5.35326 20.1191 5.35326 19.5717C5.36037 17.3892 5.3817 15.1995 5.33904 13.017C5.32483 12.1212 5.63052 11.8013 6.56183 11.7515C10.2444 11.5525 10.1875 11.5169 10.3368 15.2351C10.4293 17.6309 10.6994 20.0267 10.9127 22.7566C9.14248 22.0813 7.57134 21.4841 6.0002 20.8869ZM36.8543 26.5103C35.7665 31.3019 32.4892 35.2547 26.2331 34.8565C20.695 35.3613 16.8347 31.1668 15.9176 26.8515C15.1498 23.2614 14.9649 19.6286 14.4957 16.0242C14.0976 12.9672 14.5171 9.88892 13.9128 6.85328C13.536 4.94801 14.2185 4.27263 16.2162 4.27263C22.9913 4.25841 29.7664 4.29396 36.5415 4.2513C38.1481 4.2442 38.8093 4.89113 38.724 6.4836C38.3685 13.1805 38.3472 19.9414 36.8543 26.5103ZM47.6105 16.2517C47.6105 20.6168 47.5679 20.5243 43.6009 22.1808C41.8592 22.9059 42.0582 22.3727 42.2146 20.9864C42.5061 18.3631 42.5772 15.7114 42.6554 13.0739C42.6838 12.0857 43.0109 11.78 43.999 11.7515C47.6105 11.6378 47.6105 11.6022 47.6105 15.1995C47.6105 15.5408 47.6105 15.8962 47.6105 16.2517Z" fill="#BDBEC1" />
                                <path d="M36.5413 4.2512C29.7662 4.29386 22.9911 4.26542 16.216 4.27253C14.2183 4.27253 13.5358 4.95502 13.9126 6.83896C14.5169 9.8746 14.0974 12.9529 14.4956 16.0099C14.9648 19.6214 15.1496 23.2471 15.9174 26.8372C16.8345 31.1596 20.6948 35.3541 26.2329 34.8422C32.489 35.2403 35.7664 31.2876 36.8541 26.496C38.347 19.9271 38.3684 13.1733 38.7309 6.46928C38.8162 4.89103 38.1551 4.23698 36.5413 4.2512ZM30.6264 26.3396C27.7898 26.2756 24.9532 26.3254 22.1167 26.3111C21.747 26.3111 21.1782 26.4818 21.1853 25.8348C21.1925 24.9817 20.901 24.086 21.7185 23.3537C23.3963 21.8608 25.0243 20.311 26.6381 18.7469C27.1429 18.2635 27.6547 17.709 27.9462 17.0905C28.4581 16.0028 28.2946 14.9364 27.086 14.4103C25.9841 13.9269 24.7968 14.133 24.3987 15.3203C23.766 17.2042 22.3868 16.1378 21.3489 16.28C20.9223 16.3369 21.0503 15.7539 21.0787 15.4198C21.228 13.7776 22.5361 12.1993 24.2921 11.8083C26.567 11.3036 28.7993 11.3462 30.4984 13.287C31.6075 14.5525 31.6786 16.6639 30.7117 18.2635C29.5103 20.247 27.5552 21.5622 25.785 23.6096C27.6405 23.6096 29.1192 23.6665 30.5909 23.5883C31.7141 23.5314 31.6501 24.1997 31.6288 24.9391C31.6004 25.6429 31.7994 26.368 30.6264 26.3396Z" fill="url(#paint0_linear_125_1305)" />
                                <path d="M30.5835 23.5953C29.1119 23.6735 27.6332 23.6166 25.7777 23.6166C27.5478 21.5692 29.5029 20.254 30.7043 18.2705C31.6712 16.6709 31.6072 14.5666 30.4911 13.294C28.792 11.3532 26.5597 11.3106 24.2847 11.8153C22.5287 12.2063 21.2206 13.7846 21.0713 15.4268C21.0429 15.7609 20.9149 16.3439 21.3415 16.287C22.3866 16.1519 23.7586 17.2112 24.3914 15.3273C24.7895 14.14 25.9767 13.9339 27.0786 14.4173C28.2872 14.9434 28.4507 16.0097 27.9389 17.0975C27.6474 17.716 27.1355 18.2705 26.6308 18.7539C25.017 20.3179 23.3818 21.8606 21.7112 23.3607C20.8936 24.0929 21.178 24.9887 21.178 25.8418C21.1709 26.4888 21.7396 26.3181 22.1093 26.3181C24.9459 26.3324 27.7825 26.2826 30.619 26.3466C31.7921 26.375 31.593 25.6499 31.6143 24.9532C31.6428 24.2067 31.7067 23.5384 30.5835 23.5953Z" fill="#06070E" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_125_1305" x1="26.2758" y1="4.25098" x2="26.2758" y2="34.8847" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E1E4E6" />
                                    <stop offset="1" stop-color="#C1C5C8" />
                                </linearGradient>
                                <clipPath id="clip0_125_1305">
                                    <rect width="52.914" height="52.6225" fill="white" transform="translate(3.37793 2.37793)" />
                                </clipPath>
                                <clipPath id="clip1_125_1305">
                                    <rect width="52.914" height="52.6225" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                }
                {number == 3 &&
                    <div className="number3 d-flex justify-content-center align-items-center">
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4" clip-path="url(#clip0_125_1210)">
                                <path d="M53.5689 9.97284C52.6374 9.83774 51.6846 9.83774 50.7389 9.83774C46.3801 9.82351 46.3374 9.82351 46.892 5.48603C47.0911 3.90747 46.6005 3.33862 45.0077 3.35995C39.9805 3.41684 34.9462 3.38128 29.9118 3.38128C24.8206 3.38128 19.7294 3.40973 14.6382 3.35995C13.0383 3.34573 12.5121 4.03546 12.697 5.54291C12.825 6.59529 12.8321 7.66188 12.9459 8.72137C13.0383 9.60308 12.6401 9.85907 11.8224 9.83774C10.2225 9.80218 8.62261 9.80929 7.02983 9.83774C4.39178 9.88751 3.39629 10.8759 3.37496 13.521C3.35363 17.2541 3.40341 20.9801 3.36074 24.7132C3.33941 26.6828 4.19269 27.8916 6.05567 28.5671C8.60839 29.4915 11.1184 30.5226 13.6143 31.5749C14.2827 31.8594 15.072 32.0158 15.399 32.8904C16.9563 37.043 19.9143 39.8659 23.8891 41.7005C24.2731 41.8782 24.7637 41.8996 24.8348 42.5751C25.1619 45.6469 23.3772 48.6049 20.4405 49.7497C19.5659 50.091 18.6486 50.3897 17.8451 50.8661C16.2736 51.7976 16.4514 53.3761 16.7074 54.8267C16.942 56.1777 18.1366 55.9928 19.1321 55.9928C26.3565 55.9928 33.5809 55.9999 40.7982 55.9928C42.583 55.9928 43.0807 55.424 43.0736 53.6392C43.0665 51.3638 41.5448 50.5603 39.7032 49.899C36.1976 48.6404 34.6191 46.1873 34.7613 42.6106C34.7826 42.0631 35.0386 41.8996 35.4439 41.7431C39.5894 40.1432 42.3839 37.1568 44.1331 33.1393C44.4673 32.3713 44.9508 31.9518 45.7401 31.6532C48.499 30.6008 51.2011 29.3991 53.9742 28.3751C55.6239 27.7565 56.2283 26.6117 56.2283 24.9692C56.2212 21.0014 56.2425 17.0337 56.2212 13.066C56.1998 11.1176 55.4532 10.243 53.5689 9.97284ZM12.6259 25.538C12.5192 25.4953 12.4126 25.4242 12.2988 25.4029C9.2199 24.7061 7.812 22.9497 8.70083 19.7286C8.70083 19.0744 8.64394 18.4203 8.71505 17.7803C8.80749 16.9413 8.23152 15.7182 9.1488 15.3414C10.322 14.865 11.7157 15.0854 13.0028 15.2631C13.5645 15.3414 13.5574 15.9458 13.5858 16.4222C13.7352 19.1384 13.8418 21.8547 14.0622 24.5567C14.1689 25.9007 13.5929 25.9291 12.6259 25.538ZM41.0613 24.2794C40.784 27.2374 40.3574 30.1315 39.1059 32.8193C37.7904 35.6422 35.579 37.5408 32.4361 38.0314C28.3902 38.6571 24.5433 38.394 21.5924 34.988C19.6868 32.7909 19.0397 30.0746 18.6415 27.337C17.9162 22.3809 17.5038 17.3892 17.5251 12.3691C17.5251 11.6723 17.2691 10.9754 17.2123 10.2786C17.0345 8.19518 17.8167 7.32768 19.9356 7.30635C23.1923 7.27791 26.449 7.29924 29.7056 7.29924C32.9054 7.29924 36.0981 7.29213 39.2979 7.29924C41.4524 7.30635 42.1279 7.89653 42.0497 10.0084C41.8577 14.7725 41.5022 19.5295 41.0613 24.2794ZM50.9451 19.686C50.9451 19.8068 50.9451 19.9206 50.9451 20.0415C50.9451 24.2794 50.6962 24.571 46.5507 25.6802C45.6903 25.9078 45.4912 25.6304 45.5481 24.8483C45.7543 22.0325 45.9676 19.2095 46.1241 16.3866C46.181 15.384 46.636 15.1565 47.5746 15.1423C50.9451 15.0783 50.9451 15.0427 50.9451 18.4487C50.9451 18.8611 50.9451 19.2735 50.9451 19.686Z" fill="#ECB544" />
                                <path d="M39.2907 7.29967C36.0909 7.29256 32.8982 7.29967 29.6984 7.29967C26.4418 7.29967 23.1851 7.27834 19.9284 7.30678C17.8095 7.32811 17.0273 8.19561 17.2051 10.279C17.2691 10.983 17.5179 11.6727 17.5179 12.3696C17.5037 17.3897 17.9161 22.3813 18.6343 27.3374C19.0325 30.0821 19.6796 32.7913 21.5852 34.9885C24.5361 38.3945 28.3901 38.6576 32.4289 38.0318C35.5718 37.5412 37.7832 35.6498 39.0987 32.8197C40.3502 30.1319 40.7839 27.245 41.0541 24.2799C41.495 19.53 41.8505 14.7729 42.0354 10.0088C42.1207 7.89696 41.4452 7.30678 39.2907 7.29967ZM35.2092 25.9722C35.0385 27.7143 33.7657 29.1435 31.7676 29.5631C29.2718 30.0821 26.7831 30.0964 24.913 27.9276C24.3441 27.2663 23.8891 26.4273 24.2873 25.5313C24.4792 25.1047 27.1457 25.4958 27.487 26.0006C27.8852 26.5837 28.4043 26.9392 29.0585 27.053C30.2744 27.2663 31.4263 26.9748 31.7392 25.6664C32.0521 24.3296 31.0637 23.7963 29.8904 23.6115C29.4211 23.5332 28.9518 23.5048 28.4896 23.4195C27.5724 23.2559 27.9563 22.5164 27.8923 21.9973C27.8283 21.4854 27.9137 21.0516 28.6034 21.073C28.9518 21.0801 29.3074 21.009 29.6558 20.945C30.5162 20.7956 31.2912 20.4899 31.469 19.5228C31.6112 18.7478 31.2699 18.0865 30.5446 17.7879C29.6771 17.4252 28.5892 17.3612 28.1199 18.1932C27.1671 19.8713 25.7734 19.2526 24.4437 19.2811C24.6641 16.7355 25.9938 15.3916 28.5963 15.0289C31.3623 14.645 33.6946 15.676 34.4412 17.6172C35.1381 19.4446 34.5692 20.8596 32.4787 22.1324C34.4483 22.8364 35.4012 24.0594 35.2092 25.9722Z" fill="#F2DB62" />
                                <path d="M32.4789 22.1322C34.5694 20.8594 35.1382 19.4515 34.4414 17.6169C33.7019 15.6757 31.3625 14.6447 28.5965 15.0287C25.994 15.3913 24.6643 16.7352 24.4438 19.2808C25.7664 19.2595 27.1672 19.871 28.12 18.1929C28.5893 17.361 29.6844 17.425 30.5448 17.7876C31.27 18.0934 31.6114 18.7546 31.4691 19.5226C31.2914 20.4825 30.5092 20.7954 29.6559 20.9447C29.3075 21.0016 28.952 21.0798 28.6036 21.0727C27.9138 21.0585 27.8285 21.4851 27.8925 21.9971C27.9565 22.5162 27.5725 23.2557 28.4898 23.4192C28.952 23.4974 29.4284 23.533 29.8906 23.6112C31.0638 23.8032 32.0522 24.3365 31.7393 25.6662C31.4336 26.9745 30.2817 27.259 29.0586 27.0528C28.4116 26.939 27.8854 26.5834 27.4872 26.0004C27.1459 25.4955 24.4794 25.1044 24.2874 25.5311C23.8821 26.427 24.3443 27.2661 24.9131 27.9274C26.7832 30.0961 29.272 30.089 31.7678 29.5628C33.7659 29.1504 35.0387 27.7211 35.2093 25.9719C35.4013 24.0592 34.4485 22.8361 32.4789 22.1322Z" fill="#06060E" />
                            </g>
                            <g clip-path="url(#clip1_125_1210)">
                                <path d="M50.2086 6.61249C49.2771 6.47738 48.3242 6.47738 47.3785 6.47738C43.0197 6.46316 42.977 6.46316 43.5317 2.12568C43.7308 0.547118 43.2401 -0.0217326 41.6474 -0.000400741C36.6201 0.0564843 31.5858 0.0209312 26.5515 0.0209312C21.4603 0.0209312 16.3691 0.0493737 11.2779 -0.000400741C9.67796 -0.014622 9.15177 0.675109 9.33665 2.18256C9.46464 3.23494 9.47175 4.30153 9.58552 5.36101C9.67796 6.24273 9.27976 6.49872 8.46204 6.47738C6.86215 6.44183 5.26226 6.44894 3.66948 6.47738C1.03143 6.52716 0.0359431 7.51554 0.0146112 10.1607C-0.00672066 13.8938 0.0430538 17.6197 0.000389973 21.3528C-0.0209419 23.3225 0.832334 24.5313 2.69532 25.2068C5.24804 26.1312 7.75809 27.1622 10.2539 28.2146C10.9223 28.499 11.7116 28.6554 12.0387 29.53C13.5959 33.6827 16.5539 36.5056 20.5288 38.3401C20.9128 38.5179 21.4034 38.5392 21.4745 39.2147C21.8016 42.2865 20.0168 45.2445 17.0801 46.3894C16.2055 46.7307 15.2882 47.0293 14.4847 47.5057C12.9133 48.4372 13.0911 50.0158 13.347 51.4663C13.5817 52.8174 14.7763 52.6325 15.7718 52.6325C22.9962 52.6325 30.2206 52.6396 37.4379 52.6325C39.2226 52.6325 39.7204 52.0636 39.7133 50.2789C39.7062 48.0035 38.1845 47.2 36.3428 46.5387C32.8373 45.2801 31.2587 42.8269 31.4009 39.2503C31.4223 38.7028 31.6783 38.5392 32.0836 38.3828C36.2291 36.7829 39.0235 33.7964 40.7727 29.7789C41.1069 29.011 41.5905 28.5914 42.3797 28.2928C45.1387 27.2404 47.8407 26.0387 50.6139 25.0148C52.2635 24.3962 52.8679 23.2514 52.8679 21.6088C52.8608 17.6411 52.8821 13.6733 52.8608 9.70561C52.8395 7.7573 52.0929 6.88269 50.2086 6.61249ZM9.26554 22.1777C9.15888 22.135 9.05222 22.0639 8.93845 22.0426C5.85955 21.3457 4.45165 19.5894 5.34047 16.3683C5.34047 15.7141 5.28359 15.0599 5.3547 14.42C5.44713 13.5809 4.87117 12.3579 5.78844 11.981C6.9617 11.5046 8.35538 11.725 9.64241 11.9028C10.2041 11.981 10.197 12.5854 10.2255 13.0618C10.3748 15.7781 10.4815 18.4944 10.7019 21.1964C10.8085 22.5403 10.2326 22.5687 9.26554 22.1777ZM37.701 20.9191C37.4236 23.8771 36.997 26.7711 35.7455 29.4589C34.4301 32.2819 32.2187 34.1804 29.0758 34.671C25.0298 35.2968 21.183 35.0337 18.232 31.6277C16.3264 29.4305 15.6793 26.7142 15.2811 23.9766C14.5559 19.0205 14.1434 14.0289 14.1648 9.00877C14.1648 8.31193 13.9088 7.61508 13.8519 6.91824C13.6741 4.83483 14.4563 3.96733 16.5753 3.946C19.8319 3.91756 23.0886 3.93889 26.3453 3.93889C29.5451 3.93889 32.7377 3.93178 35.9375 3.93889C38.092 3.946 38.7675 4.53618 38.6893 6.64804C38.4973 11.4122 38.1418 16.1692 37.701 20.9191ZM47.5847 16.3256C47.5847 16.4465 47.5847 16.5603 47.5847 16.6811C47.5847 20.9191 47.3359 21.2106 43.1904 22.3199C42.33 22.5474 42.1309 22.2701 42.1878 21.4879C42.394 18.6721 42.6073 15.8492 42.7637 13.0263C42.8206 12.0237 43.2757 11.7961 44.2143 11.7819C47.5847 11.7179 47.5847 11.6824 47.5847 15.0884C47.5847 15.5008 47.5847 15.9132 47.5847 16.3256Z" fill="#ECB544" />
                                <path d="M35.9303 3.93932C32.7305 3.93221 29.5379 3.93932 26.3381 3.93932C23.0814 3.93932 19.8248 3.91799 16.5681 3.94643C14.4491 3.96776 13.6669 4.83526 13.8447 6.91867C13.9087 7.62263 14.1576 8.31236 14.1576 9.0092C14.1434 14.0293 14.5558 19.021 15.2739 23.9771C15.6721 26.7218 16.3192 29.4309 18.2249 31.6281C21.1758 35.0341 25.0297 35.2972 29.0686 34.6715C32.2115 34.1808 34.4229 32.2894 35.7383 29.4594C36.9898 26.7716 37.4236 23.8846 37.6938 20.9195C38.1346 16.1696 38.4902 11.4126 38.675 6.64847C38.7604 4.53661 38.0849 3.94643 35.9303 3.93932ZM31.8488 22.6118C31.6782 24.3539 30.4054 25.7832 28.4073 26.2027C25.9115 26.7218 23.4227 26.736 21.5526 24.5673C20.9838 23.906 20.5287 23.0669 20.9269 22.171C21.1189 21.7443 23.7854 22.1354 24.1267 22.6403C24.5249 23.2234 25.044 23.5789 25.6981 23.6927C26.9141 23.906 28.066 23.6144 28.3788 22.3061C28.6917 20.9693 27.7033 20.436 26.5301 20.2511C26.0608 20.1729 25.5915 20.1444 25.1293 20.0591C24.212 19.8956 24.596 19.1561 24.532 18.637C24.468 18.125 24.5533 17.6913 25.2431 17.7126C25.5915 17.7197 25.947 17.6486 26.2954 17.5846C27.1558 17.4353 27.9309 17.1295 28.1086 16.1625C28.2508 15.3874 27.9095 14.7261 27.1843 14.4275C26.3168 14.0649 25.2288 14.0009 24.7595 14.8328C23.8067 16.5109 22.413 15.8923 21.0833 15.9207C21.3038 13.3751 22.6335 12.0312 25.2359 11.6686C28.002 11.2846 30.3343 12.3156 31.0809 14.2568C31.7777 16.0843 31.2089 17.4993 29.1183 18.7721C31.088 19.476 32.0408 20.6991 31.8488 22.6118Z" fill="url(#paint0_linear_125_1210)" />
                                <path d="M29.1185 18.7718C31.209 17.499 31.7779 16.0911 31.081 14.2566C30.3415 12.3154 28.0021 11.2843 25.2361 11.6683C22.6336 12.031 21.3039 13.3749 21.0835 15.9205C22.4061 15.8991 23.8069 16.5107 24.7597 14.8326C25.229 14.0006 26.324 14.0646 27.1844 14.4272C27.9097 14.733 28.251 15.3943 28.1088 16.1622C27.931 17.1222 27.1489 17.435 26.2956 17.5844C25.9472 17.6413 25.5916 17.7195 25.2432 17.7124C24.5535 17.6981 24.4681 18.1248 24.5321 18.6367C24.5961 19.1558 24.2122 19.8953 25.1294 20.0589C25.5916 20.1371 26.068 20.1726 26.5302 20.2509C27.7035 20.4428 28.6919 20.9761 28.379 22.3058C28.0732 23.6142 26.9213 23.8986 25.6983 23.6924C25.0512 23.5786 24.525 23.2231 24.1268 22.64C23.7855 22.1352 21.119 21.7441 20.9271 22.1707C20.5218 23.0667 20.9839 23.9057 21.5528 24.567C23.4229 26.7357 25.9116 26.7286 28.4074 26.2025C30.4055 25.79 31.6783 24.3608 31.849 22.6116C32.041 20.6988 31.0881 19.4758 29.1185 18.7718Z" fill="#06060E" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_125_1210" x1="26.2512" y1="3.93164" x2="26.2512" y2="34.9397" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#F2DB62" />
                                    <stop offset="1" stop-color="#F4C053" />
                                </linearGradient>
                                <clipPath id="clip0_125_1210">
                                    <rect width="52.8675" height="52.64" fill="white" transform="translate(3.36035 3.36035)" />
                                </clipPath>
                                <clipPath id="clip1_125_1210">
                                    <rect width="52.8675" height="52.64" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                }
            </div>
            <div className="BestLeaderCard-info d-flex flex-column justify-content-around align-items-center">
                <img src={src} alt={name} className="object-fit rounded-circle" style={{ width: "41px", height: "41px" }} />
                <p className="fw-700 fs-12 text-white">{name}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <Badge className="mx-2 text-white  fs-10 fw-400 p-1" pill={true} label={` ترم ${term}`} />
                    <Badge className="mx-2 text-white bg-success fs-10 fw-400 p-1 " pill={true} variant="success" label={`معدل ${score}`} />

                </div>
            </div>
        </div>
    )
}

export default BestLeaderCard